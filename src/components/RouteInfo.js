import React from "react";


const RouteInfo = props => {
    return (
        <div key={props.route.id}>
            <img src={props.route.imgSqSmall} alt={props.route.name}/>
            <h3>{props.route.name}</h3>
            <p><strong>Location: </strong>
                <ul>
                    {props.route.location.map(place => 
                        <li>{place}</li>)}
                </ul>
            </p>
            <p><strong>Type: </strong>{props.route.type}</p>
            <p><strong>Pitches: </strong>{props.route.rating}</p>
            <a href={props.route.url}><i class="fas fa-mountain"></i></a>
        </div>
    );
}


export default RouteInfo;