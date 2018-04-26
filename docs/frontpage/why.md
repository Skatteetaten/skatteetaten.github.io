## Why did you make things inhouse?

* **Both Kubernetes and OpenShift lack a concept we have called <b>affiliation</b>. That is groups of people that can administer or view objects for several projects.  We have several different development teams that work on our clusters and we want them to be able to work in <b>isolation</b>.

* The ability to deploy applications to <b>several clusters</b> in one command is highly desired within our organization. Our network infrastructure implies that we need to have multiple clusters.

* When configuring how to deploy applications and projects we want to avoid duplication. Our <b>declarative</b> config format AuroraConfig supports <b>composition</b> with <b>sane defaults</b>
