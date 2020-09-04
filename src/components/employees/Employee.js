import React from "react"

export const Employee = ({ employee }) => {
    employee.manager = "true"||"false"
    employee.fullTime = "Full Time"||"Part Time"
    return (
        <section className="employee">
            <h3 className="employee__name">{employee.name}</h3>
            <div className="employee__location">Location: {employee.locationId}</div>
            <div className="employee__manager">Manager: {employee.manager}</div>
            <div className="employee__fullTime">{employee.fullTime}</div>
            <div className="employee__hourly">Hourly Rate: ${employee.hourlyRate}</div>
        </section>
    )
}