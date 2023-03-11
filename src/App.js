
import HigherOrderComponent from './Components/HigherOrderCompo';
import CounterComponent from './Components/Counter';
import './App.css';
import './Components/style.css'

function App() {
  return (
    <>
    <h1 className='head'>Higher Order Component</h1>
    <div className="App">
  
     <HigherOrderComponent data={CounterComponent } />
    </div>
    </>
  );
}

export default App;
