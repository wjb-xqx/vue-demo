<template>
   
   <div>
      <mt-swipe :auto="4000">
         <mt-swipe-item>1</mt-swipe-item>
         <mt-swipe-item>2</mt-swipe-item>
         <mt-swipe-item>3</mt-swipe-item>
      </mt-swipe>
      
      <div class="mui-content">
		  <ul class="mui-table-view mui-grid-view mui-grid-9">
		      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		             <img src='../../lib/images/menu1(1).png' alt="">
		              <div class="mui-media-body">新闻咨询</div></a></li>
		      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		             <img src='../../lib/images/menu2.png' alt="">
                    <div class="mui-media-body">图片分享</div></a></li>
		      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		             <img src='../../lib/images/menu3.png' alt="">
                   <div class="mui-media-body">商品购买</div></a></li>
		      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		             <img src='../../lib/images/menu4.png' alt="">
                    <div class="mui-media-body">留言反馈</div></a></li>
		      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		           <img src='../../lib/images/menu5.png' alt="">
                    <div class="mui-media-body">视频专区</div></a></li>
             <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		       <img src='../../lib/images/menu6.png' alt="">
		       <div class="mui-media-body">练习我们</div></a></li>
		  </ul> 
		</div>

      <h3>home</h3> 
   </div>
</template>
<script>
import { Toast } from 'mint-ui'
export default {
   data(){
      return {
         lunboList: []
      }
   },
   created(){
      //轮播图
      // this.getAllbanner()
   },
    methods:{
      //  getAllbanner(){
      //     this.$http.get('http://127.0.0.1:5001/getAllbanner').then(result=>{
      //        console.log(result.body)
               // if (result.body.status ===0) {
               //    this.lunboList = result.body
               // }else {
               //    Toast('加载失败’)
               // }
      //     })
      //  }
    }
}
</script>
<style scoped>
.mint-swipe{
   height: 200px;
}
.mui-grid-view.mui-grid-9{
   background-color: #fff;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
   border:0;
}
.mui-grid-9 img {
   width: 60px;
   height: 60px;
}
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
   font-size: 14px;
}
</style>
