import Input from "../Input"
import Label from "../Label"
import HelperText from "../HelperText"
import Button from "../Button"
import { useValidation } from "../../hooks/useValidation"
import { useState } from "react"
import * as yup from 'yup'

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

    return (<form onSubmit={submeterFormulario}>
        <div>
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
        </div>
        <div>
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
        </div>
        <div>
            <div>
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
            </div>
            <div>
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
            </div>
        </div>
        <HelperText $type="success">
            {sucesso}
        </HelperText>
        <Button>
            Quero participar!
        </Button>
    </form>)
}

export default Formulario