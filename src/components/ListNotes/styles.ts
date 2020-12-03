import styled from 'styled-components';
import { motion } from 'framer-motion'

export const ContainerCards = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    gap: 40px;
    margin-top: 5%;
`
export const MessageContainer = styled.div`
    max-width: 700px;
    border: 2px solid #eee;
    padding: 30px 10px;
`
export const MessageTitle = styled.p`
    text-align: center;
    font-size: 25px;
    font-family: Roboto;
    font-weight: bold;
`
export const MessageSubtitle = styled.p`
    font-size: 20px;
    margin: 5px 10px;
    font-family: Roboto;
`
export const Card = styled.div`
    position: relative;
    padding: 40px;
    max-width: 600px;
    height: 400px;
    max-width: 600px;
    background: #17232C;
`
export const Date = styled.p`
    font-size: 20px;
    font-family: Roboto;
    font-weight: bold;
    margin: 10px;
`
export const TitleCard = styled.p`
    font-size: 37px;
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
export const ButtonCard = styled(motion.button)`
    cursor: pointer;
    border-radius: 50%;
    padding: 5px;
    border: none;
    display: flex;
    outline: none;
    align-items: center;
    justify-content: center;
`