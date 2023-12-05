import logo from "../assets/ehizuahublogo.png"
import AdminLogin from "./AdminLogin"

const AdminLoginInterface = () => {
  return (
    <section className="w-full h-full overflow-hidden">
       <nav className="fixed z-30 w-full bg-white py-8 px-20 shadow">
         <img className="max-w-[200px] w-full" src={logo} alt="" />
       </nav>
       
     <div className="relative w-full h-screen">
       <div className="elipse1 z-10 absolute left-[-90px] top-0"></div>
       <div className="elipse2 z-10 absolute right-[-90px] top-[30px]"></div>
       <div className="elipse3 z-10 absolute left-[-90px] bottom-[-30px]"></div>
       <div className="elipse4 z-10 absolute right-[-90px] bottom-[-30px]"></div>

       
        <AdminLogin/>
     
   

     </div>

    </section>
  )
}

export default AdminLoginInterface