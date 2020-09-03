import React, { useContext } from "react"
import { ProductContext } from "./ProductProvider"
import { Product } from "./Product"
import "./Product.css"

export const ProductList = () => {
    const { products } = useContext(ProductContext)

    return (
        <div className="products">
        {
            products.map(p => <Product key={p.id} product={p} />)
        }
        </div>
    )
}