import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Styles/Filter.css";
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
  const requestCountries = useSelector(
    ({ requestCountries }) => requestCountries
  );

  useEffect(() => {
    dispatch(getAllCountry());
  }, [dispatch]);

  const handleFilterByContinent = (e) => {
    dispatch(filterByContinent(e.target.value));
  };

 
  
  const handleOrder = (e) => {
    if (e.target.value === "Ascendent") {
      dispatch(filterOrderAsc(e.target.value));
    } else if (e.target.value === "Descendent") {
      dispatch(filterOrderDes(e.target.value));
    } else {
      dispatch(getAllCountry());
    }
  };
  const continents = useSelector(({ continents }) => continents);
  // const filterPlat = continents?.flat().filter((v, i, a) => {
  //   return a.findIndex((t) => t.id === v.id) === i;
  // });

  const filterC = continents.filter((item, index) => {
    return continents.indexOf(item) === index;
  });
  const populations = useSelector(({ populations }) => populations);

  return (
    <div className="filte">
      <p className="parrafo">Continent</p>
      <select onChange={(e) => handleFilterByContinent(e)}>
        <option default>All</option>

        {filterC.map((p) => (
          <option key={p} value={p}>
            {p}
          </option>
        ))}
      </select>

     
      <p className="parrafo">Order</p>
      <select onChange={(e) => handleOrder(e)}>
        <option default>All</option>
        <option>Ascendent</option>
        <option>Descendent</option>
      </select>
    </div>
  );
};

export default Filters;
