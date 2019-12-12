import {fireEvent, cleanup, render} from '@testing-library/svelte';
import NewUser from '/home/adam/1.TUKE/blaze/public/views/NewUser.svelte';

describe('NewUser', () => {
	const username = 'james';
	
	afterEach(cleanup);
	test('render new user', () => {
		const {container, getByText} = render(NewUser, {props: {username}});
	});
	test('render submit button', () => {
		const {getByText} = render(NewUser, {props: {username}});
		expect(getByText('Continue'));
	})
});