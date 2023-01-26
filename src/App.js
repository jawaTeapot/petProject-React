import React, {useRef, useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'JavaScript язык программирования'},
        {id: 2, title: 'JavaScript2', body: 'JavaScript язык программирования'},
        {id: 3, title: 'JavaScript3', body: 'JavaScript язык программирования'},
    ])

    const [title, setTitle] = useState("")
    const bodyInputRef = useRef();
    const addNewPost = (e) => {
        e.preventDefault()
    }
  return (
    <div className="App">
        <form action="#">
            {/*Управляемый компонент*/}
            <MyInput
                value={title}
                onChange={e => setTitle(e.target.value)}
                type="text"
                placeholder='Название поста'
            />
            {/*Не управляемый\ Не кнтролируемый коммпонент*/}
            <MyInput
                ref={bodyInputRef}
                type="text"
                placeholder='Описане поста'
            />
            <MyButton
                onClick={addNewPost}
            >
                Создать пост
            </MyButton>
        </form>
        <PostList posts={posts} title='Посты про JS'/>
    </div>
  );
}

export default App;
