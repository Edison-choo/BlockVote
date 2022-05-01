import React from 'react'

import Breadcrumb from '../../components/Breadcrumb'

const Results = () => {
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
              <th scope="col">Resolution</th>
              <th scope="col">For</th>
              <th scope="col">% of votes cast</th>
              <th scope="col">Against</th>
              <th scope="col">% of votes cast</th>
              <th scope="col">Abstain</th>
              <th scope="col">% of votes cast</th>
              <th scope="col">Time Updated</th>
            </tr>
          </thead>
          <tbody className='paginationAll'>
            <tr scope="row">
              <td>
                1
              </td>
              <td>To receive and conside the Company's 2019 Annual report and accounts</td>
              <td>
                2,522,660
              </td>
              <td>99.8%</td>
              <td>3650</td>
              <td>0.01%</td>
              <td>3650</td>
              <td>0.01%</td>
              <td>22/2/22 2359</td>
            </tr>
            <tr class="spacer"><td colspan="100"></td></tr>
            <tr>
              
            <td>
                2
              </td>
              <td>To approve the Directors' remuneration report in the Company's 2019 Annual report and accounts</td>
              <td>
                2,522,660
              </td>
              <td>99.8%</td>
              <td>3650</td>
              <td>0.01%</td>
              <td>3650</td>
              <td>0.01%</td>
              <td>22/2/22 2359</td>
            </tr>
            <tr class="spacer"><td colspan="100"></td></tr>
            <tr>
              
            <td>
                3
              </td>
              <td>To elect Amanda Blanc Annual report and accounts</td>
              <td>
                2,522,660
              </td>
              <td>99.8%</td>
              <td>3650</td>
              <td>0.01%</td>
              <td>3650</td>
              <td>0.01%</td>
              <td>22/2/22 2359</td>
            </tr>
            <tr class="spacer"><td colspan="100"></td></tr>
            <tr>
              
            <td>
                4
              </td>
              <td>To authorise the Company to purchase its own 8 3/8% preference shares</td>
              <td>
                2,522,660
              </td>
              <td>99.8%</td>
              <td>3650</td>
              <td>0.01%</td>
              <td>3650</td>
              <td>0.01%</td>
              <td>22/2/22 2359</td>
            </tr>
            
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