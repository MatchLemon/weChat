// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: 31.2111688,
    longitude: 121.6195233,
      markers: [{
        iconPath: "/resources/map-icon.png",
        id: 0,
        latitude: 31.2111688,
        longitude: 121.6195233,
        width: 50,
        height: 50
      }],
      polyline: [{
        points: [{
          latitude: 31.2111688,
          longitude: 121.6195233,
        }, {
            latitude: 31.2111688,
            longitude: 121.6195233,
        }],
        color: "#FF0000DD",
        width: 2,
        dottedLine: true
      }]
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
  
  },

getData:function(){
  // wx.request({
  //   url: 'www.baidu.com',
  //   data: {},
  //   header: {
  //     'content-type': 'application/json' 
  //   },
  //   success: function (res) {
  //     console.log(res.data)
  //   }
  // })
console.log("555555");
},
scan:function() {
  wx.scanCode({
    success: (res) => {
      console.log(res)
    }
  })
},
local:function(){
  wx.getLocation({
    type: 'gcj02',
    success: (res) => {
      var latitude = res.latitude // 经度
      var longitude = res.longitude // 纬度
      this.setData({
        latitude: res.latitude,
        longitude: res.longitude,
        polyline :[{
          points: [{
            latitude: res.latitude,
            longitude: res.longitude
          }, {
            latitude: 31.2111688,
            longitude: 121.6195233,
          }],
          color: "#FF0000DD",
          width: 2,
          dottedLine: true
        }]
      });
    }
  })
}

})