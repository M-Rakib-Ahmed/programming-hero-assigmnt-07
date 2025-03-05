import batimg  from '../assets/batimage.png'


const Banner = () => {
    return (
        <div>
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-pink-400">
                <div className="bg-black h-[400px] w-[1200px] text-white rounded-2xl shadow-2xl p-10 text-center ">
                    <div className="flex justify-center mb-4">
                        <img
                            src={batimg}
                            alt="Cricket Logo"
                            className="w-32 h-24"
                        />
                    </div>
                    <h1 className="text-3xl font-bold mb-4">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                    <p className="text-lg mb-6">Beyond Boundaries Beyond Limits</p>
                    <button className="bg-yellow-400 text-black font-bold py-2 px-6 rounded-xl hover:bg-yellow-300 transition">
                        Claim Free Credit
                    </button>
                </div>
            </div>  
        </div>
    );
};

export default Banner;