import inhabitants from "../data/inhabitants";

const getUsers = () => {
  const users = inhabitants.map((inhabitant) => ({
    thumbnail: inhabitant.thumbnail,
    name: inhabitant.name,
    age: inhabitant.age,
    weight: inhabitant.weight,
  }));

  return users;
};

const getUser = (id) => {};

const createUser = (data) => {};

const removeUser = (id) => {};

const updateUser = (id, data) => {};

export const usersService = {
  getUsers,
  getUser,
  createUser,
  removeUser,
  updateUser,
};
