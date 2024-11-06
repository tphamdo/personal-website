import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar py-3 md:py-8 flex justify-between slide sticky top-0">
      <Link to="/" className="text-lg font-medium z-10"><h1>Trueman Phamdo</h1></Link>
      <Link to="/about" className="text-lg font-medium z-10">About</Link>
    </div>
  )
}

export default Navbar;
