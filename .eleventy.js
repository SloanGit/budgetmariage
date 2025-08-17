module.exports = function(eleventyConfig) {
  // Copie le dossier /static tel quel vers _site/static
  eleventyConfig.addPassthroughCopy({ "static": "static" });

  return {
    // On travaille à la racine
    dir: {
      input: ".",
      includes: ".",     // <- IMPORTANT : pas de dossier _includes requis
      data: "src/_data", // ok s'il existe ; sinon supprime cette ligne
      output: "_site"
    },
    templateFormats: ["njk","md","html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
