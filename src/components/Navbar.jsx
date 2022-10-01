import React from "react";

const MenuLogo = () => {
    return (
        <svg className="w-6 h-6 " viewBox="0 0 24 24">
        <path
          d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"
          fill="#5f6368"
        ></path>
      </svg>
    );
  };
  
function Navbar() {
  return (
    <header className="p-[6px] font-arial">
      <div className="flex justify-end items-center  pr-1">
        <div className="flex px-[15px] gap-[15px] text-[13px]">
          <a href="" className="hover:underline">Gmail</a>
          <a href="" className="hover:underline">Hình ảnh</a>
        </div>
        <div className="flex justify-between items-center gap-3 p-1">
          <div className="flex justify-center items-center  hover:bg-[#3c4043]/10  hover:rounded-full hover:cursor-pointer box-content h-10 w-10 ">
            <MenuLogo />
            
          </div>
          <button className="py-[9px] px-[15px] mr-1 text-white bg-[#1a73e8] hover:bg-[#1b66c9] text-[14px] leading-4 font-medium rounded tracking-[0.4px] sm:px-[23px] hover:shadow-[0_1px_3px_1px_rgba(0,0,0,0.3)] ">
            Đăng nhập
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
