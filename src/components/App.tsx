import React from "react";
import GlobalStyles from "../styles/GlobalStyles";
import { EmployeePage } from "./pages/EmployeePage";
import {ThemeProvider} from 'styled-components'
import { baseTheme } from "../styles/theme";

function App() {
	
	return (
		<ThemeProvider theme={baseTheme}>
			<EmployeePage />
			<GlobalStyles />
		</ThemeProvider>
	);
}

export default App;
