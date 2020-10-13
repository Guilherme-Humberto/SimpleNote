import styled from 'styled-components';
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
    position: fixed;
    z-index: 5;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    height: 80%;
    width: 80%;
    overflow-y: none;
    background: #ccc;
    border-radius: 10px;
    box-shadow: 30px 30px 60px 80px rgb(0, 0, 0, 0.4)
`;
