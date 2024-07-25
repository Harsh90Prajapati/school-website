import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Location = () => {

    const mapContainerStyle = {
        width: '100%',
        height: '400px'
    };
    
    const center = {
        lat: -3.745,
        lng: -38.523
    };
    
    const onLoad = marker => {
        console.log('marker: ', marker)
    }
    
  return (
    <section className="container mx-auto mt-10 md:mt-0 p-4">
    <div className="container mx-auto">
      <LoadScript googleMapsApiKey="AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
      >
        <Marker
          onLoad={onLoad}
          position={center}
        />
      </GoogleMap>
    </LoadScript>
    </div>
    
    </section>
  )
}

export default Location