import { FC } from "react";
import { IEmployee } from "../types/data";
import { DateService } from "../utils/DateService";
import styled from "styled-components";

interface ActiveEmployeeItemProps {
	users: IEmployee[];
	month: any;
}

export const ActiveEmployee: FC<ActiveEmployeeItemProps> = ({
	users,
	month,
}) => {
	const parsedDate = users.map((item) => {
		return {
			...item,
			dob: {
				day: DateService.getDate(item.dob),
				month: DateService.getMonth(item.dob),
				year: DateService.getYear(item.dob),
			},
		};
	});

	const filtredEmployees = parsedDate
		.filter((item) => item.dob.month === month)
		.sort((a, b) => a.lastName.localeCompare(b.lastName));

	return (
		<ListEmployees>
			{filtredEmployees.map((item) => (
				<ListItem key={item.id}>
					{item.lastName} {item.firstName} - {item.dob.day}{" "}
					{item.dob.month}, {item.dob.year} year
				</ListItem>
			))}
		</ListEmployees>
	);
};

const ListEmployees = styled.ul`
	margin-bottom: 1.875rem;
`;

const ListItem = styled.li`
	list-style: none;
	color: ${({ theme }) => theme.colors.font};
	font-size: ${({ theme }) => theme.fontSize.normal};
	position: relative;
	padding-left: 1.3rem;
	letter-spacing: 0.5px;
	line-height: 20px;
	width: 100%;

	&:before {
		content: "";
		position: absolute;
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background-color: ${({ theme }) => theme.colors.font};
		left: 0;
		top: 50%;
		transform: translateY(-50%);
	}
`;
