import Input from "../Input"
import Label from "../Label"
import HelperText from "../HelperText"
import styled from 'styled-components'
import Button from "../Button"
import { useValidation } from "../../hooks/useValidation"
import { useState } from "react"
import * as yup from 'yup'

const StyledFormulario = styled.div`
  background-color: #FFFFFF;
  display: flex;
  padding: 3rem 1rem;
  width: 560px;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  border-radius: 1rem;
`

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`

const StyledDivLabel = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`

const StyledLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  width: 15.9rem;
`

const Formulario = () => {

    const yupSchema = useValidation()

    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        cep: '',
    })

    const [erros, setErros] = useState({
        nome: '',
        email: '',
        telefone: '',
        cep: '',
    })

    const [sucesso, setSucesso] = useState('')

    const handleChange = (event) => {
        setFormData(oldState => {
            return {
                ...oldState,
                [event.target.name]: event.target.value
            }
        })
    }

    const submeterFormulario = async (event) => {
        event.preventDefault();

        setSucesso('')
        setErros({
            nome: '',
            email: '',
            telefone: '',
            cep: '',
        })
        try {
            await yupSchema.validate(formData, {
                abortEarly: false
            })
            setSucesso('Cadastro enviado!')
            setFormData({
                nome: '',
                email: '',
                telefone: '',
                cep: '',
            })
        } catch (error) {

            if (error instanceof yup.ValidationError) {
                // Aqui você pode tratar os erros de validação
                console.error("Erros de validação:", error.inner);

                error.inner.forEach(validationFailed => {

                    setErros(oldState => {
                        return {
                            ...oldState,
                            [validationFailed.path]: validationFailed.errors
                        }
                    })

                })

            } else {
                // Outros erros inesperados
                console.error("Erro inesperado:", error);
            }
        }


        console.log('Bora validar esses dados: ', formData)
    }

    return (
        <StyledFormulario>
            <form onSubmit={submeterFormulario}>
                <StyledDiv>
                    <Label>
                        Nome *
                    </Label>
                    <Input
                        value={formData.nome}
                        onChange={handleChange}
                        name="nome"
                        id="nome"
                        $erro={!!erros.nome}
                    />
                    <HelperText $type="error">
                        {erros.nome}
                    </HelperText>
                </StyledDiv>
                <StyledDiv>
                    <Label>
                        E-mail *
                    </Label>
                    <Input
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        name="email"
                        id="email"
                        $erro={!!erros.email}
                    />
                    <HelperText $type="error">
                        {erros.email}
                    </HelperText>
                </StyledDiv>
                <StyledDiv>
                    <StyledDivLabel>
                        <StyledLabel>
                            <Label>
                                Telefone *
                            </Label>
                            <Input
                                value={formData.telefone}
                                onChange={handleChange}
                                name="telefone"
                                id="telefone"
                                $erro={!!erros.telefone}
                            />
                            <HelperText $type="error">
                                {erros.telefone}
                            </HelperText>
                        </StyledLabel>
                        <StyledLabel>
                            <Label>
                                Cep *
                            </Label>
                            <Input
                                value={formData.cep}
                                onChange={handleChange}
                                name="cep"
                                id="cep"
                                $erro={!!erros.cep}
                            />
                            <HelperText $type="error">
                                {erros.cep}
                            </HelperText>
                        </StyledLabel>
                    </StyledDivLabel>
                </StyledDiv>
                <HelperText $type="success">
                    {sucesso}
                </HelperText>
                <Button>
                    Quero participar!
                </Button>
            </form>
        </StyledFormulario>
    )
}

export default Formulario