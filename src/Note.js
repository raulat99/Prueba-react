export const Note = ({categories = [], content, date }) =>{

    return(
        <li>
            <p> {content} </p>
            <time> {date} </time>
            {categories.map((category)=> (
                <small key={category}> {category}</small>
            ))}
        </li>
    );
  };