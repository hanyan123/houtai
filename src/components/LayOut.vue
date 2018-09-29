
<template>
    <div class="layout">
        <Layout>
            <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
                <Menu :open-names="opendName" :active-name="activeNames"  theme="dark" width="auto" :class="menuitemClasses">
                    <Submenu v-for="item in permission_routers" :name="item.meta.index" v-if = "(!item.hidden ||　item.hidden!=true)&&item.children.length!=0">
                        <template slot="title">
                            <Icon :type="item.meta.icon"></Icon>
                            <span class="item-title">{{ item.name }}</span>
                        </template>
                        <!--
                        	作者：13663071703@163.com
                        	时间：2018-09-18
                        	描述：多级路由嵌套
                        -->
                        <template v-for="(nav,eq) in item.children">
	                        <router-link v-if="!nav.children" :to="{path:nav.path}" >
	                        	<MenuItem v-if="isCollapsed==false" :name="nav.meta.index">{{ nav.name }}</MenuItem>
	                        </router-link>
	                        <Submenu v-else :name="nav.meta.index" :class="hiddenMenu">
				                <template slot="title" v-if="isCollapsed==false"><span class="item-title">{{ nav.name}}</span></template>
				                <router-link v-for="child in nav.children" :to="{path:child.path}">
				                	<MenuItem v-if="isCollapsed==false" :name="child.meta.index">{{child.name}}</MenuItem>
				                </router-link>
				            </Submenu>
			            </template>
                    </Submenu>
                </Menu>
            </Sider>
            <Layout>
                <Header :style="{padding: 0}" class="layout-header-bar">
            		<Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon>
                	<Breadcrumb>
				        <BreadcrumbItem >{{indexPath}}</BreadcrumbItem>
				    </Breadcrumb>
				    <div class="user-actions">
				    	<div class="user-head" @click="showDropDown()">
				    		<img src="../assets/image/touxiang.jpg">
				    	</div>
				    	<Icon type="ios-arrow-down userarrow" size="16"/>
				    	<Dropdown trigger="custom" @on-click="changeMenu" style="margin-left: 20px" :visible="showDown">
					        <DropdownMenu slot="list">
					            <DropdownItem name="logout">退出</DropdownItem>
					            <DropdownItem>首页</DropdownItem>
					        </DropdownMenu>
					    </Dropdown>
				    </div>
				    <div class="badge">
				    	<Badge dot>
							<Icon type="ios-notifications-outline" size="26"></Icon>
						</Badge>
				    </div>
                </Header>
                <tagviews></tagviews>
                <Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">
                    <router-view></router-view>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>
<script>
	import tagviews from '@/components/comview/tagViews'
	import { mapGetters } from 'vuex'
    export default {
        data () {
            return {
                isCollapsed: false,
                showDown:false,
                //opendName:[],
                //activeName:""
            }
        },
        components:{
        	tagviews
        },
        computed: {
        		...mapGetters([
				      'permission_routers',//this.$store.getters.permission_routers
				    ]),
            rotateIcon () {
                return [
                    'menu-icon',
                    this.isCollapsed ? 'rotate-icon' : ''
                ];
            },
            menuitemClasses () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            },
            hiddenMenu (){
            	return this.isCollapsed?"hiddenmenu":''
            },
//          routers (){
//          	return this.$store.getters.permission_routers//this.$store.state.permissions.routers
//          },
            indexPath (){
            	return this.$route.path
            },
            activeNames (){
            	return this.$route.meta.index
            },
            opendName (){
            	//console.log(this.$route.meta.open)
              	
            	return this.$route.meta.open
            },
            
        },
        methods: {
            collapsedSider () {
                this.$refs.side1.toggleCollapse();
            },
            getRouters (){
            		console.log(this.router)
            },
            showDropDown(){
            	this.showDown = !this.showDown
            },
            changeMenu (name) {
            	console.log(name)
            	if(name=="logout"){
            		this.$store.dispatch('LogOut').then(() => {
	            		//console.log(11)
	            		this.$router.push({ path: '/login' })
	            	})
            	}
            }
        },
        created (){
        		this.getRouters()
        }
    }
</script>
<style>
    .ivu-breadcrumb{ float: left;}
	.ivu-icon-md-menu{
		float:left;
		margin: 0 15px !important;
		margin-top: 20px !important;
	}
	.badge{
		height: 26px;
		width: 26px;
		float: right;
		margin-right: 30px;
		margin-top: 19px;
	}
	.ivu-badge{
		display: block;
	}
	.ivu-badge i{ display: block;}
	.layout{
        border: 1px solid #d7dde4;
        background: #f2f2f2;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .menu-icon{
        transition: all .3s;
    }
    .rotate-icon{
        transform: rotate(-90deg);
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu .ivu-menu-submenu-title-icon{
    	display: none;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
    .user-actions{ margin-top: 12px;float: right; margin-right: 30px; width: 40px; height: 40px; box-sizing: content-box; -webkit-box-sizing: content-box; padding-right: 40px; cursor: pointer; position: relative;}
    .user-head{ width: 100%; height: 100%; border-radius: 4px; overflow: hidden;}
    .user-head img{ width: 100%;}
    .ivu-icon-ios-arrow-down{ position: absolute; right: 10px; bottom: 0; }
    .ivu-select-dropdown{ top: 50px !important;}
    .hiddenmenu{ display: none;}
    .userarrow{ bottom: 0 !important;}
</style>