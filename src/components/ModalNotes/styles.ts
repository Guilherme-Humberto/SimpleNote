import styled from 'styled-components';
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    height: 100%;
    max-width: 500px;
    background: #17232C;
    overflow-y: auto;
    box-shadow: 10px 0px 20px rgb(0, 0, 0, 0.4);
`;

export const ContainerCards = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    justify-content: center;
`

export const Card = styled(motion.div)`
    padding: 20px;
    background: #323F49;
    margin: 0 20px;
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
    align-items: center;
    justify-content: space-between;
`

export const ButtonFavorite = styled.button`
    position: absolute;
    z-index: 1;
    transform: translate(-80%, -100%);
    border-radius: 50%;
    padding: 5px;
    border: none;
    background: #A34848;
    display: flex;
    align-items: center;
    justify-content: center;
`