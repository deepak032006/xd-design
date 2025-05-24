import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="p-4 pb-16">
      <h1 className="text-2xl font-bold mb-4">Discover</h1>
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold">Feature Card</h2>
        <p className="text-gray-600 text-sm mt-2">This area displays featured content as shown in the design.</p>
        <Link to="/details" className="inline-block mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default Home;