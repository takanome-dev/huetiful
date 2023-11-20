/* eslint-disable @typescript-eslint/no-var-requires */
// esbuild script
//@ts-nocheck

// eslint-disable-next-line no-undef
var { build } = require('esbuild');



const sharedConfig = {
  entryPoints: ['.//src/index.ts'],
  bundle: false,
  minify: false
};

// ***Modular imports** \\

// palettes/ import
build({
  ...sharedConfig,
  format: 'esm',
  entryPoints: ['.//src/palettes/index.ts'],
  outfile: 'dist/palettes/index.esm.mjs',


});

// filterBy/ import
build({
  ...sharedConfig,
  format: 'esm',
  outfile: 'dist/filterBy/index.esm.mjs',


});

// sortBy/ import
build({
  ...sharedConfig,
  format: 'esm',
  entryPoints: ['.//src/sortBy/index.ts'],
  outfile: 'dist/sortBy/index.esm.mjs',

});

// colors/ import
build({
  ...sharedConfig,
  format: 'esm',
  entryPoints: ['.//src/colors/index.ts'],
  outfile: 'dist/colors/index.esm.mjs',

});


// core-utils/ import
build({
  format: 'esm',
  ...sharedConfig,
  entryPoints: ['.//src/getters_and_setters/index.ts'],
  outfile: 'dist/getters_and_setters/index.esm.mjs',

});



//Bundled ESM
build({
  ...sharedConfig,
  format: 'esm',
  outfile: 'dist/huetiful.esm.mjs'
});

//Bundled ESM minified
build({
  ...sharedConfig,
  format: 'esm',
  outfile: 'dist/huetiful.esm.min.mjs',
  minify: true,
  bundle: true
});

//Bundled IIFE
// build({
//   ...sharedConfig,
//   format: 'iife',
//   outfile: 'dist/huetiful.js',
//   globalName: 'huetiful',


// });

//Bundled IIFE minified
build({
  ...sharedConfig,
  format: 'iife',
  outfile: 'dist/huetiful.min.js',
  globalName: 'huetiful', minify: true, bundle: true,
  minify: true
});
