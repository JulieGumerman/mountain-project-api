import React from "react";
import mapAgeCleaner from "map-age-cleaner";


const RouteInfo = props => {
    return (
        <div key={props.route.id}>
            <img src={props.route.imgSqSmall} alt={props.route.name}/>
            <h3>{props.route.name}</h3>
            <p><strong>Location: </strong>{props.route.location.map(place => place)}</p>
            <p><strong>Type: </strong>{props.route.type}</p>
            <p><strong>Pitches: </strong>{props.route.rating}</p>
        </div>
    );
}


export default RouteInfo;