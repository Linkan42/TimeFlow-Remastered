# Master makefile that handles all microservices

#TODO: fix so that it's possible to run multiple microservices

#default:
#	cd meeting; \
#	npm run build; \
#	npm run lint; \
#	npm run start; \ # it stops executing after this line
#
#	cd ../user; \
#	npm run build; \
#	npm run lint; \
#	npm run start

test:
	./scripts/babel.sh; \
	./scripts/eslint.sh