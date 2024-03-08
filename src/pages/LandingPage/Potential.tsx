const Potential = () => {
    const sectionStyle = {
        backgroundImage: 'url("src/assets/multiple-headshot.webp")', // Replace with the actual path to your image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '80vh', // Set the desired height for your section
        // position: 'relative',
    };

    const overlayStyle = {
        // position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Adjust the color and opacity as needed
        backdropFilter: 'blur(1px)', // Add a blur effect to the overlay (adjust the value as needed)
    };
    return(
        <>
            <section style={sectionStyle} className="relative flex items-center justify-center">
                <div style={overlayStyle} className="absolute"></div>
                <div className="flex flex-col md:flex-row justify-center md:justify-around items-center">
                    <div
                        className="w-[80%] mb-3 md:mb-0 md:w-[40%] p-3 md:p-5 backdrop-blur-md bg-blue-400/30 text-gray-100 rounded-lg border-2 border-gray-100-50">
                        <h1 className="text-[1.5rem] font-bold">Unleash Your Growth Potential</h1>
                        <p className="text-gray-300">No credit required-instant Access. Expand your business online with our multi-channel
                            inventory management system.</p>
                        <a href="/" className="bg-green-600 mt-1 py-2 px-3 rounded-lg text-[#151D26] gap-1 font-bold text-sm inline-flex justify-center items-center">Sign-up - It{"'"}s Free <span><i
                            className="fa-solid fa-arrow-right bg-[#151D26] p-1 text-green-600 rounded-full"></i></span></a>
                    </div>

                    <div
                        className="w-[80%] md:w-[30%] p-3 md:p-5 backdrop-blur-md bg-blue-500/30 text-gray-100 rounded-lg border-2 border-gray-100-50">
                        <h1><span className="text-[1.5rem] font-bold">7 </span> Millions Users</h1>
                        <p>Grow their business with Odoo.</p>
                    </div>

                </div>
            </section>

        </>
    )
}

export default Potential;