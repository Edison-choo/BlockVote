import React from 'react'

const Login = () => {
  return (
    <>
        <section id="services" className="login section-bg bvsStyle">
          <div className="container" data-aos="fade-up">
            <div className="info">
                <div className="address">
                    <h4>BlockVote</h4>
                    <p>Log In</p>
                  </div>
                  <img src="img/bvs/Singpass.png" className="img-fluid animated" alt />
              <div id='btn-div' className='row d-flex justify-content-center'>
                <a id='btn-bvs' href="#about" className="btn-get-started scrollto">Login Using Password</a>
              </div>
            </div>
            
          </div>
        </section>
    </>
  )
}

export default Login