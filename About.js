import React,{useState} from 'react'

export default function About(props) {
    
    
    let myStyle={
           color:props.mode==="dark"?"white":"black",
           backgroundColor:props.mode==="dark"?"#042743":"white",
           border:"2px solid",
           borderColor: props.mode==="dark"?"white":"black"
    }
  return (
    <>
    <div className='container mx-1 my-3'>
    <h1 className="mx-3 my-3" style={{color:props.mode==="dark"?"white":"black"}}>About Us</h1>
      <div className="accordion" id="accordionExample" >
  <div className="accordion-item" >
    <h2 className="accordion-header">
      <button className="accordion-button invert-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle} >
        <strong>Analyze Your Text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={myStyle}>
      <div className="accordion-body" >
        TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count , character count or time count
      </div>
    </div>
  </div>
  <div className="accordion-item" >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed invert-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
        <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
      <div className="accordion-body">
        TextUtils is a free character counter tool that provides instant character count & word count statistics for a agiven text. Thus it is suitable for writing text with word/character limit.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button invert-btn

collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
        <strong>Features</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
      <div className="accordion-body">
        Converts words to upper or lowercase as required by user and also helps in removing extra spaces
      </div>
    </div>
  </div>
</div>
{/* <button type='button'className='btn btn-primary'>{text}</button> */}
    </div>
    </>
  )
}
