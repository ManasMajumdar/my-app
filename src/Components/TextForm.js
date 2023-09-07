import React, { useState } from 'react'


export default function TextForm(props) {


  const handleUpClick = () => {
   // console.log("Uppercase was clicked: " +  text);
    let newText = text.toUpperCase();
    setText(newText);
  }

  
  const handleLowClick = () => {
    // console.log("Uppercase was clicked: " +  text);
     let newText = text.toLowerCase();
     setText(newText);
   }


  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value)
  }

  const handleClearClick = ()=>{ 
    let newText = '';
    setText(newText)
}


const speak = () => {
  let msg = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(msg);
  const toogle = document.getElementById('toggle')
  if (toogle.textContent == "Speak") {
      toogle.innerHTML = "Stop"
  }
  else {
      toogle.innerHTML = "Speak"
      if (toogle.innerHTML = "Speak"){
          window.speechSynthesis.cancel()
      }
  }
}


const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
}


const handleCopy = () => {
  var text = document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
}
  const [text, setText] = useState("Enter text here")
  // text = "new text"; // Wrong way to change the state
  // setText("new text"); // Correct way to change the state

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
        <h1>{props.heading}</h1>
        <div className="mb-3"> 
        <textarea className="form-control" value={text} style={{color: props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-warning mx-2" onClick={speak} type="submit"  id="toggle">Speak</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 *  text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
