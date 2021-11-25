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
  continents: [],
  populations:[],
  countriesDelete: false,
};

function RootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_All_COUNTRIES:
      return {
        ...state,
        countriesAll: action.payload,
        requestCountries: action.payload,
        continents: action.payload.map((c) => {
          return c.continent;
        }),
        populations:action.payload.map((p) => {
          return p.population;
        }),
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
        requestCountries: [...ascDescFilter],
      };

    case FILTER_BY_CONTINENT:
      return {
        ...state,
        requestCountries: action.payload,
      };

    
    

    default:
      return state;
  }
}
export default RootReducer;
