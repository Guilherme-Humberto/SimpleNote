import React, { useState } from 'react';
import { useRouter } from 'next/router'
import { AiFillHeart, AiOutlineClose } from 'react-icons/ai'
import { BiPlus } from 'react-icons/bi'


import {
  Container,
  ContentTop,
  ButtonNewNote,
  ButtonModalFavorite,
  ButtoCloseModalAdd
} from './styles';
import ModalFavorites from '../Modals/ModalFavorites';
import ModalAddNote from '../Modals/ModalAddNote';

interface Props {
  buttonCloseModal: any
  infos: any,
  token: string
}

const ModalNotes: React.FC<Props> = ({ buttonCloseModal, infos, token }) => {
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
        <ModalFavorites
          infos={infos}
          token={token}
          buttonCloseModal={() => setModal(false)}
        />
      )}

      {modalAdd && (
        <ModalAddNote 
          infos={infos}
          token={token}
          functionCloseModal={setModalAdd}
          buttonCloseModal={
            <ButtoCloseModalAdd onClick={() => setModalAdd(false)}>
              <AiOutlineClose size={35} color="#e1e1e1" />
            </ButtoCloseModalAdd>
          }
        />
      )}
    </>
  );
};

export default ModalNotes;
