import { types } from 'mobx-state-tree';

// export function safeReference(T) {
//   return types.reference(T, {
//     get(identifier, parent) {
//       if (isStateTreeNode(identifier)) {
//         identifier = getIdentifier(identifier);
//       }
//       return resolveIdentifier(T, parent, identifier);
//     },

//     set(value) {
//       return value;
//     },
//   });
// }

const ViewerModel = types.model('ViewerModel', {
  id: types.string,
  fullName: types.string,
  location: types.maybeNull(types.string),
  avatar: types.maybeNull(types.string),
  phone: types.maybeNull(types.string),
  createdAt: types.string,
  updatedAt: types.string,
  email: types.string,
});

// const ViewerModel = UserModel.named('ViewerModel');

export const ViewerStore = types
  .model('ViewerStore', {
    userModel: types.maybe(ViewerModel),
  })
  .views((store) => ({
    get initials() {
      const array = store.userModel.fullName.split(' ');
      return array.map((letter) => letter[0]).concat();
    },
  }))
  .actions((store) => ({
    setViewer(user) {
      console.log('user', user);
      store.userModel = user;
    },
  }));
