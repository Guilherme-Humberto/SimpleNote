import React from 'react';

import { 
  Container,
  Content
 } from './styles';

const ModalEditNote: React.FC = () => {
  return (
    <Container
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    >
      <Content>
        <h1>Guilherme Humberto</h1>
      </Content>

    </Container>
  );
};

export default ModalEditNote;
