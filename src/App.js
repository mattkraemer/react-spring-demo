import logo from './logo.svg';
import { useSpring, animated } from 'react-spring'
import './App.css';

function App() {  
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })
  return (
    <div className="App">
      <header className="App-header">
        <animated.div style={props}>I will fade in</animated.div>
      </header>
    </div>
  );
}

export default App;
