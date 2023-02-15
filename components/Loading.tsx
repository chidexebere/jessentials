import { FaSpinner } from 'react-icons/fa';

interface Props {
	children: React.ReactNode;
}

const Loading = () => {
	return (
		<div
			className="mt-20 flex justify-center items-center text-2xl text-cyan-600"
			role="alert"
			aria-label="loading"
		>
			<FaSpinner className="animate-spin h-10 w-10" />
		</div>
	);
};

export default Loading;
