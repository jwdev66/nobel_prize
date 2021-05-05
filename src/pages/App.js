import React, { useState, useEffect } from "react";
import PrizeItem from "components/PrizeItem";
import { Container, Error, Loading } from "./styled";

export default function App() {
  const [prizeList, setPrizeList] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://api.nobelprize.org/v1/prize.json?year=2015&yearTo=2017`)
      .then((res) => res.json())
      .then((result) => {
        if (result && result.prizes) setPrizeList(result.prizes);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(`Unable to retrieve Nobel Prize List.\n${err.message}`);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <Loading>Loading Nobel Prize List...</Loading>;

  if (error) return <Error>{error}</Error>;

  return (
    <Container>
      {prizeList.map((prizeitem) => {
        if (prizeitem.laureates)
          return prizeitem.laureates.map((laureate) => (
            <PrizeItem
              key={laureate.id}
              year={prizeitem.year}
              category={prizeitem.category}
              laureate={laureate}
            />
          ));
        return null;
      })}
    </Container>
  );
}
