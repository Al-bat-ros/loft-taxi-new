import React, {useRef, useEffect, useState} from 'react'
 import  mapboxgl from 'mapbox-gl'


export default function Maps(events) {
   const mapContainer = useRef(null);


     useEffect(() => {
       mapboxgl.accessToken = 'pk.eyJ1IjoiYWxla3NleWJhdCIsImEiOiJjbGIwNzV0djIweDFzM3FteGtzMW41aG01In0.q23aW-Gxw2IAYms-I4xrJw';
      const map = new mapboxgl.Map({
           container: mapContainer.current, // container ID
           style: 'mapbox://styles/mapbox/streets-v12', // style URL
           center: [30.3056504, 59.9429126], // starting position [lng, lat]
           zoom: 10 // starting zoom
       });

         return () => {
           map.remove();
         }
      
     },[]);




  return (
    <div className='map-wrapper'>
        <div data-testid="map" className='map' ref={mapContainer}></div>
    </div>
  )
}


