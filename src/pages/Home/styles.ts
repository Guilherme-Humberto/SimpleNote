import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5%;
`;

export const TitleAppHome = styled.p`
    font-size: 80px;
    font-family: Sansita;
    margin: 20px 0;
`
export const DescAppHome = styled.p`
    font-size: 27px;
    margin: 20px 0;
    font-family: Sansita;
    max-width: 950px;
`
export const ButtonsContainerHome = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    margin: 2% 0;
    gap: 0 20px;

    button#buttonHome {
        width: 150px;
        padding: 10px 0;
        background: #17232C;
        outline: none;
        border-radius: 25px;
        font-weight: bold;
        border: none;
        font-size: 20px;
        font-family: Sansita;
        color: #e1e1e6;

        :hover {
            background: #e1e1e6;
            color: #121212;
        }
    }
`
export const IconCardHome = styled.div`
    display: flex;
    font-size: 25px;
    font-family: Sansita;
    align-items: center;
    margin: 2%;
    gap: 0 10px;
`

export const CardsContainerHome = styled.div`
    display: flex;
    margin-top: 7%;
    flex-wrap: wrap;
    gap: 20px;

    #cardHome {
        max-width: 600px;
        background: #17232C;
        padding: 20px;
        border-radius: 10px
    }
`
export const TextsCardHome = styled.p`
    font-size: 23px;
    font-family: Sansita;
    padding: 10px;
`

export const IconTopCard = styled.div`
    border-radius: 50%;
    padding: 5px;
    background: #A34848;
    position: absolute;
    z-index: 1;
    transform: translate(-90%, -90%);
    display: flex;
    align-items: center;
    justify-content: center;
`

export const IconTopCard2 = styled.div`
    border-radius: 50%;
    padding: 5px;
    background: #439438;
    position: absolute;
    z-index: 1;
    transform: translate(-90%, -90%);
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Title = styled.p`
  font-size: 40px;
  font-family: Sansita;
`
export const Desc = styled.p`
  font-size: 20px;
  font-family: Sansita;
  margin: 10px 0;
`

export const Label = styled.p`
  font-size: 20px;
  font-weight: 500;
  font-family: Roboto;
`

export const InputsModalCad = styled.div`
    display: flex;
    gap: 20px;
`

export const InputModalCad = styled.input`
    width: 100%;
    background: #323F49;
    font-weight: 600;
    color: #e1e1e6;
    font-size: 18px;
    padding: 15px 10px;
    border: none;
    outline: none;
`

export const Button = styled.button`
    width: 25%;
    margin-top: 4%;
    border-radius: 5px;
    padding: 15px 10px;
    background: #323F49;
    font-size: 18px;
    font-family: Roboto;
    font-weight: 600;
    color: #e1e1e6;
    border: none;

    :hover {
        background: #e1e1e6;
        color: #121212;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 10%;
`

export const ButtonCloseModal = styled.button`
  position: absolute;
  top: 2%;
  left: 2%;
  background: transparent;
  outline: none;
  border: none;
`