const axios=require('axios');
require('dotenv').config()
const { GET_LINKS } = require('./utils/linkQueries.js');
const sendQuery = require('./utils/sendQuery');
const format=require('./utils/formatedRes')

exports.handler = async (event) => {
    try {
        const res = await sendQuery(GET_LINKS);
        const data = res.allLinks.data
        return format(200,data);
    } catch (err) {
        console.error(err,"error");
        return(500,{err:'something went wrong'})
        
}
}