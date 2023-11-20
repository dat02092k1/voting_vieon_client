import React from 'react'

function Admin_Header() {
  return (
    <div className='bg-[#3d8dbc] text-[#fff] flex-0 flex-shrink-0 h-[75px] flex justify-between'>
         <div className='ml-5 flex items-center'>
            <span>Vieon Rap Viet Mua 3</span>
         </div>
        <div className='mr-5 flex items-center'>Logout</div>         
    </div>
  )
}

export default Admin_Header