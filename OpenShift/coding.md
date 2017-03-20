---
title: Coding
layout: page
---

When coding an application or adapting an existing application to OpenShift the following issues must be addressed:

 - Java is the only supported language
 - All code should be delivered as an assembly bundle containing a lib folder with all jars, and a metadata/openshift.json file
 - Fat-jars are not supported
 - An application must expose a management interface on port $HTTP_MANAGEMENT_PORT with information about health, info, prometheus metrics and env 
 - An application must handle SIGINT shutdown gracefully
 - An application must include the logback logfile from the $LOGBACK_FILE env var.
 - A Jenkinsfile, preferably using the shared Jenkinsfile script

We provide a reference application written in Spring boot that handles all the above demands out of the box.
