import Box from './components/Box'
import './App.css';

function App() {
 
  return (
    <div className="App">
      <header className="App-header">
      <div className="container">

        <Box text="im a box 1"
        backgroundColor="red"
        textClass="boldText"/>

        <Box text="im a box 2"
        backgroundColor="blue"
        textClass="smallText"/>

        <Box text="im a box 3"
        backgroundColor="green"
        textClass="italicText"/>

      </div>
      </header>
    </div>
  );
}

export default App;
