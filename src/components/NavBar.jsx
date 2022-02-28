import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';

const NavBar = () => {
  return (
    <div className="flex flex-wrap">
      <section className="relative mx-auto">
        <nav className="flex justify-between bg-blue-800 text-white w-screen">
          <div className="px-5 xl:px-12 py-6 flex w-full items-center">
            <Link className="text-3xl font-bold font-heading" to="/">
              <img className="h-9" src={logo} alt="logo" />
            </Link>
            <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
              <li>
                <NavLink className="hover:text-gray-200" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="hover:text-gray-200" to="/products">
                  Products
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default NavBar;
