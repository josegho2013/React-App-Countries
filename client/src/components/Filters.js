import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllCountry,
  getCountryById,
  searchByName,
  createActivity,
  countryDelete,
  filterOrderAsc,
  filterOrderDes,
  filterByContinent,
  filterByPopulation,
  filterByActivityTourist,
} from "../redux/actions/actions";

const Filters = () => {
const dispatch = useDispatch();
const requestCountries = useSelector(({ requestCountries}) => requestCountries);

useEffect(() => {
    dispatch(getAllCountry());
  }, [dispatch]);

  const handleFilterByContinent = (e) => {
    dispatch(filterByContinent(e.target.value));
  };

  const handleFilterByPopulation = (e) => {
    dispatch(filterByPopulation(e.target.value));
  };
  const handleFilterByActivityTourist = (e) => {
    dispatch(filterByActivityTourist(e.target.value));
  };
  const handleOrder = (e) => {
    if (e.target.value === "Ascendent") {
      dispatch(filterOrderAsc(e.target.value));
    } else if(e.target.value === "Descendent"){
      dispatch(ilterOrderDes(e.target.value));
    } else {
      dispatch(getAllCountry());
    }
  };



  return (
    <div>
      <div>
        <p>Temperament</p>
        <select onChange={(e) => handlefilter(e)}>
          <option default>All</option>
          {temperament?.map((G) => (
            <option key={G.id} value={G.name}>
              {G.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <p>Dogs</p>
        <select onChange={(e) => handleFilterByContinent(e)}>
          <option default>All</option>
         
        </select>
      </div>
      <div>
        <p>Order</p>
        <select onChange={(e) => handleFilterByPopulation (e)}>
          <option default>All</option>
          <option>Ascendent</option>
          <option>Descendent</option>
        </select>
      </div>
      
      <div>
        <p>Order</p>
        <select onChange={(e) => handleFilterByActivityTourist(e)}>
          <option default>All</option>
          <option>Ascendent</option>
          <option>Descendent</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
