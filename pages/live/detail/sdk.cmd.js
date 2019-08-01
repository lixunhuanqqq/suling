var SDK = require('../../../sdkPack/wx_SDK-1.0')['default']
module.exports = {
  HTSDK: null,
  parent: null,
  // 监听
  listener() {
    var HTSDK = this.HTSDK
    // 错误
    HTSDK.on('live:error', function (res) {
      console.error('⚠️ 错误警告 ==> ', res.msg)
    })
    // 聊天列表
    HTSDK.on('live:chat:list', (list) => {
      this.parent.setData({
        chatList: list
      })
    })
    // 顶出房间
    HTSDK.on('member:forceout', () => {
      wx.showToast({
        title: '你已在其他地方登陆该直播...',
        icon: 'none',
        mask: true,
        duration: 5000,
        success() {
          // todo..
        }
      })
    })
    // 踢出房间 
    HTSDK.on('member:kick', () => {
      wx.showToast({
        title: '你已被踢出房间...',
        icon: 'none',
        mask: true,
        success() {
          // todo...
        }
      })
    })
    // 公告信息
    HTSDK.on('announce:notice', (res) => {
      wx.showModal({
        title: '公告',
        content: res.content,
        showCancel: false
      })
    })
    // 接收聊天
    HTSDK.on('chat:send', (chat) => {
      this.parent.data.chatList.push(chat)
      this.parent.setData({
        chatList: this.parent.data.chatList
      })
    })
    // live video url
    HTSDK.on('live:video:url', (url) => {
      this.parent.setData({
        mediaUrl: url
      })
    })
    // live start
    HTSDK.on('live:start', (res) => {
      wx.setNavigationBarTitle({
        title: res.title
      })
      this.parent.setData({
        isLive: true,
        title: res.title
      })
    })
    // live stop
    HTSDK.on('live:stop', () => {
      this.parent.setData({
        isLive: false,
        title: ''
      })
    })
    // camera-start
    HTSDK.on('camera:start', (res) => {
      this.parent.setData({
        showMeidaView: true
      })
    })
    // camera-stop
    HTSDK.on('camera:stop', () => {
      this.parent.setData({
        showMeidaView: false
      })
    })
    // 课件配图更新
    HTSDK.on('whiteboard:ppt:update', (pptUrl) => {
      this.parent.setData({
        pptPath: pptUrl
      })
    })
    // 画板动态高度
    HTSDK.on('live:canvas:height', (canvasHeight) => {
      this.parent.setData({
        canvasHeight: canvasHeight ? canvasHeight + 'px' : '100%'
      })
    })
    // whiteboard
    HTSDK.on('whiteboard:setpage', (data) => {
      // 背景颜色, 是否白版, 图片, 页码
      this.parent.setData({
        whiteboardBackgroundColor: data.backgroundColor,
        isWhiteboard: data.isWhiteboard
      })
    })
    // PPT Y 滚动
    HTSDK.on('whiteboard:translateY', (scrollY) => {
      this.parent.setData({
        translateY: scrollY
      })
    })
  },
  // 初始化调用
  initCall (initData) {
    // 初始化公告显示
    if (initData.announce.notice && initData.announce.notice.content.length > 0) {
      wx.showModal({
        title: '公告',
        content: initData.announce.notice.content,
        showCancel: false
      })
    }
  },
  // 初始化
  init (parent, callback) {
    // wx parent
    this.parent = parent
    /**
     * @ 初始化SDK 参数配置如下:
     * {
     *  @accessToken token key
     *  @videoContextId 视频ID
     *  @whiteboardContextId 画布ID
     * }
     */
    var token = 'ImN1UDO1M2NyAzMjNjN1gjM4EmN5EmZxQmYhFDZ2cTZ8xHf9JSMzQTMzMzX2QDNwMDOiojIl1WYuJnIsAjOiEmIs01W6Iic0RXYiwCNwkTOyYDN2UTM6ISZtlGdnVmciwiI1czMwUTOxgjI6ICZphnIsQTM0ITM6ICZpBnIsAjOiQWanJCLxMDNxMzM6ICZp9VZzJXdvNmIsIiI6IichRXY2FmIsAjOiIXZk5WZnJCL0ATO5MjN0YTNxojIlJXawhXZiwiN0QDMzgjOiQWat92byJCLiQ3clRnI6ISZtFmbrNWauJCLiIXZzVnI6ISZs9mciwiIyEDMwATMiojIklWdiwCNxQjMxojIkl2XyVmb0JXYwJye' // 通过接口请求返回token
    var options = {
      accessToken: token,
      videoContextId: 'tf-video-player',
      whiteboardContextId: 'canvas'
    }
    this.HTSDK = new SDK(options, (initData) => {
      console.log('TalkFun SDK init success!')
      this.initCall(initData)
      callback && callback(this.HTSDK)
    })
    // 监听
    this.listener()
  }
}