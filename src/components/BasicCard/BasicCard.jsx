import { useCallback } from "react";
import { useState, useRef } from "react";
import { DetailsCard } from "../DetailsCard/DetailsCard";
import "./BasicCard.css";

export const BasicCard = ({ data, handlePage, loading }) => {
  const [selected, setSelected] = useState(null);
  const observer = useRef();
  const lastItemRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            handlePage();
          }
        },
        { threshold: 0.5 }
      );
      if (node) observer.current.observe(node);
    },
    [loading, handlePage]
  );

  return (
    <div className="basicMain">
      {selected ? (
        <DetailsCard selected={selected} setSelected={setSelected} />
      ) : null}
      {data ? (
        data.map((item, index) =>
          data.length === index + 1 ? (
            <div
              className="dataCard"
              key={index}
              ref={lastItemRef}
              onClick={() => {
                setSelected(item);
              }}
            >
              <div className="nameAndData">
                <img src={item.image} alt={item.name} />

                <p>{item.name}</p>
              </div>
              <div className="status">
                <div
                  className={
                    item.status === "Alive" || item.status === "unknown"
                      ? "bgreenCircle"
                      : "bgreyCircle"
                  }
                ></div>
                <p>
                  {item.status} - {item.species}
                </p>
              </div>
            </div>
          ) : (
            <div
              className="dataCard"
              key={index}
              onClick={() => {
                setSelected(item);
              }}
            >
              <div className="nameAndData">
                <img src={item.image} alt={item.name} />

                <p>{item.name}</p>
              </div>
              <div className="status">
                <div
                  className={
                    item.status === "Alive" || item.status === "unknown"
                      ? "bgreenCircle"
                      : "bgreyCircle"
                  }
                ></div>
                <p>
                  {item.status} - {item.species}
                </p>
              </div>
            </div>
          )
        )
      ) : (
        <div> Nothing Found </div>
      )}
      {loading ? <div className="loadingDiv">Loading...</div> : null}
    </div>
  );
};
