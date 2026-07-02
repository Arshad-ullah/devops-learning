pipeline {
    agent any

    stages {

        stage('Build') {
            steps {
                echo 'Building...'
                sh 'pwd'
                sh 'ls -la'
                sh 'node conditions.js'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing...'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying...'
            }
        }
    }
}