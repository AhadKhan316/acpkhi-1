// src/pages/Delegates.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FiUser, FiSearch, FiPlus, FiEdit2, FiTrash2, 
  FiPhone, FiMail, FiMapPin, FiBriefcase 
} from 'react-icons/fi';

const Delegates = () => {
  const [delegates, setDelegates] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch delegates data (in a real app, this would be an API call)
  useEffect(() => {
    const fetchDelegates = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Mock data - replace with actual API call
        const mockDelegates = [
          {
            id: 1,
            name: "Ali Khan",
            position: "Regional Coordinator",
            email: "ali.khan@acpkhi.org",
            phone: "+92 300 1234567",
            location: "Karachi, Pakistan",
            bio: "Experienced coordinator with 5+ years in community development.",
            image: "/images/delegates/ali-khan.jpg"
          },
          {
            id: 2,
            name: "Sara Ahmed",
            position: "Youth Program Manager",
            email: "sara.ahmed@acpkhi.org",
            phone: "+92 321 7654321",
            location: "Lahore, Pakistan",
            bio: "Passionate about youth empowerment and education initiatives.",
            image: "/images/delegates/sara-ahmed.jpg"
          },
          // Add more delegates as needed
        ];
        
        setDelegates(mockDelegates);
        setLoading(false);
      } catch (err) {
        setError("Failed to load delegates. Please try again later.");
        setLoading(false);
        console.error("Error fetching delegates:", err);
      }
    };

    fetchDelegates();
  }, []);

  // Filter delegates based on search term
  const filteredDelegates = delegates.filter(delegate =>
    delegate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    delegate.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
    delegate.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded max-w-4xl mx-auto my-8">
        {error}
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Our Delegates</h1>
          <p className="text-gray-600 mt-2">
            Meet the dedicated team representing our organization
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-4 md:mt-0 w-full md:w-auto">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search delegates..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <Link
            to="/delegates/add"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center justify-center whitespace-nowrap"
          >
            <FiPlus className="mr-2" /> Add Delegate
          </Link>
        </div>
      </div>

      {filteredDelegates.length === 0 ? (
        <div className="bg-white rounded-lg shadow p-8 text-center">
          <FiUser className="mx-auto text-gray-400 text-4xl mb-4" />
          <h3 className="text-lg font-medium text-gray-900">No delegates found</h3>
          <p className="text-gray-500 mt-2">
            {searchTerm ? 'Try a different search term' : 'No delegates have been added yet'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDelegates.map((delegate) => (
            <DelegateCard key={delegate.id} delegate={delegate} />
          ))}
        </div>
      )}
    </div>
  );
};

// Delegate Card Component
const DelegateCard = ({ delegate }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="bg-gray-100 h-48 flex items-center justify-center">
        {delegate.image ? (
          <img 
            src={delegate.image} 
            alt={delegate.name} 
            className="w-full h-full object-cover"
          />
        ) : (
          <FiUser className="text-gray-400 text-6xl" />
        )}
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{delegate.name}</h3>
            <p className="text-blue-600 mt-1">{delegate.position}</p>
          </div>
          <div className="flex space-x-2">
            <Link
              to={`/delegates/edit/${delegate.id}`}
              className="text-gray-500 hover:text-blue-600"
              title="Edit"
            >
              <FiEdit2 />
            </Link>
            <button
              className="text-gray-500 hover:text-red-600"
              title="Delete"
              onClick={() => console.log('Delete', delegate.id)} // Add delete functionality
            >
              <FiTrash2 />
            </button>
          </div>
        </div>
        
        <div className="mt-4 space-y-3">
          <div className="flex items-center text-gray-600">
            <FiBriefcase className="mr-2 text-gray-400" />
            <span>{delegate.location}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <FiPhone className="mr-2 text-gray-400" />
            <a href={`tel:${delegate.phone}`} className="hover:text-blue-600">
              {delegate.phone}
            </a>
          </div>
          <div className="flex items-center text-gray-600">
            <FiMail className="mr-2 text-gray-400" />
            <a href={`mailto:${delegate.email}`} className="hover:text-blue-600 truncate">
              {delegate.email}
            </a>
          </div>
        </div>
        
        <p className="mt-4 text-gray-600 line-clamp-3">{delegate.bio}</p>
        
        <div className="mt-6 flex justify-between items-center">
          <Link
            to={`/delegates/${delegate.id}`}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            View Profile →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Delegates;