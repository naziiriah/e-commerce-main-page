import styled from "styled-components";

const ImageStyled = styled.section`
    width:100%;
    position:relative;
    margin-left:3rem;
    top:7rem;
    .main-image{
        height:24rem;
        width:90%;
        border-radius:20px;
    }
    div{
        width:100%;
        margin-top:2rem;
        margin-left:;
        .first{
            background-color:#fff;
            opacity:0.7;
            border:3px solid hsl(26, 100%, 55%);
        }
        img{
            height:4rem;
            width:5rem;
            border-radius:7px;
            margin: 0rem .8rem;
            cursor:pointer;
            &:hover{
                background-color:#fff;
                opacity:0.7;
            }
            &:active{
                border:solid 2px hsl(25, 100%, 94%);
            }
        }


    }
.modal{
    display:none;
    position:fixed;
    top:-10rem;
    margin:0rem -10rem;
    width:70rem;
    height:100rem;
    background-color: rgba(0, 0, 0, 0.75);
    
    z-index:1;
    .close{
        font-size:2rem;
        position:absolute;
        margin-left:57rem;
        top:17rem;
        background-color:rgba(0, 0, 0, 0.75);
        color:#000;
        &:hover{
            color:hsl(26, 100%, 55%);
        }
    }
    img{
        position:absolute;
        top:20rem;
        margin:0rem 10rem;
        width:50rem;
        height:30rem;
        z-index:1;
    }
    .nuttons{
        position:absolute;
        top:32rem;
        
        width:100%;
        display:flex;
        justify-contents:space-between;
        .btn{
            height:3rem;
            color:black;
            background-color: hsl(223, 64%, 98%);
            width:4rem;
            font-size:2rem;
            font-weight:bold;
        }
        .prev{
            margin-left:6rem;
            
        }
        .after{
            margin-left:50rem;
        }
    }
}

`
export default ImageStyled;