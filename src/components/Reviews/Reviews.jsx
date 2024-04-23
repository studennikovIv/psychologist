import  './style.css'
import { useState } from 'react';
import slideNotHaveAvatar from '../../images/slider/slideNotHaveAvatar.png'
import coolRating from '../../images/slider/coolRating.png'
import badRating from '../../images/slider/badRating.png'
import rightVector from '../../images/slider/vectorRight.png'



export const Reviews = () =>{
  // const images = [
  //   img,
  //   img2,
  //   img,
  // ];
  const testObj = [
    {
      img:slideNotHaveAvatar,
      name:'adam',
      rating: 3,
      reviews:'С Яной мы обсуждали многие проблемы и она мне нравилась тем, что Яна абсолютно ко всему, чтобы я не говорил относилась безоценочно. При этом, мне всегда было интересно услышать её точку зрения. Нередко мнение моей собеседницы приводило к тому, что я смотрел на ситуацию с другой стороны, о которой даже и не мог бы подумать сам. Её поддержка, умение слушать, выдержать, её способность хорошо валидировать мои переживания — являлось для меня отличной опорой. Можно сказать, Яна для меня была и психологом, а самое главное — другом. А её эрудированность по теме психологии всегда меня поражали. Я ей искренне и безмерно буду всегда благодарен за уделенное мне время, за помощь, за направление, за поддержку. У этого человека очень много энергии, эмпатии, желания развиваться и помогать людям. Горячо рекомендую!'
    },
    {
      img:slideNotHaveAvatar,
      name:'adam',
      rating: 3,
      reviews:'С Яной мы обсуждали многие проблемы и она мне нравилась тем, что Яна абсолютно ко всему, чтобы я не говорил относилась безоценочно. При этом, мне всегда было интересно услышать её точку зрения. Нередко мнение моей собеседницы приводило к тому, что я смотрел на ситуацию с другой стороны, о которой даже и не мог бы подумать сам. Её поддержка, умение слушать, выдержать, её способность хорошо валидировать мои переживания — являлось для меня отличной опорой. Можно сказать, Яна для меня была и психологом, а самое главное — другом. А её эрудированность по теме психологии всегда меня поражали. Я ей искренне и безмерно буду всегда благодарен за уделенное мне время, за помощь, за направление, за поддержку. У этого человека очень много энергии, эмпатии, желания развиваться и помогать людям. Горячо рекомендую!'
    },
    {
      img:slideNotHaveAvatar,
      name:'adam',
      rating: 3,
      reviews:'С Яной мы обсуждали многие проблемы и она мне нравилась тем, что Яна абсолютно ко всему, чтобы я не говорил относилась безоценочно. При этом, мне всегда было интересно услышать её точку зрения. Нередко мнение моей собеседницы приводило к тому, что я смотрел на ситуацию с другой стороны, о которой даже и не мог бы подумать сам. Её поддержка, умение слушать, выдержать, её способность хорошо валидировать мои переживания — являлось для меня отличной опорой. Можно сказать, Яна для меня была и психологом, а самое главное — другом. А её эрудированность по теме психологии всегда меня поражали. Я ей искренне и безмерно буду всегда благодарен за уделенное мне время, за помощь, за направление, за поддержку. У этого человека очень много энергии, эмпатии, желания развиваться и помогать людям. Горячо рекомендую!'
    }
  ]
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testObj.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testObj.length - 1 : prevIndex - 1
      );
    };
    const { img, name, rating, reviews } = testObj[0];
    return(
     

    <div className="reviews">
        <div className="conteiner">
            <h3>Отзывы</h3>
            <div className="slider">
                <button onClick={prevSlide}>Previous</button>
                  <div className="conteinerContentSlide">
                    <div className="top">
                      <div className="left">
                        <img src={img} alt="imgSlide" />
                        <h4 className='nameReviewers'>{name}</h4>
                      </div>
                      <div className="right">
                       {rating === 5 &&(
                        <div className='starConteiner'>
                          <img src={coolRating} alt='/'/>
                          <img src={coolRating} alt='/'/>
                          <img src={coolRating} alt='/'/>
                          <img src={coolRating} alt='/'/>
                          <img src={coolRating} alt='/'/>
                        </div>
                       )}
                       {rating === 4 &&(
                        <div className='starConteiner'>
                          <img src={coolRating} alt='/'/>
                          <img src={coolRating} alt='/'/>
                          <img src={coolRating} alt='/'/>
                          <img src={coolRating} alt='/'/>
                          <img src={badRating} alt='/'/>
                        </div>
                       )}
                       {rating === 3 &&(
                        <div className='starConteiner'>
                          <img src={coolRating} alt='/'/>
                          <img src={coolRating} alt='/'/>
                          <img src={coolRating} alt='/'/>
                          <img src={badRating} alt='/'/>
                          <img src={badRating} alt='/'/>
                        </div>
                       )}
                       {rating === 2 &&(
                        <div className='starConteiner'>
                          <img src={coolRating} alt='/'/>
                          <img src={coolRating} alt='/'/>
                          <img src={badRating} alt='/'/>
                          <img src={badRating} alt='/'/>
                          <img src={badRating} alt='/'/>
                        </div>
                       )}
                       {rating === 1 &&(
                        <div className='starConteiner'>
                          <img src={coolRating} alt='/'/>
                          <img src={badRating} alt='/'/>
                          <img src={badRating} alt='/'/>
                          <img src={badRating} alt='/'/>
                          <img src={badRating} alt='/'/>
                        </div>
                       )}
                      </div>
                    </div>
                    <div className="center">
                      {reviews}
                    </div>
                    <div className="bottom">
                      <div className="left">
                        <button className='readMore'>
                          Читать больше <img src={rightVector} alt="" />
                        </button>
                        
                      </div>
                      <div className="right"></div>
                    </div>
                  </div>
                <button onClick={nextSlide}>Next</button>
                </div>
        </div>
    </div>

      
    
    )
}