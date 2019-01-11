#!/usr/bin/env groovy

Map<String, Object> props = [
  credentialsId                : 'github',
  nodeVersion                  : null  //possible values are 'node-6' and 'node-8', or whatever various node versions have been defined as in jenkins-master
]

def git
def npm

fileLoader.withGit('https://git.aurora.skead.no/scm/ao/aurora-pipeline-scripts.git', 'v4') {
  git = fileLoader.load('git/git')
  npm = fileLoader.load('node.js/npm')
}

node {
  if (props.nodeVersion) {
    echo 'Using Node version: ' + props.nodeVersion
    npm.setVersion(props.nodeVersion)
  }

  stage('Clean Workspace') {
    deleteDir()
    sh 'ls -lah'
  }

  stage('Checkout') {
    checkout scm
  }

  stage('Clone starter') {
    try {
      withCredentials([[$class: 'UsernamePasswordMultiBinding',
                        credentialsId: props.credentialsId,
                        usernameVariable: 'GIT_USERNAME',
                        passwordVariable: 'GIT_PASSWORD']]) {
        git.setGitConfig()
        sh("git config --global credential.https://github.com.username ${env.GIT_USERNAME}")
        sh("git config --global credential.helper '!echo password=\$GIT_PASSWORD; echo'")

        sh("git submodule init")
        sh("git submodule update")
      }
    } finally {
      sh("git config --global --unset credential.https://github.com.username")
      sh("git config --global --unset credential.helper")
    }
  }

  stage('Install dependencies') {
    npm.install()
  }

  stage('Install starter dependencies') {
    dir('gatsby-starter-skatteetaten/') {
      npm.install()
    }
  }

  stage('Build & deploy to GitHub') {
    try {
      withCredentials([[$class: 'UsernamePasswordMultiBinding',
                        credentialsId: props.credentialsId,
                        usernameVariable: 'GIT_USERNAME',
                        passwordVariable: 'GIT_PASSWORD']]) {
        git.setGitConfig()
        sh("git config --global credential.https://github.com.username ${env.GIT_USERNAME}")
        sh("git config --global credential.helper '!echo password=\$GIT_PASSWORD; echo'")

        npm.run('run deploy')
      }
    } finally {
      sh("git config --global --unset credential.https://github.com.username")
      sh("git config --global --unset credential.helper")
    }
  }

  stage('Clear workspace') {
    step([$class: 'WsCleanup'])
  }
}