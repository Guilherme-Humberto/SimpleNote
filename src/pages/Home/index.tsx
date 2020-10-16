import React, { useState } from 'react';
import { motion } from 'framer-motion'
import { ImBooks } from 'react-icons/im'

const teste = [
    {
        name: "Guilherme"
    }
]

import { 
    AiOutlineShareAlt, 
    AiOutlineClose, 
    AiOutlineHeart 
} from 'react-icons/ai'

import Modals from '../../components/Modals/ModalAcess';
import {
    Container,
    TitleAppHome,
    DescAppHome,
    ButtonsContainerHome,
    CardsContainerHome,
    IconCardHome,
    TextsCardHome,
    IconTopCard,
    IconTopCard2,
    ButtonCloseModal,
    Title,
    Desc,
    Form,
    Label,
    InputsModalCad,
    InputModalCad,
    Button
} from './styles';

const Home: React.FC = () => {
    const [modalsCad, setModalsCad] = useState(false)
    const [modalsAcess, setModalsAcess] = useState(false)

    const handleOpenModalCad = () => {
        setModalsCad(true)
        setModalsAcess(false)
    }
    const handleOpenModalAcess = () => {
        setModalsAcess(true)
        setModalsCad(false)
    }
   

    return (
        <Container>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <TitleAppHome>SimpleNote</TitleAppHome>
                <DescAppHome>
                    Mantenha a organização com blocos de anotações que você pode dividir em seções e páginas.
                    Com navegação e pesquisa fáceis, você sempre encontra as anotações exatamente onde as deixou.
            </DescAppHome>

                <ButtonsContainerHome>
                    <motion.button
                        id="buttonHome"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handleOpenModalCad}
                    >Cadastrar
                </motion.button>
                    <motion.button
                        id="buttonHome"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handleOpenModalAcess}
                    > Acessar
                </motion.button>
                </ButtonsContainerHome>

                <CardsContainerHome>
                    {/* Primeiro Card */}

                    <motion.div
                        id="cardHome"
                        animate={{ x: 0 }} initial={{ x: "-100%" }}
                        transition={{ duration: 0.8 }}
                    >
                        <IconTopCard>
                            <AiOutlineHeart size={23} />
                        </IconTopCard>
                        <IconCardHome>
                            <ImBooks size={50} />
                        Organize
                    </IconCardHome>
                        <TextsCardHome>
                            Classifique o conteúdo em blocos de anotações, seções e páginas.
                    </TextsCardHome>
                    </motion.div>
                    {/* Segundo Card */}
                    <motion.div
                        id="cardHome"
                        animate={{ x: 0 }} initial={{ x: "-150%" }}
                        transition={{ duration: 1 }}
                    >
                        <IconTopCard2>
                            <AiOutlineShareAlt size={23} />
                        </IconTopCard2>
                        <IconCardHome>
                            <AiOutlineShareAlt size={50} />
                        Compartilhe
                    </IconCardHome>
                        <TextsCardHome>
                            Compartilhe blocos de anotações com colegas de trabalho, amigos e familiares.
                    </TextsCardHome>
                    </motion.div>
                </CardsContainerHome>
            </motion.div>

            {modalsCad && (
                <Modals
                    buttonCloseMal={
                        <ButtonCloseModal onClick={() => setModalsCad(false)}>
                            <AiOutlineClose color="#e1e1e6" size={35}/>
                        </ButtonCloseModal>
                    }
                    form={
                        <>
                        <Title>Criar Conta</Title>
                        <Desc>Pronto para anotar suas ideias e organizar o seu dia? Então não perca mais tempo. Crie sua conta.</Desc>
                        <Form>
                            <Label>Nome e sobrenome</Label>
                            <InputsModalCad>
                                <InputModalCad placeholder="Nome" />
                                <InputModalCad placeholder="Sobrenome" />
                            </InputsModalCad>
                            <Label>Email</Label>
                            <InputModalCad placeholder="E-Mail" />
                            <Label>Senha</Label>
                            <InputModalCad type="password" placeholder="Senha" />
                            <Button>Cadastrar</Button>
                        </Form>
                        </>
                    }
                />
            )}
            {modalsAcess && (
                <Modals
                    buttonCloseMal={
                        <ButtonCloseModal onClick={() => setModalsAcess(false)}>
                            <AiOutlineClose color="#e1e1e6" size={35}/>
                        </ButtonCloseModal>
                    }
                    form={
                        <>
                        <Title>Acessar</Title>
                        <Desc>Quem bom que você está de volta, está na hora de revisar suas notas</Desc>
                        <Form>
                            <Label>Email</Label>
                            <InputModalCad placeholder="E-Mail" />
                            <Label>Senha</Label>
                            <InputModalCad type="password" placeholder="Senha" />
                            <Button>Acessar</Button>
                        </Form>
                        </>
                    }
                />
            )}
        </Container>
    );
}

export default Home;