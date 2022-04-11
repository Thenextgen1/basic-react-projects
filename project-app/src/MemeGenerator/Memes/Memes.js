import React, { useState } from 'react'
import './Memes.css'
import styled from 'styled-components'
import MemesData from '../MemesData'
// import Practise from './practise'

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

    //names in  state must be same as that of input name


    const [formData, setFormData] = useState({
        topText: "",
        bottomText: ""
    })


    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })


    }

    // handleChange();


    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg"
    })


    const getMemeImage = () => {

        const memesArray = MemesData.data.memes
        const random = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[random].url
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: url
            }
        })





    }

    return (

        <Styledsection>
            <form className="form">
                <fieldset>
                    <input
                        type="text"
                        placeholder="Top text"
                        onChange={handleChange}
                        name="topText"
                        value={formData.topText}
                    />
                    <input
                        type="text"
                        placeholder='Bottom Text'
                        onChange={handleChange}
                        name='bottomText'
                        value={formData.bottomText}
                    />
                </fieldset>

            </form>
            <StyledButton onClick={getMemeImage}>Get a new meme image 🤨</StyledButton>

            <div className='memeimg-container'>
                <img src={meme.randomImage} alt="Meme" className='meme-image' />
                <h1 className='meme-text top-text'>{formData.topText}</h1>
                <h1 className='meme-text bottom-text'>{formData.bottomText}</h1>
            </div>
        </Styledsection>)
}

export default Memes