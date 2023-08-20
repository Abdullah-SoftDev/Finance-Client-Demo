import Link from "next/link";

export const Blog = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded-xl">
            <Link href="/" aria-label="Article">
              <img
                src="https://www.thebalancemoney.com/thmb/gtbgaEQvoNKS-JutwFxSQ7gQHbI=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/TeenJob-14c2a98f1ac04244a1f77005a85ff4ec.jpeg"
                className="object-cover w-full h-64 rounded-xl"
                alt=""
              />
            </Link>
            <div className="py-5">
              <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
              TEACHING KIDS & TEENS ABOUT MONEY
              </p>
              <Link
                href="/"
                aria-label="Article"
                className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-xl font-bold leading-5">How To Prepare Your Teen for Their First Job</p>
              </Link>
              <div className="flex space-x-4">
                <Link
                  href="/"
                  className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                >
                  <div>
                  </div>
                  <p className="font-semibold">By Abdullah</p>
                </Link>
            
              </div>
            </div>
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded-xl">
            <Link href="/" aria-label="Article">
              <img
                src="https://www.thebalancemoney.com/thmb/QRWTkyoF3zls6pPcyJQB-OoXx98=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/BestOnlineStockbrokersof2022-4b9ca4c3d163496d84c411ee18d92c92.jpeg"
                className="object-cover w-full h-64 rounded-xl"
                alt=""
              />
            </Link>
            <div className="py-5">
              <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">

              STOCKS              </p>
              <Link
                href="/"
                aria-label="Article"
                className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-xl font-bold leading-5">Best Online Stockbrokers of 2023</p>
              </Link>
              <div className="flex space-x-4">
                <Link
                  href="/"
                  className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                >
                  <div>
                  </div>
                  <p className="font-semibold">By Abdullah</p>
                </Link>
            
              </div>
            </div>
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
            <Link href="/" aria-label="Article">
              <img
                src="https://www.thebalancemoney.com/thmb/KCfMSUsKstFgji8cTMxik5ONwPA=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1351091064-7cdc9072a5784d4284b85c5f1a207247.jpg"
                className="object-cover w-full h-64 rounded-xl"
                alt=""
              />
            </Link>
            <div className="py-5">
              <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
              
SAVINGS ACCOUNTS
              </p>
              <Link
                href="/"
                aria-label="Article"
                className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-xl font-bold leading-5">Best Savings Account Interest Rates</p>
              </Link>
              <div className="flex space-x-4">
                <Link
                  href="/"
                  className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                >
                  <div>
                  </div>
                  <p className="font-semibold">By Abdullah</p>
                </Link>
            
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };