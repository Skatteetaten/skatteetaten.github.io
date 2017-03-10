---
title: Coding
layout: post
category: OpenShift
---

When coding an application or adapting an earlier application to OpenShift the following issues must be adressed:

 - Java is the only supported lanaguage
 - All code should be delivered as a assembly bundle containing a lib folder wilth all jars, and a metadata/openshift.json file
 - Fat-jars are not supported
 - An application must expose a management interface on port $HTTP_MANAGEMENT_PORT with information about health, info, prometheus metrics and env 
 - An application must handle SIGINT shutdown gracefully
 - An application must include the logback logfile from the $LOGBACK_FILE env var.
 - A Jenkinsfile, preferably using the shared jenkinsfile script


An example metadata/openshift.json file can be found below.
TODO: Include metadata/openshift.json file

We provide a reference application written in Spring boot that handles all the above demands out of the box
