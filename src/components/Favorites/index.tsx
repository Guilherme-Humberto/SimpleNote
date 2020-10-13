import React from 'react';
import { AiOutlineClose } from 'react-icons/ai'

import {
  Container,
  ContainerCards,
  Card,
  TitleCard,
  DescCard,
  ContentTop,
  ButtonCloseModal
} from './styles';
import Fetcher from '../../hooks/Fetcher';

interface Props {
  buttonCloseModal: any
}

const ListNotesFavorites: React.FC<Props> = ({ buttonCloseModal }) => {
  const { data } = Fetcher("notes")

  if (!data) return <h1>Carregando...</h1>

  console.log(data)
  return (
    <Container
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ContentTop>
        <ButtonCloseModal onClick={buttonCloseModal}>
          <AiOutlineClose size={35} color="#e1e1e1"/>
        </ButtonCloseModal>
      </ContentTop>

      <ContainerCards>
        {data.filter((item) => item.favorite === true).map((item) => (
          <Card key={item.id}>
            <TitleCard>{item.title}</TitleCard>
            <DescCard>{item.note_value}</DescCard>
          </Card>
        ))}
      </ContainerCards>
    </Container>
  );
};

export default ListNotesFavorites;
