const tweeter = Tweeter();
const renderer = Renderer();

renderer.renderPosts(tweeter.getPosts());

$("#twit-button").on("click", function () {
  const input = $("#new-post-input");
  const errorMsg = $("#post-error");

  const inputText = input.val().trim();

  if (inputText) {
    tweeter.addPost(inputText);
    renderer.renderPosts(tweeter.getPosts());

    input.val("").removeClass("input-error");
    errorMsg.hide();

    const lastPost = $("#posts").children().last();
    lastPost.hide().slideDown();
  } else {
    input.addClass("input-error");
    errorMsg.text("Cannot add empty post").show();
  }
});

$(document).on("click", ".comment-button", function () {
  const postElement = $(this).closest(".post");
  const commentInput = postElement.find(".comment-input");
  const errorMsg = postElement.find(".comment-error");
  const postId = postElement.data("id");
  const commentText = commentInput.val().trim();

  if (commentText) {
    tweeter.addComment(postId, commentText);
    renderer.renderPosts(tweeter.getPosts());

    const newPostElement = $(`[data-id="${postId}"]`);
    const lastComment = newPostElement.find(".comment").last();
    lastComment.hide().slideDown();
  } else {
    commentInput.addClass("input-error");
    errorMsg.text("Cannot add empty comment").show();
  }
});

$(document).on("click", ".delete-comment", function () {
  const postElement = $(this).closest(".post");
  const postId = postElement.data("id");
  const commentId = $(this).data("id");

  if (commentId && postId) {
    tweeter.removeComment(postId, commentId);
    renderer.renderPosts(tweeter.getPosts());
  }
});

$(document).on("click", ".delete", function () {
  const postElement = $(this).closest(".post");
  const postId = postElement.data("id");

  if (postId) {
    tweeter.removePost(postId);
    renderer.renderPosts(tweeter.getPosts());
  }
});
