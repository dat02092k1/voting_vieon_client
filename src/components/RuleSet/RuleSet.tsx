import { useState } from "react";

function RuleSet() {
  const [voteRemaining, setVoteRemaining] = useState(0);
  return (
    <div className="flex justify-center relative h-full -translate-y-4 lg:-translate-y-12">
      <img
        src="https://static2.vieon.vn/voting/static/media/board-rules.d05f07b2041aae16527f.png"
        alt="Information Rap Viet"
      />

      <div className="flex items-center flex-col absolute top-0 justify-center text-white text-[13px] lg:text-3xl text-center h-fullpy-10 py-8 sm:py-12 lg:py-[110px] px-6 md:px-8 lg:px-12">
        <div className="leading-none">
          Bạn có
          <span className="px-1 lg:px-2 text-[13px] lg:text-4xl">
            {voteRemaining} lượt Bình chọn / ngày
          </span>
        </div>

        <div className="pb-2 lg:pb-4 md:mb-2">
          Tiếp tục
          <span className="px-1 cursor-pointer lg:px-2 text-[#00deff]">
            Đăng ký VIP
          </span>{" "}
          để có
          <span className="px-1 lg:px-2 text-[13px] lg:text-4xl">5</span>
          lượt Bình chọn / ngày
        </div>

        <div>
        Thời gian bình chọn
        </div>

        <div>
        Từ 23:00 Thứ 7 ngày 26/8 đến khi MC thông báo đóng cổng bình chọn vào đêm 9/9.
        </div>

        <div className="text-[#00deff] cursor-pointer">
        Thể lệ & Danh sách trúng thưởng 
        </div>
      </div>

    </div>
  );
}

export default RuleSet;
