// components/Footer.js
import React from "react";

export const Footer = () => (
	<footer className="bg-gray-900 text-white py-8">
		<div className="container mx-auto flex flex-wrap justify-between">
			<div className="w-full md:w-1/3">
				<h4 className="text-lg font-semibold mb-4">Contact Us</h4>
				<p>If you have any questions, feel free to reach out to us:</p>
				<p className="mt-2">Email: info@example.com</p>
				<p>Phone: +1 (123) 456-7890</p>
			</div>
			<div className="w-full md:w-1/3 mt-8 md:mt-0">
				<h4 className="text-lg font-semibold mb-4">Follow Us</h4>
				<p>Stay connected with us on social media:</p>
				<ul className="mt-2">
					<li>
						<a href="#" className="text-blue-400 hover:text-blue-600">
							Facebook
						</a>
					</li>
					<li>
						<a href="#" className="text-blue-400 hover:text-blue-600">
							Twitter
						</a>
					</li>
					<li>
						<a href="#" className="text-blue-400 hover:text-blue-600">
							Instagram
						</a>
					</li>
				</ul>
			</div>
			<div className="w-full md:w-1/3 mt-8 md:mt-0">
				<h4 className="text-lg font-semibold mb-4">Legal</h4>
				<ul>
					<li>
						<a href="#" className="text-blue-400 hover:text-blue-600">
							Privacy Policy
						</a>
					</li>
					<li>
						<a href="#" className="text-blue-400 hover:text-blue-600">
							Terms of Service
						</a>
					</li>
				</ul>
			</div>
		</div>
		<div className="text-center mt-8">
			<p>&copy; {new Date().getFullYear()} Your Company Name</p>
		</div>
	</footer>
);

export default Footer;
