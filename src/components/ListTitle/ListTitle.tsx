import React from 'react'

function ListTitle() {
  return (
    <div className='max-w-[92%] mx-auto px-4'>
        <div className='before:px-9 before:bg-title-style bg-bg_img relative h-20 lg:h-[136px] mb-5 before:z-0 mt-[-12px] lg:-translate-y-0 -translate-y-6]' >
             <img src="https://static2.vieon.vn/voting/static/media/bar-vote-list.81f7d35d2e63a96467ef.png" alt="" />
        </div>

        <div className='text-white tracking-wide md:text-3xl text-[17px] lg:text-4xl text-center lg:-translate-y-0 -translate-y-6 title-shadow my-10'>
        TOP 9 ĐƯỢC YÊU THÍCH NHẤT
        <div>
        HÃY ĐỂ LẠI BÌNH CHỌN CỦA BẠN
        </div>
        </div>
    </div>
  )
}

export default ListTitle