pipeline {
    agent any

    stages {

        stage('Build') {
            steps {
                echo 'Building...'
                sh 'pwd'
                // sh 'ls -la'
                sh 'node conditions.js'
                sh '==============>>'
                sh 'python3 devops.py'
                sh '==============>>'
                sh 'test.dart'
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