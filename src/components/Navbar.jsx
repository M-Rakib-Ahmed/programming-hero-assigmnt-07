import { MdMenu } from "react-icons/md";
import logo from '../assets/banner.png'
import doller from '../assets/doller.png'
const Navbar = ({ money }) => {
    const links = [
        <li>Home</li>,
        <li>fixture</li>,
        <li>teams</li>,
        <li>schedules</li>
    ]
    return (
      // navbar secton start

      <div className="shadow-2xl ">
        <div className="navbar bg-base-100 fixed top-0  fixed top-0 left-0 w-full backdrop-blur-md bg-white/20 border-b border-white/10 shadow-lg z-50">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <MdMenu className="text-2xl"></MdMenu>
      </div>
        <div className="hidden lg:block">
                <img className="w-16" src={logo} alt="" />
        </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
   
  </div>
  
  <div className="navbar-end">
            <ul className="menu hidden lg:block lg:flex   menu-horizontal px-1  capitalize font-medium gap-10 mr-20">
              {links}
            </ul>
    <div className="btn flex items-center">
     <span>{money}Coin</span>
      <img src={doller} alt="" />
    </div>
  </div>
</div> 
        </div>
      
    );
};

export default Navbar;