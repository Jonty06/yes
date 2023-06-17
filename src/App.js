import React from 'react';
import GetStartedButton from './Components/GetStartedButton';

import BuySellSection from './Components/BuySellSection';
import ServiceProviderBlock from './Components/ServiceProviderBlock';
import QABlock from './Components/QABlock';
import PartnersBlock from './Components/PartnersBlock';

function App() {
  return (
    <div>
      <GetStartedButton />
      
      <BuySellSection />
      <ServiceProviderBlock />
      <QABlock />
      <PartnersBlock />
    </div>
  );
}

export default App;
