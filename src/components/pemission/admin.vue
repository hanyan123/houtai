<template>
	<div>
		<Row style="background:#eee;padding:20px">
	        <Col span="11">
	            <Card :bordered="false">
	                <p slot="title">今日待办事项</p>
	                <p>Content of card</p>
	                <p>Content of card</p>
	                <p>Content of card</p>
	            </Card>
	        </Col>
	        <Col span="11" offset="2">
	            <Card shadow>
	                <p slot="title">明天安排事项</p>
	                <p>Content of card</p>
	                <p>Content of card</p>
	                <p>Content of card</p>
	            </Card>
	        </Col>
	    </Row>
	</div>
</template>

<script>
</script>

<style>
</style>