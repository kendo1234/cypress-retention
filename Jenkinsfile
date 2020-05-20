pipeline {
    agent {
        // this image provides everything needed to run Cypress
        docker {
            image 'cypress/browsers:node12.4.0-chrome76'
            args  '-v /var/run/docker.sock:/var/run/docker.sock --security-opt label=disable -u root:sudo'
        }
    }

    stages {
        stage('build and run test') {


            steps {
                sh 'ls -al'
                sh 'pwd'
                sh 'npm install --save-dev cypress'
                //start tests execution
                sh 'ls -al'
                sh './node_modules/.bin/cypress run -- -s "cypress/integration/*"'
            }

            post {
                always {
                    junit 'results/cypress-report-*.xml'
                    //sh 'rm results/*'
                }

                success {
                    echo 'Build finished successfully'
                }
                failure {
                    emailext body: "<b>Project: ${env.JOB_NAME} </b><br>Build Number: ${env.BUILD_NUMBER} <br> URL of build: ${env.BUILD_URL}",
                            mimeType: 'text/html',
                            subject: "ERROR CI: Project name -> ${env.JOB_NAME}",
                            recipientProviders: [developers()]
                }
                unstable {
                    emailext body: "<b>Project: ${env.JOB_NAME} </b><br>Build Number: ${env.BUILD_NUMBER} <br> URL of build: ${env.BUILD_URL}",
                            mimeType: 'text/html',
                            subject: "Unstable Build: Project name -> ${env.JOB_NAME}",
                            recipientProviders: [developers()]
                }
                changed {
                    // This will run only if the state of the Pipeline has changed
                    //For example, if the Pipeline was previously failing but is now successful
                    emailext body: "<b>Project: ${env.JOB_NAME} </b><br>Build Number: ${env.BUILD_NUMBER} <br>URL of build: ${env.BUILD_URL} <br>Build result is: ${currentBuild.result}",
                            mimeType: 'text/html',
                            subject: "Build state has changed: Project name -> ${env.JOB_NAME}",
                            recipientProviders: [developers()]
                }
            }
        }
    }
}