import React from 'react'

import Breadcrumb from '../../components/Breadcrumb'

const FileUpload = () => {
  return (
    <>
    <Breadcrumb name="Upload File" />
      <section id="services" className="upload section-bg bvsStyle">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              
              <p>Hi Electoral Departments Singapore</p>
            </div>
            <div className="row">
              
              <div className="col-md-12 col-lg-12 d-flex justify-content-between" data-aos="zoom-in" data-aos-delay={100}>
              <div className="info row justify-content-between">
                <div className='question col-md-6 col-lg-6'>
                    <div>1. Upload database of electoral divisions and the participating parties</div>
                </div>
                <div className="address col-md-6 col-lg-4">
                    <input type="file" id="myFile" name="filename"/>
                </div>
              </div>
              </div>
              <div className="col-md-12 col-lg-12 d-flex justify-content-between" data-aos="zoom-in" data-aos-delay={200}>
              <div className="info row justify-content-between">
                <div className='question col-md-6 col-lg-4'>
                    <div>2. Upload database of eligible citizens </div>
                </div>
                <div className="address col-md-6 col-lg-4">
                <input type="file" id="myFile" name="filename"/>
                </div>
              </div>
              </div>
            </div>
            <div id='btn-div'>
              <a id='btn-bvs' href="/" className="btn-get-started scrollto">CREATE VOTE</a>
            </div>
          </div>
        </section>
  </>
  )
}

export default FileUpload