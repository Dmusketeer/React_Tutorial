import React from "react";
import { Section, Card, Blank } from "./styles/Tokens.styled";

function WatchList(props) {
  let watchList = props.savedToken.map((token) => {
    return (
      <Card key={token.id}>
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
        <h2>WatchList</h2>
      </div>
      {watchList.length === 0 ? (
        <Blank>
          <h2>Add To Watchlist!</h2>
        </Blank>
      ) : (
        <div>
          <Blank>{watchList}</Blank>
        </div>
      )}
    </Section>
  );
}

export default WatchList;
