import _ from "lodash";
import users from '../data/Users';

export default class User {
  constructor(id, first_name, last_name, email) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
  }

  static getAll = () => users;
  
  static getById = id => users.find(user => user.id == id);

  static filter = params => _.filter(users, params);

  save = () => {
    const users = User.getAll();
    const newUser = {
      id: users[users.length - 1].id + 1,
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email
    };
    users.push(newUser);
    return newUser;
  }

  delete = () => _.remove(users, user => user.id == this.id)[0];
}
