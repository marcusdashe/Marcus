import React, { useState, useEffect } from 'react';
import {Switch as Switching, Route } from 'react-router-dom';
import styled from 'styled-components';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import IconButton from '@material-ui/core/IconButton';
import Switch from '@material-ui/core/Switch';
import MenuIcon from '@material-ui/icons/Menu';
import Sidebar from './Components/Sidebar';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ResumePage from './Pages/ResumePage';
import PortfoliosPage from './Pages/PortfoliosPage';
import ContactPage from './Pages/ContactPage';



function App() {
  const [theme, setTheme ] = useState('dark-theme');
  const [checked, setChecked ] = useState(false);
  const [navToggle, setNavToggle] = useState(false);

  useEffect(()=>{
      document.documentElement.className = theme;
  }, [theme]);

  const themeToggler = () =>{
    if(theme === 'light-theme'){
      setTheme('dark-theme');
      setChecked(false);
    }
    else{
       setTheme('light-theme');
       setChecked(true);
      }
  }
  return (
    <>
      <Sidebar navToggle={navToggle}/>
      
      <div className="light-dark-mode">
            <div className="left-content">
            <Brightness4Icon />
            </div>
            <div className="right-content">
              <Switch
               value=""
               checked={checked}
                inputProps={{ 'aria-label': '' }}
                size="medium"
                onClick={themeToggler}
               />
            </div>
        </div>
       
      <div className="ham-burger-menu">
        <IconButton onClick={()=> setNavToggle(!navToggle)}>
          <MenuIcon />
        </IconButton>
      </div>

      <MainContentStyled>
        <Switching>
          <Route path="/" exact>
              <HomePage />
          </Route>

          <Route path="/about" exact>
              <AboutPage />
          </Route>

          <Route path="/resume" exact>
              <ResumePage />
          </Route>

          <Route path="/portfolios" exact>
              <PortfoliosPage />
          </Route>

          <Route path="/contact" exact>
              <ContactPage />
          </Route>
        </Switching>
      
      </MainContentStyled>
    </>
  );
}

const MainContentStyled = styled.main`
     position: relative;
     margin-left: 16.3rem;
     min-height: 100vh;
     @media screen and (max-width: 1200px){
       margin-left: 0;

     }
     
     .lines{
       position: absolute;
       min-height: 100vh;
       width: 100%;
       display: flex;
       justify-content: space-evenly;

       .line-1, .line-2, .line-3, .line-4{
         width: 1px;
         min-height: 100vh;
         background-color: var(--border-color);

       }
     }
  
`;



export default App;
