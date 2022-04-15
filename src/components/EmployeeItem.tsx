import React, { FC, useState, useEffect } from "react";
import { IEmployee } from "../types/data";
import { Radio } from "../components/UI/Radio";
import styled, { css } from "styled-components";

interface EmployeeItemProps {
	employee: IEmployee;
    addToActiveBoard: (id: string) => void;
    deleteFromActiveBoard: (id: string) => void;
	isActiveTest: boolean;
}

interface StyledProps {
    isActiveEmployee: boolean;
}

export const EmployeeItem: FC<EmployeeItemProps> = ({
	employee,
	addToActiveBoard,
    deleteFromActiveBoard,
	isActiveTest
}) => {


	const [isActive, setisActive] = useState(isActiveTest);

	const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setisActive(!isActive);
        addToActiveBoard(employee.id);       
	};

    useEffect(() =>{
        if (isActive === false) deleteFromActiveBoard(employee.id);
		// eslint-disable-next-line
    },[isActive])

	return (
		<ColumnItem key={employee.id}>
			<EmployeeName isActiveEmployee={isActive}>
				{employee.lastName} {employee.firstName}
			</EmployeeName>
			<form>
				<Radio
					name={employee.firstName}
					handleRadioClick={handleRadioClick}
					value='notActive'
					isRadioSelected={isActive}
                    checked={isActive === false}
				>
					not active
				</Radio>
				<Radio
                
					name={`${employee.firstName} ${employee.lastName}`}
					handleRadioClick={handleRadioClick}
					value='active'
					isRadioSelected={isActive}
                    checked={isActive === true}
				>
					active
				</Radio>
			</form>
		</ColumnItem>
	);
};

const EmployeeName = styled.div<StyledProps>`
	font-size: ${({ theme }) => theme.fontSize.normal};
	line-height: 20px;
	margin-bottom: 8px;
	color: ${({ theme }) => theme.colors.font};
    ${props => props.isActiveEmployee && css`
        color: ${({theme}) => theme.colors.primary};
    `}
`;

const ColumnItem = styled.div`
	margin: 0 0 1rem 0;
`;
