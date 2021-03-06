import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log('Uppercase was Clicked');
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success");
    };

    const handleLoClick = () => {
        // console.log('Uppercase was Clicked');
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success");
    };

    const handleClearClick = () => {
        // console.log('Uppercase was Clicked');
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared!", "success");
    };

    const handleOnChange = (event) => {
        // console.log('OnChange Happened');
        setText(event.target.value);
    };

    const handleCopy = () => {
        // var text = document.getElementById("myBox");
        // text.select();
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard!", "success");
    };

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    };

    const [text, setText] = useState("");

    return (
        <>
            <div className="container" style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h1 className="mb-4">{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}
                        placeholder="Enter text here"
                        onChange={handleOnChange}
                        style={{
                            // backgroundColor: props.mode === 'dark' ? '#051637' : 'white',
                            backgroundColor: props.mode === "dark" ? "#163e5e" : "white",
                            color: props.mode === "dark" ? "white" : "black",
                        }}
                        id="myBox"
                        rows="8"
                    ></textarea>
                </div>
                <div class="d-grid gap-2 d-md-block">
                    <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
                        Convert to Uppercase
                    </button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
                        Convert to Lowercase
                    </button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
                        Clear Text
                    </button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
                        Copy Text
                    </button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>
                        Remove Extra Spaces
                    </button>
                </div>
            </div>
            <div className={`container my-3 text-${props.mode === "light" ? "dark" : "light"}`}>
                <h2>Your Text Summary</h2>
                <p>
                    {text.split(/\s+/).filter((el) => el.length !== 0).length} words and {text.length} Characters
                </p>
                <p>Approx {0.008 * text.split(" ").filter((el) => el.length !== 0).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
            </div>
        </>
    );
}
