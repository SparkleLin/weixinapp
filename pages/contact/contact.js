// pages/contact/contact.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
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

  onContactPhoneTaped: function(event) 
  {
    var phoneNumber = event.currentTarget.dataset.phoneNumber;
    wx.showActionSheet({
      itemList: ["拨打电话", "添加联系人"],
      success: function(res)
      {
        switch(res.tapIndex)
        {
          case 0: //拨打电话
            wx.makePhoneCall({
              phoneNumber: phoneNumber,
            });
            break;
          default:
            wx.addPhoneContact({
              firstName: "手工蚕丝被",
              mobilePhoneNumber: phoneNumber
            });
        }
      },
      fail: function(res)
      {
        // do nothing for now
      }
    })
  }
})