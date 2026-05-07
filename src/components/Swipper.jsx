function Swipper({ next, back, imageIndex, bgImages }) {
  return (
    <div className="swipper">
      <div className="swipper-controls" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', margin: '20px 0' }}>
        <button className="hero-arrow" onClick={back} aria-label="Précédent">
          <i className="fa-solid fa-chevron-left" />
        </button>
        
        <div className="swipper-dots">
          {bgImages.map((item, index) => (
            <button
              key={index}
              className={`swipper-dot ${index === imageIndex ? 'active' : ''}`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

        <button className="hero-arrow" onClick={next} aria-label="Suivant">
          <i className="fa-solid fa-chevron-right" />
        </button>
      </div>
    </div>
  );
}
export default Swipper;
