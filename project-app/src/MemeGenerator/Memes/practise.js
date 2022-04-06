// import React, { useState } from 'react'

// const Practise = () => {

//     const [contact, setContact] = useState({

//         firstName: 'David',
//         lastName: 'Samuel',
//         phone: '+123456',
//         email: 'elijahohimairei@gmail.com',
//         isFavorite: false

//     })

//     let starIcon = contact.isFavorite ? 'happy' : 'sad'

//     function toggle() {
//         setContact(prevContact => {
//             return {
//                 ...prevContact,
//                 isFavorite: !prevContact.isFavorite
//             }
//         })
//     }




//     return (
//         <div>
//             <h1>{contact.firstName} {contact.lastName}</h1>
//             <h2>{contact.email}</h2>
//             <h3 onClick={toggle}>{contact.phone} {starIcon}</h3>
//         </div>
//     )
// }


// export default Practise
