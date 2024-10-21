import React from "react"

export default (props) => {
    return (
        <div className="SecondComp">
            <p>Segundo componente!</p>
            <p>Parâmetro index: {props.index}</p>

            <p>Parâmetro other: {props.other}</p>

        </div>

    )

}