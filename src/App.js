
import './App.css';
import Button from './lib/index';

function App() {

  return (
    <div className="App">
      <Button
        variant='primary'
        onClick={() => alert('Button Clicked')}
      >
        Click me! </Button>
    </div>
  );
}

export default App;
