import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { searchByName } from "../redux/actions/actions";
import{getAllCountry} from "../redux/actions/actions"

const Navbar = () => {

    const [search, setSearch] = useState("");
    const dispatch = useDispatch();
  
    const handleSearch = (e) => {
      e.preventDefault();
      dispatch(searchByName(search));
      if (search) {
        setSearch("");
      }
    };
  
    const reset = () => {
      dispatch(getAllCountry()());
    };
    return (
        <div>
            
        </div>
    )
}

export default Navbar
