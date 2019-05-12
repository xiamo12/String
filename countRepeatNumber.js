function count(str) {//计算字符串中字母重复的次数，以key:value的形式放到对象JSON里。
	var json={};
	for (var i = 0; i < str.length; i++) {
		if (str[i]!='') {//思路：创建空对象，判断对象里是否有该属性key，有的话属性值加一，没有的话添加上去，然后属性值加1.
			if (json[str[i]]) {
				json[str[i]] += 1;
			}
			else{
				json[str[i]]=1;
			}
		}
	}
	return json;
}

console.log(count('hhello112'));