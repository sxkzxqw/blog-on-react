import React, { useState } from 'react';
import PostItem from './components/PostItem';
import './components/styles/app.css'
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import { MyButton } from './components/UI/button/MyButton';
import { MyInput } from './components/UI/input/MyInput';
import MySelect from './components/UI/select/MySelect';

function App() {
    const [posts, setPosts] = useState ([
      {id: 1, title: 'JavaScript', body: 'Description'},
      {id: 2, title: 'JavaScript 2', body: 'Description 2'},
      {id: 3, title: 'JavaScript 3', body: 'Description 3'}
    ])

    const createPost = (newPost) => {
      setPosts([...posts, newPost])
    }

    const removePost = (post) => {
      setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
      <div className="App">
        <PostForm create={createPost}/>
        <hr style={{margin: '15px 0'}}/>
        <div>
            <MySelect
            defaultValue='Сортировка:'
            options={[
              {value: 'title', name: 'По названию'},
              {value: 'body', name: 'По описанию'}
          ]}

            />
        </div>
        {posts.length
          ? <PostList remove={removePost} posts={posts} title='Посты про JS'/>
          : <h1 style={{textAlign: 'center', fontSize: '60px'}}>Постов нет</h1>
        }
      </div>
    )
}

export default App;
