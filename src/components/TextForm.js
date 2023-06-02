import React, {useState} from 'react'
// hooks bina class banae class ke feature use karne dete hai 
// hooks state change krne ke liye hota hai
export default function TextForm(props) {
  // hooks ko function ke andr hi use kr skte hai
    const handleUpClick = ()=>{
        // console.log("UpperCase was clicked "); 
        let newText=text.toUpperCase();
        props.showAlert("Converted to UpperCase !","success");
        setText(newText)
    }
    const handleLoClick = ()=>{
        // console.log("UpperCase was clicked "); 
        let newText=text.toLowerCase();
        props.showAlert("Converted to LowerCase !","success");
        setText(newText)
    }
    const handleClear=()=>{
      let newText='';
      setText(newText);
      props.showAlert("Text Cleared!","success");
    }
    const handleSentence=()=>{
      let newText = text.charAt(0).toUpperCase() + text.slice(1);
      props.showAlert(" Converted to Sentence case!","success");
      setText(newText);
    }
    const handleWords=()=>{
      let str = text;
      let arr = str.split(" ");
      for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
       }
      let str2 = arr.join(" ");
      props.showAlert("Converted to Title case !","success");
      setText(str2);
    }
    const handleOnChange = (event)=>{ // yahi events hai
        // console.log("On change ");
        setText(event.target.value)
    }
    const [text, setText] = useState(''); // have to memorize it, yahi hook hai
    // text="new text" // wrong way to change the state
    // setText("new value"); // right way
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}} >
        <h1>{props.heading} </h1>
        <div className="mb-3">
        
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? '#e8d2f0':'white', color: props.mode==='dark'?'#4a2443':'black' }} id="exampleFormControlTextarea1" rows="8"></textarea> 
         {/*double curly braces means ki ham js ke andr object bana rahe hai  */}
        </div>
        <button disabled={text.length===0} className="btn btn-success mx-2 my-2" onClick={handleUpClick} >Convert to Upper Case</button>
        <button disabled={text.length===0} className="btn btn-success mx-2 my-2" onClick={handleLoClick} >Convert to Lower Case</button>
        <button disabled={text.length===0} className="btn btn-success mx-2 my-2" onClick={handleSentence} >Sentence Case</button>
        <button disabled={text.length===0} className="btn btn-success mx-2 my-2" onClick={handleWords} >Title Case</button>
        <button disabled={text.length===0} className="btn btn-warning mx-2 my-2" onClick={handleClear} >Clear All</button>

    </div>
    <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}} >
      <h2>Your Text summary</h2>
       <p>{text.split(/\s+/).filter((Element)=>{return Element.length!==0}).length} words and {text.length} characters</p>
       <h3>Preview</h3>
       <p>{text.length>0?text:'Enter something in the textbox above to preview it here.'}</p>
    </div>

    </>
  )
}

