import React from 'react'

import Breadcrumb from '../../components/Breadcrumb'

import Notification from '../../components/Notification'

const PrivateVote = () => {
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
            <div className="row">
              <h4 className='first'>Resolution One: Annual General Meeting Minutes 2022</h4>
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
              </div>
              

              <div id='btn-div' style={{marginTop:"20px"}}>
              <a id='btn-bvs' className="btn-get-started scrollto vote-submit">Vote</a>
            </div>
            </div>
          </div>
        </section>
  </>
  )
}

export default PrivateVote