function params(url){
  var str = url.split('?')[1];
  var items = str.split('&');
  var json = {};
  for(var i = 0; i < items.length; i++){
   var arr = items[i].split('=') ;
   json[arr[0]]=arr[1];
  }
  return json;
}

var url='http://baidu.com?a=11&b=22&c=33';
console.log(params(url));