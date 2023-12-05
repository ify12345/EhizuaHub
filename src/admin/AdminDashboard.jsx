import dashboard from "../assets/Dashboard.svg"
import logo from "../assets/ehizuahublogo.png"
import { FaTools } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { RiHomeOfficeFill } from "react-icons/ri";
import { CiMemoPad } from "react-icons/ci";
import { HiClipboardList } from "react-icons/hi";
import { MdMenuBook } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { PiStudent } from "react-icons/pi";
import { FaUserMinus } from "react-icons/fa6";
import { BsPatchQuestionFill } from "react-icons/bs";
import { GiReceiveMoney } from "react-icons/gi";
import { FaBuilding } from "react-icons/fa";
import { CiDiscount1 } from "react-icons/ci";
import { MdCelebration } from "react-icons/md";
import { useState } from "react"
import { Link } from "react-router-dom";



const staff = [
    {id: "1", icon: <CiMemoPad/>, name:"Memo" },
    {id: "2", icon: <HiClipboardList/>, name:"Attendance" },
    {id: "3", icon: <MdMenuBook/> , name:"Courses and Curriculum" },
    {id: "4", icon: <IoMdPerson/>, name:"Staff Section" },
    {id: "5", icon: <PiStudent/>, name:"student Section" },
    {id: "6", icon: <BsPatchQuestionFill/> , name:"Complaints" },
    {id: "7", icon: <FaTools/>, name:"Inventory" },
    {id: "8", icon: <GiReceiveMoney/>, name:"Loan" },
    {id: "9", icon: <FaUserMinus/> , name:"Leave section" },
    
  ]
const school = [
    {id: "1", icon: <CiMemoPad/>, name:"Memo" },
    {id: "2", icon: <FaBuilding/>, name:"Patner Schools" },
    {id: "3", icon: <CiDiscount1/>, name:"Course Discounts" },
    {id: "4", icon: <BsPatchQuestionFill/> , name:"Complaints" },
    
  ]

