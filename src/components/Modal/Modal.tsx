import React from 'react'
import { ShowModal } from '../Main/Main'
import { useAppSelector } from '../../store/hook';
import NotLoggedInModal from './NotLoggedInModal';
import AnswerModal from './AnswerModal';

function Modal() { 
    const {show, setShow} = React.useContext(ShowModal);
    const user = useAppSelector((state) => state.user);
  return (
    <>
    {show && (
        user.loggedIn ? <AnswerModal/> : <NotLoggedInModal/>
    )}
    </>

  )
}

export default Modal