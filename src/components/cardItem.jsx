import React from "react";
import styled from "styled-components";
import Popup from "reactjs-popup";
import cookie from "../assets/imgs/cookie.png";
import gloves from "../assets/imgs/gloves.png";
import hat from "../assets/imgs/hat.png";
import rudolf from "../assets/imgs/rudolf.png";
import sled from "../assets/imgs/sled.png";
import socks from "../assets/imgs/socks.png";

const CardItem = ({ id, deco, title, content, top, left }) => {
  return (
    <Popup
      trigger={
        <Deco top={top} left={left} src={`${getDeco(deco)}`} alt="deco" />
      }
      position="right center"
      arrowStyle={{ display: "none" }}
    >
      <CardBox>
        <h3>{title}</h3>
        <span>{content}</span>
      </CardBox>
    </Popup>
  );
};

function getDeco(deco) {
  switch (deco) {
    case "cookie":
      return cookie;
    case "gloves":
      return gloves;
    case "hat":
      return hat;
    case "rudolf":
      return rudolf;
    case "sled":
      return sled;
    case "socks":
      return socks;
    default:
      throw new Error(`unknown feeling:${deco}`);
  }
}

const Deco = styled.img`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  width: 60px;
  height: 60px;
  &:hover {
    transition: transform 100mx ease-in;
    transform: scale(1.1);
  }
`;

const CardBox = styled.div`
  position: absolute;
  left: "50%";
  display: flex;
  flex-direction: column;
  min-width: 300px;
  padding: 30px 30px 60px 30px;
  background-color: white;
  border-radius: 8px;
`;

export default CardItem;
