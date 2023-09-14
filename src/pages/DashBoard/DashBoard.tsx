import React, {useState} from 'react'
import BaseScreen from '../../components/BaseScreen/BaseScreen'
import Main from '../../components/Main/Main'
import Footer from '../../components/Footer/Footer'
import { ShowContext } from '../../App';
import Header from '../../components/Header/Header';
import Popup from '../../components/popup/Popup';

function DashBoard() {
    const [show, setShow] = useState(false);
  return (
    <>
    <BaseScreen/>
    <ShowContext.Provider value={{show, setShow}}>
      <Header/>
      <Popup/> 
      </ShowContext.Provider>  
    <Main/>
    <Footer/> 
    </>
  )
}

export default DashBoard