import React, {useState} from 'react'; 
import styled from 'styled-components';
import { MainLayout, InnerLayout } from '../styles/Layouts'; 
import Title from '../Components/Title';
import portfolios from '../data/portfolios';
import Menu from '../Components/Menu';
import Button from '../Components/Button';

const allButtons = [ 'All', 'Animation', ...portfolios.map(item => item.category)]

function PortfoliosPage() {
    const [menuItem, setMenuItems] = useState(portfolios);
    const [Button, setButtons] = useState(allButtons);

    const filter = ({button}) => {
        const filteredData = portfolios.filter(item => item.category === button );
        setMenuItems(filteredData)
    }

    return (
       <MainLayout>
           <Title title={"Portfolios"} span={'Portfolios'} />
           <InnerLayout>

               {/* <Button filter={filter}  button={button}/> */}
                <Menu menuItem={menuItem} />
               
           </InnerLayout>
       </MainLayout>
    )
}

export default PortfoliosPage
