import {fireEvent, cleanup, render} from '@testing-library/svelte';
import Modal from '/home/adam/1.TUKE/blaze/public/components/Modal.svelte';


describe('Modal', () => {
	const isOpen = true;
	const isClosable = true;
	const map = {};
	window.addEventListener = jest.fn((event, cb) => {
	  map[event] = cb;
	});

	afterEach(cleanup);
	test('render modal component', () => {
		const {getByText} = render(Modal, {props: {isOpen, isClosable}});
	});
	test('render button', () => {
		const {getByRole} = render(Modal, {props: {isOpen, isClosable}});
		expect(getByRole('button'));
	});
});