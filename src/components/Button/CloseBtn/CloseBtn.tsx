import React, {useContext} from "react";
import { ShowContext } from "../../../App";

interface CloseProp {
    zIndex?: string;
}

const CloseBtn:React.FC<CloseProp> = ({zIndex}) => {
    const { show, setShow } = useContext(ShowContext);

    function handleClosePopup() {
        setShow(!show);
    }

  return (
    <>
      <button className={`absolute top-2 right-2 w-4 h-4 ${zIndex}`} title="Close" onClick={handleClosePopup}>
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
    </>
  );
}

export default CloseBtn;
