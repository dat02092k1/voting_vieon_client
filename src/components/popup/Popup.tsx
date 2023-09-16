import { useState, createContext, useContext, useEffect } from "react";
import { ShowContext } from "../../App";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import CloseBtn from "../Button/CloseBtn/CloseBtn";
import { logOut } from "../../store/features/api/apiRequest";

const Popup: React.FC = (props: any) => {
  const { show, setShow } = useContext(ShowContext);
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch(); 

  function handleClosePopup() {
    setShow(!show);
  }

  const handleLogout = async () => {
    await dispatch(logOut());  
  }

  // useEffect(() => {
  //       if (!user.currentUser) {
  //         console.log('User has logged out:', user.currentUser);
  //         handleClosePopup(); 
  //       }
  //     }, [user.currentUser]);
  return (
    <>
      {show &&
        (user.loggedIn ? (
          <div className="max-w-xl mx-auto w-[94%] lg:w-[540px] bg-[#000] border-[2px] border-[#0ee2ff] relative z-20 p-4 lg:p-7">
            <div className="bg-gradient-to-b from-white to-[#60c7f6] bg-clip-text text-transparent text-[28px] lg:text-28 uppercase text-center font-bold mb-[12px] lg:mb-[32px]">
              Rap Việt Mùa 3
            </div>

            <div className="text-white text-sm lg:text-[18px] lg:text-28 mb-[12px] lg:mb-[24px] flex items-end justify-center">
              <span>Bạn có chắc sẽ đăng xuất khỏi tài khoản này?</span>
            </div>

            <div className="block w-full mb-4 lg:mb-6 text-center" onClick={handleLogout}>
              <button className="text-white bg-center bg-no-repeat h-[40px] w-[160px] lg:h-[60px] lg:w-[248px] uppercase font-bold text-[14px] lg:text-[22px] transition hover:bg-[#0acde7] border-2 border-[#0ee2ff] rounded">
                Đăng xuất
              </button>
            </div>

            <CloseBtn/>
          </div>

        ) : (
          <div className="modal w-full h-full fixed z-[9999] left-0 top-0 overflow-hidden animate-fade-in">
            <div className="relative w-full h-full before:absolute before:left-0 before:w-full before:h-full before:bg-a-75 before:z-10 z-20 flex items-center justify-center p-3">
              <div className="mx-auto w-full sm:w-[680px] lg:w-[720px] 2xl:w-[900px] overflow-y-auto overflow-x-hidden scrollbar bg-[#000] h-min max-h-[90vh] relative z-20">
                {/* <button
                  className="absolute top-2 right-2 w-4 h-4 z-10"
                  title="Close"
                  onClick={handleClosePopup}
                >
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
                </button> */}

                <CloseBtn zIndex={'z-10'}/>
                <img
                  className="w-full h-screen max-h-[580px] md:max-h-[700px] xl:max-h-[815px] object-cover object-center"
                  src="https://static2.vieon.vn/voting/static/media/background-and-spark.d5cb64b59a7670c86f6c.png"
                  alt=""
                />
                <img
                  className="w-full absolute bottom-[5%] left-[50%] translate-x-[-50%] mix-blend-overlay"
                  src="https://static2.vieon.vn/voting/static/media/layer-2.370c221da251a04ff357.png"
                  alt=""
                />

                <div className="container absolute top-0 left-[50%] translate-x-[-50%] h-full w-full">
                  <div className="modal-header-container w-full z-30 relative top-0">
                    <div>
                      <img
                        className="z-50 object-fit w-full max-w-[500px] 2xl:max-w-[686px] mx-auto pt-4"
                        src="https://static2.vieon.vn/voting/static/media/logo-rv3.8af5b94cc4e7fcda1154.png"
                        alt=""
                      />

                      <img
                        src="https://static2.vieon.vn/voting/static/media/sponsor-logo.add8ed834d3d7a48cb02.png"
                        className="z-50 object-fit w-[80%] md:w-[65%] pb-8 mx-auto md:pb-12"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="text-white w-full flex flex-col items-center pb-4 -translate-y-6 px-2 sm:px-5">
                    <h3 className="font-['ArialBoldMT'] text-center text-xl md:text-3xl 2xl:text-4xl mt-1 mb-1 md:mb-3">
                      Đăng nhập để tham gia bình chọn
                    </h3>

                    <p className="text-center text-gray-200 font-normal text-sm lg:text-xl tracking-[0.44px] mb-3">
                      Nhận ngay 1 lượt bình chọn mỗi ngày
                    </p>

                    <div className="px-1 md:px-5 flex font-semibold text-sm justify-center items-center w-full h-full cursor-pointer border-2 border-[#0ee2ff] hover:bg-[#0acde7] rounded bg-[#0ee2ff] text-black py-2 text-lg md:text-xl">
                      <Link to="/login">Đăng nhập</Link>
                    </div>

                    <p className="text-center text-gray-200 font-normal text-sm lg:text-xl tracking-[0.44px] mb-3 pt-3 md:pt-5">
                      hoặc Đăng ký VIP để nhận ngay 5 lượt Bình chọn mỗi ngày
                    </p>

                    <div className="px-1 md:px-5 flex font-semibold text-sm justify-center items-center w-full h-full cursor-pointer border-2 border-[#0ee2ff] false rounded bg-black text-white py-2 text-lg md:text-xl">
                      Đăng ký VIP
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Popup;
