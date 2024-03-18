type Post = {
  image: string
  heading: string
  caption: string
  slug: string
}

export type BlogFeedProps = {
  content: {
    heading: string
    caption: string,
    posts: Post[]
  }
}
