import React, {useRef, useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'JavaScript язык программирования'},
        {id: 2, title: 'JavaScript2', body: 'JavaScript язык программирования'},
        {id: 3, title: 'JavaScript3', body: 'JavaScript язык программирования'},
    ])

    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    const createPost = (newPost) =>  {
        setPosts([...posts, newPost])
    }

    const removePost = (post) =>  {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPost = (sort) => {
        setSelectedSort(sort);
        setPosts([...posts].sort((a,b)=> a[sort].localeCompare(b[sort])))
    }

  return (
    <div className="App">
        <PostForm create={createPost}/>
        <hr style={{margin: "20px 0"}}/>
        <div>
            <MyInput
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Поиск ..."
            />
            <MySelect
                value={selectedSort}
                onChange={sortPost}
                defaultValue="Сортировка"
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По описсанию'},
                ]}
            />
        </div>
        {posts.length !==0
            ?
            <PostList remove={removePost} posts={posts} title='Посты про JS'/>
            :
            <h1 style={{textAlign: "center"}}>
                Посты не найдены!
            </h1>
        }
    </div>
  );
}

export default App;
