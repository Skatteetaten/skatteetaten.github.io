---
title: Setup
layout: post
category: OpenShift
---

Setting up the required OpenShift objects for deploying an application is done via an api called boober.
Boober can be configured/triggered either from aoc ( a cli config tool similar to oc ) or from a Web UI.

Boober is configured using several json files that are merged together into a single json file. This json description is then transformed into OpenShift objects via provided templates and some manual fixes/tweaking.

The following featuers can be configured int he boober files:
 - locaion of the artifact in Nexus that we are deploying
 - what database schemas to generate/reuse
 - do you need a security token for secure communication?
 - config variables
 - deployment strategy, what version do you want to deploy
 - generate a route for this application
 - enable rolling upgrades
 - configure splunk index
 - create other routes/automate opening trafic in network infatructure (webseal/BiG-IP)

The boober process is idempotent so calling it seceral times will only update the required parts in the old objects.
