'use client' 

import React, { useEffect } from 'react' 
import { useRouter } from 'next/navigation'; 

const RedirectUser = () => { 
  const router = useRouter(); // Initialize the router
   
  useEffect(() => {
    // This effect will run once when the component mounts
    router.push('/'); // Redirect the user to the target page
  }, [router]); // Dependency array includes router to ensure it's available
 
  return (
    <div>

    </div>
  )
}

export default RedirectUser