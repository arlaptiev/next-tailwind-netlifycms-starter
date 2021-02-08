import Link from 'next/link';
import Image from 'next/image';

const Header = (): JSX.Element => {
  return (
    <header className="text-gray-700 body-font">
      <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
        <Link href="/">
          <a className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
            <div className="relative w-8 h-8 sm:h-10 sm:h-10">
              <Image
                layout="fill"
                objectFit="contain"
                objectPosition="center"
                src="/favicon-32x32.png"
                alt="Boilerplate Logo"
              />
            </div>
          </a>
        </Link>
        <nav className="flex flex-wrap items-center justify-center text-base md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400">
          <a
            href="#features"
            className="mr-5 text-base text-gray-600 hover:text-gray-800"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="mr-5 text-base text-gray-600 hover:text-gray-800"
          >
            Pricing
          </a>
          <a
            href="#team"
            className="mr-5 text-base text-gray-600 hover:text-gray-800"
          >
            Team
          </a>
          <Link href="/blog">
            <a href="#" className="text-base text-gray-600 hover:text-gray-800">
              Blog
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
