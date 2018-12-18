<template>
	<div class="headerImg">
	  <img :src="pictureUrl" alt="" style="height:150px;width:150px;"/>
	  <input type="file" class="file-button" @change="onFileChange" />
	</div>
</template>
<style></style>
<script>
	export default{
		data(){
	      return {
	        images:[],
	        pictureUrl:'../../static/img/headerImg.jpg'
	      }
	 	},
		methods:{
	    onFileChange (e) {
	      var files = e.target.files || e.dataTransfer.files
	      if (!files.length) return
	      this.createImage(files)
	    },
	    createImage (file) {
	      var vm = this
	      var reader = null
	      reader = new window.FileReader()
	      reader.readAsDataURL(file[0])
	      reader.onload = function (e) {
	    vm.pictureUrl = e.target.result
	      }
	    },
	  },
	}
</script>