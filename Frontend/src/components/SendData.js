import React, { useState } from "react";

const SendData = ({ setDataToCode }) => {
  const [textFieldData, setTextFieldData] = useState("");

  const dataHandler = (e) => {
    e.preventDefault();
    // console.log(textFieldData);
    if (textFieldData) {
      setDataToCode(textFieldData);
      setTextFieldData("");
    }
  };

  return (
    <div className="qrtext-container">
      <form onScroll={dataHandler}>
        <label className="qrtext-label">Data to Code:</label>
        <input
          type="text"
          className="qrtext-input"
          value={textFieldData}
          placeholder=" text goes here "
          onChange={(e) => {
            setTextFieldData(e.target.value);
          }}
        />
        <button className="button" onClick={dataHandler}>
          Get QR Code
        </button>
      </form>
    </div>
  );
};

export default SendData;
