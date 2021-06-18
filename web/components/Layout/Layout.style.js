import styled from 'styled-components';

const LayoutContainer = styled.div`
  .page-content {
    margin: 0 auto;
    max-width: 1224px;
    margin-top: 60px;
    margin-bottom: 60px;
    @media only screen and (max-width: 768px) {
      padding: 0px 20px;
    }
  }
`;

export default LayoutContainer;
