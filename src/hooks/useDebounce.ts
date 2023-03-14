import {useEffect, useState} from 'react';

const DEFAULT_DELAY = 500;
/**
 * useDebounce hook
 * Creates a debounced value that delays updating value until after delay
 * milliseconds have elapsed since the last time the debounced value was updated.
 * @param value
 * @param delay
 */
export const useDebounce = <T, >(value: T, delay = DEFAULT_DELAY): T => {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(
		() => {
			const handler = setTimeout(() => {
				setDebouncedValue(value);
			}, delay);


			return (): void => {
				clearTimeout(handler);
			};
		},
		[value, delay]
	);

	return debouncedValue;
};
