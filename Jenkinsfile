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

      stage('Deploy') {
       steps {
        emailext(
            to: 'jahan665577@gmail.com',
            subject: 'APK Build Successful',
            body: 'Hi,\n\nAPK created successfully.\n\nRegards,\nJenkins'
        )
    }
}
    }
}

