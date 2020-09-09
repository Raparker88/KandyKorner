import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const CustomerProductContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const CustomerProductProvider = (props) => {
    const [customerProducts, setCustomerProducts] = useState([])

    const getCustomerProducts = () => {
        return fetch("http://localhost:8088/customerProducts")
            .then(res => res.json())
            .then(setCustomerProducts)
    }

    const addCustomerProduct = customerProduct => {
        return fetch("http://localhost:8088/customerProducts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(customerProduct)
        })
            .then(getCustomerProducts)
    }


    return (
        <CustomerProductContext.Provider value={{
            customerProducts, addCustomerProduct, getCustomerProducts
        }}>
            {props.children}
        </CustomerProductContext.Provider>
    )
}