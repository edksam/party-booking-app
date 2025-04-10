
// components/Header.jsx
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-purple-700 text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          🎉 PartyBooker
        </Link>
        <nav>
          <Link to="/book" className="ml-4 hover:underline">
            Book
          </Link>
          <Link to="/confirmation" className="ml-4 hover:underline">
            Confirmation
          </Link>
        </nav>
      </div>
    </header>
  );
}