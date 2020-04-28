import styled from 'styled-components';
import { shade } from 'polished';
import signupImg from '../../assets/signup.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  width: 100%;
  max-width: 700px;

  form {
    text-align: center;
    margin: 80px 0;
    width: 340px;

    h1 {
      margin-bottom: 24px;
    }

    /* aplica em todas as ancoras */
    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  /* somente ancoras ('a') diretamente dentro do nivel do Content */
  > a {
    color: #f4ede8;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    &:hover {
      color: ${shade(0.2, '#F4EDE8')};
    }

    svg {
      margin-right: 10px;
    }
  }
`;
export const Background = styled.div`
  flex: 1;
  background: url(${signupImg}) no-repeat center;
  background-size: cover;
`;
