import React, {useMemo, useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'JavaScript язык программирования'},
        {id: 2, title: 'JavaScript2', body: 'JavaScript язык программирования'},
        {id: 3, title: 'JavaScript3', body: 'JavaScript язык программирования'},
    ])

    const [filter, setFilter] = useState({sort: "", query: ""})

    const sortedPosts = useMemo(()=>{
        if(filter.sort) {
            return [...posts].sort((a,b)=> a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts
    }, [filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedPosts])

    const createPost = (newPost) =>  {
        setPosts([...posts, newPost])
    }

    const removePost = (post) =>  {
        setPosts(posts.filter(p => p.id !== post.id))
    }

  return (
    <div className="App">
        <PostForm create={createPost}/>
        <hr style={{margin: "20px 0"}}/>
        <PostFilter
            filter={filter}
            setFilter={setFilter}
        />
        {sortedAndSearchedPosts.length
            ?
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Посты про JS'/>
            :
            <h1 style={{textAlign: "center"}}>
                Посты не найдены!
            </h1>
        }
    </div>
  );
}

export default App;
