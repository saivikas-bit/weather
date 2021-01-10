import React from 'react'
import { connect } from 'react-redux';
const Listitems=(props)=> {
    return (
        <div className="dropdown  mb-2 btn-large" style={{width:'100%'}}>
         <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {props.countryname} ..........
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="/">temperature:{props.temp}</a>
            <a className="dropdown-item" href="/">MinTemperature:{props.tempmin}</a>
           <a className="dropdown-item" href="/">MaxTemperature:{props.tempmax}</a>
           <a className="dropdown-item" href="/">Humidty:{props.humidty}</a>
           <a className="dropdown-item" href="/">Pressure:{props.pressure}</a>
           <button className="btn btn-primary" onClick={()=>props.deleteitem(props.index)} >Delete</button>
        </div>
        </div>
    )
}
const mapdispatchtoprops=(dispatch)=>{
    return {
        deleteitem:(index)=>dispatch({type:'DELETE',payload:index})
    }
}
export default connect(null,mapdispatchtoprops)(Listitems);