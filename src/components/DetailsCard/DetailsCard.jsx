import { useEffect } from "react";
import "./DetailsCard.css";
import { GrFormClose } from "react-icons/gr";

export const DetailsCard = ({ selected, setSelected }) => {
  return (
    <div className="detailContainer">
      <div className="detailDiv">
        <GrFormClose
          className="detailClose"
          onClick={() => setSelected(null)}
        />
        <div className="detailTop">
          <img src={selected.image} alt={selected.name} />
          <div>
            <p>{selected.name}</p>
            <div>
              <div
                className={
                  selected.status === "Alive" || selected.status === "Unknown"
                    ? "greenCircle"
                    : "greyCircle"
                }
              ></div>{" "}
              <span>
                {selected.status} - {selected.species}
              </span>
            </div>
          </div>
        </div>
        <div className="detailDivider"></div> {/* line */}
        <div className="detailBottom">
          <div className="detailBottomSection">
            <p className="detailBottomHeading">Gender</p>
            <p className="detailBottomDescrpt">{selected.gender}</p>
          </div>
          <div className="detailBottomSection">
            <p className="detailBottomHeading">Location</p>
            <p className="detailBottomDescrpt">{selected.location.name}</p>
          </div>
          <div className="detailBottomSection">
            <p className="detailBottomHeading">Species</p>
            <p className="detailBottomDescrpt">{selected.species}</p>
          </div>
          <div className="detailBottomSection">
            <p className="detailBottomHeading">Orgin</p>
            <p className="detailBottomDescrpt">{selected.origin.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
