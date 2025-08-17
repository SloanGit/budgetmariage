// .eleventy.js (CommonJS)
const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  // Fichiers recopiés tels quels vers _site
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("static");

  // Filtre Nunjucks: {{ page.date | date("dd LLL yyyy") }}
  eleventyConfig.addFilter("date", (dateObj, format = "dd LLL yyyy") => {
    const d = (dateObj instanceof Date) ? dateObj : new Date(dateObj);
    return DateTime.fromJSDate(d, { zone: "utc" }).toFormat(format);
  });

  // Collections pour le blog
  eleventyConfig.addCollection("posts", (collectionApi) => {
    return collectionApi
      .getFilteredByGlob("content/posts/*.md")
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("latestPosts", (collectionApi) => {
    return collectionApi
      .getFilteredByGlob("content/posts/*.md")
      .sort((a, b) => b.date - a.date)
      .slice(0, 3);
  });

  return {
    dir: {
      input: ".",           // on lit depuis la racine du repo
      includes: "_includes",
      layouts: "_includes",
      data: "src/_data",    // tu as site.json ici
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html"]
  };
};
