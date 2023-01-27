import React from 'react';
import styled from 'styled-components';

function ReviewItem({text, person}) {
    return (
        <ReviewItemStyled>
            <p>{text}</p>
            <small>{person}</small>
        </ReviewItemStyled>
    )
}

const ReviewItemStyled = styled.div`
        border-left: 6px solid var(--border-color);
        background-color: var(--background-dark-grey);
        position: relative;
        width: 100%;
        &:not(:first-child){
           
        }
        &::after{
            content: "";
            position: absolute;
            left: 2rem;
            border-width: .8rem;
            top: 100%;
            border-style: solid;
            border-color: var(--background-dark-grey) transparent transparent var(--background-dark-grey);
        }
        p{
        padding: 2rem 1rem;
    }
    small{
        display: block;
        padding: 9px 10px;
    }
`;

export default ReviewItem;
