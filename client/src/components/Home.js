import { React, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {getAllCountry} from "../redux/actions/actions"
import Filters from "./Filters"
import "./Styles/Home.css"
import Card from "./Card";

const Home = () => {
  const dispatch = useDispatch();
  const countriesAll = useSelector(({ countriesAll }) => countriesAll);
  const requestCountries = useSelector(
    ({ requestCountries }) => requestCountries
  );


  useEffect(() => {
    dispatch(getAllCountry());
 
  }, [dispatch]);
  return (
    <div className=" container">
       <Filters />
      {requestCountries ? (
        requestCountries.map((co) => {
          console.log(co,"aquiii")
          return (
            <Card
              key={co.id}
              name={co.name}
              flagImg={co.flagImg}
              capital={co.capital}
            />
          );
        })
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  );
};

export default Home;
