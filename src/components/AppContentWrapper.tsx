import styled from 'styled-components';

const AppContentWrapper = styled.div`
  background: yellowgreen;
  /* min-height: 100%; */
  /* height: 100%; */
  /* height: 100em; */

  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  justify-content: space-around;

  h2 {
    background: red;
    margin: 0;
    padding: 10px 0;
    border-bottom: 1px solid black;
  }
`;

export default AppContentWrapper;
