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

deploy:
	gh workflow run gateway.yaml; \
	gh workflow run login.yaml; \
	gh workflow run meeting.yaml; \
	gh workflow run user.yaml