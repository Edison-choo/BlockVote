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
          <th scope="col">Electoral Division</th>
          <th scope="col">Area</th>
          <th scope="col">PAP Voted</th>
          <th scope="col">WP Votes</th>
          <th scope="col">SDP Voted</th>
          <th scope="col">PSP Voted</th>
          <th scope="col">SPP Votes</th>
          <th scope="col">Winning Party</th>
          <th scope="col">Time Updates</th>
        </tr>
      </thead>
      <tbody className='paginationAll'>
        <tr scope="row" >
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
          <a id='btn-bvs' href="#" className="btn-get-started scrollto">RELEASE RESULTS</a>
        </div>
      </div>
    </section>
</>
  )
}

export default Results