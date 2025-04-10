function BookingDetails({ booking }) {
  return (
    <div className="text-left space-y-2">
      <p><strong>Name:</strong> {booking.employeeName}</p>
      <p><strong>Department:</strong> {booking.department}</p>
      <p><strong>Party Date:</strong> {booking.partyDate}</p>
    </div>
  );
}

export default BookingDetails;