import {cleanup, render} from '@testing-library/svelte';
import Fab from '/home/adam/1.TUKE/blaze/public/components/Fab.svelte';
describe('Fab', () => {
	const text = 'TestButton';
	const icon = null;

	afterEach(cleanup);
	test('render fab component', () => {
		const {getByText} = render(Fab, {props: {text, icon}});
	});
});