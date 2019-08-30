import _ from "lodash";
import comments from '../data/Comments';

export default class Comment {
  constructor(id, comment, post, user) {
    this.id = id;
    this.comment = comment;
    this.post = post;
    this.user = user;
  }

  static getAll = () => comments;
  
  static getById = id => comments.find(comment => comment.id == id);

  static filter = params => _.filter(comments, params);

  save = () => {
    const comments = Comment.getAll();
    const newComment = {
      id: comments[comments.length - 1].id + 1,
      comment: this.comment,
      post: this.post,
      user: this.user
    };
    comments.push(newComment);
    return newComment;
  }

  delete = () => _.remove(comments, comment => comment.id == this.id)[0];
}
