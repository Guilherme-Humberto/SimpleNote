import React from 'react';
import { AiOutlineClose, AiFillHeart } from 'react-icons/ai'

import {
  Container,
  TitleTop,
  ContainerCards,
  Card,
  Img,
  TitleCard,
  DescCard,
  ContentTop,
  ButtonCloseModal,
  ContainerButtonFavorite,
  ButtonFavorite
} from './styles';
import Fetcher from '../../../hooks/Fetcher';

interface Props {
  buttonCloseModal: any,
  clearFavorite: any
}

const ListNotesFavorites: React.FC<Props> = ({ buttonCloseModal, clearFavorite }) => {
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
        <TitleTop>Anotações favoritas</TitleTop>
        <ButtonCloseModal onClick={buttonCloseModal}>
          <AiOutlineClose size={35} color="#e1e1e1"/>
        </ButtonCloseModal>
      </ContentTop>

      <ContainerCards
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}  
      >
        {data.filter((item) => item.favorite === true).map((item) => (
          <Card key={item._id}>
            <ContainerButtonFavorite>
              <ButtonFavorite
                onClick={() => clearFavorite(item._id)}
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 0.9 }}
              >
                <AiFillHeart size={30} color="#e5989b"/>
              </ButtonFavorite>
            </ContainerButtonFavorite>
            <br />
            <h3>{item.createAt}</h3>
            <TitleCard>{item.title}</TitleCard>
            <DescCard>{item.note_value}</DescCard>
          </Card>
        ))}
      </ContainerCards>
    </Container>
  );
};

export default ListNotesFavorites;
