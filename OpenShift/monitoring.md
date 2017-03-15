---
title: Monitoring
layout: page
---

Applications running in our Openshift clusters expose data about their status in four major ways
* logs in splunk
* metrics in grafana via prometheus
* health checks in the application
* state of the Openshift objects in the cluster

An overall AuroraStatus for an application is calculated based upon the openshift objects and healthchecks

## Splunk
Indexing in splunk is configured when you set up an application. A preconfigured logback.xml configuration is available
in the docker image so that all applications log in the same pattern. 

## Metrics
Applications expose metrics via a endpoint to prometheus and is automatically scraped. The infrastructure also expose
metrics that it knows about itself and the running applications.

## Healthcheks
Health checks from [SpringBoot](https://docs.spring.io/spring-boot/docs/current-SNAPSHOT/reference/htmlsingle/#production-ready-health) 
is used as the readiness check for application on OpenShift. 

## Openshift objects
Knowing the overall status of an application and alerting on that status is required.

In order to find the status for an component we check the OpenShift objects for that application and fetch some information from the health check.

TODO: Insert rules for status here:

All this information is aggregated into an status level of either DOWN, OBSERVE, HEALTHY or OFF

An endpoint exposing this information is periodically polled by an alerting system alerting the given ops personal if they need to take action.


## AuroraStatus

This status is shown for all applications in a central UI. Ops people can slice and dice this view to see that their applications are ok.

The data is also available as an API and it used to send alerts when things are down.

### HEALTHY
* there is an ongoing deployment
* we want 3 instances and have 3 ready instances

### OBSERVE
* the average number of restarts for all instance is over OBSERVE limit, but below DOWN limit
* we want 3 instances but only 2 are ready
  * and there is no ongoing deploy
* we want 3 instances but have 5 
  * and there is no ongoing deploy

### DOWN
* the last deployment failed
* there are instances from two seperate deploys running
** and the youngest instance is older then a limit
* we want 3 instances but none are ready
  * and there is no ongoing deploy
* the average number of restarts for all instance is over DOWN limit

=== OFF
* there has never been a deploy
* we want 0 instances and have 0
