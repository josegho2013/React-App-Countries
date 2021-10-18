import {
  GET_All_COUNTRIES,
  ADD_ACTIVITY,
  SEARCH_BY_ID,
  SEARCH_BY_NAME,
  COUNTRIES_DELETE,
  FILTER_BY_CONTINENT,
  FILTER_ORDER_ASC,
  FILTER_ORDER_DESC,
  FILTER_ORDER_POPULATION,
  FILTER_BY_ACTIVITY_TOURIST,
} from "../actions/actions";

const initialState = {
  countriesAll: [],
  addActivity: [],
  temperament: [],
  searchById: [],
  requestCountries: [],
  countriesDelete: false,
};

function RootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_All_COUNTRIES:
      return {
        ...state,
        countriesAll: action.payload,
        requestCountries: action.payload,
      };
    case ADD_ACTIVITY:
      return {
        ...state,
        addActivity: action.payload,
      };

    case SEARCH_BY_ID:
      return {
        ...state,
        searchById: action.payload,
      };
    case SEARCH_BY_NAME:
      return {
        ...state,
        requestCountries: action.payload,
      };
    case COUNTRIES_DELETE:
      return {
        ...state,
        countriesDelete: action.payload,
      };

    case FILTER_ORDER_ASC:
    case FILTER_ORDER_DESC:
      const ascDescFilter =
        action.payload === "Ascendent" || action.payload === "All"
          ? state.countriesAll.sort((a, b) => {
              if (a.name > b.name) {
                return 1;
              } else {
                return -1;
              }
            })
          : state.countriesAll.sort((a, b) => {
              if (a.name < b.name) {
                return 1;
              } else {
                return -1;
              }
            });
      return {
        ...state,
        requestDogs: [...ascDescFilter],
      };

    case FILTER_BY_CONTINENT:
     
      return {
        ...state,
        requestCountries: action.payload,
      };

    case FILTER_ORDER_POPULATION:
      const orderByPopulation =
        action.payload === "Young"
          ? state.countriesAll.sort((a, b) => {
              if (
                Number(a.population > a.population) >
                Number(b.population < b.population)
              ) {
                return 1;
              } else {
                return -1;
              }
            })
          : state.countriesAll.sort((a, b) => {
              if (
                Number(a.population > a.population) <
                Number(b.population < b.population)
              ) {
                return 1;
              } else {
                return -1;
              }
            });
      return {
        ...state,
        requestCountries: [...orderByPopulation],
      };

    case FILTER_BY_ACTIVITY_TOURIST:
      const orderByTourist =
        action.payload === "Ascendent" || action.payload === "All"
          ? state.countriesAll.sort((a, b) => {
              if (a.name > b.name) {
                return 1;
              } else {
                return -1;
              }
            })
          : state.countriesAll.sort((a, b) => {
              if (a.name < b.name) {
                return 1;
              } else {
                return -1;
              }
            });
      return {
        ...state,
        requestCountries: [...orderByTourist],
      };

    default:
      return state;
  }
}
export default RootReducer;
