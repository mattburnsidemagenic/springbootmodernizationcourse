# Spring Boot Modernization Course (Matt Burnside)


## General Setup
- Build the backend code; from the backend directory, `./gradlew build`
- Install the [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli)
- At the terminal, log in to your Azure account with `az login`, completing oAuth in your browser
- Create a resource group with `az group create --name SpringBootModernizationCourse --location eastus`
- Create an Azure container registry with `az acr create --resource-group SpringBootModernizationCourse --name {your_unique_container_registry_name} --sku Basic`
- Log in to the newly-created container registry with `az acr login --name {your_unique_container_registry_name}`
- Modify the docker-compose.yaml `image` paths to point to your container registry, all lower case
- `docker-compose up --build -d` to build the images, run, and detach.
- `docker-compose down` to bring down the container network.
- `docker-compose push` to push the built images to your container registry
- In the Azure web portal, you should see `sbm-modernization-backend` and `sbm-modernization-frontend` listed on the *Repositories* page.
- `docker login azure` and complete oAuth in your browser
- Modify docker-compose.yaml and change the `domainname` entries; the eventual FQDN will be whateveryoutypethere.region.azurecontainer.io and thus must be unique. You will also need to modify the environment entry for the frontend app that tells it what URL to use for the back-end services.
- Create an Azure Container Instances (ACI) context with `docker context create aci springbootmodernizationcontext` and select the resource group you created earlier.
- `docker context use springbootmodernizationcontext`
- `docker compose up` -- note this is NOT `docker-compose`. You are running in an ACI context with only a subset of available commands.