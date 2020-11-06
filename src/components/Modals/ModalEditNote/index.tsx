import React, { useState, useCallback, FormEvent } from 'react';
import { AiOutlineClose } from 'react-icons/ai'
import Fetcher from '../../../hooks/Fetcher';
import api from '../../../services/api';

import { 
  Container,
  Content,
  ButtonCloseModal,
  Label,
  TextArea,
  InputEditTitle,
  ButtonAddModal
 } from './styles';

 interface Props {
  buttonCloseModal: any
  id: string,
  token: string
 }

const ModalEditNote: React.FC<Props> = ({ buttonCloseModal, id, token }) => {
  const [title, setTitle] = useState("")
  const [note, setNote] = useState("")
  
  const { data } = Fetcher(`/notesId/${id}`, `${token}`)

  async function handleUpdateNote () {
    await api.put(`updateNote/${id}`, { title, note }, {
      headers: {
          "Authorization": `Bearer ${token}`
      }
    })
    .then(() => buttonCloseModal())
    .catch(err => console.log(err))
  }

  if(!data) return <h1>Carregando...</h1>
  
  return (
    <Container
    initial={{ y: "100%" }}
    animate={{ y: 0 }}
    transition={{ duration: 0.5 }}
    >
      <ButtonCloseModal onClick={buttonCloseModal}>
        <AiOutlineClose size={30} color="#e1e1e1"/>
      </ButtonCloseModal>

      <Content>
        <Label>Editar anotação</Label>
        <InputEditTitle 
          onChange={(e) => setTitle(e.target.value)} 
          defaultValue={data.title}
        />
        <TextArea 
          onChange={(e) => setNote(e.target.value)} 
          defaultValue={data.note}
        />
        <ButtonAddModal onClick={() => handleUpdateNote(id)}>Salvar</ButtonAddModal>
      </Content>

    </Container>
  );
};

export default ModalEditNote;
