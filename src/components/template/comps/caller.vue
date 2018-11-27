<template>
	<div style="padding: 20px;">
		<div class="">
			<Input type="textarea" placeholder="请输入内容" v-model="value7" :rows="rows"/>
		</div>
		
		<div class="message-board" style="padding-top: 20px;">
			<div class="message-item">
				<div class="header">
					<div class="header-img">
						<img src="../../../assets/image/touxiang.jpg">
					</div>
					<div class="name">
						胡歌
					</div>
				</div>
				<div class="context">
					<p>历经打磨，@索尼中国 再献新作品—OLED电视A8F完美诞生。
						很开心一起参加了A8F的“首映礼”！[鼓掌]正如我们演员对舞台的热爱，
						索尼对科技与艺术的追求才创造出了让人惊喜的作品。作为A1兄弟款，
						A8F沿袭了黑科技“屏幕发声技术”和高清画质，色彩的出众表现和高端音质，
						让人在体验的时候如同身临其境。A8F，这次的“视帝”要颁发给你！ 索尼官网预售： 
						O网页链接 索尼旗舰店预售：</p>
				</div>
			</div>
			<div class="message-item">
				<div class="header">
					<div class="header-img">
						<img src="../../../assets/image/touxiang.jpg">
					</div>
					<div class="name">
						胡歌
					</div>
				</div>
				<div class="context">
					<p>历经打磨，@索尼中国 再献新作品—OLED电视A8F完美诞生。
						很开心一起参加了A8F的“首映礼”！[鼓掌]正如我们演员对舞台的热爱，
						索尼对科技与艺术的追求才创造出了让人惊喜的作品。作为A1兄弟款，
						A8F沿袭了黑科技“屏幕发声技术”和高清画质，色彩的出众表现和高端音质，
						让人在体验的时候如同身临其境。A8F，这次的“视帝”要颁发给你！ 索尼官网预售： 
						O网页链接 索尼旗舰店预售：</p>
				</div>
			</div>
			<div class="message-item">
				<div class="header">
					<div class="header-img">
						<img src="../../../assets/image/touxiang.jpg">
					</div>
					<div class="name">
						胡歌
					</div>
				</div>
				<div class="context">
					<p>历经打磨，@索尼中国 再献新作品—OLED电视A8F完美诞生。
						很开心一起参加了A8F的“首映礼”！[鼓掌]正如我们演员对舞台的热爱，
						索尼对科技与艺术的追求才创造出了让人惊喜的作品。作为A1兄弟款，
						A8F沿袭了黑科技“屏幕发声技术”和高清画质，色彩的出众表现和高端音质，
						让人在体验的时候如同身临其境。A8F，这次的“视帝”要颁发给你！ 索尼官网预售： 
						O网页链接 索尼旗舰店预售：</p>
				</div>
			</div>
			<div class="message-item">
				<div class="header">
					<div class="header-img">
						<img src="../../../assets/image/touxiang.jpg">
					</div>
					<div class="name">
						胡歌
					</div>
				</div>
				<div class="context">
					<p>历经打磨，@索尼中国 再献新作品—OLED电视A8F完美诞生。
						很开心一起参加了A8F的“首映礼”！[鼓掌]正如我们演员对舞台的热爱，
						索尼对科技与艺术的追求才创造出了让人惊喜的作品。作为A1兄弟款，
						A8F沿袭了黑科技“屏幕发声技术”和高清画质，色彩的出众表现和高端音质，
						让人在体验的时候如同身临其境。A8F，这次的“视帝”要颁发给你！ 索尼官网预售： 
						O网页链接 索尼旗舰店预售：</p>
				</div>
			</div>
			<div class="message-item">
				<div class="header">
					<div class="header-img">
						<img src="../../../assets/image/touxiang.jpg">
					</div>
					<div class="name">
						胡歌
					</div>
				</div>
				<div class="context">
					<p>历经打磨，@索尼中国 再献新作品—OLED电视A8F完美诞生。
						很开心一起参加了A8F的“首映礼”！[鼓掌]正如我们演员对舞台的热爱，
						索尼对科技与艺术的追求才创造出了让人惊喜的作品。作为A1兄弟款，
						A8F沿袭了黑科技“屏幕发声技术”和高清画质，色彩的出众表现和高端音质，
						让人在体验的时候如同身临其境。A8F，这次的“视帝”要颁发给你！ 索尼官网预售： 
						O网页链接 索尼旗舰店预售：</p>
				</div>
			</div>
		</div>
		<div class="btn" style="text-align: center;">
			<Button type="primary" size="large">加载更多</Button>
		</div>
	</div>
</template>

<script>
	export default {
        data () {
            return {
                value7: '',
                rows:4
            }
        },
        watch: {
		    value7: function(curVal,oldVal){
		        console.log(curVal);
		    },
		},
    }
</script>

<style scoped="scoped">
	img{ display: block;}
	.header{overflow: hidden;}
	.header-img{ float: left; width: 46px; height: 46px; border-radius: 50%; overflow: hidden;}
	.header-img img{ width: 100%; height: 100%;}
	.name{font-weight: 600;
    color: #337ab7; font-size: 14px; margin-left: 10px; float: left;}
    .context{ font-size: 12px; color: #333333; padding-top: 10px;}
    .message-item{ margin-bottom: 20px;}
</style>