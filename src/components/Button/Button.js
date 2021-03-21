import React, { Component } from "react";
import { ButtonContainer } from "./ButtonStyled";

class Button extends Component {
  render() {
    return (
      <ButtonContainer>
        <button className="Button" type="button">
          Load more
        </button>
      </ButtonContainer>
    );
  }
}
export default Button;
