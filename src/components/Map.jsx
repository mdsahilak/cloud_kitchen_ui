import React from 'react';
import mapboxgl from 'mapbox-gl';
import { useState, useRef, useEffect } from 'react';

const Map = () => {
    mapboxgl.accessToken = 'pk.eyJ1IjoidzIwMDA1MjgiLCJhIjoiY2x2b256d294MHNmYTJxazd1MmVxNGs4eCJ9.e5ktgJ226IJkd2m5_VQkkQ';

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-0.127758);
    const [lat, setLat] = useState(51.507351);
    const [zoom, setZoom] = useState(13);

    useEffect(() => {
      const loggedIn = localStorage.getItem('token') != null

      if (!loggedIn) {
          window.location = '/login'
      }
    }, []);

    useEffect(() => {
        if (map.current) return;
         // initialize map only once

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom
        });

        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
          });
    });

    return (
        <div>
          <div className="sidebar">
            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
          </div>
          <div ref={mapContainer} className="map-container" />
        </div>
      )
}

export default Map;