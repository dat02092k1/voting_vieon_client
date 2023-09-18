import React from 'react'
import { ShowModal } from '../Main/Main'
import { useAppSelector } from '../../store/hook';
import NotLoggedInModal from './NotLoggedInModal';
import AnswerModal from './AnswerModal';
import { Rapper } from '../../types/interface';

interface ModalProps {
    rapper: Rapper
}

const Modal:React.FC<ModalProps> = (props) =>  { 
    const {rapper} = props;
    const {show} = React.useContext(ShowModal);
    const user = useAppSelector((state) => state.user);

    if (!rapper) {
      return null; // or render a loading state or an error message
    }
    
  return (
    <>
    {show &&
      (
        user.loggedIn ? <AnswerModal candicateId={rapper.candicateId}/> : <NotLoggedInModal/>
    )}
    </>
        
  )
}

export default Modal