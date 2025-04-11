function BookingDetails({ booking }) {
  return (
    <div className="text-left space-y-2">
      <p><strong>Name:</strong> {booking.employeeName}</p>
      <p><strong>Department:</strong> {booking.department}</p>
      <p><strong>Employee Email:</strong> {booking.email}</p>
      <p><strong>Dietary needs:</strong> {booking.dietary_needs}</p>
      <p><strong>Date: </strong>11/12/2025. (6pm)</p>
      <p><strong>Address: </strong>International centre 🍾 (TF3 4JH).</p>
      <p><strong>Extra info: </strong><s-text>*Extra chips are available for purchase after you've used your free entry chips.</s-text></p>
    </div>
  );
}

export default BookingDetails;