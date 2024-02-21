// ecosystem.config.js
module.exports = {
    apps: [
        {
            name: 'herbdiva-backend',
            script: 'pnpm',
            args: 'start',

            watch: true,

        },
    ],
};
