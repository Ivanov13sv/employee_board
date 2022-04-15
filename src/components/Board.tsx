import { FC } from "react";
import styled from "styled-components";
import { Container } from "./Container";
import { IEmployee } from "../types/data";
import { BoardColumn } from "./BoardColumn";
import { ActiveEmployeeSection } from "./ActiveEmployeeSection";
import { useLocalStore } from "../hooks/useLocalStore";

interface BoardProps {
	employees: IEmployee[];
}

export const Board: FC<BoardProps> = ({ employees }) => {
	const [activeEmployees, setActiveEmployees] = useLocalStore(
		"activeUsers",
		[]
	);

	const alphabet = [
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
		"G",
		"H",
		"I",
		"J",
		"K",
		"L",
		"M",
		"N",
		"O",
		"P",
		"Q",
		"R",
		"S",
		"T",
		"U",
		"V",
		"W",
		"X",
		"Y",
		"Z",
	];

	const addToActiveBoard = (id: string) => {
		if (!activeEmployees.some((item: any) => item.id === id)) {
			const newEmployee = employees.find((item) => item.id === id)!;

			setActiveEmployees([...activeEmployees, newEmployee]);
		}
	};

	const deleteFromActiveBoard = (id: string) => {
		setActiveEmployees(
			activeEmployees.filter((item: any) => item.id !== id)
		);
	};

	return (
		<Container>
			<BoardWrapper>
				<EmployeesSection>
					<SectionTitle>Employees</SectionTitle>
					<EmployeeList>
						{alphabet.map((item, i) => (
							<BoardColumn
								key={i}
								letter={item}
								addToActiveBoard={addToActiveBoard}
								employees={employees}
								deleteFromActiveBoard={deleteFromActiveBoard}
								activeEmployees={activeEmployees}
							/>
						))}
					</EmployeeList>
				</EmployeesSection>
				<EmployeesDobSection>
					<SectionTitle>Employees birthday</SectionTitle>
					<ActiveEmployeeSection activeEmployees={activeEmployees} />
				</EmployeesDobSection>
			</BoardWrapper>
		</Container>
	);
};

const EmployeesSection = styled.div`
	overflow: auto;
	flex: 0 0 50%;
	min-height: 800px;
`;

const EmployeesDobSection = styled.div`
	padding: 0 2rem;
	width: 100%;
	display: flex;
	justify-content: start;
	flex-direction: column;
	align-items: center;
`;

const BoardWrapper = styled.div`
	padding-top: 2.5625rem;
	display: flex;
	justify-content: space-between;

`;

const SectionTitle = styled.h2`
	color: ${({ theme }) => theme.colors.font};
	font-size: ${({ theme }) => theme.fontSize.big};
	font-weight: 500;
	margin: 0 0 1.875rem 0;
	padding-left: 4.375rem;
`;

const EmployeeList = styled.div`
	display: flex;
`;
