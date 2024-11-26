import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/app/ui/home.module.css';
import FloristLogo from './ui/florist-logo';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">      
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-cyan-600 p-4 md:h-52">
        <FloristLogo/>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-slate-100 px-6 py-10 md:w-2/5 md:px-20 w-full">
          <div className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-cyan-600"></div>
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Florist.</strong> This is how you can get started with{' '}
            <a href="#" className="text-amber-400 hover:text-amber-200">
              flower arranging
            </a>
            , let's bloom together!" 💐✨
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-pink-200 px-6 py-3 text-sm font-medium text-cyan-600 transition-colors hover:bg-pink-100 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12 w-full">
          <Image
            src="/images/flower.jpg"
            alt="Hero Image of Flower Arrangements"
            width={1000}
            height={760}
            className="rounded-lg shadow-lg hidden md:block w-full max-w-4xl mx-auto"
          />
          <Image
            src="/images/flower.jpg"
            alt="Hero Image of Flower Arrangements"
            width={560}
            height={620}
            className="rounded-lg shadow-lg block md:hidden w-full max-w-3xl mx-auto"
          />
        </div>
      </div>
    </main>
  );
}
