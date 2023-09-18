import {useEffect, useState} from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../../store/features/api/apiRequest';

function Signup() {
    const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);       
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

    useEffect(() => {
        if (user.currentUser) {
          console.log('User has logged in:', user.currentUser);
          navigate("/");
        }
      }, [user.currentUser, navigate]);

  const handleSignup = async (e: any) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    
    await dispatch(signUp(data));
  };
    return (
        <div className="mx-auto w-full sm:w-[680px] lg:w-[720px] 2xl:w-[900px] overflow-y-auto overflow-x-hidden scrollbar bg-[#000] h-min max-h-[90vh] relative z-20">
          <button className="absolute top-2 right-2 w-4 h-4 z-10" title="Close">
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
    
          <div className="border border-[#60c7f6] p-3 md:p-4">
            <div className="bg-gradient-to-b from-white to-[#60c7f6] bg-clip-text text-transparent text-[28px] lg:text-28 uppercase text-center font-bold mb-[12px] lg:mb-[32px]">
              Đăng ký
            </div>
    
            <div className="text-white text-[14px] lg:text-[18px] lg:text-28 mb-[12px] lg:mb-[24px] flex items-end justify-center">
              <div className="inline-block leading-[normal]">
                Đăng ký tài khoản&nbsp;
              </div>
              <a
                className="max-w-[64px] lg:max-w-[94px] inline-block"
                href="https://vieon.vn"
                title="Hãy đăng nhập với tài khoản VieON"
              >
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAvCAMAAAA2GsNtAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAFKUExURUdwTP///////////////////9v32/////////////////////X89f///////////9X42v///////////y/bO////////////////1PhXf///////////////////////////2Tkbf///zfcQv///3nogXLmeW3mdEPeTYLphf///////37phv///////////3rpgnbnflvjZP///////////wrUGEHmDlTtCyPdEx3bFErpDjHhERjXJCrfEjjkEF7wCuv8637phGjzBxfZFfX99RDVHdj51nTnerX1pqb0j3f4BeP65InrjyLZLMX3vYT9AZP0YZz0d4n4MGTkazvdRnD2Cr70v3fzMI31S1fiX2bsNFLiVabwpq3xsJXulNP41DLdNJvuobbyulPnNXzsZUrgU3juTozveX77Asn2zMT1x2npU4P6Ff8WAtIAAABPdFJOUwAgwC+B/AfxkBBgoAPQPvgMcFCv+igXZ3nR35lEVjfHiqfX86lOeIvpIOdKMKTrvUBhwbS4//////////////////////////////////4QA4XSAAAHPUlEQVRYw82ZaVcaSRSGQaAbEUKjoCAuIIi4r9UI0iIohInIJDMgjuOGGjNq/P9fp5buWnoBc5JzZt4v9lLV9XDr1r23SpfrV2ptKZGPalDRfGJp+We+lApRRdC9lBwxNKb80JeW0xlVVRv9brevqUiZtEgmxcYDFs3OuIN8I88k/gOYpvFj7sGHHzFUoqF2aw9V0rPaq3UhmLZjMpknJQOLwtlJ1iK0MvnrsKQdTWt+FEf72GxAsLSp5ajfygVCzGAyGCN/qBbQfYxrPfdeqq1Mo1a3jlZtQovlzT42Hra2ZAYAwIfM5Qls4hfzkUgMP5/1enG/Ce/Ue6lyWrcFbHUXVdX2oqn5jM/SbpzDAmRcYh8/6xaUjRl9n5YaNeCkegdO5Lapw9RgrE1ytYKtxfklul9HhvP7/cP9K9e4BgNUs+HyD8TykQiQxctBEn8MsiSazNAwqkXtHoAhXO010woZGYQFVjmbMv9eR7cxvcmwyVSiNTBEcB4zkthrcnoQVopzrgh9g7psoAvfO6yVeBKjwvXZ2dntg7As6zCE7Zi6ecIDsHSH2kDXWfpL8DpEV4H1iYnVYVPIrcH6fa2HgVrXtVeetaE2tkwdZwdghUkYmxBma1y03WDlz9i3e527KtVNpyW4V97c0+uMBUioiuBrIwOkfiCSLrbZdJ017z5S3d29PL0wM8IkaY5ewV1nrFkWEeireWbGoUowY9Uue79z6vVu+ozrTFUT5r6jC45YcRY/df93SWEW0cx+OuX1Tnn4hd6uGh++1q5/4wRvrpttOo/VhqpZ6pGY7IQ15mLONUKu59C1F3aKe5FYOJ2b1/PqDIukl8Z3W9rVJ063n26hNPoaXKpqzvIzV2kWogtLwbe6VSKc/8fRNRxZj3iy0SHAMpnXeLZDI2mn9P0Ppn+I+ic94/2NzSzqYwmpepQVDbqFgIdaDoX/kN5Db/+Bz69x/WHGmKVWo/ztC9XXL1+ROv2TKzqLqho1Zp7jWrfHWuGSs565N/R4Ni9gSSQsh4k7+MgKdkWNUW+LhYu/DH1D+g51eHJCfa+tNnSeJJ8jQrZYxhTtUkdzG+XEXHKTwwpgmojico8wn1ymEf6qvH/+J9HFxcW3v6EeHx9LpZMbzrn0ECHHOS73hh0W4Cd5gY4/zjUhDTbpWh1FBpPxL1/sUFsUjk/fdKgLHeqxXCyd0ITZpD4v+/jMQZzDAYs41ygyMYusHJaEO7tZVYLD7bYxaP3k4PTz57e3t9O38/Pjo6P9/YODQuUQYnW4yLVklMVyzFx8OWAR50K/IsQWAm4SZgE3xCUn7Ic5I5jWS/ufkU5Pz48RFYQqVMoIi4aIWw4LLIxyXElnLDJJcOEryCxJronMXGudqxLxfOZqItazFcvWWgDsBsXia84BCzvXHqyz0d+ABSvC1dUYC5NvN6lv7cNJfH4+PUdYZAoJVo3L1jmGxUIfKlkmkkERK0w9T0fwMh/isfDjMTfWKi2D1ugUPUGXf6bG4rBuuFpwm8PSs7FFQtzSMyEsKPa4h2YsXrgec3XpFJX3j8+JrTAWmkOMReMWLAWXuawHwp4BWAv0HoejAHb97LuxMkZZ0yoWjo6RjkRj0SgPNLXNJ2NY3406Y22KVVnSw5eAw7ESNOd1ygf7R0cYSnd4jEXf37FC0Hi0GXTEGmN7ShwCplhutGJNT0DtkmMT4rI56vOtYuVgn4ijuuILrrQJi9+amrDYgsCRwYfytBx0wLJ+RqJJEdwXK4UDrIJOVSyxegtEWXnKTB5wwuLWA07NPhIm3ovlStCVBprFcqWAVdGpNLbNeIF7MpcFKzzngBWzKfnjwhZIZmHNBmury+0jioflSgUxlQ/hDJbar8JWMW3FAiuT5g/iSkHmvG7VUpK5TeFUj/JSBMr4nYkHNshDv3hIVER+1RJ2ZG3FBgvMS3ZYI3zpo9d5bNfPYc1yOdHDajMYUbvcTrV+2y+VIBIsaK56/OiXnLEELG7NcWPyKcCo++ZdNlh44+2bZJaj9Xy6adpV15rNs5uq8PBG2O2LkSZigyUcx6RIu5QdFqkwsNcF0T4qzLYx+YdhZxAtTW2wXaIkvvR9sGDJwsyumjYhBGuFK7rDsDxUkiyakhI1czeYCh1BcEeVMdPrDbcZKyuevfhoLYitMpMl1otMsiPV6ZAM+IiLV2N0IFf9STwYiVsOThUTlimLzwP+hGZPjMbCSVlSjBLRF2eqalfcinmsR81ZEUtWbA4rkvxxErdapCz7zp5pWa9lHE/eXvrCDLpmNsCgA12ElTQftQpxf9q8iKf0L65ELDlWSVzZnunWazBgsRNKZXzPrpWPcwkFyOYQq4xB0YepMUNGjJJWvX5/fEayPUCNNqsWqHu4OUwY599KbDblt1NcqLzinl/67x4lHb0UDgFfmzAuJLZc/7Wkpbz21Lx/eH19uK89aXB3n15z/S+k5HbyUa2hatFMYulnmP4FDGjsyiR9B6sAAAAASUVORK5CYII="
                  alt="Logo VieON"
                />
              </a>
            </div>
    
            <form action="" className="flex flex-col items-center">
              <div className="block w-full focus-visible:border-[#4facfe] mb-4 lg:mb-6">
                <span
                  className="block text-sm lg:text-lg text-white mb-2"
                >
                  Email
                </span>
    
                <div className="px-3 lg:px-6 border-2 border-[#4facfe] rounded focus:border-opacity-100 focus-visible:border-opacity-100 border-opacity-50 hover:border-opacity-100 transition">
                  <input
                    type="text"
                    className="block w-full h-11 lg:h-14 text-sm lg:text-lg text-white font-normal border-none bg-transparent focus-visible:outline-none"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
    
              <div className="block w-full mb-4 lg:mb-6">
                <span
                  className="block text-sm lg:text-lg text-white mb-2"
                >
                  Mật khẩu
                </span>
    
                <div className="px-3 lg:px-6 border-2 border-[#4facfe] rounded focus:border-opacity-100 focus-visible:border-opacity-100 border-opacity-50 hover:border-opacity-100 transition">
                  <input
                    type="text"
                    name=""
                    id="passWord"
                    className="block w-full h-11 lg:h-14 text-sm lg:text-lg text-white font-normal border-none bg-transparent focus-visible:outline-none"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
    
              </div>
    
              <div className="flex flex-col justify-center items-center w-full mb-4 lg:mb-6">
                <button onClick={handleSignup} className="text-white bg-center bg-no-repeat h-[40px] w-[160px] lg:h-[60px] lg:w-[248px] uppercase font-bold text-[14px] lg:text-[22px] enabled:transition enabled:hover:bg-[#0acde7] border-2 border-[#0ee2ff] rounded">
                  Đăng ký
                </button>
                    
                <div className="flex text-[14px] lg:text-[18px] mt-3">
                  <span className="text-white mr-2">Bằng cách đăng ký, bạn đã đồng ý với</span>
    
                  <span className="text-[#4facfe] hover:underline cursor-pointer flex w-fit font-bold">
                    <a href="">Điều Khoản Sử Dụng của Vieon</a>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      );
}

export default Signup