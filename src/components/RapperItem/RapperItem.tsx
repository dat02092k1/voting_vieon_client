import React from 'react'
import { Rapper } from '../../types/interface'

interface RapperProp {
  rapper: Rapper 
  index: number 
}


const RapperItem:React.FC<RapperProp> = ({rapper, index}) => {
  return (
    <div className="flex space-x-2 md:space-x-4 justify-center items-center py-3 md:py-6 px-3 md:px-8 hover:bg-radial-bottom bg-blend-multiply">
              
              <div className="flex-none text-[36px]font-bold md:text-[56px] text-white md:w-8 text-center flex items-center mr-3 md:mr-5">
              {index + 1}
            </div>

            <div className="shrink w-[66px] md:w-[150px]">
              <img
                src={rapper.imgUrl}
                alt=""
              />
            </div> 
            
            <div className="flex-auto">
              <div className="flex items-end justify-between w-full mb-1">
                <div className="flex flex-col">
                  <div className="text-xs md:text-[28px] font-bold text-[#59b6fe] uppercase">
                    {rapper.name}
                  </div>

                  <div className="text-white text-[10px] md:text-[28px] pb-2">
                    #team <span className="pl-1">{rapper.description}</span>
                  </div>
                </div>

                <div className="flex lg:flex-row lg:justify-end items-center text-[10px] lg:text-[15px] text-white font-bold">
                <button className="flex flex-col w-[65px] md:w-[135px] h-[65px] md:h-[135px] justify-center disabled:bg-img-disabled items-center btn hover:bg-img-hover hover:transition-all bg-cover bg-no-repeat bg-right before:bg-vote-left md:before:w-[39px] md:before:h-[59px] before:w-[18px] before:h-[28px] bg-block-2 border-[#4facfe] border rounded-md">
                <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAA7CAMAAADPaWPnAAAAllBMVEVHcEyZr7tsi51LcIcPQV4PQV4zXXYnVG6HoK82YHk1X3ctWXI1X3czXXYbSmZCaYB/mqoPQV4zXnZCaYAoVW83YXmQqLUdTWgVRmI0Xnd5laVkhZddf5IiT2r///+0xM3E0Njh5+vS2+Hy9Pb3+fp3lKTo7fBcfpKtvshSdoujtsHt8fP7/PzN2N69y9NoiJra4udNcog0k9dFAAAAHnRSTlMA/uzmIA/Wa/6qvnyayUTl+QXh/mO0+FcwjfDu6flHzi8zAAACMUlEQVRIx8XW15KCMBQAUBGDoFIU7O4FIdKb//9zCyTSQvFhZ/aOQ4ZwTCdhsZiI1QUt5uN8WN54aT/H1ncMAOFuhiEVquBnqjZC4jhlplqTOPP8pVv/j7O2rTFA37iL8OA3aNZd1AggOaARl3ycEFV/k0acfaUZfHXrbMbc7m9dTh16TLsnbfhqSdxxzt2+cxeNOGlhbORtscr3a1mQj9uft+iUDyLqlFPl3KN8irB/QEjgiue2noP1tlsNVzhS/E9ajb5wTMr0VV6jIG3cmazvp06ao5HXwquuOLAa5xP3otMuthw47xw2nX71XOaSW1ePZOK21pAzSauLBnuTLtYxheGBuKs95MCnKcCSvMC7nqMV2rpNHVZXU057RxTmVQt3+bATbe9T862sWXoSJ/YdiBZ1rsy61KcpV/6g2bOoS+j2JGY0tSD79ATM4p2TXDpDcZUGWVWbG7hZXRxguXYQVh3RQifwY8fUPS+BJtS63gIG2isoWoc5Lws0F9rBtxzEOX0YeyZ0g9+3XB0vv5/D1/PRCusFA+6a9PLiwGFc0Y9t2svzOYaBUK/7Jjy2uKhY+4rYzcMeW1xazAfie704sU67FAtB7g5pmLJOLQ9DRevkicw4VdNbbry4M8jsuPvkCDE6LcID1aL2Tj4a6WfnVe5TDDdHhmROuHtzAO8Fe5SJ1/YhL1gj7Nb9PkCyGA8ol2dOVePA9RcAPgkr9iDdG7J6X7biIRijH0CdaD/5BcLtrEu38KabAAAAAElFTkSuQmCC' alt="" />

                  <span className="pt-1 md:pt-4">
                      Bình chọn 
                  </span>
                </button>

               </div>
              </div>
               
            </div>
               
            </div>
  )
}

export default RapperItem