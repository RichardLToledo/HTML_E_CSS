import styled from 'styled-components';


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
  padding: 10px;
  background-color: #fff;
  border: 1px solid #d7d6d6;
  padding: 10px;
  li {
    flex: 1;
    justify-content: center;
    align-items: center;
    display: flex;
    button {
      font-size: 0.8em;
      color: #353d40;
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

// Estilos Card do Anúncio

export const PrincipalImage = styled.div`
  display: flex;
  background-color: #055eff;
  height: 344px;
  width: 100%;
`;

export const FixedHead = styled.div`
  display: flex;
  position: fixed;
  right: 0;
  left: 0;
  align-items: center;
  justify-content: space-between;
  padding: 30px 20px 20px 20px;
  background: linear-gradient(
    180deg,
    #212121 0%,
    rgba(33, 33, 33, 0.2) 76.42%,
    rgba(53, 61, 64, 0.01) 100%
  );
`;

export const Back = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  span {
    padding-right: 8px;
    color: #fff;
  }
  p {
    font-size: 1.125em;
    color: #fff;
  }
`;

export const FixedItems = styled.div`
  display: flex;
  flex-direction: row;
  span {
    cursor: pointer;
    color: #fff;
    &:nth-child(2) {
      margin-left: 30px;
    }
  }
`;

export const Arrows = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  padding: 0 20px;
  justify-content: space-between;
  width: 100%;
  span {
    cursor: pointer;
    color: #fff;
  }
`;

export const CardItems = styled.div`
  display: flex;
  flex-direction: row;
  margin: 18px 20px 36px 20px;
  justify-content: space-between;
  button {
    &:nth-child(1) {
      padding: 16px 24px;
    }
    &:nth-child(2) {
      padding: 16px 22px;
    }
    &:nth-child(3) {
      padding: 16px 6px;
    }
  }
`;

export const CardButton = styled.button`
    background: #fff;
    color: #055eff;
    border-radius: 6px;
    cursor: pointer;
    border: 1px solid #B4B4B4;
    font-size: 0.75em;
    line-height: 140%;
    &:active {
      background: #055eff;
      color: #fff;
      border: 1px solid #055eff;
    }
    
    &:hover {
      background: #055eff;
      color #fff;
      border: 1px solid #055eff;
    }
`;

export const PropInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px 36px 20px;
  strong {
    font-size: 1.125em;
    color: #353d40;
    padding-bottom: 8px;
  }
  small {
    font-size: 0.75em;
    color: #a6a6a6;
    padding-bottom: 18px;
  }
`;

export const Price = styled.div`
  display: flex;
  align-items: baseline;
  strong {
    font-size: 2em;
    color: #353d40;
  }
  small {
    font-size: 1.125em;
    font-weight: 300;
    color: #353d40;
  }
`;

export const RentDetails = styled.div`
  display: flex;
  margin: 0 20px;
  border-bottom: 1px solid #b4b4b5;
  transform: matrix(1, 0, 0, 1, 0, 0);
  flex-direction: column;
  strong {
    font-weight: 500;
    font-size: 16px;
    line-height: 140%;
    margin-bottom: 18px;
    color: #353d40;
  }
`;

export const RentItems = styled.div`
  display: flex;
  margin-bottom: 18px;
  justify-content: space-between;
  align-items: center;
  svg {
    width: 28px;
    padding-right: 18px;
  }
`;

export const RentTitle = styled.div`
  display: flex;
  p {
    font-size: 0.875em;
    font-weight: 300;
    color: #3d3f40;
  }
`;

export const RentPrice = styled.div`
  display: flex;
  p {
    font-size: 0.875em;
    font-weight: 300;
    color: #3d3f40;
  }
`;

export const RentTotal = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 20px;
  margin-top: 18px;
  justify-content: space-between;
  align-items: center;
  svg {
    width: 28px;
    padding-right: 18px;
  }
  p {
    font-weight: 900;
  }
`;

export const HouseDetails = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 10% 20px;
  justify-content: space-evenly;
  align-items: center;
`;

export const HouseItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  span {
    color: #2693ff;
    padding-bottom: 2px;
  }
  p {
    font-size: 0.875em;
    font-weight: 300;
    line-height: 140%;
    color: #3d3f40;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  span {
    font-weight: 500;
    font-size: 1.375em;
    margin-bottom: 8px;
    color: #3d3f40;
  }
  p {
    line-height: 140%;
    color: #3d3f40;
  }
`;

export const Schedule = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12% 20px 24px 20px;
  align-items: center;
  span {
    text-align: center;
    padding-bottom: 16px;
  }
`;

export const ContactUs = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 20px 12% 20px;
  align-items: center;
  span {
    text-align: center;
    padding-bottom: 16px;
  }
`;

export const ButtonUs = styled.button`
  background: #055eff;
  color: #fff;
  border-radius: 3px;
  padding: 12px;
  width: 240px;
  cursor: pointer;
`;

export const NeighborhoodWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px 12% 20px;
  span {
    font-size: 1.375em;
    font-weight: 500;
    color: #3d3f40;
    padding-bottom: 18px;
  }
`;

export const Neighborhood = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 120px;
    height: 105px;
    margin-right: 16px;
    background: #055eff;
    border-radius: 6px;
  }
`;

export const NeighborhoodDetails = styled.div`
  display: flex;
  flex-direction: column;
  strong {
    padding-bottom: 8px;
    font-size: 1.125em;
    color: #3d3f40;
  }
  p {
    padding-bottom: 8px;
    font-size: 0.875em;
    color: #3d3f40;
    strong {
      font-size: 0.875em;
      color: #3d3f40;
    }
  }
  a {
    text-decoration: none;
    color: #055eff;
    font-weight: 500;
    font-size: 0.875em;
  }
`;

export const Proximity = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px 12% 20px;
  span {
    font-size: 1.375em;
    font-weight: 500;
    color: #3d3f40;
    padding-bottom: 18px;
  }
`;

export const ProximityOverflow = styled.div`
  display: flex;
  overflow-x: auto;
`;

export const ProximityItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: self-start;
  margin-right: 36px;
  img {
    width: 170px;
    height: 165px;
    margin-bottom: 8px;
    background: #bebebe;
    border-radius: 6px;
  }
  strong {
    display: flex;
    align-items: center;
    color: #3d3f40;
    font-weight: 500;
    margin-bottom: 8px;
  }
  svg {
    margin-right: 4px;
  }
  p {
    padding-bottom: 8px;
    color: #3d3f40;
    font-weight: 300;
  }
`;

export const ProximityItemsText = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const District = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 12% 20px;
  span {
    font-size: 1.375em;
    font-weight: 500;
    color: #3d3f40;
    padding-bottom: 18px;
  }
`;

export const DistrictOverflow = styled.ul`
  display: flex;
  overflow-x: auto;
  align-items: baseline;
  width: 100%;
  white-space: nowrap;
  li {
    padding-right: 26px;
  }
  li a {
    text-decoration: none;
    line-height: 140%;
    color: rgba(61, 63, 64, 0.4);
    font-size: 1.125em;
    &:active {
      color: #055eff;
    }
  }
`;

export const KnowMore = styled.a`
  display: flex;
  text-decoration: none;
  color: #055eff;
  font-size: 1.125em;
  font-weight: 500;
  align-items: center;
  padding-right: 2px;
  margin-top: 36px;
  cursor: pointer;
  span {
    font-size: 0.625em;
    color: #055eff;
  }
`;

export const SimilarProperty = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 20px;
  span {
    font-size: 1.375em;
    font-weight: 500;
    color: #3d3f40;
    padding-bottom: 18px;
  }
`;

export const SimilarPropertyWrap = styled.div`
  display: flex;
  overflow-x: auto;
`;

export const AnnounceCard = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: 1.05367px solid #b4b4b5;
  box-sizing: border-box;
  border-radius: 6px;
  width: 276px;
  margin-right: 20px;
  cursor: pointer;
`;

export const AnnounceDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 16px 16px 16px;
  strong {
    color: #055eff;
    padding-bottom: 8px;
    font-size: 0.75em;
    line-height: 140%;
  }
`;

export const AnnounceImg = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  background: linear-gradient(
    180deg,
    rgba(9, 8, 8, 0.2) 0%,
    rgba(0, 0, 0, 0.03) 100%
  );
  border: 0.12774px solid #3d3f40;
  box-sizing: border-box;
  border-radius: 6px;
  width: 276px;
  height: 190px;
  img {
    background: #bebebe;
    width: 276px;
    height: 190px;
    box-sizing: border-box;
    border-radius: 6px;
  }
  strong {
    position: absolute;
    padding: 16px 0 0 16px;
    color: #ffffff;
    text-shadow: 0px 5.10959px 7.66438px rgba(0, 0, 0, 0.1);
    font-weight: 700;
    line-height: 150%;
    font-size: 1.125em;
  }
`;

export const CardArrows = styled.div`
  display: flex;
  position: absolute;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  top: 50%;
  span {
    cursor: pointer;
    color: #fff;
    margin: 0 16px;
    padding: 0;
  }
`;

export const CardPropInfo = styled.div`
  display: flex;
  flex-direction: column;
  strong {
    font-size: 0.875em;
    color: #353d40;
    padding-bottom: 4px;
  }
  small {
    font-size: 0.75em;
    color: #a6a6a6;
  }
`;

export const CardPrice = styled.div`
  display: flex;
  align-items: baseline;
  padding: 8px 0;
  strong {
    font-size: 1.125em;
    color: #353d40;
  }
  small {
    font-size: 0.75em;
    font-weight: 300;
    color: #353d40;
  }
`;

export const CardHouseItems = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;
  span {
    color: #353d40;
    padding: 0;
    padding-right: 5px;
    font-size: 1em;
  }
  p {
    font-size: 0.75em;
    font-weight: 700;
    color: #3d3f40;
    line-height: 140%;
  }
`;

export const CardItemsWrap = styled.div`
  display: flex;
  align-items: center;
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
  padding: 16px;
  color: #fff;
  background-color: #055eff;
  display: flex;
  border: none;
  border-radius: 6px;
  font-size: 0.95em;
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
  overflow-x: auto;
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
