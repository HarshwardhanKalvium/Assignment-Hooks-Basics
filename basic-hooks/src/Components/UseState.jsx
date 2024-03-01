// import { useState } from "react";
// import "../src/App.css"

// function UseState(){
//   const [currAge,setAge] = useState(19);
  
//   const handleAge = ()=>{
//     setAge(currAge+1);
//   }

//   return (
//     <div>
//       <h3>My Current Age is {currAge}</h3>
//       <button onClick={handleAge}>Get Older</button>
//     </div>
//   );
// }

// export default UseState;






// import { useState } from "react";
// import "../src/App.css"

// function UseState(){
//   const [currAge,setAge] = useState(19);
//   const [currSib, setSib] = useState(1);
  
//   const handleAge = ()=>{
//     setAge(currAge+1);
//   }

//   const handleSib = ()=>{
//     setSib(currSib+1);
//   }


//   return (
//     <div>
//       <h3>My Current Age is {currAge}</h3>
//       <h4>My siblings {currSib}</h4>

//       <button onClick={handleAge}>Get Older</button>
//       <button onClick={handleSib}>Get more Sib</button>
//     </div>
//   );
// }

// export default UseState;





// import { useState } from "react";
// import "../src/App.css"


// function UseState(){

//   const [state, setState] = useState({age:19, siblings:3});

//   const handleState = (val)=>{
  
//     setState({
//       ...state,[val]:state[val]+1
//     })
//   }

//   const {age,siblings} = state;

//   return(
//     <div>
//       <h3>My Current Age is {age}</h3>
//       <h4>My siblings {siblings}</h4>
//       <button onClick={()=>{handleState("age")}}>age</button>
//       <button onClick={()=>{handleState("siblings")}}>sib</button>
//     </div>
//   )

// }

// export default UseState;





// import { useState } from "react";
// import "../src/App.css"


// function UseState(){

//   const [currAge, setAge] = useState(19);
//   const [currSib, setSib] = useState(3);

//   return(
//     <div>
//       <h3>My Current Age is {currAge}</h3>
//       <h4>My siblings {currSib}</h4>

//       <button onClick={()=>setAge(currAge=>currAge+1)}>age</button>
//       <button onClick={()=>setSib(currSib=>currSib+1)}>sib</button>
//     </div>
//   )

// }

// export default UseState;





// import React, { useState, useEffect } from 'react';

// function UseState() {
//   const [currAge, setCurrAge] = useState(25);
//   const [currSib, setCurrSib] = useState(2);

//   // Replace [currAge] with [currSib]
//   useEffect(() => {
//     alert(`You have ${currSib} siblings.`);
//   }, [currSib]);

//   // Use an empty array as the second parameter
//   useEffect(() => {
//     alert('This alert will only show once after the initial render.');
//   }, []);

//   return(
//     <div>
//       <h3>My Current Age is {currAge}</h3>
//       <h4>My siblings {currSib}</h4>

//       <button onClick={()=>setAge(currAge=>currAge+1)}>age</button>
//       <button onClick={()=>setSib(currSib=>currSib+1)}>sib</button>
//     </div>
//   )

// }


// export default UseState;







import React from "react"
import { useContext } from "react"
import { useEffect } from "react"
import { useState } from "react"
import { ToggleTheme } from "../App"

const UseState=()=>{

    let [content,setContent]=useState("")
    let [like,setLike]=useState(0)

    let theme=useContext(ToggleTheme)

    const themeStyle = {
        backgroundColor: theme?"black":"grey",
        color:theme?"grey":"black",
        padding:"2rem",
        margin:"2rem"
    }



    let para="Everybody who is living on this earth is leading his life, but if we talk about the human beings then their life is not the bed of roses, it has problems and struggles. But the life has some beautiful aspects also which gives him a ray of hope and positivity. We have family, relatives and friends who make our life special and make us feel about the specialty of our life."

    const handlepara=()=>{
        setContent(content==""?para:"")
    }

    useEffect(()=>{
        alert("Content button clicked")
    },[content])

    return(
        <div className="style" style={themeStyle}>
            <h3>{content}</h3>
            <button onClick={handlepara}>Content</button>
            <h3>{like}</h3>
            <button onClick={()=>setLike((prevLike)=>prevLike+1)}>Like</button>
        </div>
    )
}

export default UseState