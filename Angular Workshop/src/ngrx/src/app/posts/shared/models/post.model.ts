export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const posts_management_module = {
  storekey: "postsModule"
};
