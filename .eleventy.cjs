// .eleventy.cjs
module.exports = function (eleventyConfig) {
  // Fichiers statiques à copier tels quels (crée "static" plus tard si besoin)
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("static");

  return {
    // On indique à Eleventy de lire TOUTE la racine (.)
    dir: {
      input: ".",
      includes: ".",
      layouts: ".",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html"]
  };
};
