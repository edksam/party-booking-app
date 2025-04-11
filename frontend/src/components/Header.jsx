import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-purple-700 text-white py-4 px-6 shadow">
      <div className="flex justify-between items-center max-w-5xl mx-auto">
        <h1 className="text-xl font-bold">🎉 Party Booker</h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/book" className="hover:underline">Book</Link>
          <Link to="/confirmation" className="hover:underline">Confirmation</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
