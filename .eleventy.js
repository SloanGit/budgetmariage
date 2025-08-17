module.exports = function (eleventyConfig) {
  // copie le dossier static tel quel vers _site/static
  eleventyConfig.addPassthroughCopy({ "static": "static" });
  eleventyConfig.addPassthroughCopy("admin"); // pour Netlify CMS si présent

  return {
    dir: {
      input: ".",       // on prend la racine comme dossier d'entrée
      includes: ".",    // IMPORTANT : les layouts/fichiers inclus peuvent être à la racine
      output: "_site"   // dossier de sortie
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
