import React from 'react';
import { useRouter } from 'next/router'

import Fetcher from '../../hooks/Fetcher';
import { Container } from './styles';

const NoteDetails: React.FC = () => {
  const router = useRouter()
  const id = router.asPath.substr(13)

  const { data } = Fetcher(`notes/${id}`)

  if(!data) return <h1>Carregando...</h1>

  console.log(data)
  return (
    <Container
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
    >
      <h1>NoteDetails</h1>
    </Container>
  );
};

export default NoteDetails;
