module.exports = function (eleventyConfig) {
  // Copie /static tel quel vers _site/static
  eleventyConfig.addPassthroughCopy({ "static": "static" });

  return {
    dir: {
      input: ".",        // on build depuis la racine
      includes: ".",     // pas de dossier _includes requis
      // ⚠️ si tu n'as PAS src/_data, ne mets pas de ligne 'data'
      output: "_site"    // dossier de sortie
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
