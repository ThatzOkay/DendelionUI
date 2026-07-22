import { addComponentsDir, addImports, createResolver, defineNuxtModule } from '@nuxt/kit';

export default defineNuxtModule({
	meta: {
		name: 'dendelion-ui',
	},
	defaults: {
		enabled: true,
	},
	setup() {
		// Resolved relative to the built dist/module.mjs, so it reaches the
		// sibling src/ directory shipped alongside dist/ in the npm package.
		const resolver = createResolver(import.meta.url);
		addComponentsDir({
			path: resolver.resolve('../src/components'),
			prefix: 'D',
			pattern: '**/*.vue',
		});
		addImports([
			{ name: 'Color', from: resolver.resolve('../src/index.ts') },
			{ name: 'Size', from: resolver.resolve('../src/index.ts') },
		]);
	},
});
