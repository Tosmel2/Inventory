const Feature = () => {
    return(
        <>
            <section className="bg-[#151D26] flex items-center py-20 h-full">
                <div className="mx-auto w-[90%] md:w-[80%]">
                    <div className="text-center flex flex-col justify-center items-center pb-5">
                        <h1 className="text-[1.5rem] text-gray-200">Advanced Features Made Simple</h1>
                        <p className="text-gray-200 text-[0.9rem]">Use cutting-edge automation and advanced routes to
                            manage any warehouse.</p>
                    </div>

                    <div className="md:flex gap-4 w-full text-gray-100">
                        <div className="bg-[#13302E] md:w-[32%] mb-3 md:mb-0 rounded-lg">
                            <img className="object-cover object-center w-full h-full rounded-lg "
                             src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                             alt=""/>
                        </div>
                        <div className="bg-[#243757] md:w-[32%] mb-3 md:mb-0 p-4 rounded-lg leading-5">
                            <i className="fa-solid fa-cart-shopping p-2.5 bg-green-500 text-white rounded-full mb-3"></i>
                            <h2 className="text-gray-300">+237%</h2>
                            <p className="text-gray-400 text-[0.6rem]">Top 4 Keyword Rankings</p>
                            <h3 className="pt-3">Drop-shipping</h3>
                            <p className="text-gray-400">
                                This model is popular among e-commerce businesses for its low startup costs and reduced inventory risk..
                            </p>
                        </div>
                        <div className="bg-[#243757] md:w-[32%] mb-3 md:mb-0 p-4 rounded-lg">
                            <i className="fa-solid fa-truck px-2.5 py-3 text-white backdrop-blur-md bg-[#00A6FF] rounded-full mb-3"></i>
                            <h2 className="text-gray-300">+124%</h2>
                            <p className="text-gray-400 text-[0.6rem]">Monthly Leads</p>
                            <h3 className="pt-3">Cross-docking</h3>
                            <p className="text-gray-400">
                                This approach minimizes warehousing costs and speeds the distribution process, making it efficient for transporting goods.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Feature;