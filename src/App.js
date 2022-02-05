import react from 'react';
import './App.css';
import { Button } from './lib';

function App() {

  return (
    <div className="App">
      <Button
        variant='primary'
        size='small'
        onClick={() => alert('Button Clicked')}
      >
        Click me! </Button>
    </div>
  );
}

export default App;
