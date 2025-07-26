const tweeter = Tweeter();
const renderer = Renderer();

renderer.renderPosts(tweeter.getPosts());

$("#twit-button").on("click", function () {
  console.log("Twit button clicked!");

  const inputText = $("#new-post-input").val().trim();

  if (inputText) {
    tweeter.addPost(inputText);
    renderer.renderPosts(tweeter.getPosts());
    $("#new-post-input").val("");
  }
});

$(document).on("click", ".comment-button", function () {
  console.log("Comment button clicked!");

  const postElement = $(this).closest(".post");
  const postId = postElement.data("id");
  const commentText = postElement.find(".comment-input").val().trim();

  if (commentText) {
    tweeter.addComment(postId, commentText);
    renderer.renderPosts(tweeter.getPosts());
  }
});

$(document).on("click", ".delete-comment", function () {
  console.log("Delete comment button clicked!");

  const postElement = $(this).closest(".post");
  const postId = postElement.data("id");
  const commentId = $(this).data("id");

  if (commentId && postId) {
    tweeter.removeComment(postId, commentId);
    renderer.renderPosts(tweeter.getPosts());
  }
});

$(document).on("click", ".delete", function () {
  console.log("Delete post button clicked!");

  const postElement = $(this).closest(".post");
  const postId = postElement.data("id");

  if (postId) {
    tweeter.removePost(postId);
    renderer.renderPosts(tweeter.getPosts());
  }
});
