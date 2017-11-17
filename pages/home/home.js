var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
  data: {
    tabs: ["选项一", "选项二", "选项三"],
    activeIndex: 1,
    sliderOffset: 0,
    sliderLeft: 0,
       items : [
      {
        "name":"小二",
        "date":"2017-11-16",
        "des":"属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用"
      },
      {
        "name": "小二 1",
        "date": "2017-11-16",
        "des": "属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用"
      }
      ,
      {
        "name": "小二 1",
        "date": "2017-11-16",
        "des": "3333333333"
      }
         ,
      {
        "name": "小二 1",
        "date": "2017-11-16",
        "des": "3333333333"
      }
         ,
      {
        "name": "小二 1",
        "date": "2017-11-16",
        "des": "属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用"
      }
         ,
      {
        "name": "小二 1",
        "date": "2017-11-16",
        "des": "3333333333"
      }
         ,
      {
        "name": "小二 1",
        "date": "2017-11-16",
        "des": "3333333333"
      }
         ,
      {
        "name": "小二 1",
        "date": "2017-11-16",
        "des": "3333333333"
      }
    ]
  },
  onLoad: function () {
    var that = this;

    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },

  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  }
});