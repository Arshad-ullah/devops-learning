// pipeline {
//     agent any

//     stages {

//         stage('Build') {
//             steps {
//                 echo 'Building...'
//                 sh 'pwd'
                
//                 sh 'node conditions.js'
//                 echo '==============>>'
//                 sh 'python3 devops.py'
//                 echo '==============>>'
//                 sh 'dart test.dart'
//                 echo '==============>>'
//             }
//         }

//         stage('Test') {
//             steps {
//                 echo 'Testing...'
//             }
//         }

//         stage('Deploy') {
//             steps {
//                 echo 'Deploying...'
//             }
//         }
//     }
// }


pipeline{

    agent any

    stages {

        stage('Build'){

            steps{
                echo 'Building==========================='

                sh 'pwd'
                sh 'node conditions.js'

                echo '==============>>'
                sh 'python3 devops.py'
                echo '==============>>'
                sh 'dart test.dart'
                echo '==============>>'

            }


        }

        stage('Test'){

            steps{

                echo 'Testing...'

            }


        }

        stage('Deploy'){

            steps{
                echo 'Deploying...'
               

            }
        }
    }
}