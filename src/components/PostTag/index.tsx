import { Tag } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

interface PostTagProps {
  tag: string
}

const PostTag: React.FC<PostTagProps> = ({ tag }) => {
  return (
    <Link href={`/blog/tag/${tag}`} shallow>
      <Tag colorScheme="blue" cursor="pointer">
        {tag}
      </Tag>
    </Link>
  )
}

export default PostTag
