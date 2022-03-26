import React from 'react'

import Breadcrumb from '../../components/Breadcrumb'

const Sessions = () => {
  return (
    <>
    <Breadcrumb name="Vote Selection" />
      <section id="services" className="sessions section-bg bvsStyle">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              
              <p>Hi XGStars Pte Ltd.</p>
              <h2>Welcome to the Annual General Meeting Voting Sessions you are eligible for </h2>
            </div>
            <div className="row">
            <a href='/PrivateVote'>
              <div className="col-md-12 col-lg-12 d-flex justify-content-between" data-aos="zoom-in" data-aos-delay={100}>
              
                <div className="info">
              
                  <div className="address">
                  <h4>Starbucks Pte Ltd AGM Voting</h4>
                    <p>Session Ending: 28/2/2022 2359</p>
                  </div>
                  <i class='bx bx-chevron-right'></i>
                </div>
             
              
              
              </div>
              </a>
              <div className="col-md-12 col-lg-12 d-flex justify-content-between" data-aos="zoom-in" data-aos-delay={200}>
                 <div className="info">
                
                    <div className="address">
                    <h4>Noel Gifts Pte Ltd AGM Voting</h4>
                  <p>Session Ending: 28/2/2022 2359</p>
                  </div>
                  <i class='bx bx-chevron-right'></i>
                </div>
              </div>
            </div>
          </div>
        </section>
  </>
  )
}

export default Sessions