/* import './App.css';
import Question from './components/Question';

function App() {
  return (
    <div className="App">
      <Question />
    </div>
  );
}

export default App;
 */

import './App.css';
import NavBar from './components/NavBar'
import { BrowserRouter as Router } from 'react-router-dom'
import routing from './router';
function App() {
  return (

    <Router>
    <div className="App">
      <NavBar/>
      
      {routing}

    </div>
    </Router>

  );
}

export default App;
