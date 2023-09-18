import React, {useState} from "react";
import { useAppSelector } from "../../store/hook";
import RapperItem from "../RapperItem/RapperItem";
import "./ListVoting.css";
import Modal from "../Modal/Modal";
import { Rapper } from "../../types/interface";
import { ShowModal } from "../Main/Main";

const ListVoting: React.FC = () => {
  const rappers = useAppSelector((state) => state.rappers.rappers);
  // const [showModal, setShowModal] = useState(false);
  const {show, setShow} = React.useContext(ShowModal);
  const [selectedRapper, setSelectedRapper] = useState<Rapper>({});

  const handleVote = (rapper:Rapper) => {
    setSelectedRapper(rapper);
    setShow(true);
  }

  return (
    <>
     <Modal rapper={selectedRapper} />
    <div className="list-voting mx-auto w-full md:pt-[20px] px-4 h-[1850px] overflow-y-auto">
      <div className="bg-block-2 border-[#4facfe] border-[2px] rounded">
        <div className="max-w-full pr-2">
          <div className="pb-3 lg:pb-0 px-[1.5px]">
            {rappers.map((rapper, index) => (
              
              <>
              <RapperItem key={rapper?._id} rapper={rapper} index={index} handleVote={handleVote} />
              
              </>
              
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default ListVoting;
