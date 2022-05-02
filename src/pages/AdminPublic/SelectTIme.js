import React, {useEffect, useState} from 'react'
import { csv } from "d3";

import data1 from '../../data/private.csv';

import Breadcrumb from '../../components/Breadcrumb'
import { useNavigate } from 'react-router-dom';

const FileUpload = () => {
  return (
    <>
    <Breadcrumb name="Upload File" />
      <section id="services" className="upload createSuccess section-bg bvsStyle">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              
              <p>Hi Starbucks Pte Ltd</p>
            </div>
            <div className='steps-section' style={{width:"70%",margin:"0 auto",minWidth:"480px"}}>
              <div className='steps-item'>
              <div className='steps-icon active-icon'>
                  <i class='bx bx-upload'></i>
                </div>
                <div className='steps-title'>
                  Create form
                </div>
                <div className='steps-subtitle'>
                  Upload excel file
                </div>
                
              </div>
              <div className='steps-item'>
              <hr className='between active-between' />
              </div>
              
              
              <div className='steps-item'>
              <div className='steps-icon active-icon'>
                <i class='bx bx-envelope-open'></i>
                </div>
              <div className='steps-title'>
                  Release Vote
                </div>
                <div className='steps-subtitle'>
                  Allow citizens to start voting
                </div>
                
              </div>
              <div className='steps-item'>
              <hr className='between active-between' />
              </div>
              <div className='steps-item'>
              <div className='steps-icon  active-icon'>
              <i class='bx bxs-calendar'></i>
                </div>
              <div className='steps-title'>
                  Select Date Range
                </div>
                <div className='steps-subtitle'>
                  The time duration of vote
                </div>
                
              </div>
              
            </div>
            <div className="row">
              
              <div className="col-md-12 col-lg-12 d-flex justify-content-between" data-aos="zoom-in" data-aos-delay={100}>
              <div className="info row justify-content-between">
                <div className='dateInput'>
                          <label for="dateofbirth">Start Date</label>
                          <input type="date" name="startDate" id="startDate"/>
                        </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-12 d-flex justify-content-between" data-aos="zoom-in" data-aos-delay={200}>
              <div className="info row justify-content-between">
              <div className='dateInput'>
                    <label for="dateofbirth">End Date</label>
                    <input type="date" name="endDate" id="endDate"/>
                  </div>
              </div>
              </div>
            </div>
            <div id='btn-div'>
              <a id='btn-bvs' href='/PublicCreateSuccess' className="btn-get-started scrollto">START VOTING SESSION</a>
            </div>
          </div>
        </section>
  </>
  )
}

export default FileUpload