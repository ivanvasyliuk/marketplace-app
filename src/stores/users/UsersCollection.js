import { useStore } from '../createStore';
import { UserModel } from './UserModel';
import { createCollection } from '../utils';

export function useUsersCollection() {
  const store = useStore();
  return store.entities.users;
}

export const UsersCollection = createCollection(UserModel, {});
