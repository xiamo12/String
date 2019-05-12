function camel(str){
	var arr=str.split('-');
	for (var i = 0; i < arr.length; i++) {
		arr[i]=arr[i][0].toUpperCase()+arr[i].substring(1);//将首字母转换为大写，再与第0个字母之后的所有字符串拼接
	}
	return arr.join('');//join()方法将数组元素连接成字符串
}
 console.log(camel('leuo-fei-and'));


 function camel(str){
 	var arr=str.match(/[\w-]/g);//返回一个数组，该数组的元素是字符串中所有正则表达式的匹配项。
 	for (var i = 0; i < arr.length; i++) {
 		if(arr[i]=='-'&&i!=0){//数组元素是'-'且不是在首位，则删除'-'并把其后的字母转换为大写；
 			arr.splice(i,1);
 			arr[i]=arr[i].toUpperCase();
 		}
 		else if (arr[i]=='-'&&i==0) {//数组元素是'-'且在首位，则删除'-'；
 			arr.splice(i,1);
 		}
 	}
 	return arr.join('');
 }
 console.log(camel('-hello-wor'));
