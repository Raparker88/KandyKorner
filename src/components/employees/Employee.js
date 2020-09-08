import React from "react"

export const Employee = ({ employee, location }) => {
    employee.manager = isManager(employee.manager)
    employee.fullTime = isFullTime(employee.fullTime)
    return (
        <section className="employee">
            <h3 className="employee__name">{employee.name}</h3>
            <div className="employee__location">Location: {location.address}</div>
            <div className="employee__manager">Manager: {employee.manager}</div>
            <div className="employee__fullTime">{employee.fullTime}</div>
            <div className="employee__hourly">Hourly Rate: ${employee.hourlyRate}</div>
        </section>
    )
}

const isManager = (boolean) => {
    if(boolean){
        return "true"
    }else{
        return "false"
    }
}

const isFullTime = (boolean) => {
    if(boolean){
        return "Full Time"
    }else {
        return "Part Time"
    }
}