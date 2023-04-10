function updateLastUserActivityTime() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const now = new Date();
        resolve(now);
      }, 1000);
    });
  }
  
  function createPost(postData) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const post = {
          ...postData,
          createdAt: new Date(),
        };
        resolve(post);
      }, 2000);
    });
  }
  
  function deleteLastPost(posts) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const lastPostIndex = posts.length - 1;
        const updatedPosts = posts.slice(0, lastPostIndex);
        resolve(updatedPosts);
      }, 1500);
    });
  }
  
  // Usage:
  const user = {
    id: 1,
    name: 'John Doe',
    lastActivityTime: null,
    posts: [],
  };
  
  createPost({ title: 'My first post', content: 'Hello world' })
    .then((post) => {
      user.posts.push(post);
      return updateLastUserActivityTime();
    })
    .then((lastActivityTime) => {
      user.lastActivityTime = lastActivityTime;
      console.log('All posts:', user.posts);
      console.log('Last activity time:', user.lastActivityTime);
      return deleteLastPost(user.posts);
    })
    .then((updatedPosts) => {
      user.posts = updatedPosts;
      console.log('Updated posts:', user.posts);
    })
    .catch((error) => {
      console.error(error);
    });
  