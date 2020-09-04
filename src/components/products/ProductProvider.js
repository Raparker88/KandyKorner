import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const ProductContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const ProductProvider = (props) => {
    const [products, setProducts] = useState([])

    const getProducts = () => {
        return fetch("http://localhost:8088/products")
            .then(res => res.json())
            .then(setProducts)
    }

    const addProduct = product => {
        return fetch("http://localhost:8088/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        })
            .then(getProducts)
    }

    const [productTypes, setProductTypes] = useState([])
    
    const getProductTypes = () => {
        return fetch("http://localhost:8088/productTypes")
            .then(res => res.json())
            .then(setProductTypes)
    }
    
    const addProductTypes = productTypes => {
        return fetch("http://localhost:8088/productTypes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productTypes)
        })
            .then(getProductTypes)
    }
    


    useEffect(() => {
        getProducts()
        getProductTypes()
    }, [])

    return (
        <ProductContext.Provider value={{
            products, addProduct, productTypes, addProductTypes
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}
