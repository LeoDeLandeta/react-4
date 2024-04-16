import './App.css'
import React, { useState } from 'react'

{/*icons */}
import { RiMenu3Fill } from "react-icons/ri";
import { RiUser3Line } from "react-icons/ri";
import { RiAddLine } from "react-icons/ri";
import { RiPieChartLine } from "react-icons/ri";
import { RiCloseLine } from "react-icons/ri";
import { RiArrowDownSLine } from "react-icons/ri";
import { RiSearch2Line } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";

{/* components */}
import { Sidebar } from './components/shared/Sidebar'

{/* img */}
import comida from '../public/comida.png'

function App() {
  const[showMenu, setShowMenu] = useState(false);
  const[showOrder, setShowOrder] =useState(false);

    const toggleMenu =() =>{
      setShowMenu(!showMenu);
      setShowOrder(false);
    };
    const toggleOrders =() =>{
      setShowOrder(!showOrder);
      setShowMenu(false);
    }
  return (
    <div className='bg-[#262837] w-full min-h-screen'>
     <Sidebar showMenu={showMenu}/>
     {/*menu movil */}
     <nav className='bg-[#1f1d2b] lg:hidden  fixed w-full bottom-0 left-0 text-3xl text-gray-400 p-4 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl'>
        <button className='p-2'>
          <RiUser3Line />
        </button>
        <button button className='p-2'>
          <RiAddLine />
        </button>
        <button onClick={toggleOrders} className='p-2'>
          <RiPieChartLine />
        </button>
        <button onClick={toggleMenu} className='text-white p-2 hover:text-[#ec7c6a] '>
          {showMenu ?<RiCloseLine />:<RiMenu3Fill />}
           
        </button>
        
     </nav>

     <main className='lg:pl-32  grid grid-col-1 lg:grid-cols-8 p-4'>
      <div className='lg:col-span-6 md:p-8'>
        {/* header */}
        <header>
          {/* title and search */}
          <div className='flex flex-col md:flex-row md:justify-between gap-4 mb-6'>
          <div>
            <h1 className='text-2xl text-gray-300'>Jeager Resto</h1>
            <p className='text-gray-300'>4 de octubre 2024</p>
          </div>
          <form >
            <div className='w-full relative'>
              <RiSearch2Line  className='absolute left-3 top-1/2 -translate-y-1/2'/>
              <input type="text" placeholder='Search' className='bg-[#1f1d2b] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none'/>
            </div>
          </form>
            
          </div>
         {/* tabs */}
         <nav className='text-gray-300 text-2xl flex items-center gap-4 justify-between border-b mb-10
         lg:justify-start lg:gap-8'>
            <a href="#" className='text-[#ec7c6a]  py-2 pr-4  relative before:w-1/2 before:h-1 before:absolute before:bg-[#ec7c6a]  before:left-0 before:rounded-full before:-bottom-[2px]'>Hot dishes</a>
            <a href="#"  className='  py-2 pr-4 '>Cold dishes</a>
            <a href="#"  className='  py-2 pr-4'>Soup</a>
            <a href="#"  className=' py-2 pr-4'>Grill</a>
         </nav>
       
        </header>

          { /* title content */}
          <div className='flex items-center justify-between mb-16'>
          <h2 className='text-xl text-gray-300 text-center'>Chose Dishes</h2>
          <button className='flex items-center gap-4 text-gray-300 bg-[#1f1d2b] py-2 px-4 rounded-lg'>
          < RiArrowDownSLine />Dine in 

          </button>
          
         </div>
         {/* content */}
         <div className='p-8 mb-20 grid grid-cols-1 gap-16
         md:grid-cols-2 lg:grid-cols-3'>
         <div className='bg-[#1f1d2b] p-12 rounded-xl flex flex-col items-center gap-2 text-gray-300'>
            <img src={comida} alt="" className='w-40 h-40  object-cover -mt-20 shadow-2xl rounded-full' />
            <p className='text-xl'>Spacy seasoned seadfood nodles</p>
            <span className='text-gray-400'>$2.29</span>
            <p>20 Bouls avaible</p>
         </div>
         <div className='bg-[#1f1d2b] p-12 rounded-xl flex flex-col items-center gap-2 text-gray-300'>
            <img src={comida} alt="" className='w-40 h-40  object-cover -mt-20 shadow-2xl rounded-full' />
            <p className='text-xl'>Spacy seasoned seadfood nodles</p>
            <span className='text-gray-400'>$2.29</span>
            <p>20 Bouls avaible</p>
         </div>
         <div className='bg-[#1f1d2b] p-12 rounded-xl flex flex-col items-center gap-2 text-gray-300'>
            <img src={comida} alt="" className='w-40 h-40  object-cover -mt-20 shadow-2xl rounded-full' />
            <p className='text-xl'>Spacy seasoned seadfood nodles</p>
            <span className='text-gray-400'>$2.29</span>
            <p>20 Bouls avaible</p>
         </div>
         <div className='bg-[#1f1d2b] p-12 rounded-xl flex flex-col items-center gap-2 text-gray-300'>
            <img src={comida} alt="" className='w-40 h-40  object-cover -mt-20 shadow-2xl rounded-full' />
            <p className='text-xl'>Spacy seasoned seadfood nodles</p>
            <span className='text-gray-400'>$2.29</span>
            <p>20 Bouls avaible</p>
         </div>
         <div className='bg-[#1f1d2b] p-12 rounded-xl flex flex-col items-center gap-2 text-gray-300'>
            <img src={comida} alt="" className='w-40 h-40  object-cover -mt-20 shadow-2xl rounded-full' />
            <p className='text-xl'>Spacy seasoned seadfood nodles</p>
            <span className='text-gray-400'>$2.29</span>
            <p>20 Bouls avaible</p>
         </div>
         <div className='bg-[#1f1d2b] p-12 rounded-xl flex flex-col items-center gap-2 text-gray-300'>
            <img src={comida} alt="" className='w-40 h-40  object-cover -mt-20 shadow-2xl rounded-full' />
            <p className='text-xl'>Spacy seasoned seadfood nodles</p>
            <span className='text-gray-400'>$2.29</span>
            <p>20 Bouls avaible</p>
         </div>
         </div>
      </div>
      {/* carrito */}
      <div className={`lg:col-span-2 fixed lg:static lg:min-h-screen top-0 bg-[#1f1d2b] w-full h-full  lg:h-[1000px] transition-all duration-700 ${showOrder ? "right-0" : "-right-full"}`}>
        {/* orders */}
        <div className='relative pt-16 text-gray-300 p-8 h-full'>
            <RiCloseLine onClick={toggleOrders} className='absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl
            lg:hidden'/>
            <h1 className='text-2xl mt-4'>Orders #151416</h1>
            {/* pills */}
            <div className='flex items-center gap-4 flex-wrap mb-8'>
              <button className='bg-[#ec7c6a]  text-white py-2 px-4 rounded-xl'>Dine in</button>
              <button className='text-[#ec7c6a]   py-2 px-4 rounded-xl border border-gray-500'>To Go</button>
              <button className='text-[#ec7c6a]  py-2 px-4 rounded-xl border border-gray-500'>Delivery</button>
            </div>
            {/* card */}
            <div className=' mb-[500px]'>
              <div className='grid grid-cols-6 mb-4 p-4'>
                <h5 className='col-span-4'>Item</h5>
                <h5 className='text-center'>Qty</h5>
                <h5>Price</h5>
              </div>
              {/* product */}
            <div className='h-[400px] overflow-y-scroll '>
              <div className='bg-[#262837] p-4 rounded-xl mb-4'>
                <div className='grid grid-cols-6 mb-4'>
                  {/*product description */}
                  <div className='col-span-4 flex items-center gap-3'>
                    <img src={comida} alt="" className='w-10 h-10 object-cover' />
                    <div>
                    <h5 className='text-sm'>Spaicy seasoned sea...</h5>
                    <p className='text-xs text-gray-500'>$2.29</p>
                     </div>
                    </div>
                    {/* Qty */}
                    <div className='text-center'>
                      <span>2</span>
                    </div>
                    {/* Price */}
                    <div>
                      <span>$4.58</span>
                    </div>
                  </div> 
                  {/* note */}
                  <div className='grid grid-cols-6 items-center gap-2'>
                    <form className='col-span-4'>
                      <input type="text" className='bg-[#1f1d2b] py-2 px-4 rounded-lg outline-none' placeholder='Order note...' /> 
                    </form>
                    <div className='col-span-2 text-center'>
                      <button className='border border-red-500 p-2 rounded-lg'>
                        <RiDeleteBin6Line className='text-red-500'/>
                     </button>
                    </div>               
                  </div>   
              </div>

              {/* product 2 */}
              <div className='bg-[#262837] p-4 rounded-xl mb-4'>
                <div className='grid grid-cols-6 mb-4'>
                  {/*product description */}
                  <div className='col-span-4 flex items-center gap-3'>
                    <img src={comida} alt="" className='w-10 h-10 object-cover' />
                    <div>
                    <h5 className='text-sm'>Spaicy seasoned sea...</h5>
                    <p className='text-xs text-gray-500'>$2.29</p>
                     </div>
                    </div>
                    {/* Qty */}
                    <div className='text-center'>
                      <span>2</span>
                    </div>
                    {/* Price */}
                    <div>
                      <span>$4.58</span>
                    </div>
                  </div> 
                  {/* note */}
                  <div className='grid grid-cols-6 items-center gap-2'>
                    <form className='col-span-4'>
                      <input type="text" className='bg-[#1f1d2b] py-2 px-4 rounded-lg outline-none' placeholder='Order note...' /> 
                    </form>
                    <div className='col-span-2 text-center'>
                      <button className='border border-red-500 p-2 rounded-lg'>
                        <RiDeleteBin6Line className='text-red-500'/>
                     </button>
                    </div>               
                  </div>   
              </div>

                  {/* product 3*/}
               <div className='bg-[#262837] p-4 rounded-xl mb-4'>
                <div className='grid grid-cols-6 mb-4'>
                  {/*product description */}
                  <div className='col-span-4 flex items-center gap-3'>
                    <img src={comida} alt="" className='w-10 h-10 object-cover' />
                    <div>
                    <h5 className='text-sm'>Spaicy seasoned sea...</h5>
                    <p className='text-xs text-gray-500'>$2.29</p>
                     </div>
                    </div>
                    {/* Qty */}
                    <div className='text-center'>
                      <span>2</span>
                    </div>
                    {/* Price */}
                    <div>
                      <span>$4.58</span>
                    </div>
                  </div> 
                  {/* note */}
                  <div className='grid grid-cols-6 items-center gap-2'>
                    <form className='col-span-4'>
                      <input type="text" className='bg-[#1f1d2b] py-2 px-4 rounded-lg outline-none' placeholder='Order note...' /> 
                    </form>
                    <div className='col-span-2 text-center'>
                      <button className='border border-red-500 p-2 rounded-lg'>
                        <RiDeleteBin6Line className='text-red-500'/>
                     </button>
                    </div>               
                  </div>   
              </div>


              </div>
       
            </div>

            {/* Submit Payment */}
            <div className='bg-[#262837] absolute w-full bottom-0 left-0 p-4 '>
              <div className='flex items-center justify-between mb-4'>
                <span className='text-gray-400'>Discount</span>
                <span>$0</span>
              </div>
              <div className='flex items-center justify-between mb-4'>
                 <span className='text-gray-400'>Subtotal</span>
                <span>$201.03</span>
              </div>
           
            <button className='bg-[#ec7c6a] w-full py-2 px-4 rounded-lg'>
              Continue to payment
            </button>
            </div>
        </div>      
      </div>
     </main>
    </div>
  )
}

export default App
