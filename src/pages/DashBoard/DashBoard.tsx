import {useState} from 'react'
import Main from '../../components/Main/Main'
import Footer from '../../components/Footer/Footer'
import { ShowContext } from '../../App';
import Header from '../../components/Header/Header';
import Popup from '../../components/popup/Popup';
import LoadingScreen from '../../components/Loading/LoadingScreen';
import BaseScreen from '../../components/BaseScreen/BaseScreen';

function DashBoard() {
    const [show, setShow] = useState(false);
  return (
    <>
    <BaseScreen/>
    <ShowContext.Provider value={{show, setShow}}>
      <Header/>
      <Popup/> 
      
    <Main/>
    </ShowContext.Provider>  
    <Footer/>
    <LoadingScreen/> 
    </>
  )
}

export default DashBoard