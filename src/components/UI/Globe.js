import Globe from 'react-globe.gl';
import { useEffect, useState } from 'react';

import Layer from '@/assets/layer.png';

const GlobeModule = ({ textIsInView }) => {
  const [countries, setCountries] = useState({ features: [] });
  const [cablePaths, setCablePaths] = useState([]);

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
  }, []);

  return (
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
      pathColor={(path) => path.properties.color}
      pathLabel={(path) => path.properties.name}
      pathDashLength={0.1}
      pathDashGap={0.008}
      pathDashAnimateTime={12000}
    />
  );
};

export default GlobeModule;
