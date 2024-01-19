import { BrowserRouter as Router,Route,Routes,Link } from "react-router-dom";
import RQSuperHeroPage from './Components/RQSuperHeroesPage'
import SuperHeroesPage from './Components/SuperHeroPage'
import HomePage from './Components/Home'
import './Style/App.css'
function App() {
  return (
   <>
   <Router>
   <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/super-heroes'>Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          </div>
          <Routes>
            <Route path='/super-heroes' Component={SuperHeroesPage} >

            </Route>
            
             
           
            <Route path='/rq-super-heroes' Component={RQSuperHeroPage}/>
             
           
            <Route path='/' Component={HomePage}/>
            
          
          </Routes>
      
      
      
          
          </Router>
   </>
  );
}

export default App;
