import type { BlogFeedProps } from "./BlogFeed.types"
import Wrapper from "@/app/common/components/atoms/Wrapper/Wrapper"
import Header from "@/app/common/components/molecules/Header/Header"
import "./BlogFeed.scss"

const BlogFeed = ({ content }: BlogFeedProps) => {
  return (
    <section className="blog-feed">
      <Wrapper>
        <Header
          heading={content.heading}
          headingType='h2'
          caption={content.caption}
        />
      </Wrapper>
    </section>
  )
}

export default BlogFeed