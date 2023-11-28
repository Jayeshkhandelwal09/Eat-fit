import React, { useState, useEffect } from 'react';

const RotatingImageSpinner = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prevRotation) => prevRotation + 360); 
    }, 2000);

    return () => clearInterval(interval); 
  }, []); 

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop-filter backdrop-blur-md z-50">
      <img
        src="https://djgt4pi2uqo7n.cloudfront.net/prod/assets/images/eatfit-white-footer.svg"
        alt="Rotating Spinner"
        className={`w-24 h-24 animate-spin transform rotate-${rotation}`}
      />
    </div>
  );
};

export default RotatingImageSpinner;
