// pages/BookingDetailPage.jsx
import { useParams, Link } from 'react-router-dom';
import BookingDetails from '../components/BookingDetails';

function BookingDetailPage() {
  const { id } = useParams();
  const stored = localStorage.getItem('bookings');
  const bookings = stored ? JSON.parse(stored) : [];
  const booking = bookings.find((b) => b.id === id);

  if (!booking) {
    return (
      <div className="max-w-xl mx-auto mt-10 p-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Booking Not Found</h1>
        <Link to="/" className="text-yellow-500 hover:underline">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 border rounded-xl shadow text-center text-white">
      <h1 className="text-2xl font-bold mb-4">Booking Detail</h1>
      <BookingDetails booking={booking} />
      <div className="mt-6">
        <Link
          to="/"
          className="inline-block bg-yellow-600 text-white px-4 py-2 rounded-xl text-md font-semibold hover:bg-yellow-700 transition"
        >
          Back to Home *It isnt working properly but it can :(
        </Link>
      </div>
    </div>
  );
}

export default BookingDetailPage;
