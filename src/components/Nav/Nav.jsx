import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <Link to='/'>
        <button>Home</button>
      </Link>
      <Link to='/about'>
        <button>About</button>
      </Link>

      <Link to='/blogs/1'>
        <button>Blog 1</button>
      </Link>
    </nav>
  );
};

export default Nav;
