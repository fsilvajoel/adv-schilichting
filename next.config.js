const withFonts = require('nextjs-fonts');

module.exports = withFonts(
  {
    reactStrictMode: true,
    env: {
      STAGE: process.env.STAGE,
    },
    sassOptions: {
      cssModules: true,
      includePaths: ['./src'],
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
    pageExtensions: ['page.tsx'],
    fileExtensions: ['jpg', 'jpeg', 'png', 'webp', 'svg'],
    images: {
      domains: ['s3.sa-east-1.amazonaws.com'],
      loader: 'akamai',
      path: '',
      // disableStaticImages: true,
    },
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });

      return config;
    },
  }
  // )
);
