import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Title from './Title';
import ServiceCard from '../Components/ServiceCard';
import webDevs from '../img/globe.png';
import mobileDevs from '../img/phone.png';
import logoDesign from '../img/logos.png';



function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Services'} span={'services'} />
                <div className="services">
                    <ServiceCard 
                        image={webDevs} 
                        title={'Web App Devs & DevOps'} 
                        paragraph={''} 
                    />

                    <div className="mid-card">
                    <ServiceCard 
                        image={mobileDevs} 
                        title={'Mobile App Devs'} 
                        paragraph={''} 
                    />
                     </div>
                    
                    <ServiceCard 
                        image={logoDesign} 
                        title={'UI Design'} 
                        paragraph={''} 
                    />
                   

                
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 2rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width: 1000px){
        flex-direction: column;
        
    }
    @media screen and (max-width: 950px){
        grid-template-columns: repeat(2, 1fr);
        
    }
    @media screen and (max-width: 650px){
        grid-template-columns: repeat(1, 1fr);
        
    }
        .mid-card{
          
        }
    }
`;

export default ServicesSection;
