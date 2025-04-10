import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BookingPage() {
  const [formData, setFormData] = useState({
    employeeName: '',
    department: '',
    partyDate: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/confirmation', { state: { booking: formData } });
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-10 border rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-6 text-center text-purple-700">Reserve Your Party Spot</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="employeeName"
          placeholder="Employee Name"
          value={formData.employeeName}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="department"
          placeholder="Department"
          value={formData.department}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="dietary_needs"
          placeholder="Dietary needs"
          value={formData.dietary_needs}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        {/* <input
          type="date"
          name="partyDate"
          value={formData.partyDate}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        /> */}
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
        >
          Confirm Reservation
        </button>
      </form>
    </div>
  );
}

export default BookingPage;
