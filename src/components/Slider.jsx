import { useState, useEffect } from 'react';

const Slider = ({ images, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [images, interval]);

  return (
    <div className="">
      <img className='w-full' src={images[currentIndex]} alt="carousel" />
    </div>
  );
};

export default Slider;