import React from "react";

//not used anymore just for fusises if you want to make the qrcode using divs only
const QRCodeMaker = ({ QRData }) => {
  return (
    <div style={{ margin: "0 auto" }}>
      {QRData.map((item, indexR) => {
        return (
          <div key={indexR} style={{ margin: "0 auto", display: "flex" }}>
            {item.map((pixel, indexC) => {
              if (pixel === 1) {
                return (
                  <div
                    key={indexC}
                    style={{
                      width: "10px",
                      height: "10px",
                      backgroundColor: "black",
                    }}
                  ></div>
                );
              } else if (pixel === 0) {
                return (
                  <div
                    key={indexC}
                    style={{
                      width: "10px",
                      height: "10px",
                      backgroundColor: "white",
                    }}
                  ></div>
                );
              }
            })}
          </div>
        );
      })}
    </div>
  );
};

export default QRCodeMaker;
