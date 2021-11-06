import TextStyles from "../styles/TextSection.styles";


const Textsection = () => {


    // let x = 0;
    // const price = 125.00;

    // document.querySelector('.inner-value').innerHTML = x;

    // function increment(){
    //     x++
    //     x > 9 ? document.querySelector('.inner-value').innerHTML = 9 : document.querySelector('.inner-value').innerHTML = x;
    //     return x;
    // }

    // function decrement(){
    //     x--
    //     x < 0 ? document.querySelector('.inner-value').innerHTML = 0 : document.querySelector('.inner-value').innerHTML = x;
    // return x;
    // }

    // function addCart(){
    //     let y = document.querySelector('.inner-value').innerHTML
    //     let z = price * y
    //     checkCart(z, y)
    // }

    // function checkCart(z){
    //     z > 0 ? document.querySelector('.cartValue').innerHTML= `${z}` : document.querySelector('.cartValue').innerHTML="is empty"
    // }

    return ( 
        <TextStyles>
            <div>
                <h4>sneaker company</h4>
                <h1>fall limited edition sneakers</h1>
                <p className="Short-text">
                    These low-profile sneakers are your perfect casual wear companion.
                    Featuringa durable rubber outer sole, they'll withstand everything 
                    the weather can offer.
                </p>
                <div className="price">
                <p>$125.00</p>
                <p className="cut-off">50%</p>
                </div>
                <p className="original">$250.00</p>
                <div className="cart-value">
                    <div>
                        <button >-</button>
                        <p className="inner-value"></p>
                        <button >+</button>
                    </div>
                    <button className="submit"><span></span> add to cart</button>
                </div>
            </div>
        </TextStyles>
    );
}
 
export default Textsection;