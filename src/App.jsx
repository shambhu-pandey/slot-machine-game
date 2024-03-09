import React from "react";
import './index.css'

const SlotM = (props) =>{

  let x = props.x;
  let y = props.y;
  let z = props.z;

  if(x===y && y ===z){
  return (
<>
<div className="slot_inner">
<h1> {x} {y} {z} </h1>
<h1> this is matching</h1>
<hr />
</div>
</>
  );
  }
  else{
   return(
    <>
    <div className="notMatching">

    <h1>{x} {y} {z} </h1>
    <h1>This is not matching</h1>
    <hr />
    </div>
    
    </>
    
   );

  }
}

const App = () =>{
  
return(
  <>
 <div className="container">
  <h1 className="heading"> Welcome To <span style={{fontWeight : 'bold' }}>Slot Machine  Game</span> </h1>,

 
<div className="slotMachine">
  <SlotM x = '😄'    y = '😄'     z = '😄'    />,
  <SlotM  x = '👍'   y = '👍'  z = '👎'     />,
  <SlotM  x = '🍎' y = '🥭'  z='🍎'             />,
  </div>
  </div>
  </>
)
};
export default App;