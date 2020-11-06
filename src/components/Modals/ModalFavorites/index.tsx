import React, { useCallback } from 'react';
import { AiOutlineClose, AiFillHeart } from 'react-icons/ai'

import {
  Container,
  TitleTop,
  ContainerCards,
  Card,
  TitleCard,
  DescCard,
  ContentTop,
  ButtonCloseModal,
  ContainerButtonFavorite,
  ButtonFavorite
} from './styles';
import Fetcher from '../../../hooks/Fetcher';
import api from '../../../services/api';

interface Props {
  buttonCloseModal: any
  infos: string,
  token: string
}

const ListNotesFavorites: React.FC<Props> = ({ buttonCloseModal, infos, token }) => {
  const { data } = Fetcher(`notes/${infos}?favorite=true`, `${token}`)

  if (!data) return <h1>Carregando...</h1>
  
  return (
    <Container
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ContentTop>
        <TitleTop>Anotações favoritas</TitleTop>
        <ButtonCloseModal onClick={buttonCloseModal}>
          <AiOutlineClose size={35} color="#e1e1e1"/>
        </ButtonCloseModal>
      </ContentTop>

      <ContainerCards>
        {data.filter((item) => item.favorite === true).map((item) => (
          <Card key={item._id}>
            <h3>{item.createAt}</h3>
            <TitleCard>{item.title}</TitleCard>
            <DescCard>{item.note}</DescCard>
          </Card>
        ))}
      </ContainerCards>
    </Container>
  );
};

export default ListNotesFavorites;
