import {  Route, Link } 
from 'react-router-dom'
import Search from './components/Search'
import Question from './components/Question'
const routing =(
    // <Router>
     <div>
        {/* <div>
            <Link to="/">Questions</Link>
        </div>
        <div>
            <Link to="/Search">Search</Link>
        </div> */}
        <Route exact path="/" component={Question}/>
        <Route  path="/Search" component={Search}/>
    </div>
    // </Router>
)
export default routing