import styled from 'styled-components';
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.p`
    font-size: 40px;
    font-family: Sansita;
    margin-top: 3%;
`
export const Desc = styled.p`
    font-size: 24px;
    font-family: Sansita;
    margin: 10px 0;
`
export const ContainerCards = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    gap: 40px;
    margin-top: 5%;
`

export const Card = styled(motion.div)`
    padding: 40px;
    max-width: 600px;
    background: #17232C;
`

export const TitleCard = styled.p`
    font-size: 40px;
    font-family: Sansita;
    margin: 10px;
`

export const DescCard = styled.p`
    font-size: 20px;
    font-family: Sansita;
    margin: 10px;
`

export const ContainerButtons = styled.div`
    position: absolute;
    z-index: 1;
    right: 0;
    transform: translate(-0%, -150%);
    display: flex;
    gap: 15px;
`

export const ButtonDelete = styled(motion.button)`
    border-radius: 50%;
    padding: 5px;
    border: none;
    background: #387894;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ButtonEdit = styled(motion.button)`
    border-radius: 50%;
    padding: 5px;
    border: none;
    background: #b5838d;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ButtonFavorite = styled(motion.button)`
    border-radius: 50%;
    padding: 5px;
    border: none;
    background: #A34848;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ButtonShare = styled(motion.button)`
    border-radius: 50%;
    padding: 5px;
    border: none;
    background: #439438;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ButtonInitial = styled(motion.button)`
    position: fixed;
    z-index: 1;
    right: 2%;
    bottom: 0;
    transform: translate(-5%, -40%);
    border-radius: 50%;
    padding: 20px;
    border: none;
    background: #17232C;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
`

export const ButtonCloseModal = styled.button`
    margin: 0 4%;
    background: transparent;
    outline: none;
    border: none;
`