import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const locations = {
    "AHMEDABAD, ": {"lat": 23.022505, "lng": 72.5713621},
    "ALBANY, NY": {"lat": 42.6525793, "lng": -73.7562317},
    "ALBUQUERQUE, NM": {"lat": 35.110703, "lng": -106.609991},
    "ALEXANDRIA, VA": {"lat": 38.8048355, "lng": -77.0469214},
    "ANCHORAGE, AK": {"lat": 61.2180556, "lng": -149.9002778},
    "ATLANTA, GA": {"lat": 33.7490, "lng": -84.3880},
    "AUSTIN, TX": {"lat": 30.2672, "lng": -97.7431},
    "BALTIMORE, MD": {"lat": 39.2903848, "lng": -76.6121893},
    "BATON ROUGE, LA": {"lat": 30.451467, "lng": -91.187147},
    "BILLINGS, MT": {"lat": 45.7833, "lng": -108.5007},
    "BIRMINGHAM, AL": {"lat": 33.5186, "lng": -86.8104},
    "BOSTON, MA": {"lat": 42.3601, "lng": -71.0589},
    "BOULDER, CO": {"lat": 40.015, "lng": -105.2705},
    "BUFFALO, NY": {"lat": 42.8864, "lng": -78.8784},
    "CHARLESTON, SC": {"lat": 32.7765, "lng": -79.9311},
    "CHARLOTTE, NC": {"lat": 35.2271, "lng": -80.8431},
    "CHICAGO, IL": {"lat": 41.8781, "lng": -87.6298},
    "CINCINNATI, OH": {"lat": 39.1031, "lng": -84.5120},
    "CLEVELAND, OH": {"lat": 41.4993, "lng": -81.6944},
    "COLORADO SPRINGS, CO": {"lat": 38.8339, "lng": -104.8214},
    "DALLAS, TX": {"lat": 32.7767, "lng": -96.7970},
    "DENVER, CO": {"lat": 39.7392, "lng": -104.9903},
    "DES MOINES, IA": {"lat": 41.5868, "lng": -93.6250},
    "DETROIT, MI": {"lat": 42.3314, "lng": -83.0458},
    "DURHAM, NC": {"lat": 35.9940, "lng": -78.8986},
    "EL PASO, TX": {"lat": 31.7619, "lng": -106.4850},
    "FRESNO, CA": {"lat": 36.7378, "lng": -119.7871},
    "FT. WORTH, TX": {"lat": 32.7555, "lng": -97.3308},
    "HOUSTON, TX": {"lat": 29.7604, "lng": -95.3698},
    "INDIANAPOLIS, IN": {"lat": 39.7684, "lng": -86.1580},
    "JACKSONVILLE, FL": {"lat": 30.3322, "lng": -81.6557},
    "KANSAS CITY, MO": {"lat": 39.0997, "lng": -94.5786},
    "LAS VEGAS, NV": {"lat": 36.1699, "lng": -115.1398},
    "LOS ANGELES, CA": {"lat": 34.0522, "lng": -118.2437},
    "LOUISVILLE, KY": {"lat": 38.2527, "lng": -85.7585},
    "MEMPHIS, TN": {"lat": 35.1495, "lng": -90.0490},
    "MIAMI, FL": {"lat": 25.7617, "lng": -80.1918},
    "MILWAUKEE, WI": {"lat": 43.0389, "lng": -87.9065},
    "MINNEAPOLIS, MN": {"lat": 44.9778, "lng": -93.2650},
    "MONTGOMERY, AL": {"lat": 32.3792, "lng": -86.3077},
    "NASHVILLE, TN": {"lat": 36.1627, "lng": -86.7816},
    "NEW ORLEANS, LA": {"lat": 29.9511, "lng": -90.0715},
    "NEW YORK, NY": {"lat": 40.7128, "lng": -74.0060},
    "OKLAHOMA CITY, OK": {"lat": 35.4676, "lng": -97.5164},
    "OMAHA, NE": {"lat": 41.2565, "lng": -95.9345},
    "ORLANDO, FL": {"lat": 28.5383, "lng": -81.3792},
    "PHOENIX, AZ": {"lat": 33.4484, "lng": -112.0740},
    "PITTSBURGH, PA": {"lat": 40.4406, "lng": -79.9959},
    "PORTLAND, OR": {"lat": 45.5051, "lng": -122.6750},
    "RALEIGH, NC": {"lat": 35.7796, "lng": -78.6382},
    "RICHMOND, VA": {"lat": 37.5407, "lng": -77.4360},
    "SACRAMENTO, CA": {"lat": 38.5816, "lng": -121.4944},
    "ST. LOUIS, MO": {"lat": 38.6270, "lng": -90.1994},
    "SAN ANTONIO, TX": {"lat": 29.4241, "lng": -98.4936},
    "SAN DIEGO, CA": {"lat": 32.7157, "lng": -117.1611},
    "SAN FRANCISCO, CA": {"lat": 37.7749, "lng": -122.4194},
    "SEATTLE, WA": {"lat": 47.6062, "lng": -122.3321},
    "SIOUX FALLS, SD": {"lat": 43.5473, "lng": -96.7311},
    "ST. PAUL, MN": {"lat": 44.9537, "lng": -93.0900},
    "TAMPA, FL": {"lat": 27.9506, "lng": -82.4572},
    "TUCSON, AZ": {"lat": 32.2226, "lng": -110.9747},
    "WASHINGTON, DC": {"lat": 38.9072, "lng": -77.0369},
    "WICHITA, KS": {"lat": 37.6872, "lng": -97.3301}
  };
  

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 39.8283, // Approximate center of the US (you can adjust this)
  lng: -98.5795
};

const MyMapComponent = () => {
  return (
    <div className='full-screen-width'> 
        <LoadScript googleMapsApiKey="AIzaSyCb2F0_1i-ADzdU3NSqJSjbPxzh_8KCbR8">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={4}
      >
        {Object.keys(locations).map((locationKey) => {
          const location = locations[locationKey];
          return (
            <Marker
              key={locationKey}
              position={{ lat: location.lat, lng: location.lng }}
              title={locationKey}
            />
          );
        })}
      </GoogleMap>
    </LoadScript>
    </div>
    
  );
};

export default MyMapComponent;
