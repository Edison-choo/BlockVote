import React, {useEffect} from 'react'

const Login = () => {

  // useEffect(() => {
  //   const script = document.createElement('script');
  
  //   script.src = "https://stg-id.singpass.gov.sg/static/ndi_embedded_auth.js";
  //   script.async = true;
  
  //   document.body.appendChild(script);
  
  //   return () => {
  //     document.body.removeChild(script);
  //   }
  // }, []);

  function formURL(qrType, callbackURL, clientId, state, nonce, signatureMethod, timestampExpiry, timestampStart, version) {
    let nonceString = nonce ? "&nonce=" + nonce : '';
    let baseUrl = "https://app.singpass.gov.sg/sgverify";
    let sgverifyURl = baseUrl +
        "?callback=" + encodeURIComponent(callbackURL) +
        "&client_id=" + clientId +
        nonceString +
        "&qr_type=" + qrType +
        "&signature_method=" + signatureMethod +
        "&state=" + state +
        "&timestamp_expiry=" + timestampExpiry + // Saturday, 10 October 2020 10:10:10
        "&timestamp_start=" + timestampStart + // Thursday, 10 October 2019 10:10:10
        "&v=" + version;
  
    /* Display all the params */
    console.log('--- Verify URL Params ---:'.green);
    console.log(' - baseUrl: ' + baseUrl);
    console.log(' - callback: ' + callbackURL);
    console.log(' (1) callback(URL Encoded): ' + encodeURIComponent(callbackURL));
    console.log(' (2) client_id: ' + clientId);
    console.log(' (3) nonce: ' + nonce);
    console.log(' (4) qr_type: ' + qrType);
    console.log(' (5) signature_method: ' + signatureMethod);
    console.log(' (6) state: ' + state);
    console.log(' (7) timestamp_expiry: ' + timestampExpiry);
    console.log(' (8) timestamp_start: ' + timestampStart);
    console.log(' (9) v: ' + version);
  
    /* Display the URL */
    console.log('--- Verify URL ---:'.green);
    console.log(sgverifyURl);
  
    return sgverifyURl;
  
  }

  function signURL(sgverifyURl, keytoSign) {
    var signedSgVerifyURl = crypto.createSign('RSA-SHA256')
        .update(sgverifyURl)
        .sign(keytoSign, 'base64');
  
    /* Signature */
    console.log('--- Signature of Verify URL ---:'.green);
    console.log(signedSgVerifyURl);
  
    return signedSgVerifyURl;
  }

  function assemblingUrlWithSignature(sgverifyURl, signedSgVerifyURl) {
  
    var sgverifyURlwithSignature = sgverifyURl +
        "&signature=" + signedSgVerifyURl;
    return sgverifyURlwithSignature;
  }

  var today = new Date();
  console.log(formURL("dynamic", "http://localhost:3000/Loading", "STG2-SGVERIFY-BVSS-APII", "kiosk001", "4110444", "RS256", Math.round(today.getTime()+24 * 60 * 60 * 1000), Math.round(today.getTime()), 2))

  // var authParamsSupplier = async() => {
  //   return {state: "dummySessionState", nonce: "dummySessionNonce"};

  // };

  // const onError = (errorId, message) => {
  //   console.log(`onError.errorId:${errorId} message:${message}`);
  // };

  // const initAuthSessionResponse = window.NodeIterator.initAuthSession(
  //   'ndi-qr',
  //   {
  //     clientId: '',
  //     redirectUri: '',
  //     scope: 'openId',
  //     responseType: 'code'
  //   },
  //   authParamsSupplier,
  //   onError
  // );

  // console.log('initAuthSession: ', initAuthSessionResponse);

  return (
    <>
        <section id="services" className="login section-bg bvsStyle">
          <div className="container" data-aos="fade-up">
            <div className="info">
                <div className="address">
                    <h4>BlockVote</h4>
                    <p>Scan QR code to login</p>
                  </div>
                  <div id="ndi-qr"></div>
                  <img src="img/bvs/Singpass.png" className="img-fluid animated" alt />
              <div id='btn-div' className='row d-flex justify-content-center'>
                <a id='btn-bvs' href="#about" className="btn-get-started scrollto">Login Using Password</a>
              </div>
              <div className='statement'>Don't have an account? <a href='/Register'>Sign Up</a></div>
            </div>
            
          </div>
        </section>
      <script src="https://stg-id.singpass.gov.sg/static/ndi_embedded_auth.js"></script>
        
    </>
  )
}

export default Login