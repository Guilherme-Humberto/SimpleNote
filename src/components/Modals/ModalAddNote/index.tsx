import React, { useState, useCallback, FormEvent } from 'react';

import api from '../../../services/api';

import { 
  Container,
  ContentModal,
  FormModal,
  Label,
  InputModal,
  TextAreaModal,
  ButtonModal,
} from './styles';

interface Props {
  buttonCloseModal: any
  functionCloseModal: any
}

const ModalAddNote: React.FC<Props> = ({ buttonCloseModal, functionCloseModal }) => {
  const [title, setTitle] = useState("")
  const [note_value, setNote_value] = useState("")

  const data = Date.now()
  const dataToday = new Date(data)
  
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
      api.post(`/create`, {
        title, 
        note_value, 
        favorite: false,
        createAt: dataToday.toLocaleDateString()
      }
    )
    .then(() => functionCloseModal(false))
    .catch((err) => err)
  }

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <ContentModal>
        {buttonCloseModal}
        <FormModal onSubmit={handleSubmit}>
          <Label>Adicionar nova anotação</Label>
          <InputModal onChange={(e) => setTitle(e.target.value)} placeholder="Título da nota" type="text"/>
          <TextAreaModal onChange={(e) => setNote_value(e.target.value)} placeholder="Digite neste espaço"/>
          <ButtonModal>Adicionar</ButtonModal>
        </FormModal>
      </ContentModal>
    </Container>
  );
};

export default ModalAddNote;
