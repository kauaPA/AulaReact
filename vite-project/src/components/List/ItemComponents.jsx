import React from "react"

export default props => {

    return(

    <li>
        <div className="expense-item">
                <div className="expense-item__description">
                    <h2> {props.name}</h2>
                </div>
                <div className="expense-item__price">
                    R$ {props.price}
                </div>
        </div>


    </li>
    )
}