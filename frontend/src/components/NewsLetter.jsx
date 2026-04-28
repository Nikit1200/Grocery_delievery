const NewsLetter = () => {
    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <div className="flex flex-col items-center justify-center text-center space-y-2 mt-24 pb-14">
            <h1 className="md:text-4xl text-2xl font-semibold">Never Miss a Deal!</h1>
            <p className="md:text-lg text-gray-500/70 pb-8">
                Subscribe to get the latest offers, new arrivals, and exclusive discounts
            </p>
            <form
                className="flex h-12 w-full max-w-2xl overflow-hidden rounded-md border border-gray-300 md:h-14"
                onSubmit={handleSubmit}
            >
                <input
                    className="min-w-0 flex-1 border-0 bg-white px-4 text-gray-800 outline-none placeholder:text-gray-500"
                    type="email"
                    placeholder="Enter your email address"
                    required
                    autoComplete="email"
                />
                <button
                    type="submit"
                    className="shrink-0 cursor-pointer bg-[#44ae7c] px-8 text-white transition-colors hover:bg-[#3d9b6d] md:px-12"
                >
                    Subscribe
                </button>
            </form>
        </div>
    )
}
export default NewsLetter;
