import { FC } from "react";
import { IEmployee } from "../types/data";
import { DateService } from "../utils/DateService";
import { ActiveEmployee } from "../components/ActiveEmployee";
import styled from "styled-components";

interface ActiveEmployeeProps {
	activeEmployees: IEmployee[];
}

export const ActiveEmployeeSection: FC<ActiveEmployeeProps> = ({
	activeEmployees,
}) => {
	const activeMonths = activeEmployees.map((item) => {
		return { ...item, dob: DateService.getMonth(item.dob) };
	});

	const uniqActiveMonths = activeMonths.filter(
		(value, index, self) =>
			index === self.findIndex((t) => t.dob === value.dob)
	).sort((a,b) => a.dob.localeCompare(b.dob));

	if (!activeEmployees.length){
		return <EmptyListNotice>Employees List is empty</EmptyListNotice>
	}

	return (
		<SectionWrapper>
			{uniqActiveMonths.map((item) => {
				return (
					<div key={item.id}>
						<Month>{item.dob}</Month>
						<ActiveEmployee
							month={item.dob}
							users={activeEmployees}
						/>
					</div>
				);
			})}
		</SectionWrapper>
	);
};

const Month = styled.h3`
	color: ${({ theme }) => theme.colors.font};
	font-size: ${({ theme }) => theme.fontSize.medium};
	font-weight: 500;
	margin-bottom: 1rem;
`;

const SectionWrapper = styled.div`
	border-left: 2px solid white;
	padding-left: 1rem;
	width: 100%;
	${({ theme }) => theme.mixins.flexCenter};
	flex-direction: column;
	align-items: start;
`;

const EmptyListNotice = styled.h3`
	color: ${({ theme }) => theme.colors.font};
	font-size: ${({ theme }) => theme.fontSize.medium};
	font-weight: 500;
	text-align: center;
`