import React from 'react'

import Breadcrumb from '../../components/Breadcrumb'

const PublicVote = () => {
  return (
    <>
    <Breadcrumb name="Vote" />
      <section id="services" className="vote section-bg bvsStyle">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              
              <p>ENRICH BACHMAN, Welcome to the Singapore General Elections!</p>
              <h2>Your Electoral Division is Pasir Ris - Punggol GRC</h2>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={100}>
                <div className="icon-box">
                  <div className="icon"><img src="img/bvs/People's_Action_Party_of_Singapore_logo.svg.png" className="img-fluid animated" alt /></div>
                  <h4 className="title">PEOPLE UNION PARTY</h4>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={200}>
                <div className="icon-box">
                  <div className="icon"><img src="img/bvs/Workers'_Party_of_Singapore_logo.png" className="img-fluid animated" alt /></div>
                  <h4 className="title">WORKER'S PARTY</h4>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={300}>
                <div className="icon-box">
                  <div className="icon"><img src="img/bvs/Logo_of_the_SDP.svg.png" className="img-fluid animated" alt /></div>
                  <h4 className="title">SINGAPORE DEMOCRATIC PARTY</h4>
                </div>
              </div>
            </div>
            <h3>Voter's address: 21d3f34feff2d3f23</h3>
            <form>
              <input type={"hidden"} id="choice" />
            <div id='btn-div'>
              <a id='btn-bvs' href="/Success" className="btn-get-started scrollto">Vote</a>
            </div>
            </form>
          </div>
        </section>
  </>
  )
}

export default PublicVote