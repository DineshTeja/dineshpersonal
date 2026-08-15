import Link from "next/link";

interface BaseLayoutProps {
  children: React.ReactNode;
  title?: string;
}

export default function BaseLayout({ children, title }: BaseLayoutProps) {
  return (
    <div className="plain-site">
      <header>
        {title ? (
          <p>
            <Link href="/">← Me</Link>
          </p>
        ) : null}
        <h2 className="text-3xl font-bold">{title || "Dinesh Vasireddy"}</h2>
      </header>

      <main>{children}</main>

      <footer>
      </footer>
    </div>
  );
}
