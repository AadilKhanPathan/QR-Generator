import React, { useState } from "react";
import QRIcon from "./assets/QR.png";
import QRCode from "react-qr-code";

function App() {
  const [text, setText] = useState("");
  const [qrValue, setQrValue] = useState("");

  function generateQRCode(e) {
    e.preventDefault();
    setQrValue(text.trim());
  }

  return (
    <div>
      <div className="container">
        <img src={QRIcon} alt="" />
        <div className="title">QR Code Generator</div>
        <div className="instruction">Enter text or URL to create a QR Code</div>
        <form onSubmit={generateQRCode}>
          <input
            type="text"
            placeholder="eg. Hello World"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit">Generate QR Code</button>
        </form>

        {qrValue && (
          <div className="displayQR">
            <QRCode value={qrValue} size={300} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;