import React, {useEffect, useState} from 'react'
import Web3 from 'web3'

import Breadcrumb from '../../components/Breadcrumb'

const OwnVote = () => {
  
  return (
    <>
    <Breadcrumb name="Own Vote" />
      <section id="services" className="ownVote section-bg bvsStyle">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              
              <p>Hi XGStars Pte Ltd.</p>
              <h2>This is your vote for Starbucks Annual General Meeting Voting Agenda!</h2>
            </div>
            <ul className="faq-list paginationAll" data-aos="fade-up" data-aos-delay={100}>
              <li>
                <div data-bs-toggle="collapse" className="collapsed question" href="#faq1">Starbucks Pte Ltd AGM Voting<i className="bi bi-chevron-down icon-show drop" /><i className="bi bi-chevron-up icon-close drop" /></div>
                <div id="faq1" className="collapse dropped" data-bs-parent=".faq-list">
                <div className="row">
              <h4 className='first'>Resolution One: Annual General Meeting Minutes 2022</h4>
              <div className='Question row'>
              <div className="col-md-8 col-lg-8" data-aos="zoom-in" data-aos-delay={100}>
              
              <div className="qns">
            
                <div className="address">
                  <p>THAT the minutes of the Annual General Meeting held on Monday 29 June 2022 be received and approved.</p>
                </div>
              </div>
              </div>
              <div className="Selection col-md-4 col-lg-4" data-aos="zoom-in" data-aos-delay={100}>
                <div className="Choice">
                    <h5>You Chose: For</h5>
                </div>
              </div>
              </div>
              <h4>Resolution Two: Annual Report and Accounts 2015</h4>
              <div className='Question row'>
              <div className="col-md-8 col-lg-8" data-aos="zoom-in" data-aos-delay={200}>
              
              <div className="qns">
            
                <div className="address">
                  <p>THAT the Annual Report and Accounts for the year ended 31 December 2022 be received and approved.</p>
                </div>
              </div>
              
              </div>
              <div className="Selection col-md-4 col-lg-4" data-aos="zoom-in" data-aos-delay={100}>
                <div className="Choice">
                    <h5>You Chose: Against</h5>
                </div>
              </div>
              </div>
            </div>
                </div>
              </li>
              <li>
                <div data-bs-toggle="collapse" href="#faq2" className="collapsed question">Noel Gifts Pte Ltd AGM Voting<i className="bi bi-chevron-down icon-show drop" /><i className="bi bi-chevron-up icon-close drop" /></div>
                <div id="faq2" className="collapse dropped" data-bs-parent=".faq-list">
                  <div className='empty'>You Have not vote yet</div> 
                </div>
              </li>
              <li>
                <div data-bs-toggle="collapse" href="#faq3" className="collapsed question">Apple Pte Ltd AGM Voting<i className="bi bi-chevron-down icon-show drop" /><i className="bi bi-chevron-up icon-close drop" /></div>
                <div id="faq3" className="collapse dropped" data-bs-parent=".faq-list">
                <div className='empty'>You Have not vote yet</div> 
                </div>
              </li>
              <li>
                <div data-bs-toggle="collapse" href="#faq4" className="collapsed question">HUAWEI AGM Voting<i className="bi bi-chevron-down icon-show drop" /><i className="bi bi-chevron-up icon-close drop" /></div>
                <div id="faq4" className="collapse dropped" data-bs-parent=".faq-list">
                <div className='empty'>You Have not vote yet</div> 
                </div>
              </li>
            </ul>
            <div className='pageNum'>
    <span>1/1</span> page

  </div>
            <div className='pagination'>
              <div className='pageIcon leftIcon'>
              <i class='bx bx-left-arrow'></i>
            </div>
            <div className='pageIcon rightIcon'>
              <i class='bx bx-right-arrow'></i>
            </div>
            </div>
          </div>
        </section>
  </>
  )
}

export default OwnVote