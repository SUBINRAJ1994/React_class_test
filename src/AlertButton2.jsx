import React from "react";

const AlertButton = () => {
    const showAlert = () => {
        alert("Button was clicked !");
    };
    return (
        <div>
            <button onClick={showAlert}>Click Me</button>
        </div>
    );
}
export default AlertButton;