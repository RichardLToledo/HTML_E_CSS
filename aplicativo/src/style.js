import styled from 'styled-components';
import background from './components/Map/images/map.jpg'


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
  padding: 36px;
  flex-direction: column;
  text-align: center;
  p {
    font-weight: 500;
    font-size: 0.9em;
    line-height: 140%;
    color: #3d3f40;
    text-align: initial;
    margin: 20px 0;
  }
`;

export const Button = styled.div`
  position: ${props => props.position ? "absolute" : "unset"};
  padding: 12px;
  background-color: #055eff;
  display: flex;
  border: none;
  border-radius: 6px;
  
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
  outline: none;
  cursor: pointer;
  margin: 20px;
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
  margin: 10px 20px;
  border: 1px solid #c7c7c8;
  box-sizing: border-box;
  border-radius: 6px;
  justify-content: space-between;
  padding: 5px;
  &:hover {
    border: 1px solid #055eff;
    box-shadow: 0px 0px 3px rgba(5, 94, 255, 0.37);
    span {
      color: #055eff;
      padding-right: 10px;
    }
  }
  input {
    padding: 12px;
    color: #353d40;
    font-size: 1em;
    &::placeholder {
      color: #ccc;
    }
  }
  span {
    color: #ccc;
    padding-right: 10px;
  }
`;

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
  outline: none;
  cursor: pointer;
  margin: 20px;
  box-shadow: 0px 4px 10px rgba(5, 94, 255, 0.29),
    0px 4px 4px rgba(255, 255, 255, 0.25);
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
