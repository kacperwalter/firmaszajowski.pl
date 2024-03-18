import Link from "next/link"
import Image from "next/image"
import type { BlogFeedProps } from "./BlogFeed.types"
import Wrapper from "@/app/common/components/atoms/Wrapper/Wrapper"
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
              <Header
                heading={post.heading}
                headingType='h3'
                caption={post.caption}
              />
              <ActionButton />
            </Link>
          ))}
        </div>
      </Wrapper>
    </section>
  )
}

export default BlogFeed