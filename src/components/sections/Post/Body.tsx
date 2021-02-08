const PostBody = (props: { html: string; body?: any;}) => (
  <div className="bg-white rounded-lg shadow-xl py-8 md:py-12 px-8 text-lg">
    <article className="prose lg:prose-lg mx-auto">
      <div dangerouslySetInnerHTML={{ __html: props.html }}></div>
      {props.body}
    </article>
  </div>
)

export default PostBody