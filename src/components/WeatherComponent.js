import React,{Component} from 'react';
import axios from 'axios'
import { connect } from 'react-redux';
import TempCard from './temperaturecard/tempcard/TempCard';
//weather api url api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
class Appi extends Component{
    state={
        list:{},
        isloading:true,
        iserror:false,
        parameters:{
            countryname:'',
            temperature:'',
            humidty:'',
            pressure:''
        },
    }   
    apikey='e25ac564d4395a4b10c4fcbfb632ccc7'
    lat=this.props.geo.lat;
    lng=this.props.geo.lng;
componentDidMount=()=>{
    axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lng}&appid=${this.apikey}`).then((response)=>{
        let mainweather=response.data.main;
        let temperature=mainweather.temp;
        let temp_min=mainweather.temp_min;
        let temp_max=mainweather.temp_max;
        let pressure=mainweather.pressure;
        let humidty=mainweather.humidity;
        let countryname=response.data.name;
        console.log(countryname+temperature)
        this.setState({
                list:{countryname,temperature,temp_min,temp_max,pressure,humidty},
                isloading:false,
                parameters:{
                    countryname,temperature,humidty,pressure
                }
        })
}).then((error)=>{
    this.setState({
        iserror:true
    })
})
}
componentDidUpdate=(prevProps)=>{
    if(this.props.geo !== prevProps.geo){
        axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${this.props.geo.lat}&lon=${this.props.geo.lng}&appid=${this.apikey}`).then((response)=>{
            let mainweather=response.data.main;
            let temperature=mainweather.temp;
            let temp_min=mainweather.temp_min;
            let temp_max=mainweather.temp_max;
            let pressure=mainweather.pressure;
            let humidty=mainweather.humidity;
            let countryname=response.data.name;
            this.setState({
                    list:{countryname,temperature,temp_min,temp_max,pressure,humidty},
                    isloading:false,
                    parameters:{
                        countryname,temperature,humidty,pressure
                    }
            })
    }).then((error)=>{
        this.setState({
            iserror:true,
            isloading:false
        })
    })  
}    
}
    render()
    {
       return(
       <div className="container">
          {/* <LeftContainer list={this.state.list}></LeftContainer> */}
          <TempCard countryname={this.state.parameters.countryname} addlist={()=>this.props.additem(this.state.list)} temperature={this.state.parameters.temperature} pressure={this.state.parameters.pressure} humidty={this.state.parameters.humidty}></TempCard>
        </div>
            )
    };  
}
const mapstatetoprops=(state)=>{
    return {
        geo:state.map.mapcoordinates,
    }
}
const mapactionstoprops=(dispatch)=>{
    return{
        additem:(load)=>dispatch({type:'ADD',payload:load})
    }
}
export default connect(mapstatetoprops,mapactionstoprops)(Appi);