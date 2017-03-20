---
title: Patching
layout: post
category: OpenShift
---

Docker containers are immutable so we do not patch them in the standard sense of the word.

When the base image wingnut or the build logic architect changes we need to rebuild and redeploy lots of contains to fix security issues or other bugs.

This is done the following way
 - all BuildConfigs that are generated in the Jenkinsfile will trigger on changes to architect or wingnut
 - the version in the BuildConfig is always the latest semantic release
 - this version will be rebuilt and new tags will be pushed to the DockerRegistry
 - all deployments that are not pinned will then be redeployed if that are using this latest version. 


Improvement in the works:
We are in the process of adding a separate step in this process that includes setting up a one-shot environment on OpenShift with the given component to do a regression check of the new baseimage/buildlogic.
