import React, { useState } from 'react'

export default function Textform(props) {
    const handleUpClick=()=>{
        // console.log("Button click")
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!","success")
    }
    const handleLoClick=()=>{
        // console.log("Button click")
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!","success");
    }
    const handleClearClick=()=>{
        // console.log("Button click")
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared!","success");
    }
    const handleOnChange=(event)=>{
        // console.log("Chnage")
        setText(event.target.value)
    }
    const speak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
      props.showAlert("Text Reading..","success");
    }
    const handleCopy=()=>{
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to Clipboard","success");
    }
    const handleExtraSpaces = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra Spaces Removed!","success");
    }
    const [text, setText] = useState("");
  return (
    <>
      <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3 py-1">
        <textarea className="form-control" value={text} id="myBox" rows="8" placeholder='Enter Your Text here' onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}}></textarea>    
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To UpperCase</button>    
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert To LowerCase</button>    
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>    
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>    
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>    
        <button className="btn btn-primary mx-1" onClick={speak}>Speak</button>
      </div>
      <div className="container my-2" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} Words And {text.length} Character</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something in The Textbox above To Preview It Here"}</p>
      </div>
    </>
  )
}

