/* Módulo OMDBWrapper*/
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;    
import axios from "axios";
const APIKEY = "e501a5bb"; // Poné tu APIKEY, esta no funciona.
const OMDBSearchByPage = async (searchText, page = 1) => {
    let returnObject = {
        respuesta : false,
        cantidadTotal : 0,
        datos : {}
    };

    const requestString = `https://www.omdbapi.com/?apikey=${APIKEY}&s=${searchText}&page=${page}`;
    const apiResponse = await axios.get(requestString);
    returnObject.datos = apiResponse.data.Search;  
    returnObject.respuesta=apiResponse.data.Response;
    returnObject.cantidadTotal = apiResponse.data.totalResults;
    return returnObject;
};

const OMDBSearchComplete = async (searchText, page=1) => {
let returnObject = {
respuesta : false,
cantidadTotal : 0,
datos : {}
};
const requestString = `https://www.omdbapi.com/?apikey=${APIKEY}&s=${searchText}&page=${page}`;
    const apiResponse = await axios.get(requestString);
    returnObject.datos = apiResponse.data.Search;
    returnObject.respuesta=apiResponse.data.Response;  
    returnObject.cantidadTotal = apiResponse.data.totalResults;
    return returnObject;
};
const OMDBGetByImdbID = async (imdbID, page=1) => {
let returnObject = {
respuesta : false,
cantidadTotal : 0,
datos : {}
};
const requestString = `https://www.omdbapi.com/?apikey=${APIKEY}&s=${imdbID}&page=${page}`;
    const apiResponse = await axios.get(requestString);
    returnObject.datos = apiResponse.data.Search;
    returnObject.respuesta=apiResponse.data.Response;  
    returnObject.cantidadTotal = apiResponse.data.totalResults;
    return returnObject;
    };
// Exporto todo lo que yo quiero exponer del módulo:
export {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID};