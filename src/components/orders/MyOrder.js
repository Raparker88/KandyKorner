import React, { useContext, useEffect, useState } from "react"
import { ProductContext } from "../products/ProductProvider"
import { CustomerProductContext } from "../products/CustomerProductProvider"
import "./MyOrder.css"

export const MyOrder = () => {
    const { products } = useContext(ProductContext)
    const { customerProducts, getCustomerProducts } = useContext(CustomerProductContext)

    const [ filteredProducts, setFiltered ] = useState([])


    useEffect(() => {
        getCustomerProducts()
    }, [])

    useEffect(() => {
        const filtered = customerProducts.filter(cp => cp.customerId === parseInt(localStorage.getItem("kandy_customer")))
        setFiltered(filtered)

    }, [customerProducts])


    return (
        <div className="orders">
        {
            filteredProducts.map(fp => {
            
                const product = products.find(p => p.id === fp.productId) || {}
                return (
                    <section className="order"> 
                        <h3>{product.name}</h3>
                        <p>price: ${product.price}</p>

                    </section>
                )
            
            })
        }
        </div>
    )
}