// import { faCartShopping, faCoffee } from "@fortawesome/free-solid-svg-icons";
import Header from "../styles/head-section.styles";
import NavBar from "../styles/nav-bar.styles";
import avatar from "../images/image-avatar.png"


const HeadSection = (prop) => {
    

function openCart(){
    let open = document.querySelector('.opencart')
    open.style.display= "block"
}


    return (
    <>
    <Header>
        <NavBar>
                <div className="logo" onClick={prop.close}>
                    <h2>sneakers</h2>
                    <div>
                        <ul className="mode">
                            <li>collections</li>
                            <li>men</li>
                            <li>women</li>
                            <li>about</li>
                            <li>contact</li>
                        </ul>
                    </div>
                </div>
                <div className="avatar">
                    <p onClick={openCart} className="cart">cart<span></span></p>
                    <p className="image"><img src={avatar} alt="" /></p>
                </div>
            
        </NavBar>
            <div className="opencart">
                <h3 className="h3">cart</h3>
                <div></div>
                <p className="cartValue">your cart is empty</p>
            </div>
    </Header>
    </>
    );
}
 
export default HeadSection;