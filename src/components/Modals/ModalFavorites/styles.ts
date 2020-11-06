import styled from 'styled-components';
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    height: 100%;
    width: 500px;
    max-width: 500px;
    overflow-y: auto;
    background: #17232C;
    box-shadow: 10px 0px 20px rgb(0, 0, 0, 0.2);

    ::-webkit-scrollbar {
        background: transparent
    }
`;

export const ContainerCards = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15%;
    gap: 40px;
    justify-content: center;
`

export const Card = styled(motion.div)`
    padding: 20px;
    max-width: 450px;
    background: #323F49;
    margin: 0 20px;
`

export const Img = styled.img`
    margin: 10px;
    width: 390px;
`

export const TitleTop = styled.p`
    font-size: 30px;
    font-family: Sansita;
`

export const TitleCard = styled.p`
    font-size: 30px;
    font-family: Sansita;
    margin: 10px 0;
`

export const DescCard = styled.p`
    font-size: 16px;
    font-family: Sansita;
    margin: 10px 0;
`

export const ButtonAddNote = styled.button`
    margin: 9% 4%;
    padding: 10px;
    width: 50%;
    color: #e1e1e6;
    border: none;
    background: #323F49;
    font-size: 20px;
    font-family: Sansita;
`

export const ContentTop = styled.div`
    display: flex;
    gap: 20px;
    flex-direction: column;
    padding: 10px 20px;
    justify-content: space-around;
`

export const ButtonCloseModal = styled.button`
    position: absolute;
    top: 2%;
    right: 3%;
    background: transparent;
    border: none;
    outline: none;
`