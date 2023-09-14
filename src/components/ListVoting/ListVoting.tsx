import React from "react";
import { useAppSelector } from "../../store/hook";

function ListVoting() {
  const rappers = useAppSelector((state) => state.rappers.rappers);
  console.log(rappers);
  return (
    <div className="mx-auto w-full md:pt-[20px] px-4">
      <div className="bg-block-2 border-[#4facfe] border-[2px] rounded">
        <div className="max-w-full pr-2">
          <div className="pb-3 lg:pb-0 px-[1.5px]">
            <div className="flex space-x-2 md:space-x-4 justify-center items-center py-3 md:py-6 px-3 md:px-8 hover:bg-radial-bottom bg-blend-multiply">
              {rappers.map((rapper, index) => console.log(rapper)) && <div className="flex-none text-[36px]font-bold md:text-[56px] text-white md:w-8 text-center flex items-center mr-3 md:mr-5">
                1
              </div>}
              <div className="flex-none text-[36px]font-bold md:text-[56px] text-white md:w-8 text-center flex items-center mr-3 md:mr-5">
                1
              </div>

              <div className="shrink w-[66px] md:w-[150px]">
                <img
                  src="https://static2.vieon.vn/image/rv2023/avatar-phapkieu.png"
                  alt=""
                />
              </div>
              <div className="flex-auto">
                <div className="flex items-end justify-between w-full mb-1">
                  <div className="flex flex-col">
                    <div className="text-xs md:text-[28px] font-bold text-[#59b6fe] uppercase">
                      Pháp Kiều
                    </div>

                    <div className="text-white text-[10px] md:text-[28px] pb-2">
                      #team <span className="pl-1">BigDaddy</span>
                    </div>
                  </div>

                  <div className="flex lg:flex-row lg:justify-end items-center text-[10px] lg:text-[15px] text-white font-bold">
                  <button className="flex flex-col w-[65px] md:w-[135px] h-[65px] md:h-[135px] justify-center disabled:bg-img-disabled items-center btn hover:bg-img-hover hover:transition-all bg-cover bg-no-repeat bg-right before:bg-vote-left md:before:w-[39px] md:before:h-[59px] before:w-[18px] before:h-[28px] bg-block-2 border-[#4facfe] border rounded-md">
                    <span className="pt-1 md:pt-4">
                        Bình chọn 
                    </span>
                  </button>
                </div>
                </div>
                 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListVoting;
