import React from 'react'
import Appi from '../WeatherComponent';
import Navbar from '../navbar/Navbar';
import Google from '../Google';
import LeftContainer from '../LeftContainer/LeftContainer';
// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
    return (
 <div>
     <Navbar></Navbar>
     <div className="container m-3">
      <div className="row">
        <div className="col-6">
          <div>
            <Google></Google>
          </div>
        </div>
        <div className="col-3">
           <Appi></Appi>
        </div>
        <div className="col-3">
          <LeftContainer></LeftContainer>
        </div>
      </div> 
    </div>
            
        </div>
    )
}
