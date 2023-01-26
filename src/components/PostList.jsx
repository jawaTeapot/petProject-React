import React from 'react';
import Postitem from "./Postitem";

const PostList = ({posts, title, remove}) => {
    return (
        <div>
            <h1 className='PostList__header'>{title}</h1>
            {posts.map((post, index) =>
                <Postitem
                    remove={remove}
                    number={index + 1}
                    post={post}
                    key={post.id}
                />
            )}
        </div>
    );
};

export default PostList;
