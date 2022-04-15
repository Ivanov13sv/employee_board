import styled from "styled-components";

export const ErrorAlert = () => {
	return (
		<MessageWrapper>
			<MessageText>Oops... An error has occurred</MessageText>
		</MessageWrapper>
	);
};

const MessageWrapper = styled.div`
background: ${({ theme }) => theme.colors.warning};
width: 80vw;
height: 4rem;
position: absolute;
top: 0;
left: 50%;
transform: translateX(-50%); 
display: flex;

${({ theme }) => theme.mixins.flexCenter};
}
`;

const MessageText = styled.p``;
