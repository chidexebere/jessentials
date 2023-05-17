import { HiX } from 'react-icons/hi';

interface Props {
	isOpen: boolean;
	handleClick: (e: React.MouseEvent) => void;
	title: string;
	children: React.ReactNode;
}

const Modal = ({ isOpen, handleClick, title, children }: Props) => {
	const defaultClass =
		'w-screen h-screen grid place-items-center fixed inset-0 z-50 bg-black/50';
	const modalClass = isOpen ? `${defaultClass}` : `${defaultClass} hidden`;

	return (
		<dialog className={modalClass}>
			<div className="relative w-auto pointer-events-none">
				<div className="border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
					<div className="flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
						<h5 className="text-base font-medium leading-normal text-gray-800">
							{title}
						</h5>
						<div className="cursor-pointer" onClick={handleClick}>
							<HiX className="h-5 w-5" aria-hidden="true" />
						</div>
					</div>
					{children}
				</div>
			</div>
		</dialog>
	);
};

export default Modal;
