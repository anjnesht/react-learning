pipeline {
  agent any
  stages {
    stage('Test') {
      parallel {
        stage('Test') {
          steps {
            sh '''set +x
info() {
echo "\\033[36m[Info] \\033[0m"
}
error() {
echo "\\033[1;31m[Error]   \\033[0m $1"
}
success() {
echo "\\033[1;32m[Success] \\033[0m $1"
}
info "This is information message"
error "Houston we have a problem"
success "Great!!!"
echo "Foreground colors"
echo "\\033[31m Red \\033[0m"
echo "\\033[32m Green \\033[0m"
echo "\\033[33m Yellow \\033[0m"
echo "\\033[34m Blue \\033[0m"
echo "\\033[35m Magneta \\033[0m"
echo "\\033[36m Cyan \\033[0m"
echo "Background colors"
echo "\\033[41m Red \\033[0m"
echo "\\033[42m Green \\033[0m"
echo "\\033[43m Yellow \\033[0m"
echo "\\033[44m Blue \\033[0m"
echo "\\033[45m Magneta \\033[0m"
echo "\\033[46m Cyan \\033[0m"
echo "Different combinations"
echo "\\033[1;31m Red \\033[0m"
echo "\\033[1;4;37;42m Green \\033[0m"
echo "\\033[1;43m Yellow \\033[0m"
set -x'''
          }
        }

        stage('Checkout') {
          steps {
            echo 'Checkout repository'
          }
        }

        stage('Build And Test') {
          steps {
            echo 'Building job'
          }
        }

      }
    }

  }
}
