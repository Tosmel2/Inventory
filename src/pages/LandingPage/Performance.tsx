const Performance = () => {
    return(
        <>
            <section className="bg-[#243757] flex items-center h-full py-16">
                <div className="mx-auto w-[90%] md:w-[80%]">
                    <div className="text-center flex justify-center pb-5">
                        <h1 className="text-[1.5rem] font-bold text-gray-200">Improve Performance & Process Time.</h1>
                    </div>
                    {/*<div className=" border border-red-500">*/}

                            <div className="md:flex md:justify-between p-4 bg-[#20485A] border border-blue-300 rounded-lg">
                                <div className="md:w-[55%] flex items-center border-b md:border-b-0 md:border-r border-dashed">
                                    <p className="md:text-[1.2rem] text-gray-300 p-3">Get the most efficient stocking method and improve all your internal
                                        operations.Odor's double-entry inventory has no stock input, output or transformation instead,
                                        all operations are stock moves between locations.
                                    </p>
                                </div>
                                <div className="md:w-[45%] p-4">
                                    <img className="object-cover object-center w-full h-64 rounded-lg "
                                         src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                         alt=""/>
                                </div>
                            </div>

                    {/*</div>*/}
                </div>
            </section>

        </>
    )
}

export default Performance;