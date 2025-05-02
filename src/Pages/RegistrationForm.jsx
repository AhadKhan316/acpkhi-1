import { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";

import RegistrationForm from '/src/assets/FormPosters/alumni-2025.jpeg';

const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    f_name: '',
    email: '',
    Days: 'day1',
    age: '',
    gender: 'male',
    cnic: '',
    institute: '',
    address: '',
    city: '',
    contact: '',
    contact_ii: '',
    social_media: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateCNIC = (value) => {
    const numericValue = value.replace(/[^0-9]/g, '');
    if (numericValue.length <= 13) {
      return numericValue;
    }
    return numericValue.slice(0, 13);
  };

  const handleCNICChange = (e) => {
    const validatedValue = validateCNIC(e.target.value);
    setFormData(prev => ({
      ...prev,
      cnic: validatedValue
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.f_name.trim()) newErrors.f_name = "Father's name is required";
    if (!formData.email || !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Valid email is required';
    }
    if (!formData.age || formData.age < 1 || formData.age > 120) newErrors.age = 'Valid age is required';
    if (!formData.cnic || formData.cnic.length !== 13) newErrors.cnic = 'CNIC must be 13 digits';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.contact || !/^\d{11}$/.test(formData.contact)) newErrors.contact = 'Valid 11-digit contact number is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Track Facebook Pixel event
      if (window.fbq) {
        window.fbq('track', 'CompleteRegistration');
      }

      // Prepare form data for submission
      const submissionData = {
        ...formData,
        date_time: new Date().toISOString().slice(0, 19).replace('T', ' ')
      };

      // Make API call to PHP backend
      const response = await fetch('http://localhost:5173/src/api/register.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        // Redirect to OTP verification page
        navigate(`/verify-otp?email=${encodeURIComponent(formData.email)}`);
      } else {
        alert(result.message || 'Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('An error occurred during registration. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const cities = [
    "Ahmed Nager Chatha", "Ahmadpur East", "Ali Khan Abad", "Alipur", "Arifwala",
    "Attock", "Abbottabad", "Adezai", "Alpuri", "Akora Khattak", "Ayubia", "Awaran",
    // Add all other cities from your original list
    "other"
  ];

  return (
    <section className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex justify-center p-6">
            <img
              src={RegistrationForm}
              alt="Event Banner"
              className="max-w-full h-auto"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/800x200?text=Event+Banner";
              }}
            />
          </div>

          <div className="p-6 md:p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">REGISTRATION</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Full Name"
                    required
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="f_name" className="block text-sm font-medium text-gray-700 mb-1">
                    Father's Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="f_name"
                    name="f_name"
                    value={formData.f_name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 ${errors.f_name ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Father Full Name"
                    required
                  />
                  {errors.f_name && <p className="mt-1 text-sm text-red-500">{errors.f_name}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="ex: abc@gmail.com"
                    required
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="Days" className="block text-sm font-medium text-gray-700 mb-1">
                    Select Day <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="Days"
                    name="Days"
                    value={formData.Days}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                    required
                  >
                    <option value="day1">Day 1</option>
                    <option value="day2">Day 2</option>
                    <option value="day3">Day 3</option>
                    <option value="all days">All Days</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                    Age <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    min="1"
                    max="120"
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 ${errors.age ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Ex: 25"
                    required
                  />
                  {errors.age && <p className="mt-1 text-sm text-red-500">{errors.age}</p>}
                </div>

                <div>
                  <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
                    Gender <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                    required
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="cnic" className="block text-sm font-medium text-gray-700 mb-1">
                    CNIC <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="cnic"
                    name="cnic"
                    value={formData.cnic}
                    onChange={handleCNICChange}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 ${errors.cnic ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="4130211111111"
                    required
                  />
                  {errors.cnic && <p className="mt-1 text-sm text-red-500">{errors.cnic}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="institute" className="block text-sm font-medium text-gray-700 mb-1">
                    Educational Institution (if Any)
                  </label>
                  <input
                    type="text"
                    id="institute"
                    name="institute"
                    value={formData.institute}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                    placeholder=""
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder=""
                    required
                  />
                  {errors.address && <p className="mt-1 text-sm text-red-500">{errors.address}</p>}
                </div>

                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                    City <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 ${errors.city ? 'border-red-500' : 'border-gray-300'}`}
                    required
                  >
                    <option value="">Select a city</option>
                    {cities.map((city, index) => (
                      <option key={index} value={city}>{city}</option>
                    ))}
                  </select>
                  {errors.city && <p className="mt-1 text-sm text-red-500">{errors.city}</p>}
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1">
                      Contact No (Primary) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="contact"
                      name="contact"
                      value={formData.contact}
                      onChange={(e) => {
                        const numericValue = e.target.value.replace(/[^0-9]/g, '');
                        if (numericValue.length <= 11) {
                          handleChange({
                            target: {
                              name: 'contact',
                              value: numericValue
                            }
                          });
                        }
                      }}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 ${errors.contact ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="03001234567"
                      required
                    />
                    {errors.contact && <p className="mt-1 text-sm text-red-500">{errors.contact}</p>}
                  </div>

                  <div>
                    <label htmlFor="contact_ii" className="block text-sm font-medium text-gray-700 mb-1">
                      Contact No (Secondary)
                    </label>
                    <input
                      type="tel"
                      id="contact_ii"
                      name="contact_ii"
                      value={formData.contact_ii}
                      onChange={(e) => {
                        const numericValue = e.target.value.replace(/[^0-9]/g, '');
                        if (numericValue.length <= 11) {
                          handleChange({
                            target: {
                              name: 'contact_ii',
                              value: numericValue
                            }
                          });
                        }
                      }}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                      placeholder="03331234567"
                    />
                  </div>

                  <div>
                    <label htmlFor="social_media" className="block text-sm font-medium text-gray-700 mb-1">
                      Social Media ID
                    </label>
                    <input
                      type="text"
                      id="social_media"
                      name="social_media"
                      value={formData.social_media}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                      placeholder="Ex: FB, Insta, personal social media"
                    />
                  </div>
                </div>

                <div className="mt-5 text-center">
                  <button
                    type="submit"
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-md transition duration-300 w-full max-w-xs mx-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      'Submit'
                    )}
                  </button>
                  <br />

                  <Link
                    to="/resend-otp"
                    className="inline-block mt-4 bg-[#fad03b] hover:bg-[#e8c12a] text-black font-medium py-2 px-6 rounded-md transition duration-300"
                  >
                    Resend OTP
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;