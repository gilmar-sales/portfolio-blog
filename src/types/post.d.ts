export interface PostDTO {
  slug: string
  title: string
  date: string
  content: string
  tags: string[]
}

export interface Post {
  slug: string
  title: string
  date: string
  source: MDXRemoteSerializeResult<Record<string, unknown>>
  tags: string[]
}
