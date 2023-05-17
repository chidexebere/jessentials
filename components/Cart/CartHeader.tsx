'use client';

import { useStateContext } from '../../state/hooks';

const CartHeader = () => {
	const { totalQuantity } = useStateContext();

	return (
		<div className="flex items-center text-lg font-medium ">
			<span className="text-xl">{totalQuantity === 0 ? '' : `Cart`}</span>
			<span className="ml-2.5 text-red-500">
				{totalQuantity === 0
					? ''
					: totalQuantity === 1
					? `(${totalQuantity} item)`
					: `(${totalQuantity} items)`}
			</span>
		</div>
	);
};

export default CartHeader;
