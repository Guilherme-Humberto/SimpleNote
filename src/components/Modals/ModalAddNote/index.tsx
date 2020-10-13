import React from 'react';

import { Container } from './styles';

const ModalAddNote: React.FC = () => {
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1>ModalAddNote</h1>
    </Container>
  );
};

export default ModalAddNote;
