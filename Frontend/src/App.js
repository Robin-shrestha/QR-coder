import React, { useState, useEffect } from "react";
import SendData from "./components/SendData";
// import QRCodeMaker from "./components/QRCodeMaker";
import Canvas from "./components/Canvas";
import "./app.css";

function App() {
  const [dataToCode, setDataToCode] = useState("");
  const [QRData, setQRData] = useState([]);

  useEffect(() => {
    if (dataToCode) {
      fetch("/get_qrcode", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data_to_qr: dataToCode }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setQRData(data.QRcode);
        });
    }
  }, [dataToCode]);

  return (
    <div className="App">
      <SendData setDataToCode={setDataToCode} />
      <h3 style={{ textAlign: "center" }}>{dataToCode}</h3>

      {/* <QRCodeMaker QRData={QRData} /> */}
      <Canvas
        QRData={QRData}
        setQRData={setQRData}
        setDataToCode={setDataToCode}
      />
    </div>
  );
}

export default App;
