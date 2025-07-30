import Link from "next/link";

export default function Header() {
  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <p className="fixed left-0 top-0 flex w-full justify-center border-b border-surface0 bg-gradient-to-b from-surface1 py-4 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-surface0 lg:p-4">
        <Link
          className="flex place-items-center gap-2 p-4 lg:p-0"
          href="/"
        >
          ntn0de
        </Link>
      </p>
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-base via-base lg:static lg:h-auto lg:w-auto lg:bg-none">
        <Link
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="/"
        >
          By{" "}
          <img
            src="https://github.com/ntn0de.png"
            alt="ntn0de"
            width="40"
            height="40"
            className="rounded-full"
          />
        </Link>
      </div>
    </div>
  );
}
