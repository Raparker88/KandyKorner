import React, { useContext } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { Employee } from "./Employee"
import "./Employee.css"

export const EmployeeList = () => {
    const { employees } = useContext(EmployeeContext)

    return (
        <div className="employees">
            {
                employees.map(e => <Employee key={e.id} employee={e} />)
            }
        </div>
    )
    
}