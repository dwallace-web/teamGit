import './App.css';
import { Button } from 'reactstrap';
import GeoLocationData from './components/GeoLocationData/GeoLocation';

function App() {
  return (
    <div className="App">

      <Button color="primary">Confirm reactstrap install!</Button>
      <GeoLocationData />
    </div>
  );
}

export default App;
