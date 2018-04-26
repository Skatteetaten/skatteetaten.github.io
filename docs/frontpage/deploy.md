## How do we deploy
An deploy starts with triggering the AuroraAPI from either of the userfacing clients [AO](aurora#ao), [AuroraKonsole](aurora#auroraKonsole) or [AuroraPipeline](aurora#auroraPipeline). The API will then extract and [merge AuroraConfig](aurora#AuroraConfig) in order to create a AuroraDeploymentSpec. 

[Synchrous integrations](aurora#integrationSyncronous) are run and the result of both are assembled into Kubernetes objects that are applied to the cluster. Async integrations will that use the [controller pattern](https://kubernetes.io/docs/concepts/api-extension/custom-resources/#custom-controllers) will run and add aditional resources. The application is then rolled out either via importing a new image or triggering a new deploy. The [deploy result](aurora#deployResult) is save for later inspection.

