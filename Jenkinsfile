pipeline {
    agent any

    environment {
        DOCKER_COMPOSE_FILE = 'SkyBluLabs_Website/docker-compose.yaml'
    }

    stages {
        stage('Clone Repository') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'azure-devops-credentials', usernameVariable: 'AZURE_DEVOPS_USERNAME', passwordVariable: 'AZURE_DEVOPS_PAT')]) {
                    bat '''
                        SET GIT_USERNAME=%AZURE_DEVOPS_USERNAME%
                        SET GIT_PASSWORD=%AZURE_DEVOPS_PAT%
                        git clone https://%GIT_USERNAME%:%GIT_PASSWORD%@dev.azure.com/SkyBluLabs/SkyBluLabs_Website/_git/SkyBluLabs_Website
                    '''
                }
            }
        }

        stage('Build') {
            steps {
                bat 'docker-compose -f %DOCKER_COMPOSE_FILE% build'
            }
        }

        stage('Run Docker Compose') {
            steps {
                bat 'docker-compose -f %DOCKER_COMPOSE_FILE% down'
                bat 'docker-compose -f %DOCKER_COMPOSE_FILE% up -d'
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    echo 'Running tests...'
                    sleep(time:120, unit: "SECONDS")
                    bat 'curl -f http://localhost:3000 || exit 1'
                    bat 'curl -f http://localhost:3000/contactus || exit 1'
                }
            }
        }

        stage('Clean Up') {
            steps {
                bat 'docker-compose -f %DOCKER_COMPOSE_FILE% down'
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
