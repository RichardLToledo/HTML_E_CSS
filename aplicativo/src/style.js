import styled from 'styled-components';
import background from './components/Map/images/map.jpg'
import foto from './components/List/card.png'
import lamp from './components/CreateAnnounce/lamp.png';
import lampblue from './components/CreateAnnounce/lamp-blue.svg';


export const Head = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;
export const Main = styled.div`
  height: 80vh;
`;

export const FooterHome = styled.div`
  margin: 20px;
  padding-top: 20px;
  border-top: 1px solid #c7c7c8;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding-bottom: 99px;
`;

export const Menu = styled.ul`
  position: fixed;
  bottom: 0;
  width: 95vw;
  display: flex;
  list-style-type: none;
  z-index: 999999;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #d7d6d6;
  padding: 10px;
  li {
    flex: 1;
    justify-content: center;
    align-items: center;
    display: flex;
    button, a {
      font-size: 0.8em;
      color: #353d40;
      text-decoration: none;
      font-weight: bold;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      span {
        color: #353d40;
        margin-bottom: 3px;
      }
      &:hover {
        color: #055eff;
        span {
          color: #055eff;
        }
      }
    }
  }
`;


// Contato

export const Arrow = styled.button`
  display: flex;
  align-items: center;
  color: #353d40;
  padding: 20px;
  font-size: 0.9em;
  cursor: pointer;
`;

export const ItemTitle = styled.h2`
  color: #055eff;
  font-size: 1.1em;
  font-weight: medium;
  display: flex;
  padding: 20px;
  align-items: center;
  text-align: center;
  justify-content: center;
  p {
    font-weight: 500;
    font-size: 0.9em;
    line-height: 140%;
    color: #3d3f40;
    text-align: initial;
    margin: 20px 0;
  }
  span {
    background-image: url(${lampblue});
    width: 34px;
    height: 34px;
    display: flex;
    background-repeat: no-repeat;
  }
`;

export const Button = styled.div`
  position: ${props => props.position ? "absolute" : "unset"};
  padding: 12px;
  background-color: ${props => props.back ? "#B4B4B5" : "#055eff"};
  display: flex;
  border: none;
  border-radius: 6px;
  color: #fff;
  width: fit-content;
  margin: ${props => props.local ? "20px" : "0px"};
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
  outline: none;
  cursor: pointer;
  box-shadow: 0px 4px 17px rgba(5, 94, 255, 0.35);
  &:hover {
    box-shadow: inset 0px 4px 17px rgba(61, 63, 64, 0.2);
    transition: all 300ms ease-in;
  }
  span {
    margin-right: 10px;
    color: white;
  }
  a{
    text-decoration: none;
    color: white;
    font-size: 0.95em;
    display: flex;
    align-items: center;
  }
`;
export const Input = styled.label`
  align-items: center;
  display: flex;
  margin-bottom: 10px;
  border: 1px solid #c7c7c8;
  box-sizing: border-box;
  border-radius: 3px;
  justify-content: space-between;
  padding: 5px;
  &:hover {
    border: 1px solid #055eff;
    box-shadow: inset 0px 0px 2px #055EFF;
    span {
      color: #055eff;

    }
  }
  input {
    padding: 12px;
    color: #353d40;
    font-size: 1em;
    flex: 1;
    &::placeholder {
      color: #ccc;
    }
  }
  span {
    color: #ccc;
    padding: 0 10px;
  }
`;

export const Question = styled.button`
  padding:  20px;
  color: #fff;
  background-color: #055eff;
  display: flex;
  border: none;
  border-radius: 50%;
  font-size: 1.95em;
  font-weight: bold;
  box-sizing: border-box;
  justify-content: center;
  position: fixed;
  outline: none;
  cursor: pointer;
  bottom: 50px;
  z-index: 9999;
  right: 0px;
  margin: 20px;
  box-shadow: 0px 4px 10px rgba(5, 94, 255, 0.29),
    0px 4px 4px rgba(255, 255, 255, 0.25);
  div{
    background-image: url(${lamp});
    width: 34px;
    height: 34px;
    display: flex;
  }
`;

export const Link = styled.p`
  font-weight: 500;
  font-size: 0.9em;
  line-height: 140%;
  color: #3d3f40;
  text-align: center;
  margin: 5px 20px;
`;

// Agendamento

