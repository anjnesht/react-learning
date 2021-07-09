pipeline {
  agent any
  stages {
    stage('Checkout') {
        timestamps {
            container("${containerName}") {
                ansiColor('xterm') {
                    checkout scm
                }
            }
        }
     }
  }
}
