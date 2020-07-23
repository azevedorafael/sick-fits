import React, { Component } from "react";

import { Query } from "react-apollo";
import gql from "graphql-tag";

import * as S from "./styles";
import Item from "../Item";

const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY {
    items {
      id
      title
      price
      description
      image
      largeImage
    }
  }
`;

class Items extends Component {
  render() {
    return (
      <S.Center>
        <Query query={ALL_ITEMS_QUERY}>
          {({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error.message}</p>;
            return (
              <S.ItemsList>
                {data.items.map((item) => (
                  <Item item={item} key={item.id} />
                ))}
              </S.ItemsList>
            );
          }}
        </Query>
      </S.Center>
    );
  }
}

export default Items;
export { ALL_ITEMS_QUERY };
