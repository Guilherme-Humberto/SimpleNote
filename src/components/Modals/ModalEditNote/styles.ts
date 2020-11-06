import styled from 'styled-components';
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
    position: fixed;
    z-index: 5;
    top: 0;
    background: #17232C;
    height: 100%;
    width: 100%;
    overflow-y: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Content = styled.div`
    width: 100%;
    max-width: 900px;
    display: flex;
    flex-direction: column;
`
export const ButtonCloseModal = styled.button`
    position: absolute;
    top: 5%;
    left: 5%;
    background: transparent;
    outline: none;
    border: none;
    cursor: pointer;
`

export const Label = styled.p`
    font-size: 40px;
    font-family: Sansita;
    font-weight: bold;
    margin: 10px 0;
`

export const InputEditTitle = styled.input`
    max-width: 900px;
    margin: 10px 0;
    padding: 20px 30px;
    background: #1B2F3C;
    border: none;
    outline: none;
    font-size: 30px;
    font-family: Sansita;
    color: #fff;
`

export const TextArea = styled.textarea`
    max-width: 900px;
    margin: 5px 0;
    padding: 20px 30px;
    height: 400px;
    background: #1B2F3C;
    border: none;
    outline: none;
    font-size: 20px;
    font-family: Sansita;
    color: #fff;
    resize: none;
`

export const ButtonAddModal = styled.button`
    width: 200px;
    padding: 10px 20px;
    font-size: 25px;
    font-family: Sansita;
    background: #1B2F3C;
    color: #fff;
    border: none;
    margin: 10px 0;
    outline: none;
    cursor: pointer;

    :hover {
        background: #eee;
        color: #1B2F3C;
    }

`