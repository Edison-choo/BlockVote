import React, {useEffect, useState, useRef} from 'react'
import Web3 from 'web3'
import * as $ from 'jquery'

import { CONTACT_ABI, CONTACT_ADDRESS } from '../../contracts/agmConfig.js';

import Breadcrumb from '../../components/Breadcrumb'

import Notification from '../../components/Notification'

const PrivateVote = () => {
  const [account, setAccount] = useState();
  const [election, setElection] = useState();
  const [resolutions, setResolutions] = useState([]);
  const [forLoop, setForLoop] = useState([]);

  const regInput = useRef([]);

  useEffect(() => {
    async function load() {

      const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
      const accounts = await web3.eth.requestAccounts();
      
      setAccount(accounts[0]);

      const electionContract = new web3.eth.Contract(CONTACT_ABI, CONTACT_ADDRESS);

      setElection(electionContract);

      var getResponse = await electionContract.methods.getResolutionsByName("Starbucks Pte Ltd AGM Voting").call();
      setResolutions(getResponse);
      setForLoop(getResponse[2]);
    }
    
    load();
    console.log(resolutions);
   }, []);

   const handleSubmission = () => {
    const v = regInput.current.map(r => r.value);
    let date = Math.floor(new Date().getTime() / 1000);
    console.log(date, resolutions[2].map(r => parseInt(r)), v)
    election.methods.vote(date, resolutions[2].map(r => parseInt(r)), [1,0,1,1,2,2], "Starbucks Pte Ltd AGM Voting").send({from:account}, function(err, res) {
      if (err) {
        console.log("An error occured", err);
        return;
      }
      console.log("Hash of the transaction: " + res);
    });
    election.events.votedEvent()
    .on("data", function(event) {
      console.log("event return " + event.returnValues._candidateId);
      // window.location.href = "/Success";
    }).on("error", console.error);

    
	};

  useEffect(() => {
    
    const loadJS = async () => {
      setTimeout(() => {
        console.log("Waited 5s");
  
        $(".privateVote .Choice").on("click", function() {
          console.log("clicked");
          $(this).parent().children().removeClass("choiceActive");
          $(this).parent().find(".chosen").val($(this).find("h5").text());
          $(this).addClass("choiceActive");
  
          var size = $(".privateVote .Question").length;
          var voted = $(".privateVote .choiceActive").length;
          console.log(voted, size)
          if (voted == size) {
              console.log("Able to proceed");
              
          }
      });

      $(".privateVote .vote-submit").on("click", function() {
        var size = $(".privateVote .Question").length;
        var voted = $(".privateVote .choiceActive").length;
        if (voted == size) {
            window.location.href='/PrivateSuccess';
        } else {
            $(".danger-alert").show();
        }

    });
      }, 500);
      
    };

    loadJS();
  }, []);

  // if(resolutions.length === 0){
  //   console.log("rendering");
  //   return null; //You can change here to put a customized loading spinner 
  // }


  return (
    <>
    <Breadcrumb name="Vote" />
    <Notification/>
      <section id="services" className="privateVote section-bg bvsStyle">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              
              <p>Hi XGStars Pte Ltd.</p>
              <h2>Welcome to Starbucks Annual General Meeting Voting Agenda!</h2>
            </div>
            <div className="row" >
              { forLoop.length > 1 &&
                  forLoop.map(function(value, i){
                
                    return (
                      <>
                      <h4 className='first'>{resolutions[0][i]}</h4>
                  <div className='Question'>
                  <div className="col-md-12 col-lg-12" data-aos="zoom-in" data-aos-delay={100}>
                  
                  <div className="qns">
                
                    <div className="address">
                      <p>{resolutions[1][i]}</p>
                    </div>
                  </div>
                  </div>
                  <div className="Selection col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay={100}>
                    <div className="Choice">
                        <i class='bx bx-check'></i>
                        <h5>For</h5>
                    </div>
                    <div className="Choice">
                        <i class='bx bx-x'></i>
                        <h5>Against</h5>
                    </div>
                    <div className="Choice">
                        <i style={{fontSize:"2em"}} class='bx bxs-minus-circle'></i>
                        <h5>Abstain</h5>
                    </div>
                    <input type="hidden"
                    ref={(el) => (regInput.current[i] = el)} 
                    value={resolutions[2][i]}
                    className='chosen' />
                  </div>
                  </div>
                      </>
                    )
                  })
                }
                
              
              {/* <h4 className='first'>Resolution One: Annual General Meeting Minutes 2022</h4>
              <div className='Question'>
              <div className="col-md-12 col-lg-12" data-aos="zoom-in" data-aos-delay={100}>
              
              <div className="qns">
            
                <div className="address">
                  <p>THAT the minutes of the Annual General Meeting held on Monday 29 June 2022 be received and approved.</p>
                </div>
              </div>
              </div>
              <div className="Selection col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay={100}>
                <div className="Choice">
                    <i class='bx bx-check'></i>
                    <h5>For</h5>
                </div>
                <div className="Choice">
                    <i class='bx bx-x'></i>
                    <h5>Against</h5>
                </div>
                <div className="Choice">
                    <i style={{fontSize:"2em"}} class='bx bxs-minus-circle'></i>
                    <h5>Abstain</h5>
                </div>
                <input type="hidden" className='chosen' />
              </div>
              </div>
              <h4>Resolution Two: Annual Report and Accounts 2015</h4>
              <div className='Question'>
              <div className="col-md-12 col-lg-12" data-aos="zoom-in" data-aos-delay={200}>
              
              <div className="qns">
            
                <div className="address">
                  <p>THAT the Annual Report and Accounts for the year ended 31 December 2022 be received and approved.</p>
                </div>
              </div>
              
              </div>
              <div className="Selection col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay={100}>
                <div className="Choice">
                    <i class='bx bx-check'></i>
                    <h5>For</h5>
                </div>
                <div className="Choice">
                    <i class='bx bx-x'></i>
                    <h5>Against</h5>
                </div>
                <div className="Choice">
                    <i style={{fontSize:"2em"}} class='bx bxs-minus-circle'></i>
                    <h5>Abstain</h5>
                </div>
                <input type="hidden" className='chosen' />
              </div>
              </div> */}
              

              <div id='btn-div' style={{marginTop:"20px"}}>
              {/* <a id='btn-bvs' className="btn-get-started scrollto vote-submit">Vote</a> */}
              <a id='btn-bvs' onClick={handleSubmission} className="btn-get-started scrollto">VOTE</a>
            </div>
            </div>
          </div>
        </section>
  </>
  )
}

export default PrivateVote