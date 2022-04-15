import { Component } from "react";
import { IEmployee } from "../types/data";
import axios from "axios";

export class EmployeeService extends Component {
	static async getAllEmployees() {
		const response = await axios.get<IEmployee[]>("https://yalantis-react-school-api.yalantis.com/api/task0/users");
		return response;
	}
}
