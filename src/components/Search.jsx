import React from "react";

const SearchLogo = () => {
  return (
    <svg
      className="w-7 h-7 ml-[15px] mr-[13px]"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
        fill="#9aa0a6"
      ></path>
    </svg>
  );
};

const Search = () => {
  return (
    <div className="px-5 block m-auto mt-5 pt-[7px] box-content sm:h-[140px] sm:w-[584px] ">
      <div class="flex items-center justify-start border-solid border-[1px] rounded-3xl hover:shadow-[0_1px_3px_1px_rgba(0,0,0,0.1)] box-content h-[44px] relative">
        <SearchLogo />
        <input
          maxLength="2048"
          className="outline-0 w-full  mr-[92px]"
        />
      {/* h-[34px] w-[443px]    */}
      <div className=" flex items-center gap-4 ml-1 absolute right-5" >
          <img
          className="object-contain h-6 w-6"
            src="/SearchImg/keyboard.png"
            // class="my-[10px] mx-2"
            alt="image description"
          />
          <img
          className="object-contain h-6 w-6"
            src="/SearchImg/search.png"
            // class="my-[10px] mx-2"
            alt="image description"
          />
        </div>
        
      </div>
      <div className="flex justify-center gap-3  py-[11px] mt-[18px]">
            <button className="bg-[#f8f9fa] text-[14px] leading-[27px] rounded font-arial px-4 py-1 text-[#202124] hover:border hover:-m-[1px]">Tìm trên Google</button>
            <button className="bg-[#f8f9fa] text-[14px] leading-[27px] rounded font-arial px-4 py-1 text-[#202124] hover:border hover:-m-[1px]">Xem trang đầu tiên tìm được</button>
        </div>
    </div>
  );
};

export default Search;
