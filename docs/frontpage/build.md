## How do we build

Building an image is done with out central build logic [architect](aurora#architect). Triggering a build can be done in several ways:
* via [AuroraPipeline](aurora#auroraPipeline) as a [semanic release](aurora#semantic) or as a [wip/branch build](aurora#snapshot-build)
* as a binary-build directly from a local client for wip [development flow](aurora#development-flow) builds. This will buypass Nexus and read DeliveryBundle from stdin 
* when the build logic or base image changes a trigger will be fired to rebuild  
