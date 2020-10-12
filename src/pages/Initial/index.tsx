import React, { useCallback, useState } from 'react';
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
import ModalNotes from '../../components/ModalNotes';

const Initial: React.FC = () => {
  const [modal, setModal] = useState(false)
  const [favorite, setFavorite] = useState(false)
  const { data, mutate, error } = Fetcher("notes")

  // Deletando Notas
  const handleDeleteNote = useCallback((id: number) => {
    api.delete(`notes/${id}`)

    const teste = data?.map((item) => {
      if(item.id === id) {
        return {...item}
      }

      return item
    })

    mutate(teste, false)
  }, [data, mutate])

  // Atualizando Nota
  const handleUpdateNote = useCallback((id: number) => {
    api.put(`notes/${id}`, { 
      favorite: true 
    })

    const teste = data?.map((item) => {
      if(item.id === id) {
        return {...item}
      }

      return item
    })

    mutate(teste, false)
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
                onClick={() => handleUpdateNote(item.id)}
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 0.9 }}
              >
                {item.favorite ? 
                  <AiFillHeart size={30} color="#e5989b"/> : 
                  <AiOutlineHeart size={30} color="#e1e1e6"/>
                }
              </ButtonFavorite>

              <ButtonShare 
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 0.9 }}
              >
                <AiOutlineShareAlt size={30} color="#e1e1e6"/>
              </ButtonShare>
            </ContainerButtons>

            <TitleCard>{item.title}</TitleCard>
            <DescCard>{item.note_value}</DescCard>
          </Card>
        ))}
      </ContainerCards>

      <ButtonInitial onClick={() => setModal(true)}>
        <BiPlus size={45} color="#e1e1e6"/>
      </ButtonInitial>

      {modal && (
        <ModalNotes 
          buttonCloseModal={
            <ButtonCloseModal onClick={() => setModal(false)}>
              <AiOutlineClose color="#e1e1e6" size={35}/>
            </ButtonCloseModal>
          }
        />
      )}
      
    </Container>
  );
};

export default Initial;
