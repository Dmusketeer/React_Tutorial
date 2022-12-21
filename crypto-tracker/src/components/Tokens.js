import React from "react";
import { Section, Card } from "./styles/Tokens.styled";

function Tokens(props) {
  const filteredTokens = props.token.filter((token) => {
    return token.name.toLowerCase().includes(props.search.toLowerCase());
  });

  let tokensList = filteredTokens.map((token) => {
    return (
      <Card
        onClick={() => {
          props.clicked(token);
        }}
        key={token.id}
      >
        <img src={token.image} alt="Token Displayed" />
        <h1>{token.name}</h1>
        <h2>${token.current_price}</h2>
        <h3>{token.symbol}</h3>
      </Card>
    );
  });

  return (
    <Section>
      <div>
        <h2>Tokens Available</h2>
      </div>
      <div>{tokensList}</div>
    </Section>
  );
}

export default Tokens;
