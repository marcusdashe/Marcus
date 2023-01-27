import React from 'react'; 
import styled from 'styled-components';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import emailjs from 'emailjs-com';
import apiKeys from '../apiKeys';
import { MainLayout, InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import PrimaryButton  from '../Components/PrimaryButton';
import ContactItem from '../Components/ContactItem';


function ContactPage() {

    const sendEmail = e => {
        e.preventDefault()
    
        emailjs.sendForm(apiKeys.SERVICE_ID, apiKeys.TEMPLATE_ID, e.target, apiKeys.USER_ID).then(
          result => {
            console.log(result.text)
          },
          error => {
            console.log(error.text)
          }
        )};

      

    return (
     <MainLayout>
         <Title title={'Contact'} span={'Contact'} />
         <ContactPageStyled>
         <InnerLayout className={'contact-section'}>
             <div id='left-content'>
                 <div className="contact-title">
                     <h4>Get In Touch</h4>
                 </div>
                    <form action="" className="form">
                        <div className="form-field">
                            <label htmlFor="name" >Enter your Name*</label>
                            <input type="text" id="name" name="name" />
                        </div>

                        <div className="form-field">
                            <label htmlFor="email" >Enter your Email*</label>
                            <input type="email" id="email" name="email" />
                        </div>

                        <div className="form-field">
                            <label htmlFor="subject" >Enter your Subject*</label>
                            <input type="text" id="subject" name="subject" />
                        </div>

                        <div className="form-field">
                            <label htmlFor="text-area"> Enter your Message*</label>
                            <textarea name="textarea" id="textarea" cols="30" rows="10"></textarea>
                        </div>

                        <div className="form-field f-button">
                            <PrimaryButton title={'SEND EMAIL'}/>
                        </div>

                    </form>
             </div>

             <div id='right-content'>
                 <ContactItem 
                    icon={<PhoneIcon />} 
                    title={'Phone'} 
                    contact1={'+234 803 4477 604'}
                    contact2={'+234 705 4984 471'}
                  />

                 <ContactItem 
                    icon={<EmailIcon />} 
                    title={'Email'} 
                    contact1={'marcusdashe.developer@gmail.com'}
                    contact2={'marcus.simon@cstemp.org '}
                  />    

                    <ContactItem 
                    icon={<LocationOnIcon />} 
                    title={'Address'} 
                    contact1={'Flat 2, Favour House Behind Anglican Church, Kagini, Abuja'}
                    contact2={'Nigeria'}
                  />    
             </div>
         </InnerLayout>
         </ContactPageStyled>
     </MainLayout>
    )
}

const ContactPageStyled = styled.section`
    .contact-section{
        display:grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        @media screen and (max-width: 978px){
            grid-template-columns: repeat(1, 1fr); 
            .f-button{
                margin-bottom: 3rem;
            }
        }
        .right-content{
            display: grid; 
           grid-template-columns: repeat(1, 1fr);
           @media screen and (max-width: 502px){
            width: 70%;
           }
        }
        .contact-title{
            h4{
                color: var(--white-color);
                padding: 1rem 0;
                font-size: 1.8rem;
            }
        }
        .form{
            width: 100%;
            @media screen and (max-width: 502px){
                width: 100%;
            }
            .form-field{
                margin-top: 1.8rem;
                position: relative;
                width: 100%;
                label{
                    position: absolute;
                    left: 20px;
                    top: -19px;
                    display: inline-block;
                    background-color: var(--background-dark-color);
                    padding: 0 .5rem;
                    color: inherit;
                }

                input{
                        border: 1px solid var(--border-color);
                        outline: none;
                        background: transparent;
                        height: 2.5rem;
                        padding: 0 15px;
                        width: 100%;
                        color: inherit;
                }

                textarea{
                    background-color: transparent;
                    border: 1px solid var(--border-color);
                    outline: none;
                    color: inherit;
                    width: 100%;
                    padding: .8rem 1rem;


                }
            }
            .f-button{
                margin-bottom: 2rem;
            }
        }

    }
`;

export default ContactPage;
