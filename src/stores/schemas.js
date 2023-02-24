import { schema } from 'normalizr';

export const User = new schema.Entity('users');
export const Product = new schema.Entity('products', {
  owner: User,
});
export const ProductCollection = [Product];
export const LatestProduct = new schema.Entity('products');
export const LatestProductCollection = [LatestProduct];
export const OwnProduct = [LatestProduct];
export const MessageSchema = new schema.Entity('MessageSchema');
export const ChatSchema = new schema.Entity('chats', {
  message: MessageSchema,
  product: Product,
  participants: [User],
});
