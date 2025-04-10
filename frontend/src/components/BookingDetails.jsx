function BookingDetails({ booking }) {
  return (
    <div className="text-left space-y-2">
      <p><strong>Name:</strong> {booking.employeeName}</p>
      <p><strong>Department:</strong> {booking.department}</p>
      <p><strong>Dietary needs:</strong> {booking.dietary_needs}</p>
      <p><strong>Date: 11/12/2025</strong></p>
    </div>
  );
}

export default BookingDetails;