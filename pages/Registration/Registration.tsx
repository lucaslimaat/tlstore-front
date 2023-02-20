import React, { FocusEvent, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Grid,
  Center,
  Text,
  Box,
  Button,
  Input,
  Select,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { Josefin_Sans, Montserrat } from "@next/font/google";
import InputFieldForm from "../../components/InputFieldForm";
import { colors } from "../../public/styles/colors";
import { RegisterForm } from "../../types";
import ButtonSite from "../../components/Button";
import MessageAlert from "../../components/MessageAlert";
import { states } from "../../helpers";
import { phoneNumber } from "../../services/validations";
import {
  normalizeCepNumber,
  normalizeDocumentNumber,
  normalizePhoneNumber,
} from "../../services/masks";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const montserrat = Montserrat({ subsets: ["latin"], weight: "700" });
const josefin_sans = Josefin_Sans({ subsets: ["latin"], weight: "700" });

const schema = yup
  .object()
  .shape({
    name: yup.string().required("Campo Obrigatório"),
    cpf: yup.string().required("Campo Obrigatório"),
    email: yup
      .string()
      .email("Digite um email correto")
      .required("Campo Obrigatório"),
    telephone: yup
      .string()
      .matches(phoneNumber, "Digite um número de celular correto")
      .required("Campo Obrigatório"),
    cep: yup.string().required("Campo Obrigatório"),
    address: yup.string().required("Campo Obrigatório"),
    neighborhood: yup.string().required("Campo Obrigatório"),
    city: yup.string().required("Campo Obrigatório"),
    uf: yup.string().required("Campo Obrigatório"),
    addressNumber: yup.string().required("Campo Obrigatório"),
    complement: yup.string().required("Campo Obrigatório"),
    password: yup
      .string()
      .required("Campo Obrigatório")
      .min(6, "Você precisa criar uma senha de no mínimo 6 dígitos"),
    confirmpassword: yup
      .string()
      .required("Campo Obrigatório")
      .oneOf([yup.ref("password")], "As senhas precisam ser iguais"),
  })
  .required();

const Registration: NextPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    setFocus,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: yupResolver(schema),
  });

  const cpfValue = watch("cpf");

  useEffect(() => {
    setValue("cpf", normalizeDocumentNumber(cpfValue));
  }, [cpfValue, setValue]);

  const cepValue = watch("cep");

  useEffect(() => {
    setValue("cep", normalizeCepNumber(cepValue));
  }, [cepValue, setValue]);

  const phoneValue = watch("telephone");

  useEffect(() => {
    setValue("telephone", normalizePhoneNumber(phoneValue));
  }, [phoneValue, setValue]);

  const onSubmit = (e: RegisterForm) => {
    toast.success("Cadastro concluído com sucesso!", {
      position: toast.POSITION.TOP_RIGHT,
    });
    console.log(e);
  };

  function onError(error: any) {
    toast.error("Confira os campos e tente novamente!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  }

  function onBlurCep(ev: FocusEvent<HTMLInputElement, Element>) {
    const { value } = ev.target;

    const cep = value?.replace(/[^0-9]/g, "");
    if (cep?.length !== 8) {
      return;
    }
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setValue("address", data.logradouro);
        setValue("neighborhood", data.bairro);
        setValue("city", data.localidade);
        setValue("uf", data.uf);
        setFocus("addressNumber");
      });
  }

  return (
    <Grid w="100%" h="100vh">
      <Center>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-evenly"
        >
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            <Center>
              <Box>
                <Text
                  className={josefin_sans.className}
                  fontSize="50px"
                  color={colors.fullblack}
                >
                  CRIAR UMA CONTA
                </Text>
                <Text
                  className={josefin_sans.className}
                  fontSize="40px"
                  color={colors.whitegray}
                  textAlign="center"
                >
                  DADOS PESSOAIS
                </Text>
              </Box>
            </Center>
            <Text marginLeft="20px">Nome Completo</Text>
            <InputFieldForm {...register("name")} />
            <MessageAlert>{errors.name?.message}</MessageAlert>
            <Text marginLeft="20px">CPF</Text>
            <InputFieldForm {...register("cpf")} />
            <MessageAlert>{errors.cpf?.message}</MessageAlert>
            <Text marginLeft="20px">Email</Text>
            <InputFieldForm {...register("email")} />
            <MessageAlert>{errors.email?.message}</MessageAlert>
            <Text marginLeft="20px">Telefone</Text>
            <InputFieldForm type="tel" {...register("telephone")} />
            <MessageAlert>{errors.telephone?.message}</MessageAlert>
            <Center>
              <Box>
                <Text
                  className={josefin_sans.className}
                  fontSize="40px"
                  color={colors.whitegray}
                  textAlign="center"
                  marginTop="35px"
                >
                  ENDEREÇO
                </Text>
              </Box>
            </Center>
            <Text marginLeft="20px">Cep</Text>
            <InputFieldForm {...register("cep")} onBlur={onBlurCep} />
            <MessageAlert>{errors.cep?.message}</MessageAlert>
            <Text marginLeft="20px">Rua</Text>
            <InputFieldForm {...register("address")} />
            <MessageAlert>{errors.address?.message}</MessageAlert>
            <Text marginLeft="20px">Bairro</Text>
            <InputFieldForm {...register("neighborhood")} />
            <MessageAlert>{errors.neighborhood?.message}</MessageAlert>
            <Text marginLeft="20px">Cidade</Text>
            <InputFieldForm {...register("city")} />
            <MessageAlert>{errors.city?.message}</MessageAlert>
            <Text marginLeft="20px">Estado</Text>
            <Select
              marginLeft="20px"
              marginRight="20px"
              placeholder="Selecione o estado"
              width="692px"
              border=" 3px solid"
              borderColor={colors.fullblack}
              {...register("uf")}
            >
              {states.map((state) => (
                <option key={state.id} value={state.value}>
                  {state.label}
                </option>
              ))}
            </Select>
            <MessageAlert>{errors.uf?.message}</MessageAlert>
            <Text marginLeft="20px">Número</Text>
            <InputFieldForm {...register("addressNumber")} />
            <MessageAlert>{errors.addressNumber?.message}</MessageAlert>
            <Text marginLeft="20px">Complemento</Text>
            <InputFieldForm {...register("complement")} />
            <MessageAlert>{errors.complement?.message}</MessageAlert>
            <Center>
              <Box>
                <Text
                  className={josefin_sans.className}
                  fontSize="40px"
                  color={colors.whitegray}
                  textAlign="center"
                  marginTop="35px"
                >
                  SENHA
                </Text>
              </Box>
            </Center>
            <Text marginLeft="20px">Senha</Text>
            <Input
              marginLeft="20px"
              marginRight="20px"
              width="692px"
              type="password"
              border=" 3px solid"
              borderColor={colors.fullblack}
              {...register("password")}
            />
            <MessageAlert>{errors.password?.message}</MessageAlert>
            <Text marginLeft="20px">Confirme a senha</Text>
            <Input
              marginLeft="20px"
              marginRight="20px"
              width="692px"
              type="password"
              border=" 3px solid"
              borderColor={colors.fullblack}
              {...register("confirmpassword")}
            />
            <MessageAlert>{errors.confirmpassword?.message}</MessageAlert>
            <Center>
              <Box>
                <ButtonSite width="692px" marginTop="30px" type="submit">
                  CRIAR CONTA
                </ButtonSite>
              </Box>
            </Center>
            <ToastContainer />
          </form>
        </Box>
      </Center>
    </Grid>
  );
};

export default Registration;
