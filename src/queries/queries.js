import { gql } from '@apollo/client';

export const GET_USER = gql`
  query getUser($id: Int!) {
    getUser(id: $id) {
      ok
      user {
        id
        firstName
        lastName
        phoneNumber
        gender
        email
        password
        profileImg
        nickname
        mbtiType
        isVerificated
      }
      error
    }
  }
`;

export const SIGN_IN = gql`
  mutation signIn($email: String, $password: String) {
    signIn(email: $email, password: $password) {
      ok
      token
      error
    }
  }
`;
