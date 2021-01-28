import { Component } from "react";

import React from "react";

const myinfo=(props)=>{
    const conutries=props.places;
    const FavPlace=conutries.map((place)=>{
        return <li>{place}</li>
       
    });
   
    return(
       <div className="Ali">
           <h1>my name is {props.name}😀</h1>
           <p>i'm {props.age} years old, i live in Soran from Erbil🏙️ <br></br> currently doing
           my degree at university of koya 👨‍🎓 <br></br>i love travelling and explore world 🌎.
         <br></br>  i love spend time on my computer 💻
           </p>
           <h5>i love to travel for:</h5>
        <ol>
            <li>{FavPlace}</li>
        </ol>
        </div>
    );
}
export default myinfo;