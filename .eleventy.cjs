// .eleventy.cjs  (CommonJS)
const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Copie tels quels
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("static");

  // Filtre Nunjucks: {{ page.date | date("dd LLL yyyy") }}
  eleventyConfig.addFilter("date", (dateObj, format = "dd LLL yyyy") => {
    const d = (dateObj instanceof Date) ? dateObj : new Date(dateObj);
    return DateTime.fromJSDate(d, { zone: "utc" }).toFormat(format);
  });

  return {
    dir: {
      input: ".",          // on lit depuis la racine
      includes: "_includes",
      layouts: "_includes",
      data: "src/_data",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["njk","md","html"]
  };
};
