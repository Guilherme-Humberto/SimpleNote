import styled from 'styled-components';
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
    position: fixed;
    z-index: 5;
    top: 0;
    bottom: 0;
    background: rgb(0, 0, 0, 0.8);
    height: 100vh;
    width: 100%;
    overflow-y: none;
    
`;

export const Content = styled.div`
    background: #17232C;
    border-radius: 10px;
    position: relative;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    width: 70%;
    height: 400px
`