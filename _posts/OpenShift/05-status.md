---
title: Status
layout: post
category: OpenShift
---

Knowing the overall status of an application and alerting on that status is required.

In order to find the status for an component we check the OpenShift objects for that application and fetch some information from the health check.

TODO: Insert rules for status here:

All this information is aggregated into an status level of either DOWN, OBSERVE, HEALTHY or OFF

An endpoint exposing this information is peridically polled by an alerting system alerting the given ops personal if they need to take action.

Improvement
We would like to send metrics to prometheus for that statuses
It would also be nice to have the status as a seperate ThirPartyKind of just an annotation on one of the resources for that application
If https://github.com/kubernetes/kube-state-metrics supports OpenShift it could be a nice way to fetch this state without crawling the entire api
