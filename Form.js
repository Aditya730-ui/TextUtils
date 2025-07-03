import React,{useState} from 'react'

export default function Form(props) {
  const handleupclick=()=>{
    
    setText(text.toUpperCase())
    props.sendalert("converted to uppercase","success")
  }
  const handlelowclick=()=>{
    
    setText(text.toLowerCase())
     props.sendalert("converted to lowercase","success")
  }
  const handleclearclick=()=>{
    let newtext="";
    setText(newtext)
  }
  const handleonchange=(event)=>{
    
    setText(event.target.value)
  }
  const handlecopy=()=>{
        var text=document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,text.value.length);
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();

  }
  const handleExtraSpace=()=>{
     let newText = text.split(/[ ]+/);
     setText(newText.join(" "))
      
};

  
  
  const [text,setText]=useState("");
  
  return (
    <>
    <div style={{color:props.mode==='light'?'black':'white'}} className='my-3 mx-3'>
          <h1 style={{color:props.mode==='light'?'black':'white'}}>{props.heading}</h1>
        <div>
            <textarea className="form-control" onChange={handleonchange}value={text} id="myBox" rows="8" style={
              {
                backgroundColor:props.mode==='light'?'white':'#13466e',
                color:props.mode==='light'?'black':'white'
              }
                
                } >

                </textarea>
        </div>
        <button className='btn btn-primary mx-2 my-3' disabled={text.length===0} onClick={handleupclick}>Convert to Uppercase</button>
        <button className='btn btn-primary my-3 mx-2' disabled={text.length===0} onClick={handlelowclick}>Convert to Lowercase</button>
         <button className='btn btn-primary my-3 mx-2' disabled={text.length===0} onClick={handleclearclick}>clear text</button>
          <button className='btn btn-primary my-3 mx-2'disabled={text.length===0}  onClick={handlecopy}>Copy text</button>
          <button className='btn btn-primary my-3 mx-2' disabled={text.length===0} onClick={handleExtraSpace}>Clear extra space</button>
    <div>
      <h1>Text counter</h1>
      <p> Number of word is {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} and Number of characters is {text.length}</p>
      <p>{0.008*text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes is time to read the words by user</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </div>
    </>
  )
}

