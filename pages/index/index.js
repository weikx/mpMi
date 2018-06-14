//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onHide: function(options){
    
  },
  onShow: function (options) {
    console.log(options);
  },
  onLoad: function () {
    console.log('onload')
  }
})