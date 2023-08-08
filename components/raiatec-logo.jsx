import Link from "next/link";

export default function RaiatecLogo() {
    return (
        <div className="flex h-16 shrink-0 items-center">
            <Link href="/">
                <img src="/raiatec.svg" alt="Raiatec Logo" className="h-8 w-auto" />
            </Link>
        </div>
    )
}