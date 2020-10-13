import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/router'

import api from '../../services/api'

import { 
  AiOutlineClose, 
  AiOutlineHeart,
  AiFillHeart, 
  AiOutlineShareAlt, 
  AiOutlineEdit
} from 'react-icons/ai'

import { BiPlus } from 'react-icons/bi'

import { 
  Container, 
  Title, 
  Desc,
  ContainerCards,
  Card,
  ContainerButtons,
  TitleCard,
  DescCard,
  ButtonDelete,
  ButtonEdit,
  ButtonFavorite,
  ButtonShare,
  ButtonInitial,
  ButtonCloseModal
} from './styles';

import Fetcher from '../../hooks/Fetcher';
import ModalNotes from '../../components/Modals/ModalNotes';

const Initial: React.FC = () => {
  const router = useRouter()
  const [modal, setModal] = useState(false)
  const { data, mutate } = Fetcher("notes")

  // Deletando Notas
  const handleDeleteNote = useCallback((id: number) => {
    api.delete(`notes/${id}`)

    const teste = data?.map((item: any) => {
      if(item.id === id) {
        return {...item}
      }

      return item
    })

    mutate(teste, false)
  }, [data, mutate])

  // Atualizando Nota
  const handleUpdateNoteTrue = useCallback((id: number) => {
    api.patch(`notes/${id}`, { favorite: true })

    const updateItem = data?.map((item: any) => {
      if(item.id === id) return {...item}

      return item
    })

    mutate(updateItem, false)
  }, [data, mutate])

  const handleUpdateNoteFalse = useCallback((id: number) => {
    api.patch(`notes/${id}`, { favorite: false })

    const updateItem = data?.map((item) => {
      if(item.id === id) return {...item}

      return item
    })

    mutate(updateItem, false)
  }, [data, mutate])

  if(!data) return <h1>Carregando...</h1>
  
  console.log(data)
  return (
    <Container 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
    >
      <Title>Bem vindo Guilherme Humberto</Title>
      <Desc>Revise e crie novas anotações</Desc>

      <ContainerCards>
        {data.map((item, index) => (
          <Card 
            key={index}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}  
          >
            <ContainerButtons>
              <ButtonDelete 
                onClick={() => handleDeleteNote(item.id)}
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 0.9 }}
              >
                <AiOutlineClose size={30} color="#e1e1e6"/>
              </ButtonDelete>

              <ButtonEdit 
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 0.9 }}
              >
                <AiOutlineEdit size={30} color="#e1e1e6"/>
              </ButtonEdit>

              <ButtonFavorite
                onClick={() => {
                  item.favorite ? 
                  handleUpdateNoteFalse(item.id) : 
                  handleUpdateNoteTrue(item.id)
                }}
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 0.9 }}
              >
                {item.favorite ? 
                  <AiFillHeart size={30} color="#e5989b"/> : 
                  <AiOutlineHeart size={30} color="#e1e1e6"/>
                }
              </ButtonFavorite>

              <ButtonShare 
                onClick={() => router.push(`NoteDetails/#${item.id}`)}
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 0.9 }}
              >
                <AiOutlineShareAlt size={30} color="#e1e1e6"/>
              </ButtonShare>
            </ContainerButtons>
              <img src={item.img} alt=""/>
            <TitleCard>{item.title}</TitleCard>
            <DescCard>{item.note_value}</DescCard>
          </Card>
        ))}
      </ContainerCards>

      <ButtonInitial onClick={() => setModal(true)}>
        <BiPlus size={45} color="#323F49"/>
      </ButtonInitial>

      {modal && (
        <ModalNotes 
          buttonCloseModal={
            <ButtonCloseModal onClick={() => setModal(false)}>
              <AiOutlineClose color="#323F49" size={30}/>
            </ButtonCloseModal>
          }
        />
      )}
      
    </Container>
  );
};

export default Initial;
