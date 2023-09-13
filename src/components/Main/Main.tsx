import React from 'react'
import RuleSet from '../RuleSet/RuleSet'

function Main() {
  return (
    <main className='relative z-10 lg:px-0'>
        <div className='mx-auto max-w-[930px]'>
            <RuleSet/>
        </div>
        <h2 className='text-yellow-500'>Main</h2>
    </main>
  )
}

export default Main