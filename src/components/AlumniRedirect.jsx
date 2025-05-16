import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AlumniRedirect() {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Option 1: Simple redirect to homepage
    navigate('/', { replace: true });
    
    // Option 2: Redirect with state (to track alumni visitors)
    // navigate('/', { 
    //   replace: true,
    //   state: { fromAlumni: true } 
    // });
    
    // Option 3: Redirect to special alumni page
    // navigate('/alumni-welcome', { replace: true });
  }, [navigate]);

  // Optional: Show loading message during redirect
  return <div>Redirecting...</div>;
}

export default AlumniRedirect;