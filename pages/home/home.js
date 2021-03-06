
import {Home} from 'home-model.js';
var home = new Home();
Page({
  data: {
  
  },
  
  onLoad:function(){
    this._loadData();
  },

  _loadData:function(){
    var id = 1;
    home.getBannerData(id,(res)=>{
      //数据绑定
      this.setData({
        'bannerArr':res
      });
    });

    home.getThemeData((res)=>{
      this.setData({
        'themeArr': res
      });
    });

    home.getProductsData((data)=>{
      this.setData({
        productsArr:data
      });
    });
  },
  
  onProductsItemTap:function(event){ 
    var id = home.getDataSet(event,'id');
    wx.navigateTo({
      url: '../product/product?id='+id
    })
  },

  onThemeItemTap: function (event) {
    var id = home.getDataSet(event, 'id');
    var name = home.getDataSet(event, 'name');
    var des = home.getDataSet(event, 'des');
    wx.navigateTo({
      url: '../theme/theme?id=' + id + '&name=' + name + '&des=' + des
    })
  },

})