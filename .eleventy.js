module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({"static":"static"}); // si tu as un dossier /static
  eleventyConfig.addWatchTarget("static");

  return {
    templateFormats: ["njk","md","html"],
    dir: {
      input: ".",
      includes: "_includes",   // crée-le si tu veux des includes plus tard
      data: "src/_data",
      output: "_site"
    }
  };
};
