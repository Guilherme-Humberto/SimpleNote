import styled from 'styled-components';
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
    position: fixed;
    z-index: 5;
    top: 0;
    height: 100%;
    width: 100%;
    overflow-y: none;
    background: #17232C;
    border-radius: 10px;
`

export const ContentModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5% 20px;
`

export const FormModal = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 5%;
    
`
export const Label = styled.p`
    font-size: 40px;
    font-family: Sansita;
    margin: 20px 0;
`
export const InputModal = styled.input`
    padding: 10px;
    font-size: 22px;
    font-family: Sansita;
    border: none;
    background: #1B2F3C;
    outline: none;
    color: #e1e1e1;
`
export const TextAreaModal = styled.textarea`
    border: none;
    background: #1B2F3C;
    outline: none;
    color: #e1e1e1;
    resize: none;
    height: 350px;
    padding: 10px;
    margin: 20px 0;
    font-size: 18px;
    font-family: Sansita;

    ::-webkit-scrollbar {
        background: transparent
    }
`
export const ButtonModal = styled.button`
    font-size: 20px;
    font-weight: bold;
    color: #e1e1e1;
    font-family: Sansita;
    width: 150px;
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background: #1B2F3C;

    :hover {
        background: #e1e1e1;
        color: #1B2F3C;
    }
`