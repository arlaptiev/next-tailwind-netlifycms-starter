import PostBody from "components/sections/Post/Body";
import PostBreadcrumbs from "components/sections/Post/Breadcrumbs";
import PostHeader from "components/sections/Post/Header";
import React from "react"

export interface PostAttributes {
  title: string;
  slug: string;
  draft: boolean;
  date: string;
  category: string;
  tags: string[];
  template: string;
  description: string;
  image: string;
  preview_body?: any;
}

interface Props {
  attributes: PostAttributes;
  html: string;
}

const Post = (props: Props) => (
  <>
    <div className="min-h-screen bg-gray-50">

      <PostHeader title={props.attributes.title}/>

      <main className="-mt-32 mx-auto md:px-6 lg:px-32 pb-16">
        <div className="max-w-4xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">

          {/* Netlify CMS breaks with PostBreadcrumb's Link components. If CMS's preview_body
          exists, don't render breadcrumbs */}
          <PostBreadcrumbs noBreadcrumbs={!!props.attributes.preview_body} />

          <PostBody html={props.html} body={props.attributes.preview_body} />

        </div>
      </main>
    </div>
  </>
)

export default Post