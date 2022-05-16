import React, {useEffect, useState, useRef} from 'react'
import Web3 from 'web3'
import {csv} from 'd3'
import * as $ from 'jquery'


import { CONTACT_ABI, CONTACT_ADDRESS } from '../../contracts/electionConfig.js';

import Breadcrumb from '../../components/Breadcrumb'

import Abbr from '../../data/abbr.csv'


const Results = () => {
  const [account, setAccount] = useState();
  const [election, setElection] = useState();
  const [candidates, setCandidates] = useState({});
  const [forLoop, setForLoop] = useState([]);
  const [abbr, setAbbr] = useState({});
  const [parties, setParties] = useState([]);


  useEffect(()=> {
    csv(Abbr).then(data => {
      var abbrdict = {}
      for (var i in data) {
          abbrdict[data[i]["political_party"]] = data[i]["abbreviation"]
      }
      setAbbr(abbrdict);
    })
  }, []);


  useEffect(() => {
    async function load() {

      const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
      const accounts = await web3.eth.requestAccounts();
      
      setAccount(accounts[0]);

      const electionContract = new web3.eth.Contract(CONTACT_ABI, CONTACT_ADDRESS);

      setElection(electionContract);

      var getResponse = await electionContract.methods.getAllCandidates().call();

      var results = {};

      for (var i = 0; i < getResponse[0].length; i++) {
        if (getResponse[1][i] in results) {
          results[getResponse[1][i]].push([getResponse[0][i], getResponse[2][i]]);
        } else {
          results[getResponse[1][i]] = [[getResponse[0][i], getResponse[2][i]]];
        }
        
      }

      console.log(getResponse, results);
      setCandidates(results);
      setParties(getResponse[0]);
      setForLoop(Object.keys(results));
    }
    
    load();
    console.log(candidates);
   }, []);

   useEffect(() => {
    const loadJS = async () => {
      setTimeout(() => {
        console.log("Waited 5s");
  
        $(".allResults .rightIcon").on("click", function() {
          if ($(".paginationAll .show").last().index()+1 == $(".paginationAll tr").length) {
              console.log("max range");
          } else {
              console.log("run")
              var index = $(".paginationAll .show").last().index() + 1;
              $(".paginationAll tr").removeClass("show");
              $(`.paginationAll tr:nth-child(${index + 1})`).toggleClass("show");
              $(`.paginationAll tr:nth-child(${index + 2})`).toggleClass("show");
              $(`.paginationAll tr:nth-child(${index + 3})`).toggleClass("show");
              $(`.paginationAll tr:nth-child(${index + 4})`).toggleClass("show");
              $(`.paginationAll tr:nth-child(${index + 5})`).toggleClass("show");
              $(`.paginationAll tr:nth-child(${index + 6})`).toggleClass("show");
              $(`.paginationAll tr:nth-child(${index + 7})`).toggleClass("show");
              $(`.paginationAll tr:nth-child(${index + 8})`).toggleClass("show");
              $(`.paginationAll tr:nth-child(${index + 9})`).toggleClass("show");
              $(`.paginationAll tr:nth-child(${index + 10})`).toggleClass("show");
              checkPage();
              $(".leftIcon").removeClass("pageIcon-disabled");
          }
          
      });
  
      $(".allResults .leftIcon").on("click", function() {
          if ($(".allResults .paginationAll .show").first().index()+1==1) {
              console.log("max range");
          } else {
              console.log("run")
              var index = $(".paginationAll .show").first().index() + 1;
              $(".paginationAll tr").removeClass("show");
              $(`.paginationAll tr:nth-child(${index - 1})`).toggleClass("show");
              $(`.paginationAll tr:nth-child(${index - 2})`).toggleClass("show");
              $(`.paginationAll tr:nth-child(${index - 3})`).toggleClass("show");
              $(`.paginationAll tr:nth-child(${index - 4})`).toggleClass("show");
              $(`.paginationAll tr:nth-child(${index - 5})`).toggleClass("show");
              $(`.paginationAll tr:nth-child(${index - 6})`).toggleClass("show");
              $(`.paginationAll tr:nth-child(${index - 7})`).toggleClass("show");
              $(`.paginationAll tr:nth-child(${index - 8})`).toggleClass("show");
              $(`.paginationAll tr:nth-child(${index - 9})`).toggleClass("show");
              $(`.paginationAll tr:nth-child(${index - 10})`).toggleClass("show");
              checkPage();
              $(".rightIcon").removeClass("pageIcon-disabled");
          }
          
      });

        $(".allResults .paginationAll tr:nth-child(-n+10)").toggleClass("show");

        checkPage();
    

    function checkPage() {
      var page = $(".paginationAll .show").first().index()+1 != 1 ? Math.ceil(($(".paginationAll .show").first().index()+1 - $(".paginationAll .spacer").children().length)/5) : 1;
      var totalPage = Math.ceil(($(".paginationAll").children().length - $(".paginationAll .spacer").children().length)/5);
  
      if ($(".paginationAll .show").first().index()+1==1) {
          $(".leftIcon").toggleClass("pageIcon-disabled");
      }
  
      if ($(".paginationAll .show").last().index()+1 == $(".paginationAll tr").length) {
          $(".rightIcon").toggleClass("pageIcon-disabled");
      }
  
      $(".allResults")
      $(".sessions")
      $(".pageNum span").text(`${page}/${totalPage}`)
  }
  

      }, 500);
      
    };

    loadJS();
  }, []);


  return (
    <>
    <Breadcrumb name="Results" />
  <section id="services" className="allResults section-bg bvsStyle">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <p>Voting Results</p>
        </div>

        <div class="table-responsive custom-table-responsive">

    <table class="table custom-table">
      <thead>
        <tr>  
          <th scope="col">#</th>
          <th scope="col">Electoral Division</th>
          <th scope="col">Area</th>
          {parties.length > 1 &&
          parties.map(function(value, i){
            return (
              <th scope="col">{abbr[value]} Voted</th>
            )
          })}
          {/* <th scope="col">PAP Voted</th>
          <th scope="col">WP Votes</th>
          <th scope="col">SDP Voted</th>
          <th scope="col">PSP Voted</th>
          <th scope="col">SPP Votes</th> */}
          <th scope="col">Winning Party</th>
          <th scope="col">Time Updates</th>
        </tr>
      </thead>
      <tbody className='paginationAll'>
        {forLoop.length > 1 &&
        forLoop.map(function(value, i) {
          return (
            <>
            <tr scope="row" >
          <td>
            {i+1}
          </td>
          <td><a href="#">{value}</a></td>
          <td>
            North
          </td>
          {parties.map((element, index) => {
            return (
              <td>{candidates[value][index] === undefined ? "-" : candidates[value][index][1]}</td>
            )
          })}
          {/* <td>100</td>
          <td>30</td>
          <td>-</td>
          <td>-</td> */}
          <td>{candidates[value].sort((a,b)=>b[1]-a[1])[0][0]}</td>
          <td></td>
        </tr>
        <tr class="spacer"><td colspan="100"></td></tr>
            </>
          )
        })}
        {/* <tr scope="row" >
          <td>
            1
          </td>
          <td><a href="#">Chua Chu Kang GRC</a></td>
          <td>
            North
          </td>
          <td>500</td>
          <td>100</td>
          <td>30</td>
          <td>-</td>
          <td>-</td>
          <td>PAP</td>
          <td>24/2/2022 1930</td>
        </tr>
        <tr class="spacer"><td colspan="100"></td></tr>
        <tr>
          
        <td>
            2
          </td>
          <td><a href="#">Pasir Ris Punggol GRC</a></td>
          <td>
            North
          </td>
          <td>500</td>
          <td>100</td>
          <td>30</td>
          <td>-</td>
          <td>-</td>
          <td>PAP</td>
          <td>24/2/2022 1930</td>
        </tr>
        <tr class="spacer"><td colspan="100"></td></tr>
        <tr>
          
        <td>
            3
          </td>
          <td><a href="#">Sembawang GRC</a></td>
          <td>
            North
          </td>
          <td>500</td>
          <td>100</td>
          <td>30</td>
          <td>-</td>
          <td>-</td>
          <td>PAP</td>
          <td>24/2/2022 1930</td>
        </tr>
        <tr class="spacer"><td colspan="100"></td></tr>
        <tr>
          
        <td>
            4
          </td>
          <td><a href="#">Hong Kah North GRC</a></td>
          <td>
            North
          </td>
          <td>500</td>
          <td>100</td>
          <td>30</td>
          <td>-</td>
          <td>-</td>
          <td>PAP</td>
          <td>24/2/2022 1930</td>
        </tr> */}
        
      </tbody>
    </table>
    
  </div>
  <div className='pageNum'>
    <span>1/1</span> page

  </div>
  <div className='pagination' style={{margin:"8px 0"}}>
              <div className='pageIcon leftIcon'>
              <i class='bx bx-left-arrow'></i>
            </div>
            <div className='pageIcon rightIcon'>
              <i class='bx bx-right-arrow'></i>
            </div>
            </div>



        <div id='btn-div'>
          <a id='btn-bvs' href="/PrivateReleaseSuccess" className="btn-get-started scrollto">RELEASE RESULTS</a>
        </div>
      </div>
    </section>
</>
  )
}

export default Results