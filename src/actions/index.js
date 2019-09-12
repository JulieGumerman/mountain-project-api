import axios from "axios";

export const FETCH_ROUTES_START = "FETCH_ROUTE_START";
export const FETCH_ROUTES_FAILURE = "FETCH_ROUTE_FAILURE";
export const FETCH_ROUTES_SUCCESS = "FETCH_ROUTE_SUCCESS";

export const getRoutes = () => dispatch => {
    dispatch({type: FETCH_ROUTES_START});
    axios.get("https://www.mountainproject.com/data/get-routes?routeIds=105748391,105750454,105749956&key=200453524-2caf8de272d1437de7690de41645ec66")
        .then(response => {
            console.log(response);
            dispatch({ type: FETCH_ROUTES_SUCCESS, payload: response.data.routes})
        })
        .catch(err => {
            dispatch({ type: FETCH_ROUTES_FAILURE, payload: `${err}`})
        })
}