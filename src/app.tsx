import React, { useEffect } from "react";
import styled from "styled-components";
import tree from "./assets/imgs/tree.png";
import { useSelector, useDispatch } from "react-redux";
import { selectCardList, setCard } from "./modules/cardSlice";
import db from "./service/firebase";
import { ref, onValue, off } from "firebase/database";
import AddForm from "./components/addForm";
import CardItem from "./components/cardItem";

function App() {
  const dispatch = useDispatch();
  const cardList = useSelector(selectCardList);

  useEffect(() => {
    onValue(ref(db, "cards/"), (snapshot) => {
      const datas = snapshot.val();
      const cardDatas = [];
      for (let id in datas) {
        cardDatas.push({ ...datas[id].payload, id });
      }
      dispatch(setCard(cardDatas));
    });
    return () => off(ref(db, "cards/"));
  }, []);

  return (
    <Container>
      <AddForm />
      <TreeImg>
        {cardList &&
          Object.keys(cardList).map((key) => (
            <CardItem key={key} card={cardList[key]} />
          ))}
      </TreeImg>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #c48282;
`;

const TreeImg = styled.div`
  position: relative;
  height: 90%;
  width: 480px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${tree});
`;

export default App;
