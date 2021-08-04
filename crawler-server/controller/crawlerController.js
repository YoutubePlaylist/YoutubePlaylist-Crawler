const util = require('../modules/util');
const responseMessage = require('../modules/responseMessage');
const statusCode = require('../modules/statusCode');
const { Utils } = require('sequelize');

module.exports = {
    test: async (req, res) => {
        const search = decodeURIComponent(req.params.search);

        console.log(search);
        const ytsr = require('ytsr');


        const testurl = 'bts'
        const test = await ytsr('https://www.youtube.com/results?search_query=' + search + '&sp=EgIQAQ%253D%253D', { pages: 2 });
        res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.SEARCH_BANNER_BY_STARRTDATE_SUCCESS, test));

        return res;

    }
}