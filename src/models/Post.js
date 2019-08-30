import _ from "lodash";
import posts from '../data/Posts';

export default class Post {
  constructor(id, post, user) {
    this.id = id;
    this.post = post;
    this.user = user;
  }

  static getAll = () => posts;
  
  static getById = id => posts.find(post => post.id == id);

  static filter = params => _.filter(posts, params);

  save = () => {
    const posts = Post.getAll();
    const newPost = {
      id: posts[posts.length - 1].id + 1,
      post: this.post,
      user: this.user,
    };
    posts.push(newPost);
    return newPost;
  }

  delete = () => _.remove(posts, post => post.id == this.id)[0];
}
