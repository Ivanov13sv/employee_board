import { FC } from "react";
import styled from "styled-components";
import { IEmployee } from "../types/data";
import { EmployeeItem } from "./EmployeeItem";

interface BoardColumnProps {
	letter?: string;
	employees: IEmployee[];
	filtredEmployees?: IEmployee[];
	addToActiveBoard: (id: string) => void;
	deleteFromActiveBoard: (id: string) => void;
	activeEmployees: IEmployee[];
}

export const BoardColumn: FC<BoardColumnProps> = ({
	letter,
	employees,
	activeEmployees,
	...props
}) => {
	const filtredEmployees = employees.filter(
		(item, i) => item.lastName[0] === letter
	);

	return (
		<EmployeeColumn>
			<h2>{letter}</h2>
			{filtredEmployees.length ? (
				filtredEmployees.map((item) => (
					<EmployeeItem
						key={item.id}
						employee={item}
						{...props}
						isActiveTest={activeEmployees.some(
							(i: IEmployee) => i.id === item.id
						)}
					/>
				))
			) : (
				<EmptyColumn>.....</EmptyColumn>
			)}
		</EmployeeColumn>
	);
};
const EmployeeColumn = styled.div`
	max-height: 400px;
	flex: 0 0 33%;
	h2 {
		font-weight: 500;
		font-size: ${({ theme }) => theme.fontSize.big};
		color: ${({ theme }) => theme.colors.font};
		margin-bottom: 21px;
	}
`;

const EmptyColumn = styled.div`
	color: ${({ theme }) => theme.colors.font};
	font-size: ${({ theme }) => theme.fontSize.big};
`;
