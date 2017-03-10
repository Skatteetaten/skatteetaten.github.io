---
title: Building
layout: post
category: OpenShift
---

A seperate Jenkins instance is deployed for each unique affiliation. This Jenkins using the Bitbucket plugin to automatically create jenkins jobs for all repos/branches with Jenkinsfiles in them. 

The shared jenkinsfile projects used contains the following flow:
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

The BuildConfig that is set up uses the CustomBuilder strategry with the Architect builder. Architect has the following flow:
 - validate input
 - find actual version of base image for AuroraVersion
 - fetch delivery bundle from Nexus
 - genearte a start script
 - create a Dockerfile based upon the wingnut docker image
 - build docker image
 - tag and push relevant tags

Relevant tags for snapshot releases are:
SNAPSHOT-APPNAME-<buildnumber>
APPNAME-SNAPSHOT

Relevant tags for a semantic release 1.2.3 with architect 2.3.4 and wingnut 5.6.7 is
1.2.3-b2.3.4-wingnut-5.6.7
1.2.3
1.2
1
latest



BuildConfig manges by jenkins
Architect custombuilder builds wingnut based Java image 
Genereate start script
Trap and convert signals
Configure splunk logging
Set xmx based on cgroup memory
Semantic versioning
Multiple tags


