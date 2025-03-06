import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
       <div>
            <footer className="bg-gray-900 pt-76 text-white py-10 px-6 md:px-20 mt-52">
                <div className="container mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
                    {/* About Us */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2">About Us</h3>
                        <p className="text-gray-400">
                            We are a passionate team <br /> dedicated to providing the best <br />services to
                            our customers.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                        <ul className="text-gray-400 space-y-1">
                            <li><a href="#" className="hover:text-white">Home</a></li>
                            <li><a href="#" className="hover:text-white">Services</a></li>
                            <li><a href="#" className="hover:text-white">About</a></li>
                            <li><a href="#" className="hover:text-white">Contact</a></li>
                        </ul>
                    </div>

                    {/* Subscribe */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Subscribe</h3>
                        <p className="text-gray-400 mb-3">Subscribe to our newsletter for the <br /> latest updates.</p>
                        <div className="flex items-center">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="p-2 w-full rounded-l bg-gray-800 text-white focus:outline-none"
                            />
                            <button className="bg-gradient-to-r from-yellow-400 to-pink-500 p-2 rounded-r">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-4">
                    &copy; 2024 Your Company. All Rights Reserved.
                </div>
            </footer>

{/* footer section end */}
            <div className="absolute lg:-mt-[650px] lg:ml-[500px] -mt-[950px] ml-[150px]">
                <div className=" px-4">
                    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 w-full max-w-lg relative">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-200 via-white to-yellow-200 opacity-30"></div>
                        <div className="relative z-10 text-center">
                            <h2 className="text-xl font-bold text-gray-900">Subscribe to our Newsletter</h2>
                            <p className="text-gray-600 mt-2">Get the latest updates and news right in your inbox!</p>
                            <div className="mt-4 flex items-center">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                                <button className="bg-gradient-to-r from-pink-400 to-yellow-400 text-white px-4 py-2 rounded-r-lg font-medium">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
       </div>

      
    );
}
