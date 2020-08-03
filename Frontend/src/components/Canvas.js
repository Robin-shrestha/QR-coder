import React, { useEffect, useRef } from "react";

const Canvas = ({ QRData, setQRData, setDataToCode }) => {
  const canvas = useRef(null);
  const a = QRData.length;

  useEffect(() => {
    const canv = canvas.current;
    const ctx = canv.getContext("2d");
    QRData.map((row, indexR) =>
      row.map((col, indexC) => {
        if (col === 1) {
          ctx.fillStyle = "black";
          ctx.fillRect(indexC * 10, indexR * 10, 10, 10);
        } else if (col === 0) {
          ctx.fillStyle = "white";
          ctx.fillRect(indexC * 10, indexR * 10, 10, 10);
        }
        return null;
      })
    );
  }, [QRData]);

  const downloadHandler = (e) => {
    console.log("asd");
    window.open(canvas.current.toDataURL("qrcode/png"));
    var gh = canvas.current.toDataURL("png");
    var a = document.createElement("a");
    a.href = gh;
    a.download = "image.png";

    a.click();
  };
  const clearHandler = (e) => {
    setQRData([]);
    setDataToCode("");
  };
  return (
    <div className="container-qr">
      <canvas
        ref={canvas}
        className="img-qrcode"
        width={a * 10}
        height={a * 10}
        style={{ backgroundColor: "#eee" }}
      />
      <div className="container-dl">
        <button
          className={a === 0 ? "button dl-off" : "button dl-on"}
          onClick={downloadHandler}
        >
          download QRCode
        </button>
        <button
          className={a === 0 ? "button dl-off" : "button dl-on"}
          onClick={clearHandler}
        >
          clear QRCode
        </button>
      </div>
    </div>
  );
};

export default Canvas;
