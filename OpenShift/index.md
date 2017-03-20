---
layout: home
---

## OpenShift

Skatteetaten (The Norwegian Tax Authority) is currently in the process of using a new development platform based upon [OpenShift](https://www.openshift.org/).

We call our platform `Aurora OpenShift` and the services we have created on top of OpenShift will soon be open sourced under APL 2.0 license.

### The architecture behind Aurora OpenShift

 * How to [code](coding.html) an application
 * How the application is [built](building.html) on Jenkins
 * How to [configure and setup](setup.html) the infrastructure on OpenShift to deploy your application
 * How to [monitor](monitoring.html) your application to make sure it performs as expected
 
 
## Suggested todo list

 * Develop a proper outline (table of contents) in the index file. With the current structure some of the pages are only accessible via other sub pages - which can make them hard to find and get a complete overview of the documentation.
 
 * Suggestion: A two section document;
   - Section One: What is the Aurora OpenShift platform, what features are in it, why are they there and how do they work?
   - Section Two: Implementation details; Boober, the Database Hotel API, SKAP, Marjory, Wembley etc.
 
 * A significantly more meaty introduction that includes more background information (not necessarily in the same order);
   - What is the responsibility of the Norwegian Tax Authority?
   - A short history of the Aurora OpenShift platform (even before it was called the Aurora OpenShift platform)
   - What are the problems the Aurora OpenShift platform set out to solve? Is it solving them right now? Why did we decide to build our own set of tools and abstractions on top of OpenShift and other relevant infrastructure components. Common Components, Business Applications, Application "clusters" - Environments (dozens of test and development envronments)
   - What kinds of applications are/will be running on the Aurora OpenShift platform?
   - An overview of the technology stack in use by the applications developed by the Norwegian Tax Authority.
 * An overview of the main features of the Aurora OpenShift platform (What is the Aurora OpenShift platform).
 * An overview of the main user facing Aurora OpenShift abstractions;
   - Leveransepakke (Application Delivery?)
   - Base Image
   - Architect
   - Aurora Console
   - AOC and the AOC configuration files
   - The Aurora API (?) and its main resources. Not an established term, but I think it will serve us better in the long run to view the common collection of endpoints provided by "our" platform as a single uniform API regardless of which underlying component, be it Boober, Sprocket, the Aurora Console or any other component, implements a specific endpoint/resource.
 * The anatomy of an Aurora Application
   - Application requirements (runtime platform, management, etc)
   - Structure of Leveransepakke
   - From Leveransepakke to Application Image
   - Application versioning (The Aurora Version) and tagging
   - Application Configuration
   - Build process (Jenkins)
 * Deploying an application and sets of applications with AOC
 * Managing applications with AOC and the Aurora Console
 
 * Implementation details:
   - A description of the underlying components and their role in the Aurora OpenShift platform