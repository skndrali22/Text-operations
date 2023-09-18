import React , {useState} from "react";
// import PropTypes from "prop-types";

export default function TextForm(props) {
    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
     }

     const handleUpClick = ()=>{
        console.log("upper case was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.alert(" Converted to uppercase", "success ")
     }
     const handleDnClick = ()=>{
      let newText = text.toLowerCase();
      setText(newText);
      props.alert(" Converted to lowercase", "success ");
   }
   const clearText = ()=>{
    let newText = " ";
    setText(newText);
    props.alert(" Text has been cleared", "success ");
 }

    const [ text , setText] = useState('');
    // text = setText("new text");

    
     
  return (
    <>
    <div className="container"style={{color:props.mode==='dark'?'white':'#042743'}}>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          value={text}
          onChange = {handleOnChange}
          id="myBox"
          rows="8"
          style={{backgroundColor:props.mode==='dark'?'gray':'white' ,color:props.mode==='dark'?'white':'#042743'}}
        ></textarea>
        <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>Convert to upper case</button>
        <button className="btn btn-primary mx-2 " onClick={handleDnClick}>Convert to lower case</button>
        <button className="btn btn-primary " onClick={clearText}>Clear text</button>
      </div>
    </div>

    <div className="container"style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>Your text summary</h1>
      <p> {text.split(" ").filter((element)=>{ return element.length!==0}).length} words and {text.length} characters</p>
      <p>{Math.round((0.008 * text.split(" ").filter((element)=>{ return element.length!==0}).length)*100)/100}  Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Enter something in the textbox above to preview here'}</p>
    </div>
    </>
    
  );
}
