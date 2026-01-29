export default function Footer() {
  return (
    <footer className="w-full py-6 text-center border-t border-text/10 mt-auto">
      <p className="text-sm text-subtext0">
        See site&apos;s source code:{" "}
        <a
          href="https://github.com/ntn0de/ntn0de.github.io"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#96BF48] hover:underline font-medium"
        >
          GitHub repo
        </a>
      </p>
    </footer>
  );
}