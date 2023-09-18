import { useEffect, createContext, useState} from 'react'
import RuleSet from '../RuleSet/RuleSet'
import ListTitle from '../ListTitle/ListTitle'
import ListVoting from '../ListVoting/ListVoting'
import { useAppDispatch } from '../../store/hook'
import { getRappers } from '../../store/features/api/apiRequest'

export const ShowModal = createContext<any>([false, null]);

function Main() {
  const dispatch = useAppDispatch();
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    dispatch(getRappers());
  }, [])
  // const {isLoading, error, data} = useRappers();

  // if (isLoading) return 'Loading...';

  // if (error) console.log('An error occurred while fetching the user data ', error);

  // console.log('data', data);
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