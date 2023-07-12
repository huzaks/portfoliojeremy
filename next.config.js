/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
 webpack: (config) => {
  config.module.rules.push({
    test: /\.pdf$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
  })
  return config
 }
    
        
      
    
  
};
