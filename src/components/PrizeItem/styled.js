import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;  
  border: 1px solid #eee;
  margin: 10px;
  padding: 10px;
  width: 50%;
`;

export const LaureateName = styled.h3`  
  font-size: 16px;
  color: black;
  font-weight: 500;
  margin: 0px 0px 5px 0px;
`;

export const Motiviation = styled.p`  
  font-size: 16px;
  color: #333;
  font-weight: 300;
  margin: 0px 0px 5px 0px;
`;

export const RowContainer = styled.div`
  display: flex;  
  justify-content: space-between;
`;

export const Year = styled.span`  
  font-size: 12px;
  color: black;
  font-weight: 500;  
  text-align: right;
`;

export const Category = styled.span`  
  font-size: 12px;
  color: black;
  font-weight: 500;  
`;