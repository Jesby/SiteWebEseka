
import './App.css';
import  {BrowserRouter, Route, Router, Switch} from 'react-router-dom'


        // En tete et Pieds de Pages 
import {Footer, Header} from './components';

       // Accueil et contact 
import {Accueil, Contact} from './pages';

function App() {
  return (
    <div className="App">
        <>
          <BrowserRouter>
                 <Header/>
                  <Switch>
                    
                    <Route path="/contact" component={Contact} />   
                  
                    <Route path="/" component={Accueil} /> 
                  </Switch>
                <Footer/>
          </BrowserRouter>
        </>   
     </div>
   

    
    
  );
}

export default App;
