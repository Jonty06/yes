import React from 'react';
import './ServiceProviderBlock.css';



function ServiceProviderBlock() {
  return (
    <div className="service-provider-block">
      <div className="left-half">
        <img src="online_pay.png" alt="Online Transaction" className="transaction-image" />
        <h1>Our Service Provider</h1>
      </div>
      <div className="right-half">
        <div className="provider-block">
        {/* <img src="benxa.png" className="servic_img" /> */}
          <h1 >BANXA</h1>
          <div className="logo-container">
          <img src="accepts.png"  />
            <img src="paytm.png" alt="Paytm" />
            <img src="g_pay.png" alt="Google Pay" />
            <img src="Visa.png" alt="Visa" />
            <img src="i_pay.png" alt="ipay" />
          </div>
        </div>
        <div className="provider-block">
          <h1>Simplex</h1>
          <div className="logo-container">
          <img src="accepts.png"  />
            <img src="paytm.png" alt="Paytm" />
            <img src="g_pay.png" alt="Google Pay" />
            <img src="Visa.png" alt="Visa" />
            <img src="i_pay.png" alt="ipay" />
          </div>
        </div>
        <div className="provider-block">
          <h1>Legend Trading</h1>
          <div className="logo-container">
          <img src="accepts.png"  />
            <img src="paytm.png" alt="Paytm" />
            <img src="g_pay.png" alt="Google Pay" />
            <img src="Visa.png" alt="Visa" />
            <img src="i_pay.png" alt="ipay" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceProviderBlock;



