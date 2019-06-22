pipeline {
  agent any
  tools {nodejs "nodejs 10.16 LTS"}
  environment {
    BRANCH="${GIT_BRANCH.split("/")[1]}"
  }
  stages{
    stage("init") {
      steps {
        echo "branch is ${env.BRANCH}"
        sh 'yarn install'
      }
    }
    stage('test') {
      steps {
        sh 'yarn test:CI'
      }
    }
    stage("build") {
      steps {
        sh 'printenv'
        echo "====Building....===="
      }
    }
    stage("deploy") {
      when {
        expression {
          currentBuild.result == null || currentBuild.result == 'SUCCESS'
        }
      }
      steps {
        echo "====Deploy....===="
        sh "ls"
        sh "gulp deploy"
      }
    }
  }
}

def getGitBranchName() {
    return scm.branches[0].name
}