import { useState } from "react";

const Sort = ({setSort, setOrder}) => {

    const [sort, setSortState] = useState('');
    const [order, setOrderState] = useState('');

    const handleSortChange = (event) => {
        setSortState(event.target.value);
    }

    const handleOrderChange = (event) => {
        setOrderState(event.target.value);
    }

   const submitForm = (event) => {
         event.preventDefault()
         
      
       setSort(event.target[1].value)
       setOrder(event.target[2].value) 
   }
   
    return(
       <form className="sort"  onSubmit={submitForm}>
        <fieldset>
            <select key='sort-by' value={sort} onChange={handleSortChange}>
                <option value="created_at">Date</option>
                <option value="votes">Votes</option>
                <option value="comment_count">Comment Count</option>
            </select>
            <select key='order-by' value={order} onChange={handleOrderChange}>
                <option value="desc">Descending</option>
                <option value="asc">Ascending</option>
            </select>
            <button className="submit">Sort Articles</button>
        </fieldset>
       </form> 
    )
}

export default Sort