export const ScheduleDay = styled.ul`
  display: flex;
  margin: 0 20px;
  overflow-x: scroll;
  white-space: nowrap;
  li {
    margin-right: 18px;
    button {
      display: flex;
      flex-direction: column;
      align-items: center;
      background: #ffffff;
      border: 1.5px solid #b4b4b5;
      box-sizing: border-box;
      border-radius: 6px;
      padding: 6px 25px;
      color: #000;
      &:active {
        border: 1.5px solid #055eff;
        background: #055eff;
        color: #fff;
      }
      small {
        font-size: 1em;
      }
      span {
        font-size: 1.5625em;
      }
    }
  }
`;

export const ScheduleHour = styled.ul`
  display: flex;
  margin: 18px 20px;
  overflow-x: auto;
  li {
    display: flex;
    align-items: center;
    padding-right: 8px;
  }
  button {
    background: #f1f1f1;
    border-radius: 20px;
    padding: 5px 25px;
    &:active {
      background: #055eff;
      color: #fff;
    }
  }
`;



//MAPA

export const MapStyle = styled.div`  
  background-image: url(${background});
  background-size: cover;
  position: relative;
  display: flex;
  height: 75vh;
`;

export const Marker = styled.div` 
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover{
    span{
      background-color: #055eff;
      color: #fff;
      transition: all 300ms ease-in;
    }
  }
  span{
    background-color: #fff;
    border-radius: 24px;
    padding: 8px;
    color: #353D40;
    font-size: 13px;
    font-weight: bold;
    box-shadow: 5px 7px 11px rgba(0, 0, 0, 0.25);
    
  }
  circle{
      height: 10px;
      width: 10px;
      background-color: #055eff;
      display: flex;
      box-shadow: 5px 7px 11px rgba(0, 0, 0, 0.25);
      border-radius: 50%;
      border: 2px solid white;
    }
`;


export const InfoWindow = styled.div`

`;

//Filter

export const FilterHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #EBEBEB;
  a{
    margin: 20px;
    text-decoration: none;
    color: #353d40;
  }
`;

export const Filter =  styled.section`
  


`; 

//Imoveis
export const Properties = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 20px;
    margin-bottom: 80px;
    h3{
      display: flex;
      align-items: center;
      color: #353d40;
      margin: 20px 0;
      font-weight: 400;
      span{
        font-weight: 300;
      }
    }
    strong{
      padding: 16px;
      background: rgba(139, 176, 242, 0.39);
      color: #055eff;
      display: flex;
      margin: 20px 0;
      border-radius: 6px;
      font-weight: 400;
      width: 84vw;
      justify-content: center;
    }
`;


export const AnnounceItem = styled.div`
    margin: 0 20px;
    background-color: white;
    box-sizing: border-box;
    border: 2px solid transparent;
    margin-bottom: 60px;
    &:hover{
      border: 2px solid #055eff;
      border-radius: 6px;
    }
    & > div{
      position: relative;
    }
    span{
      color: white;
      font-weight: bold;
      font-size: 1em;
      position: absolute;
      top: 14px;
      left: 14px;
      text-shadow: 0px 5.10959px 7.66438px rgba(0, 0, 0, 0.1);
    }

`;

export const Image = styled.div`
   background-image: url(${foto});
   height: 300px;
   width: 90vw;
   background-repeat: no-repeat;
   background-size: cover;
   background-position: center bottom; 
    border-radius: 6px 6px 0 0;
`;

export const AnnounceInfo = styled.div`
      border: 1px solid #eee;
      display: flex;
      flex-direction: column;
      padding: 0 20px;
      border-radius: 0 0 6px 6px;
      h1{
        font-weight: medium;
        color: #353d40;
        display: flex;
        align-items:baseline;
        sub{
            font-size: 0.6em;
            font-weight: 300;
            color: #c4c4c4;
        }
      }
      small{
        margin: 16px 0;
        color: #055eff;
        font-weight: bold;
      }
      address{
        color: #353d40;
        text-decoration: none;
        font-style: normal;
        font-weight: 300;
        margin-bottom: 16px;
        font-size: 18px;
      }
      h3 {
        font-weight: medium;
        margin: 0;
        font-size: 24px;
      }
      ul{
        display: flex;
        margin: 20px 0;
        li{
          display: flex;
          align-items: center;
          color: #353d40;
          margin-right: 20px;
          a{
            margin-right: 5px
          }
        }
      }
    
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  li{
    padding: 5px;
    margin-right: 10px;
    font-size: 1.4em;
    color: #353d40;
    &:first-child{
      color: #055eff;
      font-weight: bold;
      font-size: 1.6em;
    }
  }
`;
 


//Criar Anuncio

export const PageTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
  color: #353d40;
  font-weight: normal;
  margin: 0 10px;
  span{
    margin-right: 10px;
  }
