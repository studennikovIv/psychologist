import  './style.css'
import { useState } from 'react';
import img from '../../images/aboutMe.jpg'
import img2 from '../../images/imgBgHero.png'


export const Reviews = () =>{
  const images = [
    img,
    img2,
    img,
    
  ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };
    return(
    <div className="reviews">
        <div className="conteiner">
            <h3>Отзывы</h3>
            <div className="slider">
                <button onClick={prevSlide}>Previous</button>
                <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
                <button onClick={nextSlide}>Next</button>
                </div>
        </div>
    </div>

      
    
    )
}