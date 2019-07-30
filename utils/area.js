
var str = [];
wx.request({
  url: 'http://localhost:8080/easyjob/getAddressData',
  success(res) {
    if (res.data) {

      str = res.data;
     
    }
  }
})
function getAreaInfo(callBack){
  callBack(str);
 
}

module.exports.getAreaInfo = getAreaInfo;