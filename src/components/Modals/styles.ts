import styled from 'styled-components';
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2;
  height: 100%;
  max-width: 500px;
  background: #17232C;
  box-shadow: -10px 0px 20px rgb(0, 0, 0, 0.4);
`;

export const ContainerContentModalCad = styled.div`
  margin: 20% 10%;
`