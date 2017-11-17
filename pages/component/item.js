// pages/component/list-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      listData:{
        type: Object,
        value: {"name":"222"}
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
    mode: 'scaleToFill',
    src:"https://mp.weixin.qq.com/debug/wxadoc/dev/image/cat/0.jpg?t=20171116",
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // select : function(val){

    // }
  }
})
