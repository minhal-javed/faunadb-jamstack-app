require("dotenv").config();
const { UPDATE_LINK } = require("./utils/linkQueries.js");
const sendQuery = require("./utils/sendQuery");
const format = require("./utils/formatedRes");

exports.handler = async (event) => {
  if (event.httpMethod !== "PUT") {
    return format(405, { err: "Method not supported" });
  } else {
    try {
      const { name, url, description, _id: id, archived } = JSON.parse(
        event.body
      );
      const variables = { name, url, description, id, archived };
      const { updateLink: updatedLink } = await sendQuery(
        UPDATE_LINK,
        variables
      );
      return format(200, updatedLink);
    } catch (err) {
      console.error(err);
      return format(500, { err: "something went wrong" });
    }
  }
};
