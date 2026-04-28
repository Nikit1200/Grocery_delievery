import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';


const Navbar = () => {
  const [open, setOpen] = React.useState(false)
  const [showProfileMenu, setShowProfileMenu] = React.useState(false)
  const { user, setuser, navigate, setShowUserLogin, setSearchQuery,searchQuery , getCartCount, axios} = useAppContext()
  
  const logout = async () => {
    try{
      const {data}= await axios.get('/api/user/logout')
      if(data.success){
        toast.success(data.message)
        setuser(null);
        navigate('/')
      } else{
        toast.error(data.message)
      }
    } catch (error){
      toast.error(error.message)

    }
    
  }

  useEffect(()=>{
    if(searchQuery.length>0){
      navigate("/products")
    }
  },[navigate, searchQuery])

  const openLogin = () => {
    setShowUserLogin(true)
    setOpen(false)
  }



  const navLinkClass = ({ isActive }) =>
    `text-[17px] font-medium transition-colors ${
      isActive ? 'text-[#111827]' : 'text-[#1f2937] hover:text-[#4fbf8b]'
    }`

  return (
    <nav className="relative z-20 border-b border-[#e9ecef] bg-white px-6 py-4 md:px-10 lg:px-16 xl:px-20">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6">
        <NavLink to="/" onClick={()=>setOpen(false)} className="shrink-0">
          <img className="h-8 w-auto md:h-10" src={assets.logo} alt="GreenCart" />
        </NavLink>

        <div className="hidden flex-1 items-center justify-end gap-8 md:flex lg:gap-10">
          <div className="flex items-center gap-8 lg:gap-10">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/products" className={navLinkClass}>
              All Product
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </div>

          <div className="hidden items-center rounded-full border border-[#e5e7eb] bg-white px-5 py-3 shadow-[0_2px_10px_rgba(15,23,42,0.04)] lg:flex lg:min-w-[320px] xl:min-w-[360px]">
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-[15px] text-slate-700 outline-none placeholder:text-slate-400"
              type="text"
              placeholder="Search products"
            />
            <img src={assets.search_icon} alt="Search" className="ml-3 h-4 w-4 opacity-70" />
          </div>

          <div onClick={() => navigate("/cart")} className="relative cursor-pointer">
          <img src={assets.nav_cart_icon} alt="Cart" className="w-6 opacity-80" />
            <button type="button" className="absolute  top-2- right-3 text-xs text-white bg-primary w-[18px] rounded-full">
            {getCartCount()}
            
          </button>
          </div>

          {!user ?( <button
           
            onClick= {()=>setShowUserLogin(true)}
            className="cursor-pointer rounded-full bg-[#4fbf8b] px-9 py-3 text-base font-medium text-white transition hover:bg-[#43ab7b]"
          >
            Login
          </button>)
          :
          (
            <div className="relative">
                <button
                  type="button"
                  onClick={() => setShowProfileMenu((prev) => !prev)}
                  className="cursor-pointer"
                >
                  <img src={assets.profile_icon} className="w-10" alt="Profile" />
                </button>
                {showProfileMenu && (
                <ul className="absolute right-0 top-full mt-2 w-40 rounded-md bg-white py-2 text-sm text-gray-700 shadow-lg">
                    <li>
                      <button
                        type="button"
                        onClick={() => {
                          setShowProfileMenu(false)
                          navigate('/my-orders')
                        }}
                        className="w-full cursor-pointer px-3 py-2 text-left hover:bg-slate-100"
                      >
                        My Orders
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={logout}
                        className="w-full cursor-pointer px-3 py-2 text-left hover:bg-slate-100"
                      >
                        Logout
                      </button>
                    </li>
                </ul>
                )}
            </div>
          )}
        </div>
<div className='flex items-center gap-6  sm:hidden'>
<div onClick={() => navigate("/cart")} className="relative cursor-pointer">
          <img src={assets.nav_cart_icon} alt="Cart" className="w-6 opacity-80" />
            <button type="button" className="absolute  top-2- right-3 text-xs text-white bg-primary w-[18px] rounded-full">
            {getCartCount()}
            
          </button>
          </div>
<button
          type="button"
          onClick={() => open ? setOpen(false) : setOpen(true)}
          aria-label="Menu"
          className="sm:hidden"
        >
          <img src={assets.menu_icon} alt="Menu" className="h-4 w-5" />
        </button>
</div>

        
      </div>
{ open && (
      <div
        className={`${
          open ? 'flex' : 'hidden'
        } absolute left-0 top-full z-20 w-full flex-col gap-4 border-t border-[#e9ecef] bg-white px-6 py-5 shadow-lg md:hidden`}
      >
        <NavLink to="/" className="text-base font-medium text-slate-800" onClick={() => setOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/products" className="text-base font-medium text-slate-800" onClick={() => setOpen(false)}>
          All Product
        </NavLink>
        {user && 
          <NavLink to="/products" className="text-base font-medium text-slate-800" onClick={() => setOpen(false)}>
            My Orders
          </NavLink>
        }
        <NavLink to="/" className="text-base font-medium text-slate-800" onClick={() => setOpen(false)}>
          Contact
        </NavLink>

        <div className="flex items-center rounded-full border border-[#e5e7eb] px-4 py-3">
          <input
            className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
            type="text"
            placeholder="Search products"
          />
          <img src={assets.search_icon} alt="Search" className="ml-3 h-4 w-4 opacity-70" />
        </div>
{!user ? (
      <button onClick={openLogin}
          type="button"
          className="mt-1 w-fit rounded-full bg-[#4fbf8b] px-7 py-3 text-sm font-medium text-white"
        >
          Login
        </button>

):(
      <button
          onClick={logout}
          className="mt-1 w-fit rounded-full bg-[#4fbf8b] px-7 py-3 text-sm font-medium text-white"
        >
          Logout
        </button>

)}
      
      </div>
      )}
    </nav>
  )
}

export default Navbar
