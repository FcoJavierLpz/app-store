import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <Link className="link" to="/">
        Fake Store
      </Link>
      <div>
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
