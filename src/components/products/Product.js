import React from "react"

export const Product = ({ product }) => (
    <section className="product">
        <h3 className="product__name">{product.name}</h3>
        <div className="product__type">{product.typeId}</div>
        <div className="product__price">Price: ${product.price}</div>
    </section>
)
