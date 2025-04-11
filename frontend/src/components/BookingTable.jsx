
function BookingTable({ bookings }) {
  return (
    <div className="overflow-x-auto mt-8">
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead className="bg-purple-600 text-white">
          <tr>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Department</th>
            <th className="px-4 py-2 border">Party Date</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={index} className="text-center odd:bg-gray-50">
              <td className="border px-4 py-2">{booking.employeeName}</td>
              <td className="border px-4 py-2">{booking.department}</td>
              <td className="border px-4 py-2">{booking.partyDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookingTable;