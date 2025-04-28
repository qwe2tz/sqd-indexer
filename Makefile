run_dev:
	bash run-dev.sh

reset_db:
	bash reset-db-dev.sh

run_clean_dev: reset_db run_dev

migrate: generate-migrations apply-migrations

generate-migrations:
	npx squid-typeorm-migration generate

apply-migrations:
	npx squid-typeorm-migration apply

codegen:
	npx squid-typeorm-codegen
