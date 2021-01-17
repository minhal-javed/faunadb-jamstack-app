require('dotenv').config()
const { DELETE_LINK } = require('./utils/linkQueries.js');
const sendQuery = require('./utils/sendQuery');
const format=require('./utils/formatedRes')

exports.handler = async (event) => {
    if(event.HttpMethod !== 'DELETE'){
        return format(405,{err:'Method not supported'})
    }

    const {id}=JSON.parse(event.body);
    const variables={id}
    try {
        const {deleteLink:deletedLink} = await sendQuery(DELETE_LINK,variables)
        return format( 
            200,deletedLink);
       
    } catch (err) {
        console.error(err); 
        return format(500,{err:'something went wrong'})
        
}
}