import Imagediv from "./imageSection";
import MainStyle from "../styles/main.styles";
import Textsection from "./text-section";


const Main = (prop) => {
    

    return (
        
        <MainStyle >
            <div className='main' >
                <div onclick={prop.close} className="primary">
                    <Imagediv></Imagediv>
                    <Textsection/>
                </div> 
            </div>   
        </MainStyle>
      );
}
 
export default Main;
