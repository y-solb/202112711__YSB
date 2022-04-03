import React, { useState } from "react";
import styled from "styled-components";
import cookie from "../assets/imgs/cookie.png";
import gloves from "../assets/imgs/gloves.png";
import hat from "../assets/imgs/hat.png";
import rudolf from "../assets/imgs/rudolf.png";
import sled from "../assets/imgs/sled.png";
import socks from "../assets/imgs/socks.png";
import bin from "../assets/imgs/bin.png";
import { useDispatch } from "react-redux";
import { deleteCard } from "../modules/cardSlice";
import { ref, remove } from "firebase/database";
import db from "../service/firebase";

const CardItem = ({ card }) => {
  const { id, deco, title, content, top, left } = card;
  const dispatch = useDispatch();
  const onDelete = () => {
    remove(ref(db, `cards/${card.id}`));
    dispatch(deleteCard({ id: id }));
  };

  const [isModal, setIsModal] = useState(false);

  const handleModal = () => {
    setIsModal(!isModal);
  };

  return (
    <ItemBox top={top} left={left}>
      <Deco src={`${getDeco(deco)}`} alt="deco" onClick={handleModal} />
      {isModal && (
        <CardBox>
          <CloseBtn onClick={handleModal}>&times;</CloseBtn>
          <h3>{title}</h3>
          <p>{content}</p>
          <DeleteBtn onClick={onDelete}>
            <DeleteImg src={bin} />
          </DeleteBtn>
        </CardBox>
      )}
    </ItemBox>
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
      throw new Error(`unknown deco:${deco}`);
  }
}

const ItemBox = styled.div`
  display: flex;
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
`;

const Deco = styled.img`
  width: 60px;
  height: 60px;
  &:hover {
    transition: transform 100mx ease-in;
    transform: scale(1.1);
  }
`;

const CardBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 300px;
  padding: 20px 30px 40px 30px;
  background-color: white;
  border-radius: 8px;
  z-index: 10;
  h3 {
    margin-bottom: 16px;
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 20px;
  color: gray;
  background-color: transparent;
  font-size: 24px;
`;

const DeleteBtn = styled.button`
  position: absolute;
  bottom: 18px;
  right: 24px;
  border: none;
  outline: none;
  background: none;
  &:hover {
    transition: transform 100mx ease-in;
    transform: scale(1.1);
  }
`;

const DeleteImg = styled.img`
  width: 24px;
  height: 24px;
`;

export default CardItem;
