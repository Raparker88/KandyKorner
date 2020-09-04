import React from "react"

export const Product = ({ product, type }) => (
    <section className="product">
        <h3 className="product__name">{product.name}</h3>
        <div className="product__type">Type: {type.type}</div>
        <div className="product__price">Price: ${product.price}</div>
    </section>
)
