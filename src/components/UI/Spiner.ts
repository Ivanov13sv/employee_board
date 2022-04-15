import styled from "styled-components";
import { spin } from "../../styles/animations";

export const Spiner = styled.div`
	width: 200px;
	height: 200px;
	border: 10px solid #9acdcd;
	background: ${({ theme }) => theme.colors.bg};
	border-left: 10px solid teal;
	border-radius: 50%;
	animation: ${spin} 1.5s infinite;
	position: absolute;
    left: 42%;
    top: 30%;
`;
