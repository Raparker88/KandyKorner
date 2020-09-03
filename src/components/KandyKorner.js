import React from "react"
import { LocationProvider } from "./locations/LocationProvider"
import { LocationList } from "./locations/LocationList"
import { ProductProvider } from "./products/ProductProvider"
import { ProductList } from "./products/ProductList"

export const KandyKorner = () => (
    <>
        <h1>Kandy Korner</h1>
        <h2>Locations</h2>
            <LocationProvider>
                <LocationList/>
            </LocationProvider>
        <h2>Products</h2>
            <ProductProvider>
                <ProductList/>
            </ProductProvider>
    </>
)