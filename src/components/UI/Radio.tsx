import React, { FC } from "react";
import styled from "styled-components";

interface RadioProps {
	value: string;
	isRadioSelected:  boolean;
	handleRadioClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
	name: string;
	checked?: boolean;
}

export const Radio: FC<RadioProps> = ({
	value,
	handleRadioClick,
	name,
	children,
	checked
}) => {

	return (
		<CustomRadio>
			<CustomInput
				name={name}
				type='radio'
				value={value}
				checked={checked}
				onChange={handleRadioClick}
			/>

			<Checkbox />
			{children}
		</CustomRadio>
	);
};

const Checkbox = styled.span`
	width: 12px;
	height: 12px;
	background-color: transparent;
	border-radius: 50%;
	border: 1px solid #f0f0f0;
	position: absolute;
	left: 0;
	cursor: pointer;
	&:hover {
		border: 1px solid #ffffff;
		transform: scale(1.1);
	}
`;

const CustomRadio = styled.label`
	position: relative;
	padding: 0 0 0 1.2rem;
	display: flex;
	align-items: center;
	font-size: ${({ theme }) => theme.fontSize.normal};
	color: ${({ theme }) => theme.colors.font};
`;

const CustomInput = styled.input`
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	position: relative;
	&:checked + ${Checkbox} {
		&:before {
			content: "";
			position: absolute;
			width: 8px;
			height: 8px;
			border-radius: 50%;
			background-color: #ffffff;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}
`;
