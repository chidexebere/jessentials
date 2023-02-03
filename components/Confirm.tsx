interface Props {
	toggleModal: () => void;
	handleSubmit: (
		e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
	) => void;
	children: React.ReactNode;
	name: string;
}
const Confirm = ({ toggleModal, handleSubmit, children, name }: Props) => {
	const closeModal = (e: React.MouseEvent) => {
		e.preventDefault();
		toggleModal();
	};
	return (
		<form className="mb-3 p-4" onSubmit={handleSubmit}>
			{children}
			<div className="mt-10 flex gap-x-8 justify-end">
				<button
					className="w-full bg-gray-50 hover:bg-gray-400 border rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-gray-900 hover:text-white shadow-sm"
					onClick={closeModal}
				>
					<span className="uppercase">cancel</span>
				</button>
				<button
					className="w-full bg-red-900 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-red-700"
					onClick={handleSubmit}
				>
					<span className="uppercase">{name}</span>
				</button>
			</div>
		</form>
	);
};

export default Confirm;
