const DemoCard = () => {
	return (
		<div className="w-80 h-48 m-auto bg-red-100 rounded-xl relative text-white shadow-2xl">
			<img
				className="relative object-cover w-full h-full rounded-xl"
				src="https://i.imgur.com/Zi6v09P.png"
			/>
			<div className="w-full px-4 absolute top-4">
				<div className="flex justify-between">
					<div className="">
						<p className="font-light">Name</p>
						<p className="font-medium tracking-widest">Test</p>
					</div>
					<img className="w-12 h-12" src="https://i.imgur.com/bbPHJVe.png" />
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
