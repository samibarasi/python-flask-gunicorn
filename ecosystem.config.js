
module.exports = {
    apps: [{
        name: 'python-aws',
        script: 'pipenv run python ./server/index.py'
    }],
    deploy: {
        production: {
            user: 'ubuntu',
            host: 'ec2-3-250-85-25.eu-west-1.compute.amazonaws.com',
            key: '~/Work/AWS/keys/Irland/tutorial.pem',
            ref: 'origin/main',
            repo: 'git@github.com:samibarasi/python-aws.git',
            path: '/home/ubuntu/python-aws',
            //'post-deploy': 'python3 -m venv .venv && pip3 install -r requirements.txt && pm2 startOrRestart ecosystem.config.js'
            'post-deploy': 'PIPENV_VENV_IN_PROJECT=True pipenv install && pipenv shell && pm2 startOrRestart ecosystem.config.js'
            
        }
    }
}