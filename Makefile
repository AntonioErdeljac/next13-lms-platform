default:
	@echo "Please specify a target to make."

reset-db:
	npx prisma migrate reset