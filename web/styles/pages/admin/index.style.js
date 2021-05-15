import styled from 'styled-components';

const AdminContainer = styled.div`
  margin: 0 auto;
  max-width: 1224px;
  margin-top: 100px;
  .title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .command-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    button {
      margin: 10px;
    }
  }
`

export default AdminContainer