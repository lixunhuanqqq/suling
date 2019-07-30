Component({
  properties: {
    whiteboardBackgroundColor: {
      type: String,
      value: 'green'
    },
    translateY: {
      type: Number,
      value: 0
    },
    canvasHeight: {
      type: String,
      value: '100%'
    },
    isWhiteboard: {
      type: Boolean,
      value: true
    },
    pptPath: {
      type: String,
      value: ''
    },
    HTSDK: {
      type: Object,
      value: {}
    }
  },
  data: {
    // 这里是一些组件内部数据
    someData: {}
  },
  ready() {
    var ctx = wx.createCanvasContext('canvas', this)
    this.triggerEvent('whiteboardReay', {ctx: ctx})
  },
  methods: {
    // 这里是一个自定义方法
    htsdkEvent (htsdk) {
      console.error(htsdk)
    },
    // customMethod: function(){}
    onShow () {
      // console.log('组件加载成功!', this)
      console.error(this)
    }
  }
})