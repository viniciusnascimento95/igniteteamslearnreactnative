import styled from 'styled-components/native';

export const Container = styled.View`

    flex: 1;    
    background-color: ${({ theme }) => theme.COLORS.GREEN_600 };

    padding: 24px;

`;

export const Form = styled.View`

width: 100%;
background-color: ${({ theme }) => theme.COLORS.GREEN_700 };

flex-direction: row;
justify-content: center;
`;