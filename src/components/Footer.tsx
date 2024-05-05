
export default function Footer() {
    

    return (
        <footer className="bg-black text-gray-400 py-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-col-4 gap-6 px-4 sm:px-6">
                <div>
                    <h3 className="text-xl font-bold mb-4">About Us</h3>
                    <p>Learn more about our music courses and instructors.</p>
                    <ul className="mt-4">
                        <li><a href="#" className="hover:text-white">Our Mission</a></li>
                        <li><a href="#" className="hover:text-white">Our Team</a></li>
                        <li><a href="#" className="hover:text-white">Testimonials</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-4">Courses</h3>
                    <ul>
                        <li><a href="#" className="hover:text-white">Guitar</a></li>
                        <li><a href="#" className="hover:text-white">Piano</a></li>
                        <li><a href="#" className="hover:text-white">Drums</a></li>
                        <li><a href="#" className="hover:text-white">Vocal</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                    <p>Email: info@musiccourses.com</p>
                    <p>Phone: 123-456-7890</p>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                    <ul>
                        <li><a href="#" className="hover:text-white">Facebook</a></li>
                        <li><a href="#" className="hover:text-white">Twitter</a></li>
                        <li><a href="#" className="hover:text-white">Instagram</a></li>
                    </ul>
                </div>
            </div>
            <p className="text-center text-xs pt-8">2024 Music School, All rights reserved.</p>
        </footer>

    )
}
