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
  infos: any
  token: string
}

const ModalAddNote: React.FC<Props> = ({ buttonCloseModal, functionCloseModal, infos, token }) => {
  const [title, setTitle] = useState("")
  const [note, setNote] = useState("")

  const data = Date.now()
  const dataToday = new Date(data)
  
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
      api.post(`notes/${infos}`, {
        title, 
        note, 
        favorite: false,
        createAt: dataToday.toLocaleDateString()
      },
      {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }
    )
    .then(() => functionCloseModal(false))
    .catch((err) => console.log(err))
  }

  return (
    <Container
      initial={{ y: "100%"}}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ContentModal>
        {buttonCloseModal}
        <FormModal onSubmit={handleSubmit}>
          <Label>Adicionar nova anotação</Label>
          <InputModal 
            onChange={(e) => setTitle(e.target.value)} 
            placeholder="Título da nota" type="text"
          />
          <TextAreaModal 
            onChange={(e) => setNote(e.target.value)} 
            placeholder="Digite neste espaço"
          />
          <ButtonModal>Adicionar</ButtonModal>
        </FormModal>
      </ContentModal>
    </Container>
  );
};

export default ModalAddNote;
