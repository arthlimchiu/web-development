
const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' },
];

const createPost = (post) => new Promise((resolve, reject) => {
  setTimeout(() => {
    posts.push(post);
    resolve();
  }, 2000);
});

const getPosts = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    posts.forEach(function (post) {
      const div = document.createElement('div');
      div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
      document.querySelector('#posts').appendChild(div);
    });
    resolve();
  }, 1000);
});

createPost({ title: 'Post Three', body: 'This is post' })
  .then(() => getPosts());