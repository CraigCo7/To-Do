function get_input() {
	let { PythonShell } = require("python-shell");
	var path = require("path");
	var input = document.getElementById("input").value;

	var options = {
		scriptPath: path.join(__dirname, "/../engine/"),
		args: [input],
	};

	let pyshell = new PythonShell("server.py", options);
	pyshell.on("message", function (message) {
		swal(message);
	});
	document.getElementById("input").value = "";
}
