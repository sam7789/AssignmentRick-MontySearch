import "./DetailsCard.css";

export const DetailsCard = ({ selected, setSelected }) => {
  console.log(selected);

  return (
    <div>
      <button className="detailClose" onClick={() => setSelected(null)}>
        x
      </button>
      <div>
        <img src={selected.image} alt={selected.name} />
        <div>
          <p>{selected.name}</p>
          <div>
            {" "}
            <div
              className={
                selected.status === "Alive" || selected.status === "Unknown"
                  ? "greenCircle"
                  : "greyCircle"
              }
            ></div>{" "}
            {selected.status} - {selected.species}
          </div>
        </div>
      </div>
      <div></div> {/* line */}
      <div>
        <div>
          <div>
            <p>Gender</p>
            <p>{selected.gender}</p>
          </div>
          <div>
            <p>Species</p>
            <p>{selected.species}</p>
          </div>
        </div>
        <div>
          <div>
            <p>Location</p>
            <p>{selected.location.name}</p>
          </div>
          <div>
            <p>Orgin</p>
            <p>{selected.origin.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
