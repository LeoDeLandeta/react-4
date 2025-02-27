import React from "react"


import { RiHome6Line } from "react-icons/ri";
import { RiPercentLine } from "react-icons/ri";
import { RiPieChartLine } from "react-icons/ri";
import { RiMailLine } from "react-icons/ri";
import { RiNotification3Line } from "react-icons/ri";
import { RiSettings4Line } from "react-icons/ri";
import { RiLogoutCircleRLine } from "react-icons/ri";




export const Sidebar = (props) => {
    const {showMenu} = props;
  return (

    <div className={`bg-[#1F1D2B] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50 transition-all ease duration-500 ${showMenu ? "left-0" : "-left-full"}`}>
        <div>
        <ul className="pl-4">
            <li>
            <h1 className="text-2xl text-gray-300 uppercase font-bold text-center ">Logo</h1>
            </li>
            <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
                <a href="#"className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors" ><RiHome6Line className="text-2xl" /></a>
            </li>
            <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
                <a href="#"className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors" ><RiPercentLine className="text-2xl"/></a>
            </li>
            <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
                <a href="#" className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"><RiPieChartLine className="text-2xl"/></a>
            </li>
            <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
                <a href="#" className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"><RiMailLine className="text-2xl"/></a>
            </li>
            <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
                <a href="#" className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"><RiNotification3Line className="text-2xl"/></a>
            </li>
            <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
                <a href="#" className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"><RiSettings4Line className="text-2lx"/></a>
            </li>
        </ul>
        </div>
        <div>
        <ul className="pl-4">
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiLogoutCircleRLine className="text-2xl" />
            </a>
          </li>
        </ul>
      </div>
    </div>
   
  
  )
}

 
