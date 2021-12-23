import React from "react";
import styled from "styled-components";
import AddForm from "./components/addForm";

function App() {
  return (
    <Container>
      <AddForm />
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

export default App;
