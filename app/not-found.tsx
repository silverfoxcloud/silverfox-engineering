import Link from "next/link";

export default function NotFound() {
  return (
    <main className="notFound">
      <div className="mark large">SF</div>
      <p>404</p>
      <h1>Page not found</h1>
      <Link className="button primary" href="/">Back to Engineering</Link>
    </main>
  );
}
