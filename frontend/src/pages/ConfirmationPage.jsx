// Update in pages/ConfirmationPage.jsx
import { useLocation, Link } from 'react-router-dom';
import BookingDetails from '../components/BookingDetails';
import { useEffect, useState } from 'react';

function ConfirmationPage() {
  const location = useLocation();
  const [bookings, setBookings] = useState([]);
  const booking = location.state?.booking;

  useEffect(() => {
    const stored = localStorage.getItem('bookings');
    const parsed = stored ? JSON.parse(stored) : [];

    if (booking) {
      const newBooking = { ...booking, id: `B${Date.now()}` };
      const updated = [...parsed, newBooking];
      localStorage.setItem('bookings', JSON.stringify(updated));
      setBookings(updated);
    } else {
      setBookings(parsed);
    }
  }, [booking]);

  const current = booking
    ? { ...booking, id: `B${Date.now()}` }
    : bookings[bookings.length - 1];

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 border rounded-xl shadow text-center text-white">
      <h1 className="text-2xl font-bold mb-4 underline"> Booking Confirmation </h1>
      <BookingDetails booking={current} />

      <div className="mt-10 text-left">
        <h2 className="text-xl font-semibold mb-2 underline"> Other Booked Employees:</h2>
        <ul className="list-disc pl-5 text-left text-white">
          {bookings.map((entry) => (
            <li key={entry.id}>
              <Link to={`/booking/${entry.id}`} className="text-yellow-75 hover:underline">
                {entry.employeeName} - ({entry.department})
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <Link
          to="/"
          className="inline-block bg-yellow-500 text-white px-4 py-2 rounded-xl text-md font-semibold hover:bg-yellow-700 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default ConfirmationPage;