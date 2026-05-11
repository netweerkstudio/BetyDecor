import { useState, useEffect } from 'react';
import Swipper from './Swipper';
import worksData from '../Data/Works.json';

const toSlug = (name) =>
  name.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

function Work({ workId }) {
  const [projectIndex, setProjectIndex] = useState(workId ?? 0);
  const projectsLength = worksData.works.length;
  const [scrollPosition, setScrollPosition] = useState(0);
  const [workTop, setWorkTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const el = document.querySelector('.Work');
    if (el) setWorkTop(el.getBoundingClientRect().top + window.scrollY);
  }, []);

  useEffect(() => {
    if (!workId) {
      const interval = setInterval(() => {
        setProjectIndex(prev => (prev + 1) % projectsLength);
      }, 17000);
      return () => clearInterval(interval);
    }
  }, []);

  const next = () => setProjectIndex(prev => (prev + 1) % projectsLength);
  const back = () => setProjectIndex(prev => (prev - 1 + projectsLength) % projectsLength);

  const getProjectsToDisplay = () => {
    const sliced = worksData.works.slice(projectIndex, projectIndex + 3);
    if (sliced.length < 3) {
      return [...sliced, ...worksData.works.slice(0, 3 - sliced.length)];
    }
    return sliced;
  };

  const displayed = getProjectsToDisplay();
  const resolveImg = (path) => path.replace(/^\.\//, '/');

  return (
    <div id="work" className="Work">
      <h1 className="title">Nos Travaux</h1>
      <div className={workTop < scrollPosition + 400 ? 'WorkContainer animate' : 'WorkContainer'}>
        <div className="cards">
          {displayed.map((project, index) => {
            const isCenter = index === 1;
            const CardTag = isCenter ? 'a' : 'div';
            return (
              <CardTag
                key={index}
                href={isCenter ? `/travaux/${toSlug(project.name)}` : undefined}
                className={`card ${isCenter ? 'active' : ''}`}
                style={{
                  textDecoration: 'none',
                  background: `url(${resolveImg(project.images[0])}) no-repeat center / cover,
                    ${isCenter ? 'linear-gradient(to top, rgba(0,0,0,70%), rgba(0,0,0,0))' : 'rgba(0,0,0,70%)'}`,
                }}
                onClick={isCenter ? undefined : next}
              >
                <div className="cardContent">
                  <h3>{project.name}</h3>
                  <div className="button">
                    {isCenter && (
                      <span className="fake-btn">
                        Afficher les détails <i className="fa-solid fa-arrow-right"></i>
                      </span>
                    )}
                  </div>
                </div>
              </CardTag>
            );
          })}
        </div>
      </div>
      <Swipper next={next} back={back} imageIndex={projectIndex} bgImages={worksData.works} />
    </div>
  );
}
export default Work;
