import { useState, useEffect } from 'react';
import Swipper from './Swipper';
import worksData from '../Data/Works.json';

function Details() {
  const [workId, setWorkId] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('workId');
    if (!id) { setNotFound(true); return; }
    const numId = parseInt(id);
    const resolved = numId === worksData.works.length ? 0 : numId;
    setWorkId(resolved);
    window.scrollTo(0, 20);
  }, []);

  if (notFound) {
    return (
      <div className="not-found">
        <div className="not-found-container">
          <h1>404 Page non trouvée</h1>
          <p>Désolé, la page que vous recherchez n'existe pas.</p>
          <div className="button"><a href="/">Retourner à l'accueil</a></div>
        </div>
      </div>
    );
  }

  if (workId === null) return null;

  const project = worksData.works[workId];
  const resolveImg = (path) => path.replace(/^\.\//, '/');

  const prevWorkId = workId > 0 ? workId - 1 : worksData.works.length - 1;
  const prevProject = worksData.works[prevWorkId];

  return (
    <>
      <div className="Details">
        <div className="detailsContainer">
          <div className="title">détails</div>
          <div className="detailsHeader">
            <div className="card">
              <h2>Projet</h2>
              <h3>{project.name}</h3>
            </div>
            <div className="card">
              <h2>Lieu</h2>
              <h3>{project.lieu}</h3>
            </div>
          </div>
          <div className="garelly">
            {project.images.map((image, index) => (
              <div key={index} className={`card ${(index === 1 || index === 2 || index === 5 || index === 6) ? 'active' : ''}`}>
                <img src={resolveImg(image)} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Details;
