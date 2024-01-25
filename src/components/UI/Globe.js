import Globe from 'react-globe.gl';
import { useEffect, useState, useRef } from 'react';
import { OrbitControls } from '@react-three/drei';

const GlobeModule = ({ textIsInView }) => {
  const [countries, setCountries] = useState({ features: [] });
  const [cablePaths, setCablePaths] = useState([]);
  const [globeReady, setGlobeReady] = useState(false);
  const globeRef = useRef();

  const startTime = 1000;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/ne_110m_admin_0_countries.geojson');
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    fetch('/cables.json')
      .then((r) => r.json())
      .then((cablesGeo) => {
        let cablePaths = [];
        cablesGeo.features.forEach(({ geometry, properties }) => {
          geometry.coordinates.forEach((coords) =>
            cablePaths.push({ coords, properties })
          );
        });

        setCablePaths(cablePaths);
      });

    if (!globeRef.current) {
      return;
    }
    globeRef.current.pointOfView(
      {
        lat: 39.609913,
        lng: -105.962477,
        altitude: 3,
      },
      startTime
    );
    globeRef.current.controls().enableZoom = false;
    globeRef.current.controls().autoRotate = true;
    globeRef.current.controls().autoRotateSpeed = 0.9;
    globeRef.current.controls().enablePan = false;
  }, []);

  return (
    <div className='hover:cursor-grab focus:cursor-grabbing'>
      <Globe
        hexPolygonsData={countries.features}
        hexPolygonResolution={3}
        hexPolygonMargin={0.3}
        hexPolygonUseDots={true}
        hexPolygonColor={() => '#063868'}
        hexPolygonLabel={({ properties: d }) => `
        <b>${d.ADMIN} (${d.ISO_A2})</b> <br />
        Population: <i>${d.POP_EST}</i>
      `}
        pathsData={cablePaths}
        pathPoints='coords'
        pathPointLat={(p) => p[1]}
        pathPointLng={(p) => p[0]}
        pathColor={(path) => '#84c0df'}
        pathLabel={(path) => path.properties.name}
        pathDashLength={0.1}
        pathDashGap={0.008}
        pathDashAnimateTime={12000}
        onGlobeReady={() => setGlobeReady(true)}
        animateIn={false}
        ref={globeRef}
        backgroundColor='#0d1115'
      />
    </div>
  );
};

export default GlobeModule;
