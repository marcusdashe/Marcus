import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Title from './Title';
import ProgressBar from './ProgressBar';


function Skills() {
    return (
        <SkillsStyled>
          
                <Title title={"Skills"} span={"Skills"} />
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar
                            title={'MongoDB, NextJS, NodeJS (MNN Stack)'}
                            width={'80%'}
                            text={'80%'}
                        />

                        <ProgressBar
                            title={'Web Devs (Kotlin, Springboot, Postgres)'}
                            width={'89%'}
                            text={'89%'}
                        />

                        <ProgressBar
                            title={'DevOps (Docker, Git/Github, Linux Bash)'}
                            width={'90%'}
                            text={'90%'}
                        />

                        <ProgressBar
                            title={'Mobile Devs (Kotlin/Jetpack Compose )'}
                            width={'70%'}
                            text={'70%'}
                        />

                        <ProgressBar
                            title={'UI Design (Figma, Adobe Illustrator)'}
                            width={'65%'}
                            text={'65%'}
                        />


                        <ProgressBar
                            title={'DApp (Solidity, Vyper, Web3.js)'}
                            width={'60%'}
                            text={'60%'}
                        />

                       
                    </div>
                </InnerLayout>
            
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem; 
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;
