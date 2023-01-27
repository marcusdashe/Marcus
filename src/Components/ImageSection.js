import React from 'react';
import styled from 'styled-components';
import resume from '../img/aboutme.jpg';
// import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className='left-content'>
                <img src={resume} alt='resume'/>
            </div>
            <div className='right-content'>
              
                    <h4>I am a Software Developer currently living in Abuja, Nigeria <span></span></h4>
              
                <p className="paragraph">
                    Creative Software Developer dedicated to developing and optimizing interactive, user-friendly, and feature-rich Apps for Web/DApp/CLI Programme/Android Native App.
                    Leveraging analytical skills and strong attention to detail in order to deliver an efficient digital solutions
                </p>

                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Nationality</p>
                        <p>Language</p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>

                    <div className="info-title">
                        <p> : Marcus Dashe</p>
                        <p> : Nigerian</p>
                        <p> : English</p>
                        <p> : FCT Abuja</p>
                        <p> : Software Developer</p>
                    </div>
                </div>
                {/* <PrimaryButton title={'Download CV'}/> */}
            </div>
        </ImageSectionStyled>
    )
}

const ImageSectionStyled = styled.div`
margin-top: 3rem;
    display: flex;
    @media screen and (max-width: 1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }   
    }
    .left-content{
        width: 100%;
      
        img{
            width: 90%;
            object-fit: cover;
        }
    }
    .right-content{
     
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
                color: var(--white-color);
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom:1.4rem;
            .info-title{
                padding-right: 2rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;

export default ImageSection
