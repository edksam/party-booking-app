import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-yellow-500 text-white py-4 px-6 shadow">
      <div className="flex justify-between items-center max-w-5xl mx-auto">
        <h1 className="text-xl font-bold">🎉 Christmas Party Booker</h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/book" className="hover:underline">Reserve</Link>
          <text className="text-s">*Made by Peter</text>
        </nav>
      </div>
    </header>
  );
}

export default Header;