`;

export const Camps = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  div{
    margin-bottom: 10px;
  }
  label{
    margin: 12px 0;
    display: flex;
    align-items: center;
    input[type="checkbox"] {
      margin-right: 10px;
      appearance: none;
      -webkit-appearance: none;
      width: 13px;
      height: 13px;
      background: #fff;
      border: 1px solid #6D6D78;
      &:checked{
        background-color: #055eff;
        border: 1px solid transparent;
      }
    }
    span{
      color:  #6D6D78;
      font-size: 14px;
    }
  }
  small{
    color: #B4B4B5;
    display: flex;
    align-items: center;
    span{
      margin-right: 5px;
      font-size: 16px; 
    }
   
  }
  h5{
      font-size: 1.2em;
      color: #353d40;
      margin: 16px 0;
  }
  p{
      font-size: 1.1em;
      color: #6D6D78;
      margin: 10px 0;
    }
    textarea{
      border: 1px solid #c7c7c8;
      padding: 12px;
      border-radius: 3px;
      color: #353d40;
      &:hover{
        border: 1px solid #055eff;
        box-shadow: inset 0px 0px 2px #055EFF;
      }
    }
    button{
    position: ${props => props.position ? "absolute" : "unset"};
    padding: 12px;
    background-color: ${props => props.back ? "#B4B4B5" : "#055eff"};
    display: flex;
    border: none;
    border-radius: 6px;
    color: #fff;
    width: fit-content;
    align-items: center;
    box-sizing: border-box;
    justify-content: center;
    font-size: 1em;
    outline: none;
    cursor: pointer;
    box-shadow: 0px 4px 17px rgba(5, 94, 255, 0.35);
    &:last-child{
      width: 100%;
      margin-bottom: 70px;
    }
    &:hover {
      box-shadow: inset 0px 4px 17px rgba(61, 63, 64, 0.2);
      transition: all 300ms ease-in;
    }
    }
`;

export const Select = styled.div`
    border: ${props => props.option = "special" ? " 1px solid #055eff" : " 1px solid #c7c7c8"};
    padding: 16px;
    border-radius: 3px;
    color: #353d40;
    margin-bottom: 10px;
    font-size: 1em;
    &:hover {
    border: 1px solid #055eff;
    box-shadow: inset 0px 0px 2px #055EFF;
    span {
      color: #055eff;
    }
  }
    &::placeholder {
      color: ${props => props.option = "special" ? "#055eff" : "#c7c7c8"};
      font-size: 1em;
    }
    input{
     width: 100%;
     color: #353d40;
     height: 100%;
     font-size: 1em;
    }
`;

export const CreateType = styled.div`
  position: fixed;
  z-index: 99999999999;
  box-shadow: 0px 4px 40px rgba(109, 109, 120, 0.31), 0px 4px 30px rgba(5, 94, 255, 0.05);
  border-radius: 3px;
  padding: 15px 15px 0 15px;
  background-color: #fff;
  width: 85vw;

  small{
    color: #B4B4B5;
    display: flex;
    align-items: center;
    span{
      margin-right: 5px;
      font-size: 16px; 
    }
  }
  h4{
    color: #055eff;
    text-align: center;
    margin: 20px 0; 
  }
  div{
    display: flex;
    justify-content: space-between;
  }
`;

export const OptionButton = styled.div`
  display: flex;
  align-items: center;
  p{
    margin-right: 15px;
  }
  input[type="checkbox"]{
    margin-right: 25px;
    position: relative;
    height: 30px;
    width: 70px;
    -webkit-appearance: none;
    appearance: none;
    transition: all 0.2s ease-in;
    background-color: #C4C4C4;  
    border-radius: 30px;  
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    &:checked{
      background-color: #055eff;
      &:before{
        left: 50px;
      }
    }
    &:before{
      background-color: #fff; 
      border-radius: 50%;
      height: 35px;
      width: 35px;
      transform: scale(1.1);
      content: '';
      position: absolute;
      box-shadow: 0px 0.63px 4.625px rgba(0, 0, 0, 0.25);
      transition: all 0.2s ease-in;
      left: 0px;
      
    }
  }
`;

export const TipsCard = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 0px 2px rgba(68, 68, 248, 0.23);
  margin: 20px;
  width: 80vw;
  padding: 20px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  h3{
    color: #3D3F40;
    margin-bottom: 5px;
  }
  strong, small{
    color: #055eff;
  }
  small{
    margin-bottom: 20px;
  }
  p{
    color: #6D6D78;
    margin-bottom: 5px;
    strong{
      font-weight: bold;
      color: #6D6D78;
    }
  }

`;