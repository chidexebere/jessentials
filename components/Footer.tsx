import type { NextPage } from 'next';
import {
	FaRegEnvelope,
	FaFacebook,
	FaInstagram,
	FaTwitter,
} from 'react-icons/fa';

const Footer: NextPage = () => {
	const d = new Date();
	const year = d.getFullYear();
	return (
		<footer className="relative top-32 bg-black mt-20 px-4 sm:px-8 sm:mt-24 lg:px-14">
			<div className="py-12 md:flex md:items-center md:justify-between">
				<div className="flex justify-center space-x-6 md:order-2">
					<a href="#" className="text-gray-400 hover:text-gray-500">
						<span className="sr-only">Email</span>
						<FaRegEnvelope className="h-6 w-6" aria-hidden="true" />
					</a>
					<a href="#" className="text-gray-400 hover:text-gray-500">
						<span className="sr-only">Instagram</span>
						<FaInstagram className="h-6 w-6" aria-hidden="true" />
					</a>
					<a href="#" className="text-gray-400 hover:text-gray-500">
						<span className="sr-only">Facebook</span>
						<FaFacebook className="h-6 w-6" aria-hidden="true" />
					</a>
					<a href="#" className="text-gray-400 hover:text-gray-500">
						<span className="sr-only">Twitter</span>
						<FaTwitter className="h-6 w-6" aria-hidden="true" />
					</a>
				</div>
				<div className="mt-8 md:mt-0 md:order-1">
					<p className="text-center text-sm text-gray-200">
						© {year} Jessentials. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
