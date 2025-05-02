import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import AdmissionPoster from '/src/assets/FormPosters/admission-suvapa-2025.jpeg';

const courseData = {
  dept1: { name: 'Communication Design Department' },
  dept2: { name: 'Dance Department' },
  dept3: { name: 'Fine Arts Department' },
  dept4: { name: 'Music Department' },
  dept5: { name: 'Textile Design Department' },
  dept6: { name: 'Theatre Department' },
};

function AdmissionsForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    full_name: '',
    fathers_name: '',
    date_of_birth: '',
    phone_no: '',
    whatsapp_no: '',
    email: '',
    district: '',
    departments: [],
    durations: [],
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e, field) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const updatedArray = checked
        ? [...prev[field], value]
        : prev[field].filter((item) => item !== value);
      return { ...prev, [field]: updatedArray };
    });
  };

  const validatePhoneNumber = (value) => {
    const numericValue = value.replace(/[^0-9]/g, '');
    if (numericValue.length <= 11) {
      return numericValue;
    }
    return numericValue.slice(0, 11);
  };

  const handlePhoneChange = (e, field) => {
    const validatedValue = validatePhoneNumber(e.target.value);
    setFormData((prev) => ({
      ...prev,
      [field]: validatedValue,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.full_name.trim()) newErrors.full_name = 'Full Name is required';
    if (!formData.fathers_name.trim()) newErrors.fathers_name = "Father's Name is required";
    if (!formData.date_of_birth || !/^\d{2}\/\d{2}\/\d{4}$/.test(formData.date_of_birth)) {
      newErrors.date_of_birth = 'Valid date of birth (mm/dd/yyyy) is required';
    }
    if (!formData.phone_no || !/^\d{11}$/.test(formData.phone_no)) {
      newErrors.phone_no = 'Valid 11-digit phone number is required';
    }
    if (formData.whatsapp_no && !/^\d{11}$/.test(formData.whatsapp_no)) {
      newErrors.whatsapp_no = 'Valid 11-digit WhatsApp number is required';
    }
    if (!formData.email || !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Valid email is required';
    }
    if (!formData.district) newErrors.district = 'District is required';
    if (formData.departments.length === 0) newErrors.departments = 'Select at least one department';
    if (formData.durations.length === 0) newErrors.durations = 'Select at least one duration';

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
      const submissionData = {
        ...formData,
        date_time: new Date().toISOString().slice(0, 19).replace('T', ' '),
      };

      const response = await fetch('http://localhost:5000/api/admissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        navigate(`/verify-otp?email=${encodeURIComponent(formData.email)}`);
      } else {
        alert(result.message || 'Admission form submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('An error occurred during submission. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Event Banner */}
          <div className="flex justify-center p-6">
            <img
              src={AdmissionPoster}
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
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">ADMISSIONS FORM</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Form Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 ${errors.full_name ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Full Name"
                    required
                  />
                  {errors.full_name && <p className="mt-1 text-sm text-red-500">{errors.full_name}</p>}
                </div>

                {/* Father's Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Father's Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fathers_name"
                    value={formData.fathers_name}
                    onChange={handleChange}
                    className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 ${errors.fathers_name ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Father's Full Name"
                    required
                  />
                  {errors.fathers_name && <p className="mt-1 text-sm text-red-500">{errors.fathers_name}</p>}
                </div>

                {/* Date of Birth */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date of Birth <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="date_of_birth"
                    value={formData.date_of_birth}
                    onChange={handleChange}
                    className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 ${errors.date_of_birth ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="mm/dd/yyyy"
                    required
                  />
                  {errors.date_of_birth && <p className="mt-1 text-sm text-red-500">{errors.date_of_birth}</p>}
                </div>

                {/* Phone No */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone No <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone_no"
                    value={formData.phone_no}
                    onChange={(e) => handlePhoneChange(e, 'phone_no')}
                    className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 ${errors.phone_no ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="+92- "
                    required
                  />
                  {errors.phone_no && <p className="mt-1 text-sm text-red-500">{errors.phone_no}</p>}
                </div>

                {/* WhatsApp No */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    WhatsApp No
                  </label>
                  <input
                    type="tel"
                    name="whatsapp_no"
                    value={formData.whatsapp_no}
                    onChange={(e) => handlePhoneChange(e, 'whatsapp_no')}
                    className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 ${errors.whatsapp_no ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="+92-"
                  />
                  {errors.whatsapp_no && <p className="mt-1 text-sm text-red-500">{errors.whatsapp_no}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="example@domain.com"
                    required
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>

                {/* District */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    District <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="district"
                    value={formData.district}
                    onChange={handleChange}
                    className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 ${errors.district ? 'border-red-500' : 'border-gray-300'}`}
                    required
                  >
                    <option value="" disabled>Select District</option>
                    <option value="central">Central</option>
                    <option value="east">East</option>
                    <option value="south">South</option>
                    <option value="west">West</option>
                    <option value="korangi">Korangi</option>
                    <option value="keamari">Keamari</option>
                    <option value="malir">Malir</option>
                  </select>
                  {errors.district && <p className="mt-1 text-sm text-red-500">{errors.district}</p>}
                </div>
              </div>

              {/* Department Selection */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Select Department <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-wrap gap-4">
                  {Object.keys(courseData).map((key) => (
                    <label key={key} className="flex items-center text-gray-700">
                      <input
                        type="checkbox"
                        className="mr-2 h-5 w-5 text-gray-600 border-gray-300 rounded focus:ring-gray-600"
                        value={key}
                        onChange={(e) => handleCheckboxChange(e, 'departments')}
                      />
                      {courseData[key].name}
                    </label>
                  ))}
                </div>
                {errors.departments && <p className="mt-1 text-sm text-red-500">{errors.departments}</p>}
              </div>

              {/* Duration Selection */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Select Duration <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-wrap gap-4">
                  {["Short Course", "Diploma"].map((duration) => (
                    <label key={duration} className="flex items-center text-gray-700">
                      <input
                        type="checkbox"
                        className="mr-2 h-5 w-5 text-gray-600 border-gray-300 rounded focus:ring-gray-600"
                        value={duration.toLowerCase().replace(" ", "-")}
                        onChange={(e) => handleCheckboxChange(e, 'durations')}
                      />
                      {duration}
                    </label>
                  ))}
                </div>
                {errors.durations && <p className="mt-1 text-sm text-red-500">{errors.durations}</p>}
              </div>

              {/* Submit Button */}
              <div className="mt-8 flex justify-center">
                <motion.button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-md transition duration-300 w-full max-w-xs"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    'Submit'
                  )}
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdmissionsForm;