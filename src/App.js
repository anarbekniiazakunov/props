import Header from './components/Header'
import './App.css';

function App() {
  const element = {principal:"blue"}
  const nameUsers =[ " Zama", " Dada","Meerim"]
  return (
    <div className="App">
      <header className="App-header">
        {
          nameUsers.map((user) =><Header nameUser={user} greeting=' good bye' tacos=' beans' Color={element} />)
        }
        {/* <Header 
        nameUser=" Zama" 
        greeting=' good bye'
        tacos=' beans'
        Color={element}
        />
        <Header 
        nameUser=" Dada" 
        greeting=' good bye'
        tacos=' beans'
        Color={element}
        /> */}
        
      </header>
    </div>
  );
}

export default App;
