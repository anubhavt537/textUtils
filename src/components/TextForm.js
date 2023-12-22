import React, {useState} from 'react'
export default function TextForm(props) {
const handleUpClick = ()=>{
    console.log("upper case was click" +text);
    let newText=text.toUpperCase();
    setText(newText);
}
const handleLwCase = ()=>{
    console.log("upper case was click" +text);
    let newText=text.toLowerCase();
    setText(newText);
}

const handleOnChange = (event)=>{
    console.log("on change")
    setText(event.target.value);

}


    const[text,setText]=useState('');

    // update text krne ke liye function use krna hoga 
    
/* text="new text"; wrong hai aise update krna  */
// correct to way to update text; 
//  setText("new text") ;

  return (
    <>
<div className="conatainer"   style={{color: props.mode==='dark'?'white':'black'}}> 
    <h1>{props.heading}</h1>
  {/* <label for="myBox" class="form-label">Example textarea</label> */} 
  <textarea className="form-control" value={text} id="myBox"  style={{backgroundColor:props.mode==='dark'?'grey':'white' ,color :props.mode==='dark'?'white':'black' }}  onChange={handleOnChange} rows="8"></textarea>
  <button className="btn btn-primary" onClick={handleUpClick}>convert to upperCase</button>


  <button className="btn btn-primary" onClick={handleLwCase}>lower case</button>



</div>
<div className='conatainer my-2'    style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>you text summmary</h1>
<p>{text.split(" ").length}  and {text.length} character</p>
<p>  {0.008 *text.split(" ").length }   </p>

<h2> preview</h2>
<p>{text}</p>
</div>
</>
    
  )
}
