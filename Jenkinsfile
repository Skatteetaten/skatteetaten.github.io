#!/usr/bin/env groovy

def props = [
  credentialsId: 'github',
  iq: false,
  nodeVersion: "12",
  applicationType: "nodejs"
]

def git
def npm

fileLoader.withGit('https://git.aurora.skead.no/scm/ao/aurora-pipeline-scripts.git', 'v7') {
  git = fileLoader.load('git/git')
  npm = fileLoader.load('node.js/npm')
}

node {
  stage('Clean Workspace') {
    deleteDir()
    sh 'ls -lah'
  }

  stage('Checkout') {
    checkout scm
  }

  stage('Install dependencies') {
    npm.run("ci")
  }

  if (env.BRANCH_NAME == "master") {
    stage('Build & deploy to GitHub') {
      try {
        withCredentials([usernamePassword(credentialsId: props.credentialsId,
        usernameVariable: 'GIT_USERNAME',
        passwordVariable: 'GIT_PASSWORD')]) {
          git.setGitConfig()
          sh("git config credential.username ${env.GIT_USERNAME}")
          sh("git config credential.helper '!f() { echo password=\$GIT_PASSWORD; }; f'")

          sh("GIT_ASKPASS=true npm run deploy")
        }
      } finally {
        sh("git config --unset credential.username")
        sh("git config --unset credential.helper")
      }
    }
  }

  stage('Clear workspace') {
    step([$class: 'WsCleanup'])
  }
}