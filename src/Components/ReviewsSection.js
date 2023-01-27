import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from './Title';
import ReviewItem from '../Components/ReviewItem';


function ReviewsSection() {
    return (
      
            <ReviewSection>
                <Title title={"Reviews"} span={"Reviews"} />
                <InnerLayout>
                    <div className="reviews">
                        <ReviewItem text={'I am fortunate to meet Marcus, very competent and reliable, He is a co-worker, seriously I am impress with his skills in web development'} person={"Pollolhis Dung"}/>
                        
                        <ReviewItem text={'Marcus is my instructor, I have known him to be an resourceful and passionate programmer. He has inspire me and other students.'} person={"Daniel Olasehinde"}/>
                    
                    </div>
                </InnerLayout>
            </ReviewSection>
     
    )
}

const ReviewSection = styled.section`
    .reviews{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1.5rem;
        width: 100%;
        @media screen and (max-width: 650px){
        grid-template-columns: repeat(1, 1fr);
        
    }

    }
`;

export default ReviewsSection
