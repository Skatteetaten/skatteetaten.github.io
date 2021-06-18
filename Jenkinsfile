#!/usr/bin/env groovy

def props = [
  credentialsId: 'github',
  nodeSelector: 'node-12'
]

def git
def npm

fileLoader.withGit('https://git.aurora.skead.no/scm/ao/aurora-pipeline-scripts.git', 'v7') {
  git = fileLoader.load('git/git')
  npm = fileLoader.load('node.js/npm')
}

node(props.nodeSelector) {
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

  stage("Build") {
    npm.build()
  }

  if (env.BRANCH_NAME == "master") {
    stage('Publish to GitHub pages') {
      git.withGitHubCredentials(props.credentialsId) {
        sh("GIT_ASKPASS=true npm run deploy")
      }
    }
  }

  stage('Clear workspace') {
    step([$class: 'WsCleanup'])
  }
}