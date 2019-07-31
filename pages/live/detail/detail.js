const app = getApp()
var sdkCaller = require('./sdk.cmd')
var utils = require('../../../utils/util')
// pages/live/detail/detail.js
Page({

  data: {
    motto: '欢迎使用TalkFun小程序',
    HTSDK: null,
    // 直播
    isLive: false,
    title: '',
    // 画板
    whiteboardBackgroundColor: null,
    translateY: 0,
    isWhiteboard: false,
    canvasHeight: 0,
    // 课件图片
    pptPath: null,
    // 媒体
    showMeidaView: false,
    mediaUrl: null,
    // 聊天列表
    chatList: [],
    chatMsg: ''
  },
  // 初始化加载 SDK => 绑定状态
  onLoad: function () {
    console.log('loaded')
    sdkCaller.init(this, (HTSDK) => {
      this.HTSDK = HTSDK
      this.HTSDK.setCanvas(this.ctx)
    })
  },
  // 设置canvas ctx
  canvasReady: function (e) {
    console.log('canvas ready!')
    this.ctx = e.detail.ctx
    if (this.HTSDK) {
      this.HTSDK.setCanvas(e.detail.ctx)
    }
  },
  // 聊天信息
  bindChatIpt: function (e) {
    this.setData({
      chatMsg: e.detail.value
    })
  },
  // 发送聊天
  emitChat() {
    this.HTSDK.emit('chat:send', { msg: this.data.chatMsg }, (chat) => {
      // 放送成功
      if (chat.code == 0) {
        this.data.chatList.push(chat.data)
        this.setData({
          chatList: this.data.chatList
        })
        this.setData({
          chatMsg: ''
        })
      }
      // 发送失败
      else {
        wx.showToast({
          title: chat.msg,
          icon: 'none',
          duration: 1500,
          mask: false
        });
      }
    })
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
});


