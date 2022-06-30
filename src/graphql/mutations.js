import { gql } from "@apollo/client";

export const CREATE_REVIEW = gql`
  mutation (
    $repositoryName: String!
    $ownerName: String!
    $rating: Int!
    $text: String
  ) {
    createReview(
      review: {
        repositoryName: $repositoryName
        ownerName: $ownerName
        rating: $rating
        text: $text
      }
    ) {
      repositoryId
    }
  }
`;

export const SIGN_IN = gql`
  mutation ($username: String!, $password: String!) {
    authenticate(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`;

export const SIGN_UP = gql`
  mutation ($username: String!, $password: String!) {
    createUser(user: { username: $username, password: $password }) {
      id
      username
    }
  }
`;
