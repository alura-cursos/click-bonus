import * as yup from 'yup'

export const useValidation = () => {
    return yup.object().shape({
        nome: yup.string().required('Por favor, digite o seu nome!'),
        email: yup.string().email('Por favor, digite um e-mail válido!').required('Por favor digite seu e-mail'),
        telefone: yup.string().required('Por favor, informe o seu telefone'),
        cep: yup.string().required('Por favor, informe o seu código postal (CEP)'),
    })
}