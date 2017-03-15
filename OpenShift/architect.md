---
title: Building
layout: post
---

Architect is a DockerImage built upon Alpine linux that works as an OpenShift [CustomBuilder](https://docs.openshift.com/container-platform/3.4/creating_images/custom.html)

The flow of the build logic is as follows:
  - validate input
  - find actual version of base image for AuroraVersion
  - fetch delivery bundle from Nexus
  - genearte a start script 
  - create a Dockerfile based upon the wingnut docker image
  - build docker image
  - tag and push relevant tags

More details will be revealed when it is opensourced



## Start script
The start script we use is heavyily inspired by several other similar solutions, chief among them [run-java-sh](https://github.com/fabric8io-images/run-java-sh)
 - Calculate XMX for the java process based upon a percent of cgroup memory (default 80%)
 - enable debugging if a flag is set
 - enable jolokia agent for hawt.io integration in openshift
 - calculate classpath for the "leveransepakke"
 - trap the java process and rewrite java exit codes to work with openshift. 
   - Openshift expects 0 on SIGINT kill, java returns 143
   - we use dumb-init to enable trapping
 - add JVM_OPTS or APPLICATION_ARGS from the metadata file in the "leveransepakke"
 - set MAIN_CLASS from metadata file in the "leveransepakke"
