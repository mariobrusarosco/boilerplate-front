const fetch = require("isomorphic-unfetch")

const createShowPages = async () => {
    const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
    const data = await res.json();
    const shows = data.map(entry => entry.show);

    return shows.reduce((acc, show) => {
        acc[`/show/${show.id}`] = { page: "/show/[id]", query: { id: show.id }};
        return acc 
    }, {});
}

module.exports = {
    createShowPages
}