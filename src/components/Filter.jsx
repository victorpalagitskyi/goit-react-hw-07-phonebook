import { useDispatch } from "react-redux";
import { setStatusFilter } from "redux/filterSlice";

const  Filter =()=> {
  const dispatch = useDispatch();
 
  const handleFilterChange = e => {
    dispatch(setStatusFilter(e.target.value));
  };

  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" name="filter" onChange={handleFilterChange} />
    </>
  );
}


export default Filter