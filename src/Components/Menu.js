import React from 'react';
import styled from 'styled-components';
import WebIcon from '@material-ui/icons/Link';

function Menu({menuItem}) {
    return (
        <MenuItemStyled>
            {
                menuItem.map((item)=> {
                    return <div className="grid-item" key={item.id}>
                            <div className="portfolio-content">
                                <div className="portfolio-image">
                                    <img src={item.image} alt="" />
                               
                                <ul>
                                    <li>
                                        <a href={item.link1}> <WebIcon />   </a>
                                    </li>
                                    
                                </ul>
                                </div>
                                <h6>{item.title}</h6>
                                <p>{item.text}</p>
                            </div>
                    </div>
                })
            }
        </MenuItemStyled>
    )
}

const MenuItemStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    @media screen and (max-width:920px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width:670px){
        grid-template-columns: repeat(1, 1fr);
    }
    .grid-item{
        .portfolio-content{
            display: block;
            position: relative;
            overflow: hidden;
            h6{
                font-size: 1.5rem;
            }
            img{
                width: 100%;
                height: 40vh;
                object-fit: cover;
            }
            ul{
               
                transform: translateY(-600px);
                transition: all .4s ease-in-out;
                position: absolute;
                left: 50%;
                top: 40%;
                opacity: 0;
                li{
                            
                            transition: all .4s ease-in-out;
                            &:hover{
                                background-color: var(--primary-color);
                            }
                            a{
                                display: flex;
                                align-items: center;
                                justify-content: center;
                            }
                        }
            }
        
            .portfolio-image{
                &::before{
                    content: "";
                    position: absolute; 
                    left: 2%;
                    top: 4%;
                    transform: scale(1);
                    height: 0;
                    width: 0;
                    transition: all .4s ease-in-out;
                } }
                
                }
                .portfolio-image:hover{
                    ul{
                        transform: translateY(0);
                        transform: translate(-50%, -50%);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        transition: all .4s ease-in-out;
                        opacity: 1;
                        li:hover{
                            svg{
                                color: var(--white-color);
                            }
                        }
                        svg{
                            font-size: 2.5rem;
                        }
                    }
                    &::before{
                    height: calc(100% - 44%);
                    width: calc(100% - 4%);
                    background-color: white;
                    opacity: 0.9;
                    transform-origin: left;
                    transition: all .5s ease-in-out;
                    }
            
        }
    }
`;

export default Menu;
