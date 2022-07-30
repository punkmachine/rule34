export default function meta(to, next) {
	if (to.meta.title) {
		document.title = to.meta.title;
	}
	next();
}