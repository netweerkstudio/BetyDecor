import { useState, useEffect } from 'react';
import Swipper from './Swipper';

function Reviews() {
  const reviewsData = [
    {
      name: 'Naima K.',
      review: "J'ai eu une expérience incroyable avec BetyDecor ! Très professionnelle et à l'écoute, elle a transformé mon salon en un espace moderne et chaleureux. Je recommande vivement !"
    },
    {
      name: 'Sarah M.',
      review: "La designer de BetyDecor est incroyable ! Elle a parfaitement compris mes goûts et a créé une cuisine fonctionnelle et élégante. Le rendu 3D m'a beaucoup aidé à visualiser le projet. Merci encore !"
    },
    {
      name: 'Adil D.',
      review: "Je suis extrêmement satisfait du service de BetyDecor. Le respect des délais et la qualité du travail sont irréprochables. Mon bureau est maintenant un espace de travail inspirant et agréable. Je la recommande sans hésitation."
    }
  ];

  const [reviewIndex, setReviewIndex] = useState(0);
  const reviewsLength = reviewsData.length;
  const [scrollPosition, setScrollPosition] = useState(0);
  const [reviewsTop, setReviewsTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const el = document.querySelector('.Reviews');
    if (el) setReviewsTop(el.getBoundingClientRect().top + window.scrollY);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setReviewIndex(prev => (prev + 1) % reviewsLength);
    }, 17000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setReviewIndex(prev => (prev + 1) % reviewsLength);
  const back = () => setReviewIndex(prev => (prev - 1 + reviewsLength) % reviewsLength);

  const getToDisplay = () => {
    const sliced = reviewsData.slice(reviewIndex, reviewIndex + 3);
    if (sliced.length < 3) return [...sliced, ...reviewsData.slice(0, 3 - sliced.length)];
    return sliced;
  };

  const displayed = getToDisplay();

  return (
    <div className="Reviews">
      <h1 className="title">ce que disent nos clients</h1>
      <div className={reviewsTop < scrollPosition + 400 ? 'ReviewsContainer animate' : 'ReviewsContainer'}>
        <div className="cards">
          {displayed.map((review, index) => (
            <div
              key={index}
              className={`card ${index === 1 ? 'active' : ''}`}
              onClick={next}
            >
              <p>{review.review}</p>
              <h3>{review.name}</h3>
            </div>
          ))}
        </div>
      </div>
      <Swipper next={next} back={back} imageIndex={reviewIndex} bgImages={reviewsData} />
    </div>
  );
}
export default Reviews;
