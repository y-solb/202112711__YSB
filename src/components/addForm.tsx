import React, { useRef, useState } from "react";
import styled from "styled-components";
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

  const [isModal, setIsModal] = useState<Boolean>(false);
  const [selectedDeco, setSeletedDeco] = useState<string>("");
  const [top, setTop] = useState<string>("");
  const [left, setLeft] = useState<string>("");
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const dispatch = useDispatch();

  const handleModal = () => {
    setIsModal(!isModal);
  };

  const handleBackground = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target === e.currentTarget) {
      setIsModal(!isModal);
    }
  };

  const handleDeco = (name: string) => {
    setSeletedDeco(name);
    setTop(`${randomNumber(0, 650)}px`);
    setLeft(`${randomNumber(500, 1000)}px`);
  };

  const onSubmit = () => {
    if (titleRef.current?.value === "") {
      alert("제목을 입력해 주세요!");
      return;
    } else if (contentRef.current?.value === "") {
      alert("내용을 입력해 주세요!");
      return;
    } else if (selectedDeco === "") {
      alert("데코를 선택해 주세요!");
      return;
    }
    set(
      ref(db, "cards/" + Date.now()),
      dispatch(
        addCard({
          id: Date.now(),
          deco: selectedDeco,
          title: titleRef.current?.value,
          content: contentRef.current?.value,
          top: top,
          left: left,
        })
      )
    );
    if (titleRef.current !== null && contentRef.current != null) {
      titleRef.current.value = "";
      contentRef.current.value = "";
    }
  };

  return (
    <>
      <AddBtn onClick={handleModal}>+</AddBtn>
      {isModal && (
        <Background onClick={handleBackground}>
          <PopupBox>
            <IconBox>
              {decos.map((deco) => (
                <IconBtn
                  key={deco.name}
                  onClick={() => handleDeco(deco.name)}
                  isDeco={selectedDeco === deco.name}
                >
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
        </Background>
      )}
    </>
  );
};

function randomNumber(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

interface IconBtnProps {
  isDeco: boolean;
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

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 20;
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

const IconBtn = styled.button<IconBtnProps>`
  margin: 10px;
  padding: 10px;
  border: none;
  border-radius: 8px;
  &:hover {
    transition: transform 100mx ease-in;
    transform: scale(1.1);
  }
  background-color: ${(props) => (props.isDeco ? "white" : "transparent")};
`;

const IconImg = styled.img`
  width: 60px;
  height: 60px;
`;

const Label = styled.p`
  font-size: 18px;
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
  }
`;

const SubmitBtn = styled.button`
  margin: 10px;
  padding: 10px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  background-color: #a1a1a1;
  color: white;
  &:hover {
    background-color: #808080;
  }
`;

export default AddForm;
