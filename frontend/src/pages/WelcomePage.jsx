import { Link } from 'react-router-dom';

function WelcomePage() {
  return (
    <div className="max-w-2xl mx-auto text-center py-20 px-4">
      <h1 className="text-4xl font-bold mb-6 text-purple-700">🎉 Welcome to the Employee Party Booking App!</h1>
      <p className="text-lg text-gray-700 mb-8">
        Join us in celebrating our amazing team! Book your spot at the annual employee party filled with fun, food, and festivities.
      </p>
      <Link
        to="/book"
        className="inline-block bg-purple-600 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-purple-700 transition"
      >
        Book Your Spot Now
      </Link>
    </div>
  );
}

export default WelcomePage;
