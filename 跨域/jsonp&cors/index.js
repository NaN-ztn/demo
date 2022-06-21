/* jsonp 实现跨域 
缺点: 只能 get 类型
      可能受到 xss 攻击
优点:  兼容性好 */
function jsonp({ url, params, callback }) {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script');
    params = { ...params, callback };
    let arr = [];
    for (const key in params) {
      arr.push(`${key}=${params[key]}`);
    }
    script.src = `${url}/?${arr.join('&')}`;
    document.body.appendChild(script);
  });
}

function hello(str) {
  console.log(str);
}

jsonp({
  url: 'http://localhost:3000/hello',
  params: {
    name: 'user',
  },
  callback: 'hello',
}).then((data) => {
  console.log(data);
});

$.ajax({
  url: 'http://localhost:3000/hello_ajax',
  dataType: 'jsonp',
  type: 'get',
  success: (data) => {
    console.log(data.msg);
  },
});

/* 
cors 跨域 
和ACAO响应头字段有关
分为简单请求和复杂请求
简单请求有 get put head
复杂请求会多一次预检需要进行额外配置
*/
