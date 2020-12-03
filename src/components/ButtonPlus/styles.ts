import styled from 'styled-components';
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
    position: fixed;
    z-index: 1;
    right: 2.3%;
    bottom: 5%;
    font-size: 30px;
    transform: translate(-5%, -80%);
    border-radius: 50px;
    padding: 20px;
    border: none;
    background: #e1e1e1;
    outline: none;
    height: 300px;
    width: 85px;
`;

export const ButtonAddNote = styled.button`
    cursor: pointer;
    margin: 1% 4%;
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
    gap: 10px;
    flex-direction: column;
    align-items: center;
`

export const ButtonNewNote = styled.button`
    cursor: pointer;
    border-radius: 50%;
    padding: 10px;
    border: 2px solid #323F49;
    background: transparent;
    display: flex;
    outline: none;
    align-items: center;
    justify-content: center;
`

export const ButtonModalFavorite = styled.button`
    cursor: pointer;
    margin-top: 2rem;
    border-radius: 50%;
    padding: 10px;
    border: 2px solid #323F49;
    background: transparent;
    display: flex;
    outline: none;
    align-items: center;
    justify-content: center;
`

export const ButtoCloseModalAdd = styled.button`
    cursor: pointer;
    position: absolute;
    top: 2%;
    left: 2%;
    background: transparent;
    border: none;
    outline: none;
`
export const ButtonCloseModal = styled.button`
    cursor: pointer;
    margin: 0 4%;
    background: transparent;
    outline: none;
    border: none;
`