

const Sort = ({setSort, setOrder}) => {

   const submitForm = (event) => {
         event.preventDefault()
         
      
       setSort(event.target[1].value)
       setOrder(event.target[2].value) 
   }
   
    return(
       <form className="sort"  onSubmit={submitForm}>
        <fieldset>
            <select key='sort-by'>
                <option value="created_at">Date</option>
                <option value="votes">Votes</option>
                <option value="comment_count">Comment Count</option>
            </select>
            <select key='order-by'>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
            <button className="submit">Sort Articles</button>
        </fieldset>
       </form> 
    )
}

export default Sort