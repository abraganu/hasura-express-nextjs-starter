import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface WebAdminPagesProps {}

const StyledWebAdminPages = styled.div`
  color: pink;
`;

export function WebAdminPages(props: WebAdminPagesProps) {
  return (
    <StyledWebAdminPages>
      <h1>Welcome to WebAdminPages!</h1>
    </StyledWebAdminPages>
  );
}

export default WebAdminPages;
