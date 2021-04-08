import { useEffect, useState } from 'react';
import { Route } from './types';

const API_URL = process.env.REACT_APP_API_URL;

function App() {
  const [routes, setRoutes] = useState<Route[]>([]);

  useEffect(() => {
    (async () => {
      try {

        const response = await fetch(`${API_URL}/routes`);
        const data = await response.json();
        setRoutes(data);
      } catch (err) {
        console.error(err);
        setRoutes([]);
      }
    })();
  }, []);

  return (
    <div>
      <h1>Routes</h1>
      {routes.map((route) => (
        <div>
          <h4>{route.title}</h4>
          <ol>
            <li>[lat: {route.startPosition.latitude}, lng: {route.startPosition.longitude}]</li>
            <li>[lat: {route.endPosition.latitude}, lng: {route.endPosition.longitude}]</li>
          </ol>
        </div>
      ))}
    </div>
  );
}

export default App;
