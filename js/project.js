document.addEventListener("DOMContentLoaded", () => {
	const slug = document.body.dataset.project;

	Shell.start(() => {
		DataLoader.loadProject(document.getElementById("project"), slug);
	});
});
