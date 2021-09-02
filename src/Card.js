import React from 'react'
import { NavLink } from 'react-router-dom';
const Card=(props)=>{
    console.log('title:',props.title)
    return(
        <div className="col-md-4 col-10 mx-auto">
            <div className="card">
                <img src={props.imgsrc} class="card-img-top" alt={props.imgsrc}/>
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold" style={{fontFamily:'sans-serif',
                                                                            fontSize:'16px',
                                                                            fontWeight:'bold'}}>{props.title}</h5>
                            <p className="card-text" style={{fontFamily:'sans-serif',
                                                                fontSize:'15px'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <NavLink to="" class="btn btn-primary">Go somewhere</NavLink>
                    </div>
                </div>
            </div>
)
};
export default Card;