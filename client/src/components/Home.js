import { React, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {getAllCountry} from "../redux/actions/actions"
import Filters from "./Filters"
import Pagination from "./Pagination";
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


  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(9);
  
  const indexOfLastDogs = currentPage * countriesPerPage;
  const indexOfFirsDogs = indexOfLastDogs - countriesPerPage;
  const countriesPage = requestCountries?.slice(indexOfFirsDogs, indexOfLastDogs);
  
  const paginate = (pageNumber) => setCurrentPage(pageNumber);



  return (
    <div>
      <Filters />
    <div className=" container">
      {countriesPage ? (
        countriesPage .map((co) => {
          
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
    <Pagination
        countriesPerPage={countriesPerPage}
        totalCountries={requestCountries?.length}
        paginate={paginate}
        currentPage={currentPage}
        key={"#"}
      />
    </div>
  );
};

export default Home;
