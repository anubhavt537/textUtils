
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";




function App() {
  const [mode,setMode]=useState('light'); //whether dark mode  is enabled or not
   const toggleMode = ()=>{
if (mode === 'light') {
  setMode('dark')
  document.body.style.backgroundColor='grey'
}
else{
  setMode('light')
  document.body.style.backgroundColor='white'

}
  } 

  return (
    <>
<Navbar title="TextUtils2" aboutText="about text" mode={mode} toggleMode={toggleMode} />
{/* <Navbar  /> */}
  <Alert/>
<div className="container">
{/* <Router>
<Switch>
          <Route exact path="/about">
            <About />
          </Route>
          
          <Route exact path="/">
            
<TextForm heading="enter the text to analyze below" mode={mode} />
          </Route>
        </Switch>


</Router> */}
<TextForm heading="enter the text to analyze below" mode={mode} />
<About />
</div>
    </>
    
  );
}

export default App;
