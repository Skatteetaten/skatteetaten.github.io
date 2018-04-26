## Observe what is running

How do you know that an application running in your cluster is behaving correctly? The AuroraAPI helps with this in that it scrapes all applications in the cluster. The process
gathers up data from the masterApi as well as from the [managementInterface](aurora#managementInterface). This data is analysed in order to calculate an [AuroraStatus](aurora#auroraStatus) that is exposed to Prometheus and as a part of the AuroraAPI.

It can then be used to create alerts in Prometheus along with rate of errors, log errors and 95% percentile responsetimes as an example.
