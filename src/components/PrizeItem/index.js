import { memo } from "react";
import {
  Container,
  LaureateName,
  RowContainer,
  Year,
  Category,
  Motiviation,
} from "./styled";
import { areEqual } from "react-window";

const PrizeItem = memo((props) => {
  const { year, category, laureate } = props;
  return (
    <Container>
      <RowContainer>
        <LaureateName>{`${laureate.firstname} ${laureate.surname}`}</LaureateName>
        <Category>{category}</Category>
      </RowContainer>
      <Motiviation>{laureate.motivation}</Motiviation>
      <Year>{year}</Year>
    </Container>
  );
}, areEqual);

export default PrizeItem;
