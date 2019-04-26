import React from 'react';
import cls from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = (props) => {
  let postsElements = props.postsData.map(post => <Post message={post.message} likesCount={post.likesCount}/>);

  let newPostElement = React.createRef();

  let onAddPost = () => {
      props.addPost();
  }

  let onPostChange = () => {
      let text = newPostElement.current.value;
      props.updateNewPostText(text);
  }

  return (
    <div className={cls.post_wrap}>
      <div className={cls.post_field_wrap}>
        <span className={cls.title}>New post</span>
        <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} className={cls.post_field} placeholder="What`s new?" />
        <button onClick={onAddPost} className={cls.post_btn}>Post</button>
      </div>
      <span className={cls.title}>My posts</span>
      <div className={cls.wall_wrap}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;
