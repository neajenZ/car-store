import { gql } from "@apollo/client";

export const GET_CARS = gql`
  query($search: String) {
    cars(search: $search) {
        model
        img_src
        model_year
        price
        description
        id
        model_year
        color
        availability
        brand
    }
  }
`;