const students = [
    {id: "1", icon: <CiMemoPad/>, name:"Memo" },
    {id: "2", icon: <PiStudent/>, name:"student Section" },
    {id: "3", icon: <HiClipboardList/>, name:"Attendance" },
    {id: "4", icon: <BsPatchQuestionFill/> , name:"Complaints" },    
  ]
 


  
  const AdminDashboard = () => {
      const [open, setOpen] = useState(true);
        const openToggle =()=>{
          setOpen(!open)
        }
      return (
    <section className="flex-col flex md:flex-row justify-between w-full h-full">

    <div className="bg-[#134574] w-full   md:w-[336px] gap-[20px] px-[20px] py-[20px]  md:py-[30px] flex flex-col">
      <div className="flex items-center justify-between">
        <div className="md:max-w-[136px] w-full max-w-[150px] bg-white rounded-[4px] mx-3 px-[11px] py-[18px]"><img src={logo} alt="" /></div>
        <button className="flex md:hidden  text-white" onClick={openToggle}>
        {
            !open? <IoClose className="cursor-pointer" size={32} />: <CiMenuFries className="cursor-pointer" size={32}/>
        }
       
        </button>
       
      </div>
      
      <div className={`" ${open? "md:flex hidden": "flex-col" } flex flex-row md:flex-col text-[14px]  h-full gap-2 text-white "`}>
         <button className="flex w-full items-start p-3 gap-4 rounded-[4px] hover:bg-blue-300 transition-all">
            <img src={dashboard} alt="dashboard" />
             <p>Dashboard</p>
         </button> 
          
        <p className="text-[10px] mx-3 text-gray-500 font-bold  ">OFFICES SECTION</p>

        <button className="flex w-full items-center p-1 gap-4 rounded-[4px] hover:bg-blue-300 transition-all">
           <RiHomeOfficeFill/>
          <p>Location</p>
        </button>
         
      <p className="text-[10px] mx-3 text-gray-500 font-bold  ">STAFF SECTION</p>
        {
          staff.map((item, index) => (
            <button key={index} className="flex w-full items-center p-1 gap-4 rounded-[4px] hover:bg-blue-300 transition-all">
              {item.icon}
              <p >{item.name}</p>
            </button>
          ))
        }
        
      <p className="text-[10px] mx-3 text-gray-500 font-bold  ">STUDENT SECTION</p> 
      {
          students.map((item, index) => (
            <button key={index} className="flex w-full items-center p-1 gap-4 rounded-[4px] hover:bg-blue-300 transition-all">
              {item.icon}
              <p >{item.name}</p>
            </button>
          ))
        }

      <p className="text-[10px] mx-3 text-gray-500 font-bold  ">SCHOOL SECTION</p> 

      {
          school.map((item, index) => (
            <button key={index} className="flex w-full items-center p-1 gap-4 rounded-[4px] hover:bg-blue-300 transition-all">
              {item.icon}
              <p >{item.name}</p>
            </button>
          ))
        }


      </div>
    </div>





    {/* right section  */}
    <div className="w-full  bg-[#C8D1DA] px-6 flex flex-col gap-3">
       <div className="flex justify-between  text-white py-3 items-start border-b  border-[#DD137B]">
           <div className="pt-[70px]">
            <p className="text-[2rem] font-bold">Welcome Admin</p>
            <p>Streamlining Management, One Click at a Time</p>
           </div>

           <div className="bg-black text-white flex flex-col items-center justify-center px-2">
                 <p className="">Today</p>
                 <p className="text-[1.75rem] font-bold">10:35am</p>
                 <p className="text-[0.8rem] text-gray-500">Mon 22, 20323</p>
           </div>
       </div>

      <div className="grid grid-cols-1 md:grid-cols-2 rounded-[10px] bg-[#134574] text-white max-w-[980px] w-full px-8 py-20">
        <div className="flex flex-col gap-4">
           <p className="text-[2.5rem] font-extrabold">Elevate Your Learning
              with Every Click</p>
           <Link className="px-3 bg-[#DD137B] max-w-[243px] w-full text-center rounded-[4px] py-4 font-bold">Create a Memo</Link>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3  rounded-[10px] gap-3 lg:gap-[60px] text-white max-w-[980px] w-full">
  
           <Link className=" bg-[#134574] max-w-[195px] px-2 lg:max-w-[263px] w-full text-center items-center rounded-[6px] py-4 font-bold flex gap-4 justify-center">
            <FaUserMinus size={38}/> 
            <div className="flex flex-col items-center lg:items-start">
              <p>Leave Request</p>
              <p>4</p>
            </div>
           </Link>

           <Link className=" bg-[#134574] max-w-[195px] px-2 lg:max-w-[263px] w-full text-center items-center rounded-[6px] py-4 font-bold flex gap-4 justify-center">
            <IoMdPerson size={38}/> 
            <div className="flex flex-col items-center lg:items-start">
              <p>Number of staff</p>
              <p>4</p>
            </div>
           </Link>

           <Link className=" bg-[#134574] max-w-[195px] px-2 lg:max-w-[263px] w-full text-center items-center rounded-[6px] py-4 font-bold flex gap-4 justify-center">
            <PiStudent size={38}/> 
            <div className="flex flex-col items-center lg:items-start">
              <p>Number of students</p>
              <p>4</p>
            </div>
           </Link>

           <Link className=" bg-[#134574] max-w-[195px] px-2 lg:max-w-[263px] w-full text-center items-center rounded-[6px] py-4 font-bold flex gap-4 justify-center">
            <MdCelebration size={38}/> 
            <div className="flex flex-col items-center lg:items-start">
              <p>Birthday Celebration</p>
              <p>4</p>
            </div>
           </Link>

           <Link className=" bg-[#134574] max-w-[195px] px-2 lg:max-w-[263px] w-full text-center items-center rounded-[6px] py-4 font-bold flex gap-4 justify-center">
            <BsPatchQuestionFill size={38}/> 
            <div className="flex flex-col items-center lg:items-start">
              <p>Leave Request</p>
              <p>4</p>
            </div>
           </Link>

        
      </div>


    </div>
  </section>
  )
}

export default AdminDashboard
