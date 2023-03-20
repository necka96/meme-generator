import meme from "./img/meme.png"

export default function Header (){
 return (
  <header>
  <img src={meme} alt="meme-img" className="header-img" />
  <h2 className="headert-title">Meme Generator</h2>
  <h4 className="header--project-creator">Nemanja Djordjevic</h4>
  </header>
 )
}