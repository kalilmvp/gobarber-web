import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiUser, FiLock, FiMail } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Container, Content, Background } from './styles';

import logo from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';

const Signup: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigatório'),
        email: Yup.string()
          .required('Email é obrigatório')
          .email('Email está inválido'),
        password: Yup.string().min(
          6,
          'Password precisa ter no mínimo 6 dígitos'
        ),
      });
      await schema.validate(data, { abortEarly: false });
    } catch (err) {
      console.error(err);

      formRef.current?.setErrors(getValidationErrors(err));
    }
  }, []);

  return (
    <Container>
      <Background />
      <Content>
        <img src={logo} alt="Gobarber Web" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>

          <Input name="name" icon={FiUser} type="text" placeholder="Name" />
          <Input name="email" icon={FiMail} type="text" placeholder="Email" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Password"
          />
          <Button type="submit">Cadastrar</Button>
        </Form>

        <a href="/">
          <FiArrowLeft size={16} />
          Voltar
        </a>
      </Content>
    </Container>
  );
};

export default Signup;
