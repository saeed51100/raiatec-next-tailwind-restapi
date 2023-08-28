import Link from "next/link";

export default function Custom404() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md">
        <h1 className="text-4xl font-bold text-center mb-4">404</h1>
        <h2 className="text-xl text-center mb-4">صفحه مورد نظر پیدا نشد</h2>
        <div className="mt-6 text-center">
          <Link href="/">
            <p className="text-blue-500 hover:underline">بازگشت به صفحه اصلی</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
