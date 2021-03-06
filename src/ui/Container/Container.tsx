import styled from 'styled-components/native';

interface ContainerProps {
  padding: number;
}

export const Container = styled.View`
  padding-horizontal: ${({padding}: ContainerProps) => padding}px;
  height: 100%;
  background-color: ${({theme}) => theme.colors.white};
`;
