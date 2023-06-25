import { gql } from "@apollo/client";

const GET_CHARACTERS = gql`
  query GetCharacters($page: Int, $name: String) {
    characters(page: $page, filter: { name: $name }) {
      results {
        id
        name
        image
      }
      info {
        pages
      }
    }
  }
`;

const GET_CHARACTER_DETAIL = gql`
  query GetCharacterDetail($id: ID!) {
    character(id: $id) {
      id
      name
      image
      species
      type
      status
      gender
    }
  }
`;

export { GET_CHARACTERS, GET_CHARACTER_DETAIL };
