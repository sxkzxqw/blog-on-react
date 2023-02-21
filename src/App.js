import React, { useState, useMemo, useEffect } from 'react';
import './components/styles/app.css'
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';
import { usePosts } from './hooks/usePosts.js';
import PostService from './API/PostService';
import axios from 'axios';

function App() {
    const [posts, setPosts] = useState ([])

    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    useEffect(() => {
      fetchPosts();
    }, []);

    const createPost = (newPost) => {
      setPosts([...posts, newPost])
      setModal(false)
    }

    async function fetchPosts() {
      const posts = await PostService.getAll();
      setPosts(posts)
    }

    const removePost = (post) => {
      setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
      <div className="App">
        <button onClick={fetchPosts}>GET POSTS</button>
        <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
          Создать пользователя
        </MyButton>
        <MyModal visible={modal} setVisible={setModal}>
          <PostForm create={createPost}/>
        </MyModal>
        <hr style={{margin: '15px 0'}}/>
        <PostFilter 
        filter={filter} 
        setFilter={setFilter}
        />
         <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Посты про JS'/>
      </div>
    )
}

export default App;
