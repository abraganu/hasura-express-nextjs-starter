import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface SharedComponentsProps {}

const StyledSharedComponents = styled.div`
  color: red;
`;

export function SharedComponents(props: SharedComponentsProps) {
  return (
    <StyledSharedComponents>
      <h1>Welcome to SharedComponents!</h1>
    </StyledSharedComponents>
  );
}
