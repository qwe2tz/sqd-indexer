# Subsquid indexer

* Check Makefile for common commands
* To add a new model into the indexer:
  1. update the ABI in ./abi and generate new Typescript types
  2. add the export in src/abi.ts
  3. add desired types into the graphql schema

To deploy the indexer, a merge request must be created to either release/testnet or release/mainnet, which
will update the indexers accordingly.

#### Adding a new chain

* Add the required database to postgres - check with the team. For development purposes, you can just update the **init-db.sh** script
* update the github actions yml and add new secrets to actions.

Additionally, we are using docker compose files to spin up the enviornment. You can use docker-compose-dev.yml to run development, or directly run the sqd processor in **main.ts**. Run dev in make file does that:

```
make run_dev
```

TODO:
* Deploying indexers using a release.
