import React, { useContext } from "react"
import { ProductContext } from "./ProductProvider"
import { Product } from "./Product"
import "./Product.css"

export const ProductList = () => {
    const { products, productTypes } = useContext(ProductContext)

    return (
        <div className="products">
        {
            products.map(p => {
            
                const type = productTypes.find(t => t.id === p.typeId) || {}
                return <Product key={p.id} product={p} type={type} />
            
            })
        }
        </div>
    )
}