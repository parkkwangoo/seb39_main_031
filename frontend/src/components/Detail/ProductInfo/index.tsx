import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

interface Props {
  body: string;
}

const ProductInfo = ({ body }: Props) => {
  return (
    <Container>
      <h1>ProductInfo</h1>
      {body}
    </Container>
  );
};

export default ProductInfo;
