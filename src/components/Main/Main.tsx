import React from 'react'
import RuleSet from '../RuleSet/RuleSet'
import ListTitle from '../ListTitle/ListTitle'
import ListVoting from '../ListVoting/ListVoting'

function Main() {
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