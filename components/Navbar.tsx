import Link from "next/link"

const Navbar = () => {
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <p className="ml-3 text-3xl">Finance web</p>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link href="|/" className="mr-5 hover:text-gray-900">Budgeting</Link>
                    <Link href="|/" className="mr-5 hover:text-gray-900">Buisness</Link>
                    <Link href="|/" className="mr-5 hover:text-gray-900">Banking</Link>
                    <Link href="|/" className="mr-5 hover:text-gray-900">Investing</Link>
                </nav>
            </div>
        </header>
    )
}

export default Navbar