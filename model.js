const Tweeter = function () {
  let posts = [
    {
      text: "First post!",
      id: "p1",
      comments: [
        { id: "c1", text: "First comment on first post!" },
        { id: "c2", text: "Second comment on first post!!" },
        { id: "c3", text: "Third comment on first post!!!" },
      ],
    },
    {
      text: "Aw man, I wanted to be first",
      id: "p2",
      comments: [
        {
          id: "c4",
          text: "Don't worry second poster, you'll be first one day.",
        },
        { id: "c5", text: "Yeah, believe in yourself!" },
        { id: "c6", text: "Haha second place what a joke." },
      ],
    },
  ];

  let postIdCounter = 3;
  let commentIdCounter = 7;

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

const tweeter = Tweeter();

// Test adding a post
tweeter.addPost("This is my own post!");
console.log(tweeter.getPosts());
// Should add: {text: "This is my own post!", id: "p3", comments: []}

// Test removing a post
tweeter.removePost("p1");
console.log(tweeter.getPosts());
// Should only have two posts left

// Test adding comments
tweeter.addComment("p3", "Damn straight it is!");
tweeter.addComment("p2", "Second the best!");
console.log(tweeter.getPosts());

// Test removing comments
tweeter.removeComment("p2", "c6");
console.log(tweeter.getPosts());
