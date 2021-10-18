import axios from "axios";

export const GET_All_COUNTRIES = "GET_All_COUNTRIES ";
export const ADD_ACTIVITY = " GET_ACTIVITY ";
export const SEARCH_BY_ID = "SEARCH_BY_ID";
export const SEARCH_BY_NAME = " SEARCH_BY_NAME";
export const COUNTRIES_DELETE = " COUNTRIES_DELETE";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const FILTER_ORDER_ASC = "GET_ORDER_ASC";
export const FILTER_ORDER_DESC = "GET_ORDER_DESC";
export const FILTER_ORDER_POPULATION = "GET_ORDER_POPULATION";
export const FILTER_BY_ACTIVITY_TOURIST = "GET_ORDER_POPULATION";



export function getAllCountry() {
  return async (dispatch) => {
    const { data } = await axios.get(`/countries`);
    dispatch({ type: GET_All_COUNTRIES , payload: data });
  };
}

export const getCountryById = (id) => {
  return async (dispatch) => {
    const { data } = await axios.get(`/countries/countriesDetail/${id}`);
    dispatch({ type: SEARCH_BY_ID, payload: data });
  };
};

export const searchByName = (payload) => {
  return async (dispatch) => {
     const { data } = await axios.get(`/countries/name?q=${payload}`);
    dispatch({ type: SEARCH_BY_NAME, payload: data });
  };
};

export const createActivity = (payload) => {
  return async (dispatch) => {
    const { data } = await axios.post(`/countries/create`, payload);
    dispatch({ type: ADD_ACTIVITY, payload: data });
  };
};

export const countryDelete= (id) => {
  return async (dispatch) => {
    await axios.delete(`countries/countriesDelete/${id}`);
    dispatch({ type: COUNTRIES_DELETE, payload: id });
  };
};
export const filterByContinent = (payload) => {
    return (dispatch) => {
      dispatch({ type: FILTER_BY_CONTINENT, payload: payload });
    };
  };


export const filterOrderAsc = (payload) => {
  return (dispatch) => {
    dispatch({ type: FILTER_ORDER_ASC, payload: payload });
  };
};

export const filterOrderDes = (payload) => {
  return (dispatch) => {
    dispatch({ type: FILTER_ORDER_DESC, payload: payload });
  };
};

export const filterByPopulation = (payload) => {
  return (dispatch) => {
    dispatch({ type: FILTER_ORDER_POPULATION, payload: payload });
  };
};

export const filterByActivityTourist = (payload) => {
  return (dispatch) => {
    dispatch({ type: FILTER_BY_ACTIVITY_TOURIST, payload: payload });
  };
};


