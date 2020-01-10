import React from 'react';
import styled from 'styled-components';

const CanvasContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Canvas: React.FC = () => (
    <CanvasContainer>
        threejs
    </CanvasContainer>
)