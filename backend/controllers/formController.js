const Snippet = require("../models/formModel");

// create snippet
const createSnippet = async (req, res) => {
  const { username, codeLanguage, stdin, sourceCode } = req.body;
  try {
    const snippet = await Snippet.create({
      username,
      codeLanguage,
      stdin,
      sourceCode,
    });
    res.status(200).json(snippet);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

const getSnippets = async (req, res) => {
  try {
    const snippets = await Snippet.find().sort({ timestamp: -1 });
    res.status(200).json(snippets);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createSnippet,
  getSnippets,
};
