import './App.css';
import SFSToken from './artifacts/contracts/SFSToken.sol/SFSToken.json';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import Faucet from './components/Faucet.js'
import TokenSend from './components/TokenSend.js'



function App() {

  // async function checkBalance() {
  //   const provider = new 
  // }

  const Token = SFSToken;

  return (
    <div className="App">
    <Container>
    <Row className="justify-content-md-center">
      <Col>
      <div><h1>Sats Finney Studios Private Sale</h1></div>
      </Col>
      <Faucet  tokenContract={Token}/>
      <Col>
      <br></br>
      <div> <TokenSend tokenContract={Token}/> </div>
      </Col>
    </Row>
    </Container>
    </div>
  );
}

export default App;
