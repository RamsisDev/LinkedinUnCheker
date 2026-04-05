ZIP_NAME = LinkedinUnCheker.zip
SRC_DIR  = .
OUT_DIR  = ..

EXCLUDE = \
	--exclude "LinkedinUnCheker/.git/*" \
	--exclude "LinkedinUnCheker/*.zip" \
	--exclude "LinkedinUnCheker/Makefile" \
	--exclude "LinkedinUnCheker/README.md" \
	--exclude "LinkedinUnCheker/icons/check_icon.ico"

.PHONY: zip clean

zip:
	cd $(OUT_DIR) && zip -r $(ZIP_NAME) LinkedinUnCheker/ $(EXCLUDE)
	@echo "Created $(OUT_DIR)/$(ZIP_NAME)"

clean:
	rm -f $(OUT_DIR)/$(ZIP_NAME)
