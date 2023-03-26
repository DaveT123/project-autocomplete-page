const axios = require("axios");
require("dotenv").config();

const search = async (req, res) => {
    // types of search
    // code, commits, issues, labels, repo, topics, users

    const { q, sort, order, per_page, page } = req.query;
    const type = req.params.type;

    const paramName = ["q", "sort", "order", "per_page", "page"];
    const paramValues = [q, sort, order, per_page, page];
    let searchTerm = "";

    for (let i = 0; i < paramValues.length; i++) {
        const name = paramName[i];
        const value = paramValues[i];

        if (value) {
            searchTerm += "&" + name + "=" + value;
        }
    }

    // remove first character
    searchTerm = searchTerm.substring(3);

    try {
        const response = await axios.get(
            `https://api.github.com/search/${type}?q=${searchTerm}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`,
                },
            }
        );
        console.log(`https://api.github.com/search/${type}?q=${searchTerm}`);

        // parse the githubResponse and extract relevant data
        res.send(response.data);
    } catch (error) {
        if (error.response) {
            // Handle 4XX and 5XX errors
            const statusCode = error.response.status;
            const errorMessage = error.response.data;

            res.status(statusCode).send(errorMessage);
        } else if (error.request) {
            // Handle network errors
            res.status(500).send("Network error");
        } else {
            // Handle other errors
            res.status(500).send("Unexpected error");
        }
    }
};

module.exports = search;
