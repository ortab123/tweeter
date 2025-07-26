const Renderer = function () {
  const renderPosts = function (posts) {
    $("#posts").empty();

    for (let post of posts) {
      const postEl = createPostElement(post);
      $("#posts").append(postEl);
    }
  };

  const createCommentElement = function (comment) {
    const commentEl = $(`
    <div class="comment" data-id="${comment.id}">
      <span class="delete-comment" data-id="${comment.id}">x</span>
      <span class="comment-text">${comment.text}</span>
    </div>
  `);
    return commentEl;
  };

  const createPostElement = function (post) {
    const postEl = $(`
        <div class="post" data-id="${post.id}">
        <div class="post-text">${post.text}</div>
        <div class="comments"></div>
        <input type="text" placeholder="Got something to say?" class="comment-input">
        <button class="comment-button">Comment</button>
        <button class="delete" data-id="${post.id}">Delete Post</button>
        </div>
        `);

    const commentContainer = postEl.find(".comments");
    for (let comment of post.comments) {
      const commentEl = createCommentElement(comment);
      commentContainer.append(commentEl);
    }

    return postEl;
  };

  return {
    renderPosts,
  };
};
