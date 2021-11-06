import styled from "styled-components";

const TextStyles = styled.section`

margin-top:6rem;
div{
    
    width:80%; 
    h4{
        color:hsl(26, 100%, 55%);
    }
    h1{
        text-transform:capitalize;
        font-weight:700;
        font-size:2.4rem;
    }
    .Short-text{hsl(26, 100%, 55%)
        color: hsl(219, 9%, 45%);
        letter-spacing:.5px;
        font-size:1.1rem;
        word-spacing:1px;
        
    }
    .price{
        display:flex;
        p{
            margin-right:.7rem;
            height:1.8rem;
            widtht:;
            font-weight:700;
            font-size:2rem;
        }
        .cut-off{
            background-color:hsl(25, 100%, 94%);
            color:hsl(26, 100%, 55%);
            text-align:center;
            font-size:1rem;
            padding-top:6px;
            font-weight:650;
            margin-top:2.6rem;
            width:3rem;
            
        }
    }
    .original{
        margin-top:-.6rem;
        text-decoration: line-through;
        color: hsl(220, 14%, 75%);
        font-weight:550;
        font-size:1.2rem;
    }


}
.cart-value{
    margin-top:1rem;
    display:grid;
    grid-template-columns:50% 48%;
    grid-column-gap:1%;
    div{
        display:grid;
        grid-template-columns:33% 33% 33%;
        button, p{
            background-color: hsl(223, 64%, 98%);
            border:2px solid  hsl(223, 64%, 98%);
            cursor:pointer;
            height:2rem;
            font-size:1.5rem;
            color:hsl(26, 100%, 55%);
            &:hover{
               opacity:0.7;
            }
        }
        p{
            margin-top:-.07rem;
            color:#000;
            text-align:center;
            font-size:1;
            font-weight:600;
        }
    }
    .submit{
        text-transform:capitalize;
        font-size:1rem;
        width:100%;
        height:2rem;
        color:#fff;
        background-color:hsl(26, 100%, 55%);
        border:3px solid hsl(26, 100%, 55%);
        border-radius:5px;
        &:hover{
            opacity:0.7;
            cursor:pointer;
        }
    }
}
`;

export default TextStyles;
