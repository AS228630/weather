function create_zip() {
	var zip = new JSZip();
	zip.add("hello1.txt", "Hello First World\n");
	zip.add("hello2.txt", "Hello Second World\n");
	content = zip.generate();
	location.href="data:application/zip;base64," + content;
}

</SCRIPT>