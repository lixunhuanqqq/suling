Component({
  properties: {
    // 是否开启摄像头
    showMeidaView: {
      type: Boolean,
      value: false,
    },
    // video urls
    mediaUrl: {
      type: Object,
      value: {}
    }
  },
  onLoad () {
    console.warn('媒体组件加载成功!')
  },
  data: {
    // 这里是一些组件内部数据
    someData: {}
  },
  methods: {
    // 这里是一个自定义方法
    customMethod: function(){}
  }
})