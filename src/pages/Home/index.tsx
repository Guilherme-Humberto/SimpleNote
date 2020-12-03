import React, { FormEvent, useState } from 'react';
import { motion } from 'framer-motion'
import { ImBooks } from 'react-icons/im'
import { useRouter } from 'next/router'

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
import api from '../../services/api';

const Home: React.FC = () => {
    const router = useRouter()
    const [modalsCad, setModalsCad] = useState(false)
    const [modalsAcess, setModalsAcess] = useState(false)

    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleOpenModalCad = () => {
        setModalsCad(true)
        setModalsAcess(false)
    }
    const handleOpenModalAcess = () => {
        setModalsAcess(true)
        setModalsCad(false)
    }

    const handleSubmit = async () => {
        await api.post("register", { name, surname, email, password })
        .then((response) => {
            const { token, user } = response.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            router.push("Initial")
        })
        .catch(err => console.log(err))
    }

    const handleLogin = async (e: FormEvent) => {
        e.preventDefault()
        await api.post("auth", { email, password })
        .then((response) => {
            const { token, user } = response.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            router.push("Initial")
        })
        .catch(err => console.log(err))
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
                        <Form onSubmit={handleSubmit}>
                            <Label>Nome e sobrenome</Label>
                            <InputsModalCad>
                                <InputModalCad
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Nome"
                                />
                                <InputModalCad
                                    onChange={(e) => setSurname(e.target.value)}
                                    placeholder="Sobrenome"
                                />
                            </InputsModalCad>
                            <Label>Email</Label>
                            <InputModalCad
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="E-Mail"
                            />
                            <Label>Senha</Label>
                            <InputModalCad
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder="Senha"
                            />
                            <Button type="submit">Cadastrar</Button>
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
                        <Form onSubmit={handleLogin}>
                            <Label>Email</Label>
                            <InputModalCad 
                                placeholder="E-Mail" 
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                            <Label>Senha</Label>
                            <InputModalCad 
                                type="password" 
                                placeholder="Senha" 
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Button type="submit">Acessar</Button>
                        </Form>
                        </>
                    }
                />
            )}
        </Container>
    );
}

export default Home;