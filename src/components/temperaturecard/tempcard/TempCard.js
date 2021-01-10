import React from 'react'

export default function TempCard(props) {
    return (
        <div className="card">
            <div className="card-title h5 p-4 pl-2">
               countryname:{props.countryname}
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">temperature:{props.temperature}</li>
                <li className="list-group-item">humidity:{props.humidty}</li>
                <li className="list-group-item">pressure:{props.pressure}</li>
            </ul>
            <button className="btn btn-primary" onClick={()=>props.addlist()}>Add</button>
        </div>
    )
}
