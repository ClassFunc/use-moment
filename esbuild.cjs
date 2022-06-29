const glob = require('glob');
const {dtsPlugin} = require('esbuild-plugin-d.ts');

const files = glob.sync('./**/!(*.d).ts',
    {cwd: __dirname, ignore: ['./node_modules/**']});

files.forEach(async f => {
  console.log(`building ${f}`);
  buildFile(f);
  console.log(`-- done --`);
});

function buildFile(f) {

  const common = {
    entryPoints: [f],
    plugins: [dtsPlugin()],
  };

  require('esbuild').build({
    ...common,
    format: 'esm',
    outfile: f.replace('.ts', '.esm.js'),
  });

  require('esbuild').build({
    ...common,
    format: 'cjs',
    platform: 'node',
    outfile: f.replace('.ts', '.cjs.js'),
  });

}
