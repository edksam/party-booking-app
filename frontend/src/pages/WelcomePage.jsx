import { Link } from 'react-router-dom';

function WelcomePage() {
  return (
    <div className="max-w-2xl mx-auto text-center py-20 px-4">
      <h1 className="text-4xl font-bold mb-6 text-yellow-50">🎉 Welcome to the Employee Christmas Party Booking App!</h1>
      <p className="text-lg text-yellow-100 mb-8">
        Join us in celebrating our amazing team! Book your spot at the annual employee party filled with fun, food, and festivities.
      </p>
      <Link
        to="/book"
        className="inline-block bg-yellow-600 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-yellow-800 transition"
      >
        Book Your Spot Now
      </Link>
    </div>
  );
}

export default WelcomePage;
