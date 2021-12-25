import Lottery from './Lottery';

function App() {
  return (
    <div className="App">

      <Lottery title="Lotto" numBalls={8} maxnum={10} />
      
    </div>
  );
}

export default App;
