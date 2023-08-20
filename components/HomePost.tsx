const HomePost = () => {
    return (
        <>
            <section className="bg-white">
                <div className="container px-6 py-4 mx-auto">
                    <div className="lg:flex lg:-mx-6">
                        <div className="lg:w-3/4 lg:px-6">
                            <img className="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl" src="https://www.thebalancemoney.com/thmb/qzvPL7Fw4pBJo52jrOt3wR7LqsY=/850x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/PresidentBidenMeetsWithBusinessLeadersOnDebtCeiling-30002aa063a14473827c1aec4c2a73a0.jpg" alt="" />

                            <div>
                                <p className="mt-6 text-sm text-[#333] uppercase">
                                    FISCAL POLICY</p>

                                <h1 className="max-w-lg mt-2 text-2xl font-semibold leading-tight text-gray-800 ">
                                    How the Federal Budget Is Created
                                </h1>

                                <div className="flex items-center mt-3">
                                    <img className="object-cover object-center w-10 h-10 rounded-full" src="https://www.thebalancemoney.com/thmb/qzvPL7Fw4pBJo52jrOt3wR7LqsY=/850x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/PresidentBidenMeetsWithBusinessLeadersOnDebtCeiling-30002aa063a14473827c1aec4c2a73a0.jpg" alt="" />

                                    <div className="mx-4">
                                        <h1 className="text-sm text-gray-700 ">Abdullah</h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-1 lg:w-1/4 lg:mt-0 lg:px-6">
                            <h1 className="py-1 text-2xl font-semibold">Editor Picks</h1>
                            <div>
                                <h3 className="text-blue-500 capitalize">Market Insights</h3>

                                <a href="#" className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500">
                                    Stock Market Hits Record High Amidst Economic Recovery
                                </a>
                            </div>

                            <hr className="my-6 border-gray-200 " />

                            <div>
                                <h3 className="text-blue-500 capitalize">Cryptocurrency Trends</h3>

                                <a href="#" className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 ">
                                    Bitcoin Surges to New All-Time High, Altcoins Follow Suit
                                </a>
                            </div>

                            <hr className="my-6 border-gray-200 " />

                            <div>
                                <h3 className="text-blue-500 capitalize">Financial Analysis</h3>

                                <a href="#" className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 ">
                                    Analyzing the Impact of Inflation on Investment Portfolios
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePost