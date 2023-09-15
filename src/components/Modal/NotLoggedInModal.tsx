import React from 'react'
import CloseBtn from '../Button/CloseBtn/CloseBtn';
import { Link } from 'react-router-dom';
import { ShowModal } from '../Main/Main';

function NotLoggedInModal() {
  const {show, setShow} = React.useContext(ShowModal);
  const handleCloseModal = () => {
    setShow(!show);
  }

    return (
        <div className="max-w-xl mx-auto w-[94%] lg:w-[540px] bg-[#000] border-[2px] border-[#0ee2ff] relative z-20 p-4 lg:p-7">
          <div className="bg-gradient-to-b from-white to-[#60c7f6] bg-clip-text text-transparent text-[28px] lg:text-28 uppercase text-center font-bold mb-[12px] lg:mb-[32px]">
            Bạn cần đăng nhập trước
          </div>
    
          <div className="text-white text-center text-sm lg:text-[18px] lg:text-28 mb-[12px] lg:mb-[24px] flex items-end justify-center gap-3">
            <button className="text-white bg-center bg-no-repeat h-[40px]  lg:h-[60px] lg:w-[148px] uppercase font-bold text-[14px] lg:text-[22px] enabled:transition enabled:hover:bg-[#0acde7] border-2 border-[#0ee2ff] rounded">
              <Link to='/login'>Đăng nhập</Link>
            </button>
          </div>
    
          <button className={`absolute top-2 right-2 w-4 h-4`} title="Close" onClick={handleCloseModal}>
        <svg
          className="w-4 h-auto"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.8323 10.0156L19.6199 2.22773C20.1267 1.72117 20.1267 0.902117 19.6199 0.39555C19.1133 -0.111017 18.2943 -0.111017 17.7877 0.39555L9.99989 8.18339L2.21228 0.39555C1.70548 -0.111017 0.88667 -0.111017 0.380103 0.39555C-0.126701 0.902117 -0.126701 1.72117 0.380103 2.22773L8.16771 10.0156L0.380103 17.8034C-0.126701 18.31 -0.126701 19.129 0.380103 19.6356C0.632556 19.8883 0.964494 20.0152 1.29619 20.0152C1.62789 20.0152 1.95959 19.8883 2.21228 19.6356L9.99989 11.8478L17.7877 19.6356C18.0404 19.8883 18.3721 20.0152 18.7038 20.0152C19.0355 20.0152 19.3672 19.8883 19.6199 19.6356C20.1267 19.129 20.1267 18.31 19.6199 17.8034L11.8323 10.0156Z"
            fill="#fff"
          ></path>
        </svg>
      </button>

        </div>
      );
}

export default NotLoggedInModal