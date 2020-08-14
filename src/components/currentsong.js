import React from "react";
import "../styles/currentsong.css";
import { FaArrowLeft, FaBars } from "react-icons/fa";
import kuhad from "../assets/images/prateek.jpg";

const gray = "#91A1BD";

export default class CurrentSong extends React.Component {
  render() {
    return (
      <div className={"container"}>
        <div className={"topcontainer"}>
          <div className={"topcontainer-button"}>
            <div
              style={{
                width: 50,
                height: 50,
                padding: 10,
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              <FaArrowLeft size={20} color={gray} />
            </div>
          </div>
          <div style={{ fontWeight: 800, color: gray }}>NOW PLAYING</div>
          <div className={"topcontainer-button"}>
            <div
              style={{
                width: 50,
                height: 50,
                padding: 10,
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              <FaBars size={20} color={gray} />
            </div>
          </div>
        </div>
        <div className={"detailcontainer"}>
          <div>
            <img
              src={kuhad}
              style={{
                width: "70%",
                borderRadius: "50%",
                borderWidth: 1,
                borderColor: "#D7E1F3",
              }}
              alt={"Song cover"}
            />
          </div>
          <div className={"songdetail"}>
            <div className={"title"}>Dil Beparvah</div>
            <div className={"artist"}>Prateek Kuhad, Ankur Tewari</div>
          </div>
        </div>
        <div className={"controlcontainer"}></div>
      </div>
    );
  }
}
