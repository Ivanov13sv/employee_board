import { useState, useEffect } from "react";
import { EmployeeService } from "../../API/EmployeeService";
import { IEmployee } from "../../types/data";
import { useFetching } from "../../hooks/useFetching";
import { Spiner } from "../UI/Spiner";
import { ErrorAlert } from "../ErrorAlert";
import { Board } from "../Board";
import styled from "styled-components";

export const EmployeePage = () => {
	const [employees, setEmployees] = useState<IEmployee[]>([]);
	const [fetching, isLoading, errorMessage] = useFetching(async () => {
		const response = await EmployeeService.getAllEmployees();
		setEmployees(response.data);
	});


	useEffect(() => {
		fetching();
		// eslint-disable-next-line
	}, []);

	return (
		<PageWrapper>
			{isLoading ? <Spiner /> : <Board employees={employees}/>}
            {errorMessage && <ErrorAlert/>}
		</PageWrapper>
	);
};

const PageWrapper = styled.div`
	position: relative;
	height: 100vh;
	width: 100vw;	
`