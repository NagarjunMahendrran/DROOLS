import Container from '@material-ui/core/Container';
import FloatingActionButtons from './Components/floatingbutton'
import AddNewRuleComponent from './Components/popup'
import './App.css';
import CardCreator from './Components/cards';
import {GETDBNAMES} from "./API/Api"

export default  function App() {
  return (
    <div className="App">
      <Container style={{ width: '80%', height:'550px' , marginTop:20}}>
      <CardCreator />
      </Container>
      <AddNewRuleComponent/>
      <FloatingActionButtons />
    </div>
  );
}
localStorage.clear();
export const dbname =GETDBNAMES();
