import React, { useEffect, useReducer, useState }  from "react";
import "./style.css"

const UseReducer = () => {

    // const initialData = 10;
    const[myNum, setmyNum] = useState(0)

    // Value same just last time of we use []
    // useEffect(() => {
    //     document.title = `Chats(${myNum})`;
    // },[])

    // Value change on title 
    
    useReducer(() => {
        document.title = `Chats(${myNum})`;
    })

    return (
        <>

        <div className="center_div">
            
            <p> {myNum} </p>
            <div class="button2" onClick={() => setmyNum(myNum+1)}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                INCR
            </div>
            
            <div class="button2" onClick={() => setmyNum(myNum-1)}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Decr
            </div>

            
        </div>
        </>
    );
};

export default UseReducer;