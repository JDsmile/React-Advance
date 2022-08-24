const { UserList } = require("../dummyUsers");
const _ = require("lodash");
const resolvers = {
  Query: {
    users: () => {
      //get data when database
      return UserList;
    },
    user: (parent, args) => {
      const id = Number(args.id);
      console.log(id);
      return UserList.find((user) => {
        return id === user.id;
      });
    },
  },

  Mutation: {
    createUser: (parent, args) => {
      const user = args.input;
      const id = UserList[UserList.length - 1].id;
      user.id = id + 1;
      UserList.push(user);
      return user;
    },

    deleteUser: (parent, args) => {
      const id = Number(args.id);
      _.remove(UserList, (user) => user.id === id);
      return null;
    },
  },
};

module.exports = { resolvers };
