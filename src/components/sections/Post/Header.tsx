const PostHeader = (props: {title: string}) => (
  <div className="bg-gray-900 pb-32">
    <header className="py-16 md:py-24 container mx-auto">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl leading-9 font-bold text-white text-center">
          {props.title}
        </h1>
      </div>
    </header>
  </div>
)

export default PostHeader;