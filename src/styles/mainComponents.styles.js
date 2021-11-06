import styled from "styled-components";

const MainSection = styled.div`
@media screen and (min-width:500px){
    
}

@media screen and (max-width:400px){
    display:grid;
    width:100%;
    height:3rem;
    grid-template-columns:50% 50%;
    position:relative;
    top:1rem;
    .logo{
        display:grid;
        grid-template-columns:50% 50%;
        h2{
            order:2;
            margin:auto;
            text-align:end;
        }
        div{
            order:1;
            .btn{
                margin:1rem 0rem;
                height:3rem;
            }
            
          }
            ul{
                position:absolute;
                width:10rem;
                background-color:#fff;
                height:100rem;
                top:-4rem;
                left:0;
                list-style:none;
                display:none;
                .btn-off{
                    left:rem;
                    postion:fixed;
                    top:10rem;
                    display:none;
                    background-color:#000;
                    height:3rem;
                    width:3rem;
                }
                li{
                    top:5rem;
                    position:relative;
                    left:1;
                    margin:1em 0rem;
                    text-transform:capitalize;
                    font-weight:700;
                    letter-spacing:2px;
                }
                    
                }

            }
            
        }
    }
    .avatar{
        display:flex;
        justify-content:space-around;
        width:100%;
        background-color:grey;
        .cart{
            height:3rem;
            width:3rem; 
        }
        .image{
            height:3rem;
            width:3rem;
            img{
                height:3rem;
                width:3rem;
            }
        }
    }
}

`;
export default MainSection;