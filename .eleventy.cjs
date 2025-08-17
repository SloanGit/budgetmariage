// .eleventy.cjs
const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Laisse Netlify CMS et /static passer tels quels
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("static");

  // Ajout du filtre date
  eleventyConfig.addFilter("date", (dateObj, format = "dd LLL yyyy") => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(format);
  });

  return {
    // On compile depuis la racine du repo
    dir: {
      input: ".",
      includes: "_includes",   // <-- layouts et includes ici
      layouts: "_includes",    // <-- on confirme que les layouts sont là
      data: "src/_data",       // <-- ton site.json est déjà ici
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html"]
  };
};
