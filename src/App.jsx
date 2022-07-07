/* eslint-disable react-hooks/exhaustive-deps */
import { BasicCard } from "./components/BasicCard/BasicCard";
import { Search } from "./components/Search/Search";
import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [lastpage, setLastpage] = useState(null);
  const [error, setError] = useState(null);

  const handlePage = () => {
    if (lastpage && page === lastpage) return;
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    setLoading(true);
    let timeOut = setTimeout(() => {
      axios
        .get(
          `https://rickandmortyapi.com/api/character/?name=${search}&page=${page}`
        )
        .then((res) => {
          setData([...data, ...res.data.results]);
          if (lastpage === null || lastpage !== res.data.info.pages)
            setLastpage(res.data.info.pages);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
    }, 200);

    return () => clearTimeout(timeOut);
  }, [search, page]);

  return (
    <div className="App">
      <header className="App-header">Rick and Morty Search</header>
      <Search
        setSearch={setSearch}
        setPage={setPage}
        setData={setData}
        setError={setError}
      />
      <BasicCard
        data={data}
        handlePage={handlePage}
        lastpage={lastpage}
        loading={loading}
      />
      {error ? (
        <div>
          {error.message === "Request failed with status code 404"
            ? "Not Found"
            : error.message}
        </div>
      ) : null}
    </div>
  );
}

export { App };
