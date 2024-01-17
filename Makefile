default:
	@echo "Please specify a target to make."
# Reset your database and apply all migrations
db-reset:
	npx prisma migrate reset
# Generate a schema and push changes to db, for local dev
db-m:
	npx prisma migrate dev
# sync db without generating a schema, for local  dev
db-push:
	npx prisma db push
# Apply pending migrations to the database in production/staging
db-deploy:
	npx prisma migrate deploy
# Generate prisma client
db-generate:
	npx prisma generate
# Drop local database tables
drop-tables:
	psql "dbname=postgres host=db port=5432 user=postgres password=postgres" -c "DROP SCHEMA public CASCADE; CREATE SCHEMA public;" ;\
	exit 0;
# Seed db with data
seed:
	cd scripts && node seed.ts