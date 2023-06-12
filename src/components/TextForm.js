import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () =>{
        setText(text.toUpperCase());
        props.showAlert("Converted to Upper Case","success");
    }
    const handleLowClick = () =>{
        setText(text.toLowerCase());
        props.showAlert("Converted to Lower Case","success");
    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    const handleOnChangeF = (event) =>{
        findWord(event.target.value);
    }
    const handleOnChangeR = (event) =>{
        replaceWord(event.target.value);
    }
    const handleFnR = ()=>{
        setText(text.replace(word,rword));
        
    }
    const handleClear = ()=>{
        setText('');
        props.showAlert("Text Cleared","success");
    }
    const [text,setText] = useState('');
    const [word,findWord] = useState('');
    const [rword,replaceWord] = useState('');
    return (
    <>
    <div className="container">
        <h1>Enter your text here...</h1>
        <div className="mb-3">
            <div className="mb-3">
                <textarea className={`form-control bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} value = {text}id="box" rows="3" onChange={handleOnChange}></textarea>
            </div>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick} >Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick} >Lowercase</button>
        <button className="btn btn-primary" onClick={handleClear} >Clear Text</button>
    </div>
    <div className="container mt-5">
        <h3>Text Summary :-</h3>
        <p>No. of Words : {text.split(' ').length}</p>
        <p>No of Characters : {text.replace(/\s/g,'').length}</p>
        <p>{(text.split(' ').length*(0.008)).toFixed(2)} minutes read</p>
    </div>
    <div className="container mt-3">
        <h3>Find & Replace</h3>
        Find : <input type = "text" className={`form-control bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} id = "find" value = {word} onChange ={handleOnChangeF}/>
        Replace :  <input type = "text" className={`form-control bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} id = "replace" value = {rword} onChange ={handleOnChangeR}/>
        <button className="btn btn-primary mt-2" onClick={handleFnR} >Find & Replace</button>
    </div>
    </>
    
  )
}
