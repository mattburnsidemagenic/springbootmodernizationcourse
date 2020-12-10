# Spring Boot Modernization Course (Matt Burnside)


## General Setup
- Install the [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli)
- At the terminal, log in to your Azure account with `az login`
- Create a resource group with `az group create --name SpringBootModernizationCourse --location eastus`
- Create an Azure container registry with `az acr create --resource-group SpringBootModernizationCourse --name {your_unique_container_registry_name} --sku Basic`
- Log in to the newly-created container registry with `az acr login --name {your_unique_container_registry_name}`