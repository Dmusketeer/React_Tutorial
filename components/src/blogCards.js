import React from 'react'


// functional components.
const BlogCards = (props)=>{
    console.log(props)
        return(
            <div className="blogCard">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        )
}

export default BlogCards;