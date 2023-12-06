import './TextPresentation.css';
import perfil from "../../img/perfil.png"

function TextPresentation() {
  return (
    <div className="TextPresentation">
        <p>Hi, my name is</p>
        <h1>Nicolás Benavidez</h1>
        <h2>Fullstack Web Developer</h2>
        <p className='textpresentation-desc'>Resolving design problems, building smart user interfaces and useful interactions, 
        developing rich web applications and seamless web experiences.</p>
        <img src={perfil}></img>
     
    </div>
  );
}

export default TextPresentation;
