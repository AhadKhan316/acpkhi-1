import { useEffect } from 'react';

const Email = () => {
  useEffect(() => {
    // Redirect after component mounts
    window.location.href = "https://acpkhi.awsapps.com/auth/?client_id=6b9615ec01be1c8d&redirect_uri=https%3A%2F%2Fwebmail.mail.us-east-1.awsapps.com%2Fworkmail%2F";
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
    
      
      <div className="text-center p-8 bg-white rounded-lg shadow-md max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">ACPKHI Email</h1>
        <p className="text-gray-600 mb-6">Redirecting to the email login page...</p>
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
        <p className="mt-6 text-sm text-gray-500">
          If you are not redirected automatically, 
          <a 
            href="https://acpkhi.awsapps.com/auth/?client_id=6b9615ec01be1c8d&redirect_uri=https%3A%2F%2Fwebmail.mail.us-east-1.awsapps.com%2Fworkmail%2F"
            className="text-blue-600 hover:text-blue-800 ml-1"
          >
            click here
          </a>.
        </p>
      </div>
    </div>
  );
};

export default Email;