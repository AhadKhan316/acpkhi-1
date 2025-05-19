// src/pages/DelegateDetail.jsx
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { 
  FiUser, FiPhone, FiMail, FiMapPin, 
  FiBriefcase, FiEdit2, FiArrowLeft 
} from 'react-icons/fi';

const DelegateDetail = () => {
  const { id } = useParams();
  const [delegate, setDelegate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDelegate = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Mock data - replace with actual API call
        const mockDelegate = {
          id: 1,
          name: "Ali Khan",
          position: "Regional Coordinator",
          email: "ali.khan@acpkhi.org",
          phone: "+92 300 1234567",
          location: "Karachi, Pakistan",
          bio: "Experienced coordinator with 5+ years in community development. Ali has been instrumental in expanding our programs across the region and building partnerships with local organizations. His expertise in project management and community engagement has helped us reach thousands of beneficiaries.",
          image: "/images/delegates/ali-khan.jpg",
          joinDate: "January 2018",
          responsibilities: [
            "Oversee regional operations",
            "Coordinate with local partners",
            "Manage volunteer teams",
            "Monitor program implementation"
          ]
        };
        
        setDelegate(mockDelegate);
        setLoading(false);
      } catch (err) {
        setError("Failed to load delegate details. Please try again later.");
        setLoading(false);
        console.error("Error fetching delegate:", err);
      }
    };

    fetchDelegate();
  }, [id]);

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

  if (!delegate) {
    return (
      <div className="bg-white rounded-lg shadow p-8 text-center max-w-4xl mx-auto my-8">
        <FiUser className="mx-auto text-gray-400 text-4xl mb-4" />
        <h3 className="text-lg font-medium text-gray-900">Delegate not found</h3>
        <p className="text-gray-500 mt-2">
          The delegate you're looking for doesn't exist or may have been removed.
        </p>
        <Link
          to="/delegates"
          className="mt-4 inline-block text-blue-600 hover:text-blue-800"
        >
          ← Back to all delegates
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link
        to="/delegates"
        className="flex items-center text-blue-600 hover:text-blue-800 mb-6"
      >
        <FiArrowLeft className="mr-2" /> Back to all delegates
      </Link>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3 bg-gray-100 p-6 flex items-center justify-center">
            {delegate.image ? (
              <img 
                src={delegate.image} 
                alt={delegate.name} 
                className="w-full h-auto rounded-lg"
              />
            ) : (
              <FiUser className="text-gray-400 text-8xl" />
            )}
          </div>
          
          <div className="md:w-2/3 p-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{delegate.name}</h1>
                <p className="text-blue-600 text-lg mt-1">{delegate.position}</p>
              </div>
              <Link
                to={`/delegates/edit/${delegate.id}`}
                className="text-gray-500 hover:text-blue-600 p-2"
                title="Edit"
              >
                <FiEdit2 size={20} />
              </Link>
            </div>
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <FiBriefcase className="text-gray-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-gray-900">{delegate.location}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FiPhone className="text-gray-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <a href={`tel:${delegate.phone}`} className="text-gray-900 hover:text-blue-600">
                    {delegate.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <FiMail className="text-gray-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a href={`mailto:${delegate.email}`} className="text-gray-900 hover:text-blue-600">
                    {delegate.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <FiUser className="text-gray-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500">Member Since</p>
                  <p className="text-gray-900">{delegate.joinDate}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">About</h2>
              <p className="text-gray-700 whitespace-pre-line">{delegate.bio}</p>
            </div>
            
            {delegate.responsibilities && delegate.responsibilities.length > 0 && (
              <div className="mt-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">Key Responsibilities</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {delegate.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DelegateDetail;