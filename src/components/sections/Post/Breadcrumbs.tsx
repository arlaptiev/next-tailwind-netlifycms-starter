import Link from "next/link";
import React from "react";

const PostBreadcrumbs = (props: any) => {
  if (props.noBreadcrumbs) {
    return <></>
  }
  return (
    <div>
    <nav className="sm:hidden">
      <Link href="/blog">
        <a
          href="#"
          className="flex items-center text-sm mb-2 leading-5 font-medium text-gray-200 hover:text-white transition duration-150 ease-in-out"
        >
          <svg
            className="flex-shrink-0 -ml-1 mr-1 h-5 w-5 text-gray-200"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          Back
        </a>
      </Link>
    </nav>
    <nav className="hidden sm:flex items-center text-sm leading-5 font-medium mb-2">
      <Link href="/">
        <a
          href="#"
          className="text-gray-200 hover:text-white transition duration-150 ease-in-out"
        >
          Home
        </a>
      </Link>
      <svg
        className="flex-shrink-0 mx-2 h-5 w-5 text-gray-200"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
      <Link href="/blog">
        <a
          href="#"
          className="text-gray-200 hover:text-white transition duration-150 ease-in-out"
        >
          Blogs
        </a>
      </Link>
    </nav>
  </div>
  )
}

export default PostBreadcrumbs;