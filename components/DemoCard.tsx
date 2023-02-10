import Image from 'next/image';

const DemoCard = () => {
	return (
		<div className="w-80 h-48 bg-red-100 rounded-xl relative text-white shadow-2xl">
			<Image
				src={`https://i.imgur.com/Zi6v09P.png`}
				alt="mastercard card background orange"
				className="relative object-cover w-full h-full rounded-xl"
				width={320}
				height={192}
			/>
			<div className="w-full px-4 absolute top-4">
				<div className="flex justify-between">
					<div className="">
						<p className="font-light">Name</p>
						<p className="font-medium tracking-widest">Test</p>
					</div>
					<Image
						src={`https://i.imgur.com/bbPHJVe.png`}
						alt="mastercard logo"
						className="w-12 h-12"
						width={48}
						height={48}
					/>
				</div>
				<div className="pt-1">
					<p className="font-light">Card Number</p>
					<p className="font-medium tracking-more-wider">4242 4242 4242 4242</p>
				</div>
				<div className="pt-6 pr-6">
					<div className="flex justify-between">
						<div className="">
							<p className="font-light text-xs text-xs">Expiry</p>
							<p className="font-medium tracking-wider text-sm">04/24</p>
						</div>
						<div className="">
							<p className="font-light text-xs">CVV</p>
							<p className="font-bold tracking-more-wider text-sm">424</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DemoCard;
