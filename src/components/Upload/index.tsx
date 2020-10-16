import React from 'react';
import Dropzone from 'react-dropzone'

import { 
  Container,
  DropContainer
 } from './styles';

 interface Props {
  onUpload: any
 }

const Upload: React.FC<Props> = ({ onUpload }) => {
  return (
    <Container>
      <Dropzone accept="image/*" onDropAccepted={onUpload}>
          { ({ getRootProps, getInputProps }) => (
            <DropContainer
            {...getRootProps()}
            >
              <h2 style={{ fontFamily: "Sansita", color: "#ccc" }}>Arraste e solte a imagem</h2>
              <input {...getInputProps()}/>
            </DropContainer>
          )}
        </Dropzone>
    </Container>
  );
};

export default Upload;
