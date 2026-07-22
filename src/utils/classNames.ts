type ClassDictionary = Record<string, unknown>;
type ClassValue = string | number | boolean | undefined | null | ClassArray | ClassDictionary;
interface ClassArray extends Array<ClassValue> {}

export function classNames(...args: ClassValue[]): string {
	const classes: string[] = [];

	for (const arg of args) {
		if (!arg) continue;

		if (typeof arg === 'string' || typeof arg === 'number') {
			classes.push(String(arg));
		} else if (Array.isArray(arg)) {
			const inner = classNames(...arg);
			if (inner) classes.push(inner);
		} else if (typeof arg === 'object') {
			for (const key in arg) {
				if (Object.prototype.hasOwnProperty.call(arg, key) && arg[key]) {
					classes.push(key);
				}
			}
		}
	}

	return classes.join(' ');
}
