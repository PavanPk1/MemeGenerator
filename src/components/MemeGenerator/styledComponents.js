import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
`

export const InnerContainer = styled.div`
  display: flex;
  width: 80%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  align-items: center;
  justify-content: space-between;
`

export const Heading = styled.h1`
  color: #35469c;
  font-family: 'Roboto';
  font-weight: 600;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 40%;
  @media (max-width: 768px) {
    width: 100%;
    order: 2;
  }
`
export const MemeContainer = styled(FormContainer)`
  order: 1;
  background-image: url(${props => props.bgImage});
  background-size: cover;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`

export const Label = styled.label`
  color: #7e858e;
  font-family: 'Roboto';
  font-size: 14px;
  margin: 15px 0px;
`

export const InputEl = styled.input`
  font-family: 'Inter';
  border-radius: 5px;
  padding: 10px;
  border: 1px solid #d7dfe9;
  outline: none;
`

export const Select = styled.select`
  font-family: 'Inter';
  border-radius: 5px;
  padding: 10px;
  border: 1px solid #d7dfe9;
  outline: none;
`

export const Option = styled.option`
  font-family: 'Roboto';
`

export const GenerateButton = styled.button`
  color: #ffffff;
  font-weight: bold;
  width: 120px;
  padding: 10px;
  background-color: #0b69ff;
  border-radius: 5px;
  border: 0px;
  margin: 10px 0px;
`

export const Image = styled.img`
  width: 100%;
`
export const TextContent = styled.p`
  color: #35469c;
  font-family: 'Roboto';
  font-weight: 600;
  color: #ffffff;
  font-size: ${props => props.activeFontSize}px;
`
