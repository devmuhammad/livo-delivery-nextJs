module.exports = {
  async rewrites() {
    return [
      {
        source: '/:any*',
        destination: '/',
      },
    ];
    },
    webpack: (config, { isServer }) => {
      if(!isServer){
        config.node = {
          fs: 'empty',
          
        }
      }
      return config
    }
    
  };