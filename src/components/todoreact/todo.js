import React, { useState } from "react";
import './style.css'

const Todo = () =>{

    const [inputdata, setInputData] = useState("");
    const [items, setItems] = useState([]);


    // Add the items
    const addItem = () => {
        if (inputdata){
            alert('plz fill the data');
        }else{
            setItems([...items,inputdata]);
            setInputData("");
        }
    }
    return (
        <>

        <div className="main-div">
            <div className="child-div">

                {/* Top Todo Image */}
                <figure>
                    <img src="./images/todo.svg" alt="todologo"/>
                    <figcaption> Add Your List Here </figcaption>
                </figure>


                {/* Add Items */}
                <div className="addItems">
                    <input type="text" placeholder ="Add Item"  className="form-control" 
                    value={inputdata}
                    onChange={(event)=> setInputData(event.target.value)
                        
                    }
                    />
                    <i className="fa fa-edit add-btn" onClick={addItem} ></i>
                </div>


                {/* Show Items */}
                <div className="showItems">
                    {
                        items.map((curElem, index)=>{
                            return (
                                <div className="eachItem" key={index}>
                                <h3>{curElem}</h3>
                                <div className="todo-btn">
                                <i className="fa fa-edit add-btn"  style={{color:"green"}}></i>
                                <i className="fa fa-trash-alt add-btn"  style={{color:"black"}} ></i>
                                </div>
                            </div>
                            )
                        })
                    }
                    



                </div>


                {/* Remove All */}
                <div className="showItems">
                    <button className="btn effect04" data-sm-link-text="Remove All"> <span> Check List </span> </button>
                </div>

            </div>
        </div>


        </>
    )
}


export default Todo;