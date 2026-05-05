import { useState, useEffect } from 'react';

function Faqs() {
  const faqsData = [
    {
      question: "Combien de temps faut-il pour réaliser un projet de design intérieur ?",
      answer: "Le temps nécessaire varie en fonction de l'ampleur et de la complexité du projet. En général, un projet résidentiel standard prend entre 4 et 12 semaines."
    },
    {
      question: "Fournissez-vous une liste des dernières tendances en design et couleurs ?",
      answer: "Oui, chez BetyDecor, nous nous tenons informés des dernières tendances en design intérieur et couleurs et nous les partageons avec nos clients."
    },
    {
      question: "Réalisez-vous des plans en 3D ?",
      answer: "Oui, nous offrons des plans en 3D pour aider nos clients à visualiser leur projet avant sa réalisation."
    }
  ];

  const [scrollPosition, setScrollPosition] = useState(0);
  const [faqsTop, setFaqsTop] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const el = document.querySelector('.Faqs');
    if (el) setFaqsTop(el.getBoundingClientRect().top + window.scrollY);
  }, []);

  const toggleFaq = (index) => setActiveIndex(activeIndex === index ? null : index);

  return (
    <div id="faqs" className="Faqs">
      <div className={faqsTop < scrollPosition + 400 ? 'FaqsContainer animate' : 'FaqsContainer'}>
        <div className="faqsAside">
          <h1 className="title">Faqs</h1>
          <p>Avez-vous des questions et cherchez des réponses? <br /> Voici les questions les plus posées !</p>
        </div>
        <div className="faqsContent">
          <div className="cards">
            {faqsData.map((faq, index) => (
              <div key={index} className={`card ${activeIndex === index ? 'active' : ''}`}>
                <div className="faqHeader" onClick={() => toggleFaq(index)}>
                  <h3>{faq.question}</h3>
                  <i>{activeIndex === index ? '-' : '+'}</i>
                </div>
                <div className="faqContent">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Faqs;
