
module.exports = {
    apps: [{
        name: 'python-aws',
        script: 'gunicorn --worker 2 --bind 0.0.0.0:5000 --chdir server wsgi:app',
        env: {
            "PORT": 3000,
            "NODE_ENV": "development",
            "DEPLOY_BRANCH": "origin/gunicorn"
        },
        env_production: {
            "PORT": 5000,
            "NODE_ENV": "production",
            "DEPLOY_BRANCH": "origin/gunicorn"
        }
    }],
    deploy: {
        production: {
            user: 'ubuntu',
            host: 'ec2-3-250-85-25.eu-west-1.compute.amazonaws.com',
            key: '~/Work/AWS/keys/Irland/tutorial.pem',
            ref: process.env.DEPLOY_BRANCH,
            repo: 'git@github.com:samibarasi/python-aws.git',
            path: '/home/ubuntu/python-aws',
            //'post-deploy': 'python3 -m venv .venv && pip3 install -r requirements.txt && pm2 startOrRestart ecosystem.config.js'
            'post-deploy': 'PIPENV_VENV_IN_PROJECT=True pipenv install && source .venv/bin/activate && pm2 startOrRestart ecosystem.config.js'
            
        }
    }
}