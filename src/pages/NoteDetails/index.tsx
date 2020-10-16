import React from 'react';
import { useRouter } from 'next/router'

import Fetcher from '../../hooks/Fetcher';
import { 
  Container,
  Logo,
  Content,
  Img,
  TitleNote,
  DescNote
 } from './styles';

const NoteDetails: React.FC = () => {
  const router = useRouter()
  const id = router.asPath.substr(13)

  const { data } = Fetcher(`notes/${id}`)

  if(!data) return <h1>Carregando...</h1>

  return (
    <Container
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
    >
      <Logo onClick={() => router.push("Initial")}>
        SimpleNote
      </Logo>
      <Content>
        <TitleNote>{data.title}</TitleNote>
        <DescNote>{data.note_value}</DescNote>
      </Content>
    </Container>
  );
};

export default NoteDetails;
