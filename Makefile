# Master makefile that handles all microservices

# In a Makefile, the purpose of the special target `.PHONY` is
# to declare targets that do not represent actual files on the
# file system. When `make` runs and encounters a phony target,
# it will always execute the commands associated with that target,
# even if a file with the same name as the target already exists.
# This helps prevent unexpected behavior and ensures that the
# intended actions are taken.

# Using `.PHONY` is recommended for targets that represent abstract
# tasks or concepts rather than actual files. Examples of phony targets
# include `clean`, `install`, and `test`. By declaring these targets as
# phony, you can avoid potential issues that might arise from having
# files with the same name as the targets in your project directory.

.PHONY: default
.PHONY: test
.PHONY: install
.PHONY: deploy

# make sure read and write priveliges are granted to root folder
# CUR_DIR = $(CURDIR)
# $(chmod u+rw $(CUR_DIR))

# set variable for .txt file
# output-file := $(CUR_DIR)/output.txt

# The `2>&1` notation in shell commands is used to redirect the standard
# error (stderr) stream to the standard output (stdout) stream.
# This allows you to treat both stdout and stderr as a single combined
# stream, so that they can be processed together.

# By default, when a command writes to stderr, its output will be sent to
# the terminal separately from any stdout output. This can make it difficult
# to analyze or process the output of a command, especially if there is both
# informational and error output intermingled on different streams.

# define build_lint_start
#	@echo "Building and linting microservices."
#	$(shell cd gateway && npm run build && npm run lint > $(output-file) 2>&1)
#	$(shell cd gui && npm run build && npm run lint >> $(output-file) 2>&1)
#	$(shell cd login && npm run build && npm run lint >> $(output-file) 2>&1)
#	$(shell cd meeting && npm run build && npm run lint >> $(output-file) 2>&1)
#	$(shell cd user && npm run build && npm run lint >> $(output-file) 2>&1)
#
#	@echo "Starting microservices."
#	$(shell cd gateway && npm run start >> $(output-file) 2>&1)
#	$(shell cd gui && npm run start >> $(output-file) 2>&1)
#	$(shell cd login && npm run start >> $(output-file) 2>&1)
#	$(shell cd meeting && npm run start >> $(output-file) 2>&1)
#	$(shell cd user && npm run start >> $(output-file) 2>&1)
# endef

# default:
# @echo "Building, linting and starting all microservices:"
# $(build_lint_start)
# $(cat $(output-file))
default:
	@echo "bash is a bitch"

test:
	./scripts/babel.sh; \
	./scripts/eslint.sh

install:
	./scripts/install.sh;

deploy:
	gh workflow run gateway.yaml | gh workflow run gui.yaml | gh workflow run login.yaml | gh workflow run meeting.yaml | gh workflow run user.yaml | gh workflow run gui.yaml
