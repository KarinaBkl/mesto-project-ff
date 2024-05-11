const presets = [
<<<<<<< HEAD
  ['@babel/preset-env', { 
    targets: { 
      edge: '17',
      ie: '11',
      firefox: '50',
      chrome: '64',
      safari: '11.1'
    },
    useBuiltIns: "entry"
  }]
];

module.exports = { presets };
=======
    ['@babel/preset-env', { // какой пресет использовать
      targets: { // какие версии браузеров поддерживать
        edge: '17',
        ie: '11',
        firefox: '50',
        chrome: '64',
        safari: '11.1'
      },
  
      // использовать полифилы для браузеров из свойства target
      // по умолчанию babel использует полифилы библиотеки core-js
      useBuiltIns: "entry"
    }]
  ];
  
  module.exports = { presets };
>>>>>>> ac26bc6393f9c575d7642aad66198ec14f7d4c3a
