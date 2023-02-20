
export type CepType = {
    cep: string,
    logradouro: string,
    complemento: string,
    bairro: string,
    localidade: string,
    uf: string,
    ibge: string,
    gia: string,
    ddd: string,
    siafi: string
}

export type RegisterForm = {
    name: string,
    email: string,
    telephone: string,
    cep: string,
    address: string,
    neighborhood: string,
    city: string,
    uf: string,
    addressNumber: string,
    complement: string,
    password: string,
    confirmpassword: string,
    cpf: string,
}
