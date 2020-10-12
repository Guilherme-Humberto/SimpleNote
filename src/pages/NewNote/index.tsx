import React, { FormEvent, useState } from 'react';
import { useRouter } from 'next/router'

import api from '../../services/api'

import { 
  Container,
  ContentTop, 
  ContentDown,
  Title,
  Text,
  InputTitle,
  TextArea,
  Button
} from './styles';

const NewNote: React.FC = () => {
  const router = useRouter()

  const [title, setTitle] = useState('')
  const [note_value, setNote] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    await api.post(`notes`, { 
      title, 
      note_value, 
      favorite: false 
    }).then(() => {router.push("/Initial")})
  }
    
  return (
    <Container
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
    >
      <ContentTop>
        <Title onClick={() => router.push("Initial")}>
          SimpleNote
        </Title>
        <Text>Adicione novas anotações</Text>
      </ContentTop>
      <ContentDown onSubmit={handleSubmit}>
        <InputTitle 
          onChange={(e) => setTitle(e.target.value)} 
          placeholder="Digite o título da anotação"
        />
        <TextArea 
          onChange={(e) => setNote(e.target.value)} 
          placeholder="Anotação"
        />
        <Button type="submit">Adicionar</Button>
      </ContentDown>
    </Container>
  );
};

export default NewNote;
