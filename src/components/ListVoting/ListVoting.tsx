import React from "react";
import { useAppSelector } from "../../store/hook";
import RapperItem from "../RapperItem/RapperItem";
import "./ListVoting.css";

const ListVoting: React.FC = (props) => {
  const rappers = useAppSelector((state) => state.rappers.rappers);
   
  return (
    <div className="list-voting mx-auto w-full md:pt-[20px] px-4 h-[1850px] overflow-y-auto">
      <div className="bg-block-2 border-[#4facfe] border-[2px] rounded">
        <div className="max-w-full pr-2">
          <div className="pb-3 lg:pb-0 px-[1.5px]">
            {rappers.map((rapper, index) => (
              <RapperItem key={rapper?._id} rapper={rapper} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListVoting;
