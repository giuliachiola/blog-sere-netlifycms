const CleanCSS = require("clean-css");

module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy('images')
	eleventyConfig.addPassthroughCopy('admin')
	eleventyConfig.addPassthroughCopy('_includes/styles/css')

	/**
		Date
	 */
	const {
		DateTime
	} = require("luxon");

	// https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
		eleventyConfig.addFilter('htmlDateString', (dateObj) => {
			return DateTime.fromJSDate(dateObj, {
				zone: 'utc'
			}).toFormat('yy-MM-dd');
		});

		eleventyConfig.addFilter("readableDate", dateObj => {
		return DateTime.fromJSDate(dateObj, {
			zone: 'utc'
		}).toFormat('dd LLL yyyy');
	});

	/**
		CSS
	*/
	eleventyConfig.addFilter("cssmin", function(code) {
		return new CleanCSS({}).minify(code).styles;
	});
};
