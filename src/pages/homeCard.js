const Homecard = () =>{
                return(
            <div class="flex p-20 space-x-10">
            {/* <!-- First Div --> */}
            <div class="w-1/2 p-6 bg-opacity-50 backdrop-blur-lg rounded-lg flex flex-col justify-center items-center">
                <h2 class="text-2xl font-bold text-blue-600 mb-2">What we do</h2>
                <p class="text-white text-center">This  the description for the first div. The background is blurred and semi-transparent.</p>
            </div>

            {/* <!-- Second Div --> */}
            <div class="w-1/2 p-6  bg-opacity-50 backdrop-blur-lg rounded-lg flex flex-col justify-center items-center">
                <h2 class="text-2xl font-bold text-blue-600 mb-2">Contribute</h2>
                <p class="text-white text-center">This is the description for the second div. The background is blurred and semi-transparent.</p>
                <p className="text-blue-600 text-center decoration-solid">contribute to the course</p>
            </div>
            </div>
    );
}
export default Homecard