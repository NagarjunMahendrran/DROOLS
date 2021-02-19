import Container from '@material-ui/core/Container';
import FloatingActionButtons from './Components/floatingbutton'
import AddNewRuleComponent from './Components/popup'
import './App.css';

function App() {
  return (
    <div className="App">
      <Container style={{ width: '80%', height:'75%'}}>
        <p></p>
      </Container>
      <AddNewRuleComponent/>
      <FloatingActionButtons />
    </div>
  );
}

export default App;
