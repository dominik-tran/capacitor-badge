import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
	appId: "com.test.badge",
	appName: "Test Badge",
	webDir: "dist",
	plugins: {
		Badge: {
			persist: true,
			autoClear: false,
		},
	},
};

export default config;