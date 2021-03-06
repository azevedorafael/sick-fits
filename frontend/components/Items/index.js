import React, { Component } from "react";

import { Query } from "react-apollo";
import gql from "graphql-tag";

import * as S from "./styles";
import Item from "../Item";
import Pagination from "../Pagination";
import { perPage } from "../../config";

const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY($skip: Int = 0, $first: Int= ${perPage}) {
    items(first: $first, skip: $skip, orderBy: createdAt_DESC) {
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
        <Pagination page={this.props.page} />
        <Query
          query={ALL_ITEMS_QUERY}
          fetchPolicy="network-only"
          variables={{
            skip: this.props.page * perPage - perPage,
          }}
        >
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
        <Pagination page={this.props.page} />
      </S.Center>
    );
  }
}

export default Items;
export { ALL_ITEMS_QUERY };
