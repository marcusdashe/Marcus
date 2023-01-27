import React from 'react'
import styled from 'styled-components';
import Particle from '../Components/Particles';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedinIcon from '@material-ui/icons/LinkedIn';


function HomePage() {
   
    return (
        <HomePageStyled>
            <div className="p-particles-js">
                <Particle />
            </div>

            <div className="typography">
                <h1> Hi, I'm Marcus - a <span>Software Developer</span> </h1>

                <p>  I’m passionate about Typescript, Kotlin, Rust and Solidity/Vyper, I care about writing efficient, intelligent and clean code.</p>
                 <div className="icons">
                     
                     {/* <a href="https://www.facebook.com/dashemarcus/" className="icon i-facebook" >
                         <FacebookIcon />
                     </a> */}

                     <a href="https://github.com/marcusdashe/" className="icon i-github">
                         <GitHubIcon />
                     </a>
                     <a href="https://twitter.com/marcusdashe" className="icon i-twitter" >
                         <TwitterIcon />
                     </a>

                     <a href="https://www.linkedin.com/in/marcus-dashe-15a088202/" className="icon i-twitter">
                         <LinkedinIcon />
                     </a>
                 </div>
           </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height:100vh;
    position: relative;
   
    p-particles-js{
        position: absolute; 
        top: 0;
        left: 0;
        color:black;
    }

    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                   
                }
               svg{
                   margin: .7rem
               }
            }
        }
    }

`
export default HomePage
