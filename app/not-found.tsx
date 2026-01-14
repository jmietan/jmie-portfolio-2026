import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-2 text-lg text-gray-600">
        Sorry, the page you’re looking for doesn’t exist.
      </p>

      <Link
        href="/"
        className="mt-6 inline-flex items-center rounded-lg border px-5 py-2 text-sm font-medium hover:bg-gray-50"
      >
        Go back home
      </Link>
    </main>
  );
}
