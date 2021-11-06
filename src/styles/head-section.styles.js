import styled from "styled-components";

const Header = styled.header`
    height:7rem;
    width:70rem;
    margin:-1.5rem auto;
    background-color:#fff;
    .opencart{
        display:none;
        width:15rem;
        height:10rem;
        position:absolute;
        top:7rem;
        background-color:#fff;
        margin-left:45rem;
        box-shadow:9px 10px grey;
        border-radius:10px;
        .h3{
            font-weight:bolder;
            margin-left:1rem;
            margin-top:.4rem;
            margin-bottom:.4rem;
        }
        div{
            width:15rem;
            height:3px;
            background-color:grey;
            color: hsl(223, 64%, 98%);
        }
        .cartValue{
            margin-left:1rem;
            margin-top:.4rem;
            margin-bottom:.4rem;
            span{
                font-weight:650;
            }
        }
    }
    
    @media screen and (max-width:450px){
        
    }
`

export default Header