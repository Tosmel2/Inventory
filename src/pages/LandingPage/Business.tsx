const Business = () => {
    return(
        <>
            <section className="bg-[#151D26] py-10 flex items-center h-full md:h-[70vh]">
                <div className="mx-auto w-[90%] md:w-[80%] text-center">
                    <div className="text-center flex flex-col justify-center items-center pb-5">
                        <h1 className="text-[1.5rem] text-gray-200">Run a more efficient business.</h1>
                        <p className="text-gray-200 text-[0.9rem]">Encourage collaboration among teams, invest in employee, training
                            and stay adaptable to market changes</p>
                    </div>
                    <div className="md:flex md:justify-between items-center gap-5 rounded-xl">
                        <div className="w-full md:w-1/2 rounded-lg mb-3 md:mb-0">
                            <img className="object-cover object-center w-full h-72 rounded-lg "
                             src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                             alt=""/>
                        </div>
                        <div className="flex gap-4 flex-col w-full md:w-1/2 text-gray-100">
                            <div className="flex justify-between gap-4">
                                <div className="bg-[#13302E] p-4 rounded-lg text-center">
                                    <i className="fa-solid fa-square-poll-vertical text-[#00E074] p-2 backdrop-blur-md bg-white/30 rounded"></i>
                                    <h3>Increase Sales</h3>
                                    <p className="">Expand your business online with our multi-channel Inventory
                                        management system...</p>
                                </div>
                                <div className="bg-[#142837] p-4 rounded-lg text-center">
                                    <i className="fa-solid fa-list text-[#0B89CD] p-2 backdrop-blur-md bg-white/30 rounded"></i>
                                    <h3>Manage orders</h3>
                                    <p className="">
                                        Manage your offline and online orders with our efficient order management
                                        system...
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-5 items-center bg-[#3A2F21] p-4 rounded-lg">
                                <i className="fa-solid fa-truck p-2 text-[#CF760D] backdrop-blur-md bg-white/30 rounded"></i>
                                <span className="text-start">
                                    <h3>Multiple shipping integration</h3>
                                    <p className="">Get real-time shipping rates and in-transit details of major shipping
                                        carriers and choose a shipping partner for your business, wisely. A much needed feature...
                                    </p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#151D26]">
                <div className="container px-6 py-10 mx-auto">
                    <div className="text-center flex flex-col justify-center items-center pb-5">
                        <h1 className="text-[1.5rem] text-gray-200">Wall of Love.</h1>
                        <p className="text-[0.9rem] text-gray-200">It is a heart warming initiative where people leave uplifting messages for one another.</p>
                    </div>
                    <div className="lg:-mx-6 lg:flex lg:items-center">
                        <img className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-64 rounded-lg "
                             src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                             alt=""/>

                        <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
                            <p className="text-5xl font-semibold text-blue-500 ">“</p>

                            <h1 className="text-[1rem] font-semibold text-gray-300 dark:text-white lg:text-3xl lg:w-96">
                                Help us improve our productivity
                            </h1>

                            <p className="max-w-lg mt-6 text-gray-400 ">
                                “ Our stock management system has become much better after using Adnegs Inventory.
                                We also switched to Adnegs Books for our accounting management for its seamless integration
                                with Adnegs Inventory
                                ”
                            </p>

                            <h3 className="mt-6 text-lg font-medium text-blue-500">Mia Brown</h3>
                            <p className="text-gray-300">Marketing Manager at Stech</p>

                            <div className="flex items-center justify-between mt-12 lg:justify-start">
                                <button title="left arrow"
                                        className="p-2 text-gray-200 transition-colors duration-300 border rounded-full rtl:-scale-x-100 border-gray-200 hover:text-[#151D26] hover:bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
                                    </svg>
                                </button>

                                <button title="right arrow"
                                        className="p-2 text-gray-200 transition-colors duration-300 border rounded-full rtl:-scale-x-100 border-gray-200 hover:text-[#151D26] lg:mx-6 hover:bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Business;