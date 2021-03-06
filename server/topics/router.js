const topicController = require('./controller')
const checkToken = require('../middleware/checkToken.js')

module.exports = (router) => {
	router.post('/topic/create', checkToken, topicController.Create)
		.get('/topic/getTopicInfoById', checkToken, topicController.GetTopicInfoById)
		.post('/topic/delete', checkToken, topicController.DeleteTopic)
		.post('/topic/update', checkToken, topicController.UpdateTopic)
}