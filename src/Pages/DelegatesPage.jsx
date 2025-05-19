import { useState, useEffect } from 'react';
import { FiSearch, FiFilter, FiUpload, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import DelegateCard from '../components/DelegateCard';
import delegatesData from '../data/delegates.json';

const DelegatesPage = () => {
  // State management
  const [delegates, setDelegates] = useState([]);
  const [filteredDelegates, setFilteredDelegates] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    role: '',
    category: ''
  });
  const [currentPage, setCurrentPage] = useState(1);
  const delegatesPerPage = 12;

  // Load data from JSON
  useEffect(() => {
    try {
      setDelegates(delegatesData);
      setFilteredDelegates(delegatesData);
    } catch (error) {
      console.error("Error loading delegate data:", error);
    }
  }, []);

  // Apply filters and search
  useEffect(() => {
    let results = delegates;
    
    if (searchTerm) {
      results = results.filter(delegate => 
        delegate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        delegate.role.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (filters.role) {
      results = results.filter(delegate => 
        delegate.role.toLowerCase() === filters.role.toLowerCase()
      );
    }
    
    if (filters.category) {
      results = results.filter(delegate => 
        delegate.category.toLowerCase() === filters.category.toLowerCase()
      );
    }
    
    setFilteredDelegates(results);
    setCurrentPage(1);
  }, [searchTerm, filters, delegates]);

  // Pagination
  const indexOfLastDelegate = currentPage * delegatesPerPage;
  const indexOfFirstDelegate = indexOfLastDelegate - delegatesPerPage;
  const currentDelegates = filteredDelegates.slice(indexOfFirstDelegate, indexOfLastDelegate);
  const totalPages = Math.ceil(filteredDelegates.length / delegatesPerPage);

  // Get unique roles and categories for filters
  const uniqueRoles = [...new Set(delegates.map(delegate => delegate.role))];
  const uniqueCategories = [...new Set(delegates.map(delegate => delegate.category))];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#8B0000] to-[#1E3A8A] text-white py-16 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">
            Our Delegates
          </h1>
          {/* <p className="text-xl text-[#A8DADC] italic">
            Arts Council of Pakistan Karachi
          </p> */}
          
          {/* Search */}
          <div className="mt-8 max-w-2xl mx-auto relative">
            <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
              <FiSearch className="text-white text-xl mr-3" />
              <input
                type="text"
                placeholder="Search delegates..."
                className="flex-1 bg-transparent border-none outline-none text-white placeholder-white/70"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-12 px-4">
        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          <select 
            className="select select-bordered bg-white"
            value={filters.role}
            onChange={(e) => setFilters({...filters, role: e.target.value})}
          >
            <option value="">All Roles</option>
            {uniqueRoles.map(role => (
              <option key={role} value={role}>{role}</option>
            ))}
          </select>
          
          <select 
            className="select select-bordered bg-white"
            value={filters.category}
            onChange={(e) => setFilters({...filters, category: e.target.value})}
          >
            <option value="">All Categories</option>
            {uniqueCategories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        {/* Delegates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {currentDelegates.map(delegate => (
            <DelegateCard key={delegate.id} delegate={delegate} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-12">
            <div className="join">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="join-item btn btn-outline"
              >
                <FiChevronLeft />
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`join-item btn ${currentPage === i + 1 ? 'btn-active' : 'btn-outline'}`}
                >
                  {i + 1}
                </button>
              ))}
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="join-item btn btn-outline"
              >
                <FiChevronRight />
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default DelegatesPage;
