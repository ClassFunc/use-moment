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

    const watch = {
        onRebuild(error, result) {
            if (error) console.error('❌ watch build failed:', error);
            else console.log('✅ watch build succeeded:', result);
        },
    };

    require('esbuild').build({
        ...common,
        format: 'esm',
        watch,
        outfile: f.replace('.ts', '.esm.js'),
    }).then(() => {
        console.log(`👀 watching esm ${f} ...`);
    });

    require('esbuild').build({
        ...common,
        format: 'cjs',
        platform: 'node',
        watch,
        outfile: f.replace('.ts', '.cjs.js'),
    }).then(result => {
        console.log(`👀 watching cjs ${f} ...`);
    });

}
