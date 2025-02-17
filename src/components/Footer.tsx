import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 text-white text-sm w-full p-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-100">About Us</h3>
          <p className="text-gray-300">
            Your one-stop shop for all your fashion needs. We provide
            high-quality products at the best prices.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-100">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="hover:text-gray-200 transition duration-300"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-gray-200 transition duration-300"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-gray-200 transition duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="hover:text-gray-200 transition duration-300"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-100">
            Contact Us
          </h3>
          <p className="text-gray-300">Email: support@mycompany.com</p>
          <p className="text-gray-300">Phone: +92 (000) 000-0000</p>
          <p className="text-gray-300">
            Address: 123 Shopping St., City, Country
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-300 text-center pt-4 md:text-left">
          &copy; 2024 My Company. All rights reserved.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0 justify-center md:justify-start">
          <Link
            href="#"
            className="hover:text-gray-200 text-2xl transition duration-300"
          >
            <i className="fab fa-facebook"></i>
          </Link>
          <Link
            href="#"
            className="hover:text-gray-200 text-2xl transition duration-300"
          >
            <i className="fab fa-twitter"></i>
          </Link>
          <Link
            href="#"
            className="hover:text-gray-200 text-2xl transition duration-300"
          >
            <i className="fab fa-instagram"></i>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
