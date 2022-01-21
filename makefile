
include node_modules/@virtualpatterns/mablung-makefile/makefile

ifndef current-build-folder
ifndef current-clean-folder

pre-build::
	$(info - pre-build ----------------------------)
	$(if $(verbose),@echo update .... .eslintrc.json and babel.config.json)
	@npx mablung-makefile update
	
endif
endif