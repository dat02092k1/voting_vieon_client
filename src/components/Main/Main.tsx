import {React, useEffect, createContext, useState} from 'react'
import RuleSet from '../RuleSet/RuleSet'
import ListTitle from '../ListTitle/ListTitle'
import ListVoting from '../ListVoting/ListVoting'
import { useAppSelector, useAppDispatch } from '../../store/hook'
import { getRappers } from '../../store/features/api/apiRequest'
import AnswerModal from '../Modal/AnswerModal'
import { ShowContextType } from '../../types/interface'
import Modal from '../Modal/Modal'
import { useRappers } from '../../api/api'

const defaultSetShow = (value: boolean) => {
  console.log(`Default setShow implementation: ${value}`);
};

export const ShowModal = createContext<any>([false, null]);

function Main() {
  const count = useAppSelector((state) => state.counters.value);
  const dispatch = useAppDispatch();
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    dispatch(getRappers());
  }, [])
  const {isLoading, error, data} = useRappers();

  if (isLoading) return 'Loading...';

  if (error) console.log('An error occurred while fetching the user data ', error);

  console.log('data', data);
  return (
    <main className='relative z-10 lg:px-0'>
        <div className='mx-auto max-w-[930px]'>
            <RuleSet/>
            <ListTitle/>
           
            <ShowModal.Provider value={{show, setShow}}>
             
            <ListVoting/> 
             
            </ShowModal.Provider>
        </div>
         
    </main>
  )
}

export default Main