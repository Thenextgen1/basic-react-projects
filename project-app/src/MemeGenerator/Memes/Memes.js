import React, { useState } from 'react'
import './Memes.css'
import styled from 'styled-components'
import MemesData from '../MemesData'


const Styledsection = styled.section`
margin: 2em;
justify-content: center;
align-items: center;
width: 100%;
font-family: 'Karla', sans-serif;



@media(max-width: 576px) {
    margin: 3em 1em 3em 0.4em;
}
`


const StyledButton = styled.button`
background: linear-gradient(90deg, #672280 1.18%, #A626D3 100%);
padding: 0.7em;
display: block;
outline: none;
border: none;       
color: white;
border-radius: 5px;
font-size: 0.8em;
font-weight: 700;
cursor:pointer;
width: 90%;
margin-top: 2em;
box-sizing: none;
position: relative;
margin-left: 1em;
`






const Memes = () => {

    const [memeImage, setmemeImage] = useState("")
    const getMemeImage = () => {

        const memesArray = MemesData.data.memes
        const random = Math.floor(Math.random() * memesArray.length);
        setmemeImage(memesArray[random].url)

    }
    // const [Name, setName] = useState("Sammy")
    // const changeName = () => {
    //     setName("Ohimai")
    // }


    return (

        <Styledsection>
            <form className="form">
                <fieldset>
                    <input type="text" placeholder="Top text" />
                    <input type="text" placeholder='Bottom Text' />
                </fieldset>

            </form>
            <StyledButton onClick={getMemeImage}>Get a new meme image 🤨</StyledButton>
            <img src={memeImage} alt="Meme" className='meme-image' />

            {/* <h1 onClick={changeName}>{Name}</h1> */}

        </Styledsection>)
}

export default Memes