import styled from 'styled-components';
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    margin: 1% 0;
    padding: 70px 20px;
    background: #17232C;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 600px;
    box-shadow: -20px 20px 30px rgb(0, 0, 0, 0.4);
`

export const Logo = styled.p`
    font-size: 40px;
    font-family: Sansita;
    font-weight: 600;
    margin: 20px;
    cursor: pointer;
`

export const TitleNote = styled.p`
    font-size: 45px;
    font-family: Sansita;
    text-align: left;
    margin: 10px;
    font-weight: 600;
`

export const DescNote = styled.p`
    font-size: 20px;
    text-align: center;
    font-family: Roboto;
    max-width: 500px;
    font-weight: 500;
`