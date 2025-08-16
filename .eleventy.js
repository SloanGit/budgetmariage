module.exports = function(eleventyConfig) {
  // Fichiers copiés tels quels
  eleventyConfig.addPassthroughCopy("static");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("index.html");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("404.html");

  return {
    dir: {
      input: ".",
      includes: ".",
      data: "src/_data",
      output: "_site"
    },
    templateFormats: ["njk","md","html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
