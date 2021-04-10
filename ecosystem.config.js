
module.exports = {
    apps: [{
        name: 'python-aws',
        script: './server/index.js'
    }],
    deploy: {
        production: {
            user: 'ubuntu',
            host: 'ec2-34-242-150-148.eu-west-1.compute.amazonaws.com',
            key: '~/Work/AWS/keys/Irland/tutorial.pem',
            ref: 'origin/main',
            repo: 'git@github.com:samibarasi/python-aws.git',
            path: '/home/ubuntu/python-aws',
            'post-deploy': 'python3 -m venv venv && pip3 install -r requirements.txt && pm2 startOrRestart ecosystem.config.js'
        }
    }
}