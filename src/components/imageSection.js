import { useState } from "react";
import image1 from "../images/image-product-1.jpg"
import image2 from "../images/image-product-2.jpg"
import image3 from "../images/image-product-3.jpg"
import image4 from "../images/image-product-4.jpg"
import ImageStyled from "../styles/body-imagesection.styles";


const Imagediv = () => {
    function closemodal(){
        document.querySelector('.modal').style.display = 'none'
    }
    function openModal(){
        document.querySelector('.modal').style.display = 'block'
    }


    let x = 0
    const images = [
        {image:image1},
        {image:image2},
        {image:image3},
        {image:image4}
    ]
    function nextimage(){
        x++
        x > 3 ? setList(images[x = 3].image) : setList(images[x].image)

    }

    function previmage(){
        x--
        x < 0 ? setList(images[x = 0].image) : setList(images[x].images)
    }

    const [list, setList] = useState(images[x].image)

    return (   
        
                <ImageStyled>
                    <img className="main-image" src={list} alt="shoe-1" />  
                    <div>
                        <img onClick={openModal}className="first" src={list} alt="shoe-1" />
                        <img  onClick={openModal} src={images[1].image} alt="shoe-2" />
                        <img onClick={openModal} src={images[2].image} alt="shoe-3" />
                        <img onClick={openModal} src={images[3].image} alt="shoe-4" />
                    </div>  
                    <div className="modal">
                        <button className="close" onClick={closemodal}>X</button>
                        <img src={list} alt="" />
                        <div className="nuttons"> 
                        <button onClick={previmage} className="prev btn">(</button>
                        <button onClick={nextimage} className="after btn">)</button>
                      
                        </div>
                    </div>
                </ImageStyled>        
              
            
);
}
 
export default Imagediv;