import React from 'react';
import { useRouter } from 'next/router'
import { AiFillHeart } from 'react-icons/ai'

import Fetcher from '../../hooks/Fetcher';

import { 
  Container,
  ContainerCards,
  Card,
  TitleCard,
  DescCard,
  ButtonAddNote,
  ContentTop,
  ButtonFavorite
} from './styles';

interface Props {
  buttonCloseModal: any
}

const ModalNotes: React.FC<Props> = ({ buttonCloseModal }) => {
  const router = useRouter()
  const { data } = Fetcher("notes")

  if(!data) return <h1>Carregando...</h1>

  console.log(data)
  return (
    <Container
      initial={{ x: "-100%", opacity: 0 }} 
      animate={{ x: 0, opacity: 1 }} 
      transition={{ duration: 0.5 }}
    >
      <ContentTop>
        <ButtonAddNote onClick={() => router.push("NewNote")}>
          Adicionar nova anotação
        </ButtonAddNote>
        {buttonCloseModal}
      </ContentTop>

      <ContainerCards>
        {data.filter((item) => item.favorite === true).map((item) => (
          <Card key={item.id}>
            <ButtonFavorite>
              <AiFillHeart size={25} color="#e5989b"/>
            </ButtonFavorite>
            <TitleCard>{item.title}</TitleCard>
            <DescCard>{item.note_value}</DescCard>
          </Card>
        ))}
      </ContainerCards>
    </Container>
  );
};

export default ModalNotes;
