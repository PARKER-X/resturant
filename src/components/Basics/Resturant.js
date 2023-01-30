import React from 'react';
import './style.css';


const Resturant = () => {
    return (
        <>
            <div className='card-container'>
                <div className='card'>
                    <div className='card-body'>
                        <span className='card-number card-circle subtle'> 1
                        </span>
                        <span className='card-author subtle'> Breakfast </span>
                        <h2 className='card-title'> Maggi </h2>
                        <span className='card-description subtle'> 
                        Maggi is super delicious we offered hundred types of maggi most famous maggi is cheese and veg maggie
                        </span>
                        <div className="card-read"> Read  </div>

                    </div>
                    <img src ={{}} alt = 'images' className='card-media'/>
                    <span className='card-tag subtle'> Order Now</span>
                    
                </div>
            </div>
        </>
    )
}

export default Resturant;