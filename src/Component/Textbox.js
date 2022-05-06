import React,{useState} from 'react'

export default function Textbox(props) {
    const [text,setText] = useState('Enter Text Here')
    function upper(){
        console.log('clicked' + text);
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showalert('upper Case has been set','success')

    }
    function lower(){
      let newtext = text.toLowerCase();
      setText(newtext)
      props.showalert('Lower Case has been set','success')

    }
    function clear(){
      let newtext = ''
      setText(newtext)
      props.showalert('Text has been cleared','success')

    }
    const [MyStyle,setMyStyle] = useState({
      backgroundColor:'White',
      color: 'black'
    })

    const [BtnTxt,setBtnTxt] = useState('Enable dark Mode')

    function mode(){
     if( MyStyle.color === 'black'){
       setMyStyle({
         backgroundColor : 'black',
         color : 'white',
        }) 
        setBtnTxt('Enable dark Mode')
     }
     else{
       setMyStyle({
         backgroundColor: 'White',
         color : 'black'
       })
       setBtnTxt('Enable Light Mode')

     }
    }
    

 
    function handleonchange(event){
        console.log('handle on change');
        setText(event.target.value)
    }

  return(
    <>      
    <div>    
        <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea className="form-control" id="txt" rows="8" value={text} onChange={handleonchange} style= {MyStyle}></textarea>
        </div>
        <button className="btn-warning mx-2" onClick={upper}>Convert to uppercase</button>
        <button className="btn-warning mx-2" onClick={lower}>Convert to lowercase</button>
        <button className="btn-warning mx-2" onClick={clear}>Clear Text</button>
        <button className="btn-warning mx-2" onClick={mode}>{BtnTxt}</button>

    </div>
    <div className="container my-4" >
      <h1>This is Text Count and Word count</h1>
      <p>Word Count = <b>{text.split(" ").length-1}</b>, Character Count= <b>{text.length}</b></p>
    </div>
    </>

  )
  }
  