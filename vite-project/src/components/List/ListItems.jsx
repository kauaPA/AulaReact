import ItemComponents from "./ItemComponents";

export default props => {

    if (props.items.length === 0){
        return (
            <h2> Found no expenses </h2>
        )

    }

    return (
        <ul className="expenses-list">
            <p>List Of Items</p>
            {

                props.items.map( (expense) => (

                    <ItemComponents key={expense.id}
                    name={expense.name}
                    price={expense.price}/>

                )
                )
            }


        </ul>

    )

}