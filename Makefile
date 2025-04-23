run_dev:
	bash run-dev.sh

reset_db:
	bash reset-db-dev.sh

run_clean_dev: reset_db run_dev
