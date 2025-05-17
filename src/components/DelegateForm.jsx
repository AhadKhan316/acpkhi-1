// src/components/DelegateForm.jsx
import { useState } from 'react';
import { FiUpload, FiX } from 'react-icons/fi';

const DelegateForm = ({ delegate = null, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: delegate?.name || '',
    position: delegate?.position || '',
    email: delegate?.email || '',
    phone: delegate?.phone || '',
    location: delegate?.location || '',
    bio: delegate?.bio || '',
    image: null,
    imagePreview: delegate?.image || null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        image: file,
        imagePreview: URL.createObjectURL(file)
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">
        {delegate ? 'Edit Delegate' : 'Add New Delegate'}
      </h2>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Position/Role *
              </label>
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location *
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Profile Photo
            </label>
            <div className="mt-1 flex items-center">
              <div className="relative w-40 h-40 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                {formData.imagePreview ? (
                  <>
                    <img 
                      src={formData.imagePreview} 
                      alt="Preview" 
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-sm"
                      onClick={() => setFormData(prev => ({ ...prev, image: null, imagePreview: null }))}
                    >
                      <FiX className="text-red-500" />
                    </button>
                  </>
                ) : (
                  <span className="text-gray-400">No image</span>
                )}
              </div>
            </div>
            
            <div className="mt-4">
              <label className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer">
                <FiUpload className="mr-2" />
                Upload Photo
                <input
                  type="file"
                  accept="image/*"
                  className="sr-only"
                  onChange={handleImageChange}
                />
              </label>
              <p className="mt-1 text-xs text-gray-500">
                JPG, PNG up to 2MB
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Biography
          </label>
          <textarea
            name="bio"
            rows={4}
            value={formData.bio}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        
        <div className="mt-8 flex justify-end space-x-3">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            {delegate ? 'Update Delegate' : 'Add Delegate'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default DelegateForm;