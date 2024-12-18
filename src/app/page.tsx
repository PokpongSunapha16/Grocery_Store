export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="text-center bg-white shadow-md p-10 rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Welcome to Grocery Store</h1>
        <p className="mb-6 text-gray-600">Manage your store efficiently</p>
        <div className="space-y-4">
          <a
            href="/signin"
            className="block w-full bg-blue-500 text-white text-center py-2 rounded hover:bg-blue-600 transition"
          >
            Login
          </a>
          <a
            href="/signup"
            className="block w-full bg-gray-200 text-gray-800 text-center py-2 rounded hover:bg-gray-300 transition"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
}
