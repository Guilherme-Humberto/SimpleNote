import React, { useState } from 'react';
import { useRouter } from 'next/router'
import { AiFillHeart } from 'react-icons/ai'
import { BiPlus } from 'react-icons/bi'


import {
  Container,
  ContentTop,
  ButtonNewNote,
  ButtonModalFavorite
} from './styles';
import ListNotesFavorites from '../../ListNotesFavorites';
import ModalAddNote from '../ModalAddNote';

interface Props {
  buttonCloseModal: any
}

const ModalNotes: React.FC<Props> = ({ buttonCloseModal }) => {
  const [modal, setModal] = useState(false)
  const [modalAdd, setModalAdd] = useState(false)

  return (
    <>
      <Container
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ContentTop>
          {buttonCloseModal}
          <ButtonModalFavorite onClick={() => setModal(true)}>
            <AiFillHeart size={30} color="#323F49" />
          </ButtonModalFavorite>

          <ButtonNewNote onClick={() => setModalAdd(true)}>
            <BiPlus size={30} color="#323F49" />
          </ButtonNewNote>
        </ContentTop>
      </Container>

      {modal && (
        <ListNotesFavorites
          buttonCloseModal={() => setModal(false)}
        />
      )}

      {modalAdd && (
        <ModalAddNote />
      )}
    </>
  );
};

export default ModalNotes;
