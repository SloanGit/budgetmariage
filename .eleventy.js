module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "static": "static" });

  return {
    dir: {
      input: ".",
      includes: ".",   // IMPORTANT – pas de _includes requis
      output: "_site"
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
