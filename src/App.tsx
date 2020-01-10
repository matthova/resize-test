import React from 'react';
import { Resizable } from 're-resizable';
import styled from 'styled-components';
import { Canvas } from './Canvas';

const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 100%;
  overflow: hidden;
  display: grid;
  grid-template-rows: 1fr min-content;
  grid-template-columns: min-content 1fr min-content;
  grid-gap: 1px;
  background-color: black;
  > div {
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const LeftColumn = styled(Resizable)
.attrs({
  defaultSize:{
    width: 320,
    height: 'auto'
  }
})`
  grid-area: 1 / 1 / 3 / 2;
`
const CanvasContainer = styled.div`
  grid-area: 1 / 2 / 2 / 3;
`;

const BottomRow = styled(Resizable)
.attrs({
  defaultSize:{
    width: 'auto',
    height: 200
  }
})`
  grid-area: 2 / 2 / 3 / 3;
`;

const RightColumn = styled(Resizable)
.attrs({
  defaultSize: {
    width: 320,
    height: 'auto',
  }
})`
  grid-area: 1 / 3 / 3 / 4;
`

const App: React.FC = () => {
  return (
    <Container>
      <LeftColumn enable={{ right:true}}>
        Left Column
      </LeftColumn>
      <CanvasContainer>
        <Canvas />
      </CanvasContainer>
      <RightColumn enable={{ left:true }}>
        Right Column
      </RightColumn>
      <BottomRow enable={{ top:true }}>
        Bottom Row
      </BottomRow>
    </Container>
  );
}

export default App;
