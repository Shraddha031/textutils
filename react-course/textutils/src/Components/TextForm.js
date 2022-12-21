import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick=()=>{
    // console.log("uppercase was clicked"+text);
    const newText=text.toUpperCase();
    setText(newText);
    props.showalert("Text has converted to uppercase","success")
  }
  const handleLowerClick=()=>{
    const newText=text.toLowerCase();
    setText(newText);
    props.showalert("Text has converted to lowercase","success")
  }
  const handleClearClick=()=>{
    const newText='';
    setText(newText);
  }
  const handleOnChange=(event)=>{
    // console.log("onChange was clicked")
    setText(event.target.value);
  }
  const [text,setText]=useState('');
  return (
    <>
    <div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} style={{background:props.mode==='light'?'white':'grey',color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="mybox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert to lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>

    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}} >
      <h2>your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter some text to preview here"}</p>
    </div>
  </>
  )
}
