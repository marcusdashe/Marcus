import React from 'react';
import styled from 'styled-components';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import { MainLayout, InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from './SmallTitle';
import ResumeItem from './ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        
            <ResumeStyled>
                <Title title={'Resume'} span={'resume'} />
                <InnerLayout>
                    <div className="small-title">
                    <SmallTitle icon={briefcase} title={"Career "} />
                    </div>
                    <div className="resume-content">
                            <ResumeItem 
                                year={'2020-present'} 
                                title={'C-STEMP LTD/Gte'}
                                subTitle={'IT Assistant/Facilitator'} 
                                text={'Designing and Coding of Apps, providing tech support for C-STEMP Digital platforms and facilitating digital skills training at the Jos Centre'}
                            />

                            <ResumeItem 
                                year={'2018-2020'} 
                                title={'M-TECH Computer Institute, Gusau'}
                                subTitle={'Coordinator/Instructor'} 
                                text={'Coordinated the training and enrolment of student at the institute and rendering software development and installations services for clients'}
                            />
                        <div className="u-margin-bottom">
                            <ResumeItem 
                                year={'2015-2017'} 
                                title={'Hossanah Cyber Cafe, Jos'}
                                subTitle={'Computer Operator'} 
                                text={'Providing daily cyber cafe services ranging from typesetting, online registrations, scanning and printing etc.'}
                            />

                        </div>
                    </div>

                    <div className="small-title">
                    <SmallTitle icon={school} title={"Education "} />
                    </div>
                    
                    <div className="resume-content">

                            <ResumeItem 
                                year={'2017'} 
                                title={'PassionView Solution Gusau'}
                                subTitle={'Proficiency in Java Programming'} 
                                text={''}
                            />

                            <ResumeItem 
                                year={'2011-2016'} 
                                title={'University of Jos, Jos'}
                                subTitle={'BSc. (Hons.) Zoology'} 
                                text={""}
                            />

                            <ResumeItem 
                                year={'2015'} 
                                title={'DataMaxx Computer School Jos'}
                                subTitle={'Diploma in Computer Studies'} 
                                text={''}
                            />
                            
                            <ResumeItem 
                                year={'2005-2011'} 
                                title={'Sunnah Private High School Jos'}
                                subTitle={'WAEC'} 
                                text={''}
                            />

                           
                            
                            <ResumeItem 
                                year={'1998-2003'} 
                                title={'Baptist Primary School Jos'}
                                subTitle={'PSLC'} 
                                text={''}
                            />  
                    </div>
                </InnerLayout>
            </ResumeStyled> 
       
    )
}

const ResumeStyled = styled.section`
    
    .small-title{
        padding-bottom: 2rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);

    }
`;

export default Resume;
