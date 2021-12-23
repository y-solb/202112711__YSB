import React, { useRef } from "react";
import styled from "styled-components";
import AddForm from "./components/addForm";
import tree from "./assets/imgs/tree.png";
import CardItem from "./components/cardItem";
import { useSelector } from "react-redux";
import { selectCardList } from "./modules/cardSlice";

function App() {
  const cardList = useSelector(selectCardList);
  const treeRef = useRef();

  return (
    <Container>
      <AddForm />
      <TreeImg ref={treeRef}>
        {cardList &&
          cardList.map((item) => (
            <CardItem
              key={item.id}
              id={item.id}
              deco={item.deco}
              title={item.title}
              content={item.content}
              top={item.top}
              left={item.left}
            />
          ))}
      </TreeImg>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 20px;
  background-color: #c48282;
`;

const TreeImg = styled.div`
  height: 90%;
  width: 480px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${tree});
`;

export default App;
