import styled from "styled-components"

const NavBar = styled.nav`
@media screen and (min-width:500px){
    height:80%;
    background-color:#fff;
    width:80%;
    margin:0.5rem auto;
    padding-bottom:2rem;
    display:grid;
    grid-template-columns:70% 30%;
    border-bottom:solid hsl(220, 14%, 75%) 3px;
    .logo{
        height:50%;
        position:relative;
        top:2.5rem;
        display:flex;
        h2{
            margin:.6rem 0rem;
            font-weight:700;
            font-size:1.4rem;
        }
        div{
            ul{
                list-style:none;
                display:inline-flex;
                li{
                    padding:0 10px;
                    text-transform:capitalize;
                    width:80px;
                    text-align:center;
                    
                    &:hover{
                        cursor:pointer;
                        border-bottom:4px solid hsl(26, 100%, 55%);
                        padding-bottom:43px;
                    }
                }
            }
        }
           
        }
    }
    .avatar{
        display:flex;
        justify-content:end;
        height:50%;
        position:relative;
        top:2.5rem;
        .cart{

            &:hover{
                cursor:pointer;
            }
        }
        .image{
            height:3rem;
            width:3rem;
            margin:0 2rem;
            img{
                height:100%;
                width:100%;
                &:hover{
                    border-radius:50%;
                    cursor:pointer;
                    border:3px solid hsl(26, 100%, 55%);
                }
            }
        }
        
        

    }

}

@media screen and (max-width:400px){
    height:3rem;
    width:95%;
    margin:1rem auto;
    background-color:#fff;
    diplay:flex;
    justify-content:space-between;
}
`

export default NavBar