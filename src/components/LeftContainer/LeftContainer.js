import React from 'react'
import { connect } from 'react-redux';
import Listitems from './listitems/Listitems';

const LeftContainer=(props)=> {
          console.log(props.list)
            const list=props.list;
            const rare= list.length!==0?list.map((item,index)=>{
            return <Listitems  key={index}countryname={item.countryname} index={index} temp={item.temperature} tempmin={item.temp_min} tempmax={item.temp_max} pressure={item.pressure} humidty={item.humidty} ></Listitems>
        }):null;
    return (
        <div className="container">
                {rare}
        </div>
    )
}
const mapstatetoprops=(state)=>{
    return {
        list:state.weather.list
    }
}
export default connect(mapstatetoprops)(LeftContainer)