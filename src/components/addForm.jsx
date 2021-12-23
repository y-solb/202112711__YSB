import React, { useRef, useState } from "react";
import styled from "styled-components";
import Popup from "reactjs-popup";
import cookie from "../assets/imgs/cookie.png";
import gloves from "../assets/imgs/gloves.png";
import hat from "../assets/imgs/hat.png";
import rudolf from "../assets/imgs/rudolf.png";
import sled from "../assets/imgs/sled.png";
import socks from "../assets/imgs/socks.png";
import { useDispatch } from "react-redux";
import { addCard } from "../modules/cardSlice";
import db from "../service/firebase";
import { ref, set } from "firebase/database";

const AddForm = () => {
  const decos = [
    {
      name: "cookie",
      location: cookie,
    },
    {
      name: "gloves",
      location: gloves,
    },
    {
      name: "hat",
      location: hat,
    },
    {
      name: "rudolf",
      location: rudolf,
    },
    {
      name: "sled",
      location: sled,
    },
    {
      name: "socks",
      location: socks,
    },
  ];

  const [deco, setDeco] = useState();
  const [top, setTop] = useState();
  const [left, setLeft] = useState();
  const titleRef = useRef();
  const contentRef = useRef();
  const dispatch = useDispatch();

  const handleDeco = (name) => {
    setDeco(name);
    setTop(`${randomNumber(0, 650)}px`);
    setLeft(`${randomNumber(500, 1000)}px`);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const id = Date.now();
    set(
      ref(db, "cards/" + id),
      dispatch(
        addCard({
          id: id,
          deco: deco,
          title: titleRef.current.value,
          content: contentRef.current.value,
          top: top,
          left: left,
        })
      )
    );
  };
  return (
    <Popup
      trigger={<AddBtn>+</AddBtn>}
      position="bottom right"
      arrowStyle={{ color: "lightgray" }}
    >
      <PopupBox>
        <IconBox>
          {decos.map((deco) => (
            <IconBtn key={deco.name} onClick={() => handleDeco(deco.name)}>
              <IconImg src={deco.location} />
            </IconBtn>
          ))}
        </IconBox>
        <Label>Title</Label>
        <InputTitle ref={titleRef} />
        <Label>Content</Label>
        <InputContent ref={contentRef} />
        <SubmitBtn onClick={onSubmit}>Submit</SubmitBtn>
      </PopupBox>
    </Popup>
  );
};

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

const AddBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  margin: 30px;
  border: none;
  border-radius: 50%;
  background-color: white;
  font-size: 24px;
  &:hover {
    background-color: lightgray;
  }
`;

const PopupBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  background-color: lightgray;
  border-radius: 8px;
`;

const IconBox = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const IconBtn = styled.button`
  margin: 10px;
  border: none;
  border-radius: 8px;
  &:hover {
    transition: transform 100mx ease-in;
    transform: scale(1.1);
  }
  &:active {
    outline: none !important;
    box-shadow: 0 0 10px gray;
  }
`;

const IconImg = styled.img`
  width: 60px;
  height: 60px;
`;

const Label = styled.p`
  margin: 0 10px;
`;

const InputTitle = styled.input`
  height: 36px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  margin: 10px 10px 20px 10px;
  padding: 2px 8px;
  &:focus {
    outline: none;
    box-shadow: 0 0 10px gray;
  }
`;

const InputContent = styled.textarea`
  height: 100px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  margin: 10px;
  padding: 8px 8px;
  &:focus {
    outline: none;
    box-shadow: 0 0 10px gray;
  }
`;

const SubmitBtn = styled.button`
  margin: 10px;
  padding: 10px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  background-color: #a1a1a1;
  color: white;
  &:hover {
    background-color: #808080;
  }
`;

export default AddForm;
