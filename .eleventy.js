module.exports = function (eleventyConfig) {
  // static + admin straight to /_site
  eleventyConfig.addPassthroughCopy("static");
  eleventyConfig.addPassthroughCopy("admin");

  return {
    dir: {
      input: "content",   // your markdown & njk live here
      includes: ".",      // allow includes from project root
      layouts: ".",       // allow layouts at project root
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html"]
  };
};
