import Link from "next/link";

export default function RaiatecLogo() {
  return (
    <div className="flex h-16 shrink-0 items-center ml-auto">
      <Link href="/">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/raiatec.svg" alt="Raiatec Logo" className="h-8 w-auto" />
      </Link>
    </div>
  );
}
