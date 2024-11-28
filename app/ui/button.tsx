import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'flex h-10 items-center rounded-lg bg-pink-200 px-4 text-sm font-medium text-cyan-600 transition-colors hover:bg-pink-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-pink-200 active:bg-pink-200 aria-disabled:cursor-not-allowed aria-disabled:opacity-50',
        className,
      )}
    >
      {children}
    </button>
  );
}
