import React from "react"
import { LocationProvider } from "./locations/LocationProvider"
import { LocationList } from "./locations/LocationList"
import { ProductProvider } from "./products/ProductProvider"
import { ProductList } from "./products/ProductList"
import { Route } from "react-router-dom"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import { EmployeeList } from "./employees/EmployeeList"
import { EmployeeForm } from "./employees/EmployeeForm"

export const ApplicationViews = (props) => {
    return(
        <>
            <LocationProvider>
                <Route exact path="/">
                    <LocationList/>
                </Route>
            </LocationProvider>
            <ProductProvider>
                <Route path="/products">
                    <ProductList/>
                </Route>
            </ProductProvider>
            <EmployeeProvider>
                <LocationProvider>
                    <Route exact path="/employees" render={
                        props => <EmployeeList {...props}/>
                    } />
                    <Route exact path="/employees/create" render={
                        props => <EmployeeForm {...props} />
                    } >
                    </Route>
                </LocationProvider>
            </EmployeeProvider>
        </>
    )
}