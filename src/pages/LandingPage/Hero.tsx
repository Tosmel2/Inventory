import Navbar from "./Navbar.tsx";

const Hero = () => {
    return(
        <>
            <section className="bg-[#13302E] flex flex-col justify-center items-center h-full pb-10 md:pb-0 md:h-screen">
                <Navbar />
                <div className="mx-auto w-[95%] md:w-[80%] pt-8 md:h-[80%] leading-loose relative">
                    <div>
                        <div className="flex justify-between gap-8 items-center">
                            <h1 className="text-[2rem] md:text-[3rem] lg:text-[3.2rem] text-gray-200 font-bold">Inventory</h1>
                            <span><i className="fa-solid fa-arrow-right-long text-[2.5rem] md:text-[4rem] text-[#00A6FF]"></i></span>
                            <p className="text-[1rem] md:text-[1.2rem] w-1/2 px-5 text-gray-300">
                                Increase your sales and keep track of every unit with our powerful stock management,
                                order fulfilment, and inventory control software.
                            </p>
                        </div>

                        <div className="flex justify-center items-center">
                            <h1 className="text-[2rem] md:text-[3rem] lg:text-[3.2rem] text-gray-200 font-bold">Management Software</h1>
                        </div>

                        <div className="flex justify-between gap-2 items-center">
                            <h1 className="text-[2rem] md:text-[3rem] lg:text-[3.2rem] text-gray-200 font-bold"><span className="text-[#00A6FF]">for Growing </span>Businesses</h1>
                            <a href="/"
                                className="bg-green-600 mt-1 py-2 px-3 rounded-lg text-[#151D26] gap-1 font-bold text-sm inline-flex justify-center items-center">Sign-up
                            - It{"'"}s Free <span><i className="fa-solid fa-arrow-right bg-[#151D26] p-1 text-green-600 rounded-full"></i></span>
                            </a>
                        </div>

                    </div>
                    <div className="flex justify-between gap-3 absolute bottom-0 items-center">
                        <div className="bg-[#243757] p-4 rounded-lg text-center shadow-lg">
                            <i className="fa-solid fa-square-poll-vertical text-[#00E074] p-2 backdrop-blur-md bg-white/30 rounded"></i>
                            <h3>Increase Sales</h3>
                            <p className="">Expand your business online with our multi-channel Inventory
                                management system...</p>
                        </div>
                        <div className="bg-[#B2891C] p-4 rounded-lg text-center shadow-lg">
                            <i className="fa-solid fa-list text-[#0B89CD] p-2 backdrop-blur-md bg-white/30 rounded"></i>
                            <h3>Manage orders</h3>
                            <p className="">
                                Manage your offline and online orders with our efficient order management
                                system...
                            </p>
                        </div>
                        <div className="bg-[#124135] p-4 rounded-lg text-center shadow-lg">
                            <i className="fa-solid fa-square-poll-vertical text-[#00E074] p-2 backdrop-blur-md bg-white/30 rounded"></i>
                            <h3>Increase Sales</h3>
                            <p className="">Expand your business online with our multi-channel Inventory
                                management system...</p>
                        </div>
                        <div className="bg-[#243757] p-4 rounded-lg text-center shadow-lg">
                            <i className="fa-solid fa-list text-[#0B89CD] p-2 backdrop-blur-md bg-white/30 rounded"></i>
                            <h3>Manage orders</h3>
                            <p className="">
                                Manage your offline and online orders with our efficient order management
                                system...
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;