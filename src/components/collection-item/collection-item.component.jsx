import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";

import {
  CollectionItemContainer,
  BackgroundImage,
  CollectionFooterContainer,
  SpanNameContainer,
  SpanPriceContainer,
  AddButtonContainer,
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemContainer>
      <BackgroundImage className="image" imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <SpanNameContainer>{name}</SpanNameContainer>
        <SpanPriceContainer>${price}</SpanPriceContainer>
      </CollectionFooterContainer>
      <AddButtonContainer onClick={() => addItem(item)} inverted>
        {" "}
        Add to Cart{" "}
      </AddButtonContainer>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
