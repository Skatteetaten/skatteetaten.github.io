The Aurora Plattform is a PaaS built OpenShift upon.
At the core of the plattform is the declerative config format
[AuroraConfig](auroraConfig) that allows operators to write
declerative composable configuration for apps and environments. The
tools ao, AuroraKonsole and the AuroraJenkinsPipeline library
communicate with the AuroraAPI to apply AuroraConfig to clusters.
The plattform also observes the state of applications running in it
and expose a aggregated status view for an application. This again
is the basis of the Wallboard component.
