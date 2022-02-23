import './App.css';
import { Button, Input } from '@material-ui/core'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';

function App() {

  const home = () =>{
    window.alert("You have cliked the icon.")
  }

  return (
    <div className="App">
      <h1>Adarsh</h1>
      <div className='home'>
        <div class="form-group">
          <br/>
          <input type="text" class="inputText" required/>
          <span class="floating-label">username</span>
        </div>  
        <div className='label'>
          <Button onClick={home}>
              <ArrowLeftIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
