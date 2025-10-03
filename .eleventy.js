// .eleventy.js
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/images/");
  eleventyConfig.addPassthroughCopy("src/styles.css");
  eleventyConfig.addPassthroughCopy("src/main.js");
  eleventyConfig.addPassthroughCopy("src/fonts/");


  return {
    dir: {
      input: "src",
      output: "public",
      includes: "_includes",
      layouts: "_layouts"
    }
  };
};