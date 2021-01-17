require("dotenv").config();
const { CREATE_LINK } = require("./utils/linkQueries.js");
const sendQuery = require("./utils/sendQuery");
const format = require("./utils/formatedRes");

exports.handler = async (event) => {
  
  try {
    const {name,url,description} = JSON.parse(event.body);
    const variables = { name, url, description, archived: false };
    const { createLink: createdLink } = await sendQuery(CREATE_LINK, variables);

    return format(200, createdLink);
  } catch (err) {
    console.error(err);
    return format(500, { err: "Something went wrong" });
  }
};
