
var SDK = require('../../../sdkPack/wx_SDK-1.0')['default']

/**
* @ 初始化SDK 参数配置如下:
* {
*  @accessToken access_token => 密钥
*  @videoContextId => 视频ID
*  @whiteboardContextId => 画布ID
* }
*/
var token = '${access_token}' // 通过接口请求返回 access_token
var options = {
  accessToken: token,
  videoContextId: 'tf-video-player',
  whiteboardContextId: 'canvas'
}
var HTSDK = new SDK(options, (initData) => {
  console.log('TalkFun SDK init success!')
  this.initCall(initData)
  callback && callback(this.HTSDK)
})
// pages/live/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mediaUrl:"http://open.talk-fun.com/live/loginCourse.php?id=15904&sign=c5befc5ac0fd6ad358c82dd534d542c9"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})