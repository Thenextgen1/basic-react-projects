import React from 'react'
import './Card.css'


//you can either put props in the card parameters, then give add the object by calling props val
const card = (props) => {

    return (
        <div className="card-container">
            <div>
                {
                    props.heading && < h3 > {props.heading}</h3>
                }
                <img src={props.img} alt="Athlete" />
                <p>{props.rating} <span>(6)<span>.</span> USA</span></p>
                <p>{props.content}</p>
                <p>{props.rate}</p>
            </div>
        </div >
    )
}
// Destructuring props

// const card = ({heading, img, rating, content, rate}) => {

//     return (
//         <div className="card-container">
//             <div>
//                 {
//                     heading && < h3 > {heading}</h3>
//                 }
//                 <img src={img} alt="Athlete" />
//                 <p>{rating} <span>(6)<span>.</span> USA</span></p>
//                 <p>{content}</p>
//                 <p>{rate}</p>
//             </div>
//         </div >
//     )
// }

export default card