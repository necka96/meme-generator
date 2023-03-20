import React, { useEffect, useState } from "react";
import { downloadImage } from "../utils";
function Meme() {
  const [meme, setMeme] = useState({
    textTop: "",
    textBottom: "",
    imageUrl: "https://i.imgflip.com/16iyn1.jpg",
  });

  const [allMeneData, setAllMemeData] = useState([]);
  useEffect(() => {
    async function getMeme() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemeData(data.data.memes);
    }
    getMeme();
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }
  function getMemeImg() {
    const ranodmNumber = Math.floor(Math.random() * allMeneData.length);
    const url = allMeneData[ranodmNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      imageUrl: url,
      textTop: "",
      textBottom: "",
    }));
  }

  return (
    <div className='form'>
      <input
        type='text'
        placeholder='Top text'
        value={meme.textTop}
        name='textTop'
        onChange={handleChange}
      />
      <input
        type='text'
        placeholder='Bottom text'
        value={meme.textBottom}
        name='textBottom'
        onChange={handleChange}
      />

      <div className='btns'>
        <button onClick={getMemeImg}>Get a new meme image 🖼</button>
        <button onClick={() => downloadImage(meme)}>Dwonload</button>
      </div>
      <div className='meme'>
        <img src={meme.imageUrl} alt='meme' className='meme--image' />
        <h2 className='meme--text top'>{meme.textTop}</h2>
        <h2 className='meme--text bottom'>{meme.textBottom}</h2>
      </div>
    </div>
  );
}

export default Meme;
