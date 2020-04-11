---
sidebar: auto
---
# 自定义文档

::: tip {{ msg }}
This is a tip
:::

::: warning 注意
This is a warning
:::

::: danger 终止
This is a dangerous warning
:::

# 标题2	

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data: function() {
	  return{
		msg: "闫耀辉"
		}
	},
	mounted: function() {
		let _this = this;
		axios.get('http://www.ccbcz.cn/content/public/index.php/index/api1/index')
		.then(function(res){
			console.log(res);
			_this.msg = res.data[0].model;
		})
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
