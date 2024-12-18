export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="text-center bg-white shadow-md p-10 rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Welcome to the Grocery Store</h1>
        <p className="mb-6 text-gray-600">You are now signed in!</p>
        <a
          href="/signin"
          className="block bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
        >
          Sign Out
        </a>
      </div>
    </div>
  );
}