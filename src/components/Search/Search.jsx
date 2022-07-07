import { debounce } from "lodash";
import "./Seach.css";
import { AiOutlineSearch } from "react-icons/ai";

export const Search = ({ setSearch, setPage, setData, setError }) => {
  const handleChange = debounce((e) => {
    setData([]);
    setError(null);
    setSearch(e.target.value);
    setPage(1);
  }, 700);
  return (
    <div className="searchContainer">
      <AiOutlineSearch />
      <input type="text" placeholder="Search" onChange={handleChange} />
    </div>
  );
};
