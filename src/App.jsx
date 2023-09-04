import './app.scss';
import Container from 'react-bootstrap/Container';
import Navigation from './Navigation/Navigation';
import Body from './Body';
import Footer from './Footer';
import { useState } from 'react';
import { PERIODS } from './Body/consts';
import { ELECTR } from './Body/consts';

function App() {
  const [dataType, setDataType] = useState('chart');
  const [selectedPeriod, setSelectedPeriod] = useState(PERIODS[0].value);
  const [activeEnergy, setActiveEnergy] = useState(ELECTR);
  const [electricityPrice, setElectricityPrice] = useState(null);
  const [gasPrice, setGasPrice] = useState(null);
  const [gasCurrentPrice, setGasCurrentPrice] = useState(0);

  return (
    <Container>
      <Navigation />
      <Body dataType={dataType} selectedPeriod={selectedPeriod}
        activeEnergy={activeEnergy} setActiveEnergy={setActiveEnergy}
        electricityPrice={electricityPrice} setElectricityPrice={setElectricityPrice}
        gasPrice={gasPrice} setGasPrice={setGasPrice}
        gasCurrentPrice={gasCurrentPrice} setGasCurrentPrice={setGasCurrentPrice} />

      <Footer
        dataType={dataType}
        setDataType={setDataType}
        selectedPeriod={selectedPeriod}
        setSelectedPeriod={setSelectedPeriod}
        activeEnergy={activeEnergy}
        setElectricityPrice={setElectricityPrice}
        setGasPrice={setGasPrice}
        setGasCurrentPrice={setGasCurrentPrice}
      />
    </Container>
  );
}

export default App;
