import React from 'react';

import { 
    Container, 
    ContainerContentModalCad
} from './styles';

interface Props {
    form: any,
    buttonCloseMal: any
}
const Modals: React.FC<Props> = ({ form, buttonCloseMal }) => {
    return (
        <Container 
            initial={{ x: "100%", opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{ duration: 0.5 }}
        >
            <ContainerContentModalCad>
            {buttonCloseMal}
            {form}
            </ContainerContentModalCad>
        </Container>
    );
}

export default Modals;