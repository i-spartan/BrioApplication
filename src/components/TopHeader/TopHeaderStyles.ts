import styled from 'styled-components';

export const StyledTopHeader = styled.section`
    
.top-header {
     background-color: rgb(163 125 10 / 91%);
     display: flex;
     justify-content: space-between;
     height: 30px;
     align-items: center;
     padding-left: 35px;
     padding-right: 35px;
     padding-top: 2px;
     padding-bottom: 2px;
}

    @media (max-width: 600px) {
        .top-header {
            display: none;
        }
    }
`;
