import { PostDTO } from './post'

export interface TagDTO {
  name: string
  posts: PostDTO[]
}
