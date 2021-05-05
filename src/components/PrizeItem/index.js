import {
  Container,
  LaureateName,
  RowContainer,
  Year,
  Category,
  Motiviation,
} from "./styled";

export default function PrizeItem({ year, category, laureate }) {
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
}
