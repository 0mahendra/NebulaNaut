
import './App.css';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import Homepage from './Pages/Homepage';
// import Next from './Pages/Next';
import Home from './Pages/Home';
import spirit from './Pages/Other/Spirit';
import Perservnace from './Pages/Other/Perservance';
import curiosity from './Pages/Other/curiorisity';
import MainHomePage from "./Pages/MainHomePage";
import ISS from './Pages/ISS/ISS';
import quiz from './Pages/qizess';
import POTD from './Pages/quiz/PotdQiuz/POTD';

import Quiz1 from './Pages/quiz/PotdQiuz/Quiz1';
import MainSpaceNews from './Pages/Space News/MainSpaceNews';



import Planetary1quiz from './Pages/quiz/SPQuiz/planetry1quiz';
import Mars1Quiz from './Pages/quiz/SPQuiz/Mars1Quiz';
import Iss1Quiz from './Pages/quiz/SPQuiz/Iss1Quiz';
import Exo1Quiz from './Pages/quiz/SPQuiz/Exo1Quiz';
import IssHistory from './Pages/ISS/ISShistory';
import IssAchives from './Pages/ISS/ISSAchivement';
import RoverHistory from './Pages/Other/Rover/RoverHistory';
import RoverArchives from './Pages/Other/Rover/RoverAchivement';
import RoverImg from './Pages/Other/Rover/RoverImg';

function App (){
  return (

  
   <div  className='App'>
    <Route path ="/" component ={Home} exact />
    <Route path ="/Home" component = {MainHomePage}/>
    <Route path = "/quiz" component = {quiz}/>
    <Route path ="/ISS" component = {ISS}/>
    <Route path = "/HomePage" component = {Homepage}/>
    <Route path = "/Spirit" component ={spirit}/>
    <Route path = "/perservance" component = {Perservnace}/>
    <Route path = "/curiosity" component = {curiosity}/>
    <Route path = "/POTD" component ={POTD}/>
    <Route path = "/Quiz1" component = {Quiz1}/>
    <Route path = "/SpaceNews" component ={MainSpaceNews}/>
    <Route path = "/marsQuiz" component = {Mars1Quiz}/>
    <Route path = "/planetryQuiz" component = {Planetary1quiz}/>
    <Route path = "/issQuiz" component = {Iss1Quiz}/>
    <Route path = "/exoQuiz" component = {Exo1Quiz}/>

    <Route path = "/IssHistory" component = {IssHistory}/>
    <Route path = "/IssArchives" component = {IssAchives} />
    <Route path = "/RoverHistory" component = {RoverHistory}/>
    <Route path = "/RoverArchives" component = {RoverArchives}/>
    <Route path = "/RoverImg" component = {RoverImg}/>
    

    
    
    </div>
   
 
  );
}
export default App;
