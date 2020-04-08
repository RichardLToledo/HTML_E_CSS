import styled from 'styled-components';

//Estilos da Página Inicial

export const Head = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`

export const Arrow = styled.button`
    display: flex;
    align-items: center;
    color: #353d40;
    padding: 20px;
    font-size: 0.9em;
    cursor: pointer;
`

export const ItemTitle = styled.h2`
    color: #055eff;
    font-size: 1.1em;
    font-weight: medium;
    display: flex;
    padding: 20px;
    flex-direction: column;
    text-align: center;
    p{
        font-weight: 500;
        font-size: 0.9em;
        line-height: 140%;      
        color: #3D3F40;
        text-align: initial;
        margin: 20px 0;
    }
`

export const Button = styled.div`
    padding: 16px;
   color: #fff;
   background-color: #055eff;
   display: flex;
   border: none;
   border-radius: 6px;
   font-size: 0.95em;
   box-sizing: border-box;
   justify-content: center;
   outline:none;
   cursor: pointer;
   margin: 20px;
   box-shadow: 0px 4px 17px rgba(5, 94, 255, 0.35);
   &:hover{
    box-shadow: inset 0px 4px 17px rgba(61, 63, 64, 0.2);
    transition: all 300ms ease-in;
   }
   span{
       margin-right: 10px;
       color: white;
   }

`
export const Input = styled.label`
    align-items: center;
    display: flex;
    margin: 10px 20px;
    border: 1px solid #C7C7C8;
    box-sizing: border-box;
    border-radius: 6px;
    justify-content: space-between;
    padding: 5px;
    &:hover{
        border: 1px solid #055eff;
        box-shadow: 0px 0px 3px rgba(5, 94, 255, 0.37);
        span{
            color: #055eff;
            padding-right: 10px;
        }
    }
    input{
        padding: 12px;
        color: #353d40;
        font-size: 1em;
        &::placeholder{
            color: #ccc;
        }
    }
    span{
        color: #ccc;
        padding-right: 10px;
    }

`

export const Question = styled.button`
    padding: 14px 24px;
   color: #fff;
   background-color: #055eff;
   display: flex;
   border: none;
   border-radius: 50%;
   font-size: 1.95em;
   font-weight: bold;
   box-sizing: border-box;
   justify-content: center;
   float: right;
   outline:none;
   cursor: pointer;
   margin: 20px;
   box-shadow: 0px 4px 10px rgba(5, 94, 255, 0.29), 0px 4px 4px rgba(255, 255, 255, 0.25);
`;

export const FooterHome = styled.div`
  margin: 20px;
  padding-top: 20px;
  border-top: 1px solid #C7C7C8;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding-bottom: 99px;
`; 
export const Link = styled.p `
        font-weight: 500;
        font-size: 0.9em;
        line-height: 140%;      
        color: #3D3F40;
        text-align: center;
        margin: 5px 20px ;
`

export const Menu = styled.ul `
    position: fixed;
    bottom: 0;
    width: 95vw;
    display: flex;
    list-style-type: none;
    padding: 10px;
    background-color: #fff;
    border: 1px solid #D7D6D6;
    padding: 10px;
    li{
        flex: 1             ;
        justify-content: center;
        align-items: center;
        display: flex;
        button{
            font-size: 0.8em;
            color: #353d40;
            font-weight: bold;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            span{
                color:  #353d40;
                margin-bottom: 3px;
           
            }
            &:hover{
                color:  #055eff;
                span{
                    color:  #055eff;
                }
            }
        }
    }

`;