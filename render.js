const Renderer = function () {
  const renderPosts = function (posts) {
    $("#posts").empty();

    for (let post of posts) {
      const postEl = createPostElement(post);
      $("#posts").append(postEl);
    }
  };

  const createCommentElement = function (comment) {
    return $(`
        <div class="comment" data-id="${comment.id}">
        ${comment.text}
        <div class="delete-comment" data-id="${comment.id}">X</div>
        </div>
        `);
  };

  const createPostElement = function (post) {
    const postEl = $(`
        <div class="post" data-id="${post.id}">
        <div class="post-text">${post.text}</div>
        <div class="delete" data-id="${post.id}">Delete Post</div>
        <div class="comments"></div>
        <input type="text" placeholder="Got something to say?" class="comment-input">
        <button class="comment-button">Comment</button>
        </div>
        `);

    const commentContainer = postEl.find(".comments");
    for (let comment of post.comments) {
      commentContainer.append(createCommentElement(comment));
    }

    return postEl;
  };

  return {
    renderPosts,
  };
};
