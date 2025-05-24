import { Link } from 'react-router-dom';

function Details() {
  return (
    <div className="p-4 pb-16">
      <img src="https://via.placeholder.com/375x200" alt="Detail banner" className="rounded-lg mb-4" />
      <h1 className="text-2xl font-bold mb-2">Details Page</h1>
      <p className="text-gray-700 mb-4">This section mimics the detail layout from the Adobe XD design.</p>
      <Link to="/" className="bg-gray-600 text-white px-4 py-2 rounded-md">
        Back to Home
      </Link>
    </div>
  );
}

export default Details;