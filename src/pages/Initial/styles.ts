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
export const ButtonInitial = styled(motion.button)`
    cursor: pointer;
    position: fixed;
    z-index: 1;
    right: 2%;
    bottom: 0;
    transform: translate(-5%, -40%);
    border-radius: 50%;
    padding: 20px;
    border: none;
    background: #e1e1e1;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
`

