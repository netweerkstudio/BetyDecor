function Swipper({ next, back, imageIndex, bgImages }) {
  return (
    <div className="swipper">
      <div className="chevrons">
        <i onClick={back} className="fa-solid fa-chevron-left"></i>
        <i onClick={next} className="fa-solid fa-chevron-right"></i>
      </div>
      <ul>
        {bgImages.map((item, index) => (
          <li key={index} className={index === imageIndex ? 'active' : ''}></li>
        ))}
      </ul>
    </div>
  );
}
export default Swipper;
