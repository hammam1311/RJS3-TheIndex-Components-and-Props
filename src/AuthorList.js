import React from 'react';
import AuthorCard from "./AuthorCard"

function AuthorList(props) {
    const authors = props.authors
    const authorlisto = authors.map(author => <AuthorCard author={author} key={author.first_name} />)
    return (

        <div className="authors">
            <h3>Authors</h3>
            <div className="row">
                {authorlisto}

            </div>
        </div>


    );
}
export default AuthorList;
