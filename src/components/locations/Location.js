import React from "react"

export const Location = ({ location }) => (
    <section className="location">
        <h3 className="location__address">{location.address}</h3>
        <div className="location__sqrFootage">Square Footage: {location.sqrFootage}</div>
        <div className="location__accessibility">Handicap Accessible: {isAccessible(location)}</div>
    </section>
)

const isAccessible = (location) => {
    if(location.handicapAccessible){
        return "true"
    }
    else{
        return "false"
    }
}