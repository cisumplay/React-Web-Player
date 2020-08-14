import React from "react";
import "../styles/currentsong.css";
import {
  FaArrowLeft,
  FaBars,
  FaPlay,
  FaStepForward,
  FaStepBackward,
} from "react-icons/fa";
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
          <div className={"image-cover"}>
            <div
              style={{
                width: 300,
                height: 300,
                padding: 10,
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              <img
                src={kuhad}
                style={{
                  width: "100%",
                  borderRadius: "50%",
                  borderWidth: 1,
                  borderColor: "#D7E1F3",
                }}
                alt={"Song cover"}
              />
            </div>
          </div>

          <div>
            <div className={"title"}>Dil Beparvah</div>
            <div className={"artist"}>Prateek Kuhad, Ankur Tewari</div>
          </div>
        </div>
        <div className={"controlcontainer"}>
          <div className={"slider"}></div>
          <div className={"control"}>
            <div className={"topcontainer-button"}>
              <div
                style={{
                  width: 80,
                  height: 80,
                  padding: 10,
                  paddingTop: "32%",
                  borderRadius: "50%",
                  textAlign: "center",
                }}
              >
                <FaStepBackward size={24} color={gray} />
              </div>
            </div>
            <div className={"topcontainer-button"}>
              <div
                style={{
                  width: 80,
                  height: 80,
                  padding: 10,
                  paddingTop: "32%",
                  borderRadius: "50%",
                  textAlign: "center",
                  backgroundColor: "#8AAAFF",
                }}
              >
                <FaPlay size={24} color={"#ffffff"} />
              </div>
            </div>
            <div className={"topcontainer-button"}>
              <div
                style={{
                  width: 80,
                  height: 80,
                  padding: 10,
                  paddingTop: "32%",
                  borderRadius: "50%",
                  textAlign: "center",
                }}
              >
                <FaStepForward size={24} color={gray} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
