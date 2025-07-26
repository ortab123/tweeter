const Tweeter = function () {
  let posts = [
    {
      text: "Welcome to Tweeter!",
      id: "p1",
      comments: [
        {
          id: "c1",
          text: "If you have comment to add, you can write it on the input text below!",
        },
      ],
    },
  ];

  let postIdCounter = posts.length + 1;
  let commentIdCounter =
    posts.reduce((count, post) => count + post.comments.length, 0) + 1;

  function getPosts() {
    return posts;
  }

  function addPost(text) {
    let postId = "p" + postIdCounter;
    postIdCounter++;

    const newPost = {
      id: postId,
      text: text,
      comments: [],
    };
    posts.push(newPost);
  }

  function removePost(postId) {
    let index = posts.findIndex((post) => post.id === postId);
    if (index !== -1) {
      posts.splice(index, 1);
    }
    return posts;
  }

  function addComment(postId, text) {
    let post = posts.find((post) => post.id === postId);
    if (!post) return;
    const comment = {
      id: "c" + commentIdCounter,
      text: text,
    };
    commentIdCounter++;
    post.comments.push(comment);
  }

  function removeComment(postId, commentId) {
    const post = posts.find((post) => post.id === postId);
    if (!post) return;

    const commentIndex = post.comments.findIndex(
      (comment) => comment.id === commentId
    );
    if (commentIndex !== -1) {
      post.comments.splice(commentIndex, 1);
    }
  }

  return {
    getPosts,
    addPost,
    removePost,
    addComment,
    removeComment,
  };
};
