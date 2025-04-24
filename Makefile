run_dev:
	bash run-dev.sh

reset_db:
	bash reset-db-dev.sh

run_clean_dev: reset_db run_dev

makemigrations: generate-migrations apply-migrations

generate-migrations:
	npx squid-typeorm-migration generate

apply-migrations:
	npx squid-typeorm-migration apply

codegen:
	squid-typeorm-codegen