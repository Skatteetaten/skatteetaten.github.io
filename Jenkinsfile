#!/usr/bin/env groovy
def jenkinsfile

def overrides = [
    scriptVersion  : 'v7',
    pipelineScript: 'https://git.aurora.skead.no/scm/ao/aurora-pipeline-scripts.git',
    iqOrganizationName: "Team AOS",
    iqBreakOnUnstable: true,
    iqEmbedded: true,
    lineCoverageReport: false,
    credentialsId: "github",
    versionStrategy: [
      [ branch: 'master', versionHint: '1']
    ],
    deployTo: null,
    openShiftBuild: false,
    npmInstallCommand: "ci",
    nodeVersion: "22",
    github                 : [
      enabled              : env.BRANCH_NAME == "master",
      deployToGHPagesCmd   : "npm run deploy"
    ]
]

fileLoader.withGit(overrides.pipelineScript, overrides.scriptVersion) {
  jenkinsfile = fileLoader.load('templates/webleveransepakke')
}

jenkinsfile.run(overrides.scriptVersion, overrides)
