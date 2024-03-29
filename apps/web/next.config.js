import { fileURLToPath } from "url";
import _jiti from "jiti";

const jiti = _jiti(fileURLToPath(import.meta.url));

// Import env files to validate at build time. Use jiti so we can load .ts files in here.
jiti("@atena/validators/env");

/** @type {import("next").NextConfig} */
const config = {
	reactStrictMode: true,

	/** Enables hot reloading for local packages without a build step */
	transpilePackages: [
		"@atena/api",
		"@atena/auth",
		"@atena/db",
		"@atena/ui",
		"@atena/validators",
	],

	images: {
		domains: ["lh3.googleusercontent.com"],
	},

	/** We already do linting and typechecking as separate tasks in CI */
	eslint: { ignoreDuringBuilds: true },
	typescript: { ignoreBuildErrors: true },

	logging: {
    fetches: {
      fullUrl: true,
    },
  },

  experimental: {
    serverComponentsExternalPackages: ['postgres'],
  },

  images: {
    remotePatterns: [
      { hostname: 'lh3.googleusercontent.com' },
      { hostname: 'github.com' },
    ],
  },

  /**
   * @param {import('webpack').Configuration} config
   */
  webpack: (config) => {
    /**
     * Suppress warning about not found modules
     */
    config.resolve.fallback = {
      'aws-crt': false,
      encoding: false,
      '@aws-sdk/signature-v4-crt': false,
      bufferutil: false,
      'utf-8-validate': false,
    }

    return config
  },
};

export default config;
