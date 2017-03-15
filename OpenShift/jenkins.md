---
title: Jenkins
layout: post
---

A seperate Jenkins instance is deployed for each unique affiliation. This Jenkins using the Bitbucket plugin to automatically create jenkins jobs for all repos/branches with Jenkinsfiles in them. 

## Jenkinsfile
The flow of the jenkinsfile is as follows:
 - checkout code
 - auto-bump version
 - set name of build job to include version
 - compile and test
 - checkstyle
 - sonar
 - optional: pitest
 - deploy to Nexus with CLM check of 3rd party dependencies
 - setup/update a BuildConfig with latest semantic version
 - start a new build of the BuildConfig
 

## Auto-bump version
We use a maven/gradle plugin in order to automatically figure out thenext version number. More details on this process will be revealed when it is opensourced