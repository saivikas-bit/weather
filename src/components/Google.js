import React, { useState } from 'react'

import MapPicker from 'react-google-map-picker'
import { connect } from 'react-redux';

const DefaultLocation = { lat: 10, lng: 106};
const DefaultZoom = 10;

const App = (props) => {

  const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);

  const [location, setLocation] = useState(defaultLocation);
  const [zoom, setZoom] = useState(DefaultZoom);

  function handleChangeLocation (lat, lng){
    setLocation({lat:lat, lng:lng});
    props.senddata({lat, lng})
  }
  
  function handleChangeZoom (newZoom){
    setZoom(newZoom);
  }

  function handleResetLocation(){
    setDefaultLocation({ ... DefaultLocation});
    setZoom(DefaultZoom);
  }

  return (
    <>
  <label>Latitute:</label><input type='text' value={location.lat} disabled/>
  <label>Longitute:</label><input type='text' value={location.lng} disabled/>
  
  <MapPicker defaultLocation={defaultLocation}
    zoom={zoom}
    style={{height:'400px',width:'100%'}}
    onChangeLocation={handleChangeLocation} 
    onChangeZoom={handleChangeZoom}
    apiKey='AIzaSyD07E1VvpsN_0FvsmKAj4nK9GnLq-9jtj8'/>
  </>
  );
}
const mapdispatchtoprops=(dispatch)=>{
      return {
        senddata:(load)=>dispatch({type:'GET',payload:load})
      }

}
const mapstatetopprops=()=>({})

export default connect(mapstatetopprops,mapdispatchtoprops)(App)
