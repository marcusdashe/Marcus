import React from 'react';
import styled from 'styled-components';

function ServiceCard({image, title, paragraph}) {
    return (
        <ServiceCardStyled>
            <div className="container">
                <img src={image} alt="" />
                <h4>{title}</h4>
                <p>{paragraph}</p>
            </div>
            
        </ServiceCardStyled>
    )
}

const ServiceCardStyled = styled.div`
    background-color: var(--background-dark-grey);
    border-top: 4px solid var(--border-color);
    border-left: 1px solid var(--border-color);
    transition: all .4s ease-in-out;
    &:hover{
        border-top: 4px solid var(--primary-color);
        transform: translateY(4px);
    }
    .container{
        padding: 1.2rem;
        img{
            object-fit:contain;
        }
        h4{
            color: var(--white-color);
            font-size: 1.6rem;
            padding: 1rem 0;
            position: relative;
            padding-bottom: 1rem;
            &:after{
                content: "";
                width: 2rem;
                background-color: var(--border-color);
                height: 3px;
                position: absolute;
                left: 0;
                bottom: 0;
                border-radius: 10px;
            }
        }
        p{
            padding: .8rem 0;

        }
    }
`;
export default ServiceCard;
