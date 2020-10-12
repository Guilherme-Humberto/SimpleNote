import styled from 'styled-components';
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export const ContentTop = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5%;
`

export const ContentDown = styled.form`
    position: absolute;
    width: 100%;
    height: 60%;
    bottom: 0;
    background: #17232C;
    padding: 2% 0%;
`

export const Title = styled.button`
    font-size: 30px;
    color: #e1e1e1;
    font-family: Sansita;
    background: transparent;
    border: none;
    outline: none;
`

export const Text = styled.p`
    font-size: 45px;
    font-family: Sansita;
    font-weight: bold;
`

export const InputTitle = styled.input`
    width: 50%;
    height: 70px;
    background: transparent;
    border: none;
    outline: none;
    padding: 20px;
    color: #e1e1e1;
    font-size: 40px;
    font-family: Sansita;
    font-weight: bold;
`


export const TextArea = styled.textarea`
    width: 100%;
    height: 65%;
    padding: 20px;
    background: transparent;
    border: 2px solid #2D3C48;
    outline: none;
    color: #e1e1e1;
    margin: 10px 0;
    resize: none;
    font-size: 25px;
    font-family: Sansita;
    font-weight: bold;
`

export const Button = styled.button`
    width: 150px;
    background: #2D3C48;
    color: #e1e1e1;
    padding: 10px;
    margin: 0 20px;
    border: none;
    font-size: 20px;
    font-family: Sansita;
    font-weight: bold;
`