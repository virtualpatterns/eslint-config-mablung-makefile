
# ifndef mablung-makefile-path
# export mablung-makefile-path := $(shell npx mablung-makefile get-path)
# endif

# include $(mablung-makefile-path)

include node_modules/@virtualpatterns/mablung-makefile/makefile

ifndef current-build-folder
ifndef current-clean-folder

pre-build::
	$(info - pre-build ----------------------------)
	$(if $(verbose),@echo copy .... .eslintrc.json)
	@npx shx cp node_modules/@virtualpatterns/mablung-makefile/.eslintrc.json .
	
endif
endif