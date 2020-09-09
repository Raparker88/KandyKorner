import React, { useContext } from "react"
import { CustomerProductContext } from "./CustomerProductProvider"

export const Product = ({ product, type }) => {
    const { addCustomerProduct } = useContext(CustomerProductContext)

    return(
        <section className="product">
            <h3 className="product__name">{product.name}</h3>
            <div className="product__type">Type: {type.type}</div>
            <div className="product__price">Price: ${product.price}</div>
            <button onClick={()=> {
                const newCustomerProduct = {
                    productId: product.id,
                    customerId: parseInt(localStorage.getItem("kandy_customer"))
                }
                addCustomerProduct(newCustomerProduct)
            } }>Purchase</button>
        </section>
    )
    }
