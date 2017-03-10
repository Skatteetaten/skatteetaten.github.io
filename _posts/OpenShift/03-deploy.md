---
title: Deploy
layout: post
category: OpenShift
---

A deploy happends when a scheduled imagestream triggers. Thr provided run/start script has the following behaviour:

 - Calculate XMX for the java process based upon a percent of cgroup memory (default 80%)
 - figure out what config file to load using the logic described below
 - source all the lines in config properites files as ENV vars and print out the name of the vars sourced.
 - figure out what secret file to load using the logic described below
 - source all the lines in secret properites files as ENV vars and print out the name of the vars sourced.
 - trap the process and rewrite java signals to native signls. Thus SIGINT will not return 143 but 0
 - start the java process with the generated start script
 - if the provided readiness check fails the deployment will be rolled back

