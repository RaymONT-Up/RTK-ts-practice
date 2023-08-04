import React from 'react';
import {postAPI} from "../services/PostService";
import {IPost} from "../models/IPost";

const PostContainer = () => {


    const {data: posts, isLoading, isError} = postAPI.useFetchAllPostsQuery(2)

    console.log(posts)


    if (isLoading) {
        return <h1>Loading</h1>
    }

    if (isError) {
        return <h1>Sorry we have error</h1>
    }

    return (
        <div>
            {posts && posts.map(post => <h1 key={post.id}>{post.id}</h1>)}
        </div>
    );
};

export default PostContainer;