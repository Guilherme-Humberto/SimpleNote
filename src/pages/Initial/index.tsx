import React, { useState, useEffect } from 'react';
import { FiMoreHorizontal } from 'react-icons/fi'

import {
  Container,
  Title,
  Desc,
  ButtonInitial,
} from './styles';

import ButtonPlus from '../../components/ButtonPlus';
import ListNotes from '../../components/ListNotes';


const Initial: React.FC = () => {
  const [modal, setModal] = useState(false)
  const [infos, setInfos] = useState({})
  const [token, setToken] = useState("")


  async function getiInfosUserOnStorage() {
    setInfos(JSON.parse(localStorage.getItem("user")))
  }
  async function getTokenUserOnStorage() {
    setToken(localStorage.getItem("token"))
  }

  useEffect(() => {
    getiInfosUserOnStorage()
    getTokenUserOnStorage()
  }, [])

  return (
    <>
      <Container
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Title>{infos.name} {infos.surname}</Title>
        <Desc>Revise e crie novas anotações</Desc>

        <ListNotes 
          infos={infos}
          token={token}
        />

        <ButtonInitial onClick={() => setModal(true)}>
          <FiMoreHorizontal size={45} color="#323F49" />
        </ButtonInitial>
      </Container>

      {modal && (
        <ButtonPlus
          infos={infos._id}
          token={token}
          setCloseModal={setModal}
        />
      )}
    </>
  );
};

export default Initial;
