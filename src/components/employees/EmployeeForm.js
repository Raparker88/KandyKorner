import React, { useContext, useRef, useState } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { LocationContext } from "../locations/LocationProvider"
import "./Employee.css"

export const EmployeeForm = (props) => {
    const { addEmployee } = useContext(EmployeeContext)
    const { locations } = useContext(LocationContext)
    

    const name = useRef(null)
    const location = useRef(null)
    const hourlyRate = useRef(null)
    const [manager, setManager] = useState()
    const [fullTime, setFullTime] = useState()
   

    const constructNewEmployee = () => {
    
        const locationId = parseInt(location.current.value) 
       

        if (locationId === 0) {
            window.alert("Please select a location")
        }if (isNaN(parseInt(hourlyRate.current.value))){
            window.alert("Please input an integer value")
        } 
        else {
            addEmployee({
                name: name.current.value,
                locationId,
                manager,
                fullTime,
                hourlyRate: parseInt(hourlyRate.current.value)
            })
            .then(() => props.history.push("/employees"))
        }
    }

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeName">Employee name: </label>
                    <input type="text" id="employeeName" ref={name} required autoFocus className="form-control" placeholder="Employee name" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select defaultValue="" name="location" ref={location} id="employeeLocation" className="form-control" >
                        <option value="0">Select a location</option>
                        {locations.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.address}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <h4>Is this employee a manager?</h4>
                    <label>
                        <input type="radio" onChange={() => setManager(true)} name="manager"/>Yes
                    </label>
                    <label>
                        <input type="radio" onChange={() => setManager(false)} name="manager" />No
                    </label>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <h4>Work type</h4>
                    <label>
                        <input type="radio" onClick={() => setFullTime(true)} name="workHours"/>Full Time
                    </label>
                    <label>
                        <input type="radio" onClick={() => setFullTime(false)} name="workHours"/>Part Time
                    </label>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeRate">Hourly Rate </label>
                    <input type="text" id="employeeRate" ref={hourlyRate} required autoFocus className="form-control" placeholder="Hourly rate" />
                </div>
            </fieldset>
            
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    constructNewEmployee()
                }}
                className="btn btn-primary">
                Save Employee
            </button>
        </form>
    )
}