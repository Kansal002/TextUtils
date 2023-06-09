// import React, { useState } from 'react'

export default function Accordion(props) {

  // const [myStyle,setmyStyle]=useState({
  //   color:'black',
  //   backgroundColor:'white'
  // })
  let myStyle={
    color: props.mode==='dark'?'white':'#542754',
    backgroundColor: props.mode==='dark'?'#542754':'white'
  }
  return (
    <>
    <div className='container' style={myStyle}>
      <h1 className="my-2" >About Us</h1>
            <div className="accordion" id="accordionExample">
      <div className="accordion-item" style={myStyle} >
        <h2 className="accordion-header">
          <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
           <strong>Analyze Your Text</strong>   
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            TextUtils gives you a way to analyze your text quickly and efficiently. It can word count, character count, case changer and many more time saving things.
          </div>
        </div>
      </div>
      <div className="accordion-item" style={myStyle} >
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          <strong>Free to Use</strong> 
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            TextUtils is a free character tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/character limit.
          </div>
        </div>
      </div>
      <div className="accordion-item" style={myStyle} >
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          <strong>Browser Compatible</strong> 
          </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            This word counter software works in any web browsers such as Chrome,Firefox,Internet Explorer,Safari,Opera etc. It suits to count characters in facebook,blog,books,excel,document,pdf document, essays etc.
          </div>
        </div>
      </div>
    </div>
    {/* <div className='container my-3'>
            <button type="button" className="btn btn-primary" onClick={handleColor} >{btntext}</button>
    </div> */}
   
    </div>
    </>
  )
}
