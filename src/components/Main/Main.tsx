import {React, useEffect} from 'react'
import RuleSet from '../RuleSet/RuleSet'
import ListTitle from '../ListTitle/ListTitle'
import ListVoting from '../ListVoting/ListVoting'
import { useAppSelector, useAppDispatch } from '../../store/hook'

function Main() {
  const count = useAppSelector((state) => state.counters.value);
  const dispatch = useAppDispatch();

  useEffect((
  ) => {
    console.log('count', count);
  }, [count]);
  return (
    <main className='relative z-10 lg:px-0'>
        <div className='mx-auto max-w-[930px]'>
            <RuleSet/>
            <ListTitle/>
            <ListVoting/> 
        </div>
         
    </main>
  )
}

export default Main