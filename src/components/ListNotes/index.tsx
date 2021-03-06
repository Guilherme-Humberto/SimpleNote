import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/router'

import {
  AiOutlineClose,
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineEdit
} from 'react-icons/ai'

import Fetcher from '../../hooks/Fetcher';
import api from '../../services/api';
import ModalEditNote from '../Modals/ModalEditNote'

import {
  ContainerCards,
  Card,
  ContainerButtons,
  Date,
  TitleCard,
  DescCard,
  ButtonCard,
  MessageContainer,
  MessageSubtitle,
  MessageTitle
} from './styles';

interface Props {
  infos: any,
  token: string
}

const ListNotes: React.FC<Props> = ({ infos, token }) => {
  const [modalEdit, setModalEdit] = useState(false)
  const [infomodalEdit, setInfoModalEdit] = useState("")
  console.log()

  const { data, mutate } = Fetcher(`notes/${infos._id}`, `${token}`)

  const handleDeleteNote = useCallback((id: number) => {
    api.delete(`notes/${id}`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })

    const teste = data?.map((item: any) => {
      if (item.id === id) {
        return { ...item }
      }

      return item
    })

    mutate(teste, true)
  }, [data, mutate])

  // Atualizando Nota
  const handleUpdateNoteTrue = useCallback((id: number) => {
    api.patch(`notes/${id}`, { favorite: true }, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })

    const updateItem = data?.map((item: any) => {
      if (item.id === id) return { ...item }

      return item
    })

    mutate(updateItem, true)
  }, [data, mutate])

  const handleUpdateNoteFalse = useCallback((id: number) => {
    api.patch(`notes/${id}`, { favorite: false }, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })

    const updateItem = data?.map((item) => {
      if (item.id === id) return { ...item }

      return item
    })

    mutate(updateItem, true)
  }, [data, mutate])

  if (!data) return (
    <h1>Carregando...</h1>
  )

  return (
    <>
      <ContainerCards>
        {data.length !== 0 ? (
          data.map((item, index) => (
            <Card>
            <ContainerButtons>
              <ButtonCard
                style={{ background: "#387894" }}
                onClick={() => handleDeleteNote(item._id)}
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 0.9 }}
              >
                <AiOutlineClose size={30} color="#e1e1e6" />
              </ButtonCard>
  
              <ButtonCard
                style={{ background: "#b5838d" }}
                onClick={() => {
                  setInfoModalEdit(item._id)
                  setModalEdit(true)
                }}
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 0.9 }}
              >
                <AiOutlineEdit size={30} color="#e1e1e6" />
              </ButtonCard>
  
              <ButtonCard
                style={{ background: "#A34848" }}
                onClick={() => {
                  item.favorite ?
                    handleUpdateNoteFalse(item._id) :
                    handleUpdateNoteTrue(item._id)
                }}
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 0.9 }}
              >
                {item.favorite ?
                  <AiFillHeart size={30} color="#e5989b" /> :
                  <AiOutlineHeart size={30} color="#e1e1e6" />
                }
              </ButtonCard>
            </ContainerButtons>
  
            <Date>{item.createAt}</Date>
            <TitleCard>{item.title}</TitleCard>
            <DescCard>{item.note}</DescCard>
          </Card>
          ))
        ): (
          <MessageContainer>
            <MessageTitle>Adicione novas anotações</MessageTitle>
            <MessageSubtitle>
              Percebemos que você não adicionou nenhuma anotação.
              É bem fácil, basta clicar no botão do lado esquedo da tela e selecionar o último botão.
              Preencha os dados da sua anotação e pronto, está feito.
              Você também pode ver suas anotações favoritas
            </MessageSubtitle>
          </MessageContainer>
        )}
      </ContainerCards>

      {modalEdit && (
        <ModalEditNote
          token={token}
          id={infomodalEdit}
          buttonCloseModal={() => setModalEdit(false)}
        />
      )}
    </>
  );
};

export default ListNotes;
