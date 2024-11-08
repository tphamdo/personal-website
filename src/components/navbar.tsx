import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar pt-3 md:pt-8 flex justify-between slide sticky top-0 z-50">
      <Link to="/" className="text-lg font-semibold">
        <h1>Trueman</h1>
      </Link>
      <Link to="/about" className="text-lg font-medium">
        About
      </Link>
    </div>
  );
}

export default Navbar;
