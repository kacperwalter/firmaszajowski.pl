import Link from "next/link"
import type { BlogFeedProps } from "./BlogFeed.types"
import Wrapper from "@/app/common/components/atoms/Wrapper/Wrapper"
import BckgRect from "@/app/common/components/atoms/BckgRect/BckgRect"
import Header from "@/app/common/components/molecules/Header/Header"
import ActionButton from "@/app/common/components/atoms/ActionButton/ActionButton"
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

        <div className="blog-feed__posts">
          {content.posts.map((post, index) => (
            <Link 
              key={index} 
              className="blog-feed__post"
              href='/'
            >
              <div className="blog-feed__image" >
                <img 
                  src={post.image} 
                  alt={post.heading} 
                />
              </div>

              <div className="blog-feed__content">
                <Header
                  heading={post.heading}
                  headingType='h3'
                  caption={post.caption}
                />

                <ActionButton variant="secondary" />
              </div>
            </Link>
          ))}
        </div>
      </Wrapper>
      <BckgRect placement="right" />
    </section>
  )
}

export default BlogFeed