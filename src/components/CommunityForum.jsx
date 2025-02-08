import React, { useState } from "react";
import "../styles/CommunityForum.css";

const CommunityForum = () => {
  const [posts, setPosts] = useState([
    { user: "Alice", content: "Best honey-infused tea recipe?" },
    { user: "Bob", content: "How do I store raw honey properly?" },
  ]);
  const [newPost, setNewPost] = useState("");

  const handlePost = () => {
    if (newPost.trim() !== "") {
      setPosts([...posts, { user: "You", content: newPost }]);
      setNewPost("");
    }
  };

  return (
    <div className="forum-container">
      <h3>Community Forum</h3>
      <div className="posts">
        {posts.map((post, index) => (
          <div key={index} className="post">
            <strong>{post.user}</strong>: {post.content}
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Start a discussion..."
        value={newPost}
        onChange={(e) => setNewPost(e.target.value)}
      />
      <button onClick={handlePost}>Post</button>
    </div>
  );
};

export default CommunityForum;