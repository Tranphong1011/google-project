import React from "react";

function Footer() {
  return (
    <div className="fixed bottom-0 bg-[#dadce0]/40 text-[#70757a] w-full text-[14px] font-arial">
      <div className=" px-[30px] py-[15px]">Vietnam</div>
      <hr className="" />
      <div className="flex sm:justify-between cursor-pointer px-5">
        <div className="flex justify-center">
          <div className="p-[15px] hover:underline">About</div>
          <div className="p-[15px] hover:underline">Advertising</div>
          <div className="p-[15px] hover:underline">Business</div>
          <div className="p-[15px] hover:underline">How Search works</div>
        </div>
        <div className="flex justify-center cursor-pointer">
          <div className="p-[15px] hover:underline">Privacy</div>
          <div className="p-[15px] hover:underline">Terms</div>
          <div className="p-[15px] hover:underline">Settings</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
