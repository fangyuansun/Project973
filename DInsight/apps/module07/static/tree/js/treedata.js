//monitor主页树数据配置------------------------------------------------------------------------------------
function monitorTree(){
	var testMenu=[
		{
			"name": "公共卫生",
			"submenu": [
				{
					"name": "食品安全",
					"submenu": [
						{
							"name": "添加剂过量",
							"url": "javascript:draw('item1')",
							"id":"item1"
						},
						{
							"name": "问题食品",
							"url": "javascript:draw('item2')",
							"id":"item2"
						},
						{
							"name": "问题牛奶",
							"url": "javascript:draw('item3')",
							"id":"item3"
						},
						{
							"name": "毒果蔬",
							"url": "javascript:draw('item4')",
							"id":"item4"
						},
						{
							"name": "农药超标",
							"url": "javascript:draw('item5')",
							"id":"item5"
						},
						{
							"name": "问题粮",
							"url": "javascript:draw('item6')",
							"id":"item6"
						},
						{
							"name": "问题肉品",
							"url": "javascript:draw('item7')",
							"id":"item7"
						},
						{
							"name": "问题蛋",
							"url": "javascript:draw('item8')",
							"id":"item8"
						},
						{
							"name": "婴儿问题食品",
							"url": "javascript:draw('item9')",
							"id":"item9"
						},
						{
							"name": "问题酒",
							"url": "javascript:draw('item10')",
							"id":"item10"
						},
						{
							"name": "问题油盐副食",
							"url": "javascript:draw('item11')",
							"id":"item11"
						}
					]
				},
				{
					"name": "传染病疫情",
					"url": "javascript:draw('item12')",
					"id":"item12"
				},
				{
					"name": "动物疫情",
					"url": "javascript:draw('item13')",
					"id":"item13"
				}
			]
		},
		{
			"name": "社会安全",
			"submenu": [
				{
					"name": "恐怖袭击事件",
					"url": "javascript:draw('item14')",
					"id":"item14"
				},
				{
					"name": "经济安全事件",
					"url": "javascript:draw('item15')",
					"id":"item15"
				},
				{
					"name": "涉外突发事件",
					"url": "javascript:draw('item16')",
					"id":"item16"
				},
				{
					"name": "社会治安事件",
					"url":"javascript:draw('item17')",
					"id":"item17"
						
				}
			]
		},
		{
			"name": "自然灾害",
			"submenu": [
				{
					"name": "水旱灾害",
					"url": "javascript:draw('item18')",
					"id":"item18"
				},
				{
					"name": "气象灾害",
					"url": "javascript:draw('item19')",
					"id":"item19"
				},
				{
					"name": "地震灾害",
					"url": "javascript:draw('item20')",
					"id":"item20"
				},
				{
					"name": "地质灾害",
					"url": "javascript:draw('item21')",
					"id":"item21"
				},
				{
					"name": "海洋灾害",
					"url": "javascript:draw('item22')",
					"id":"item22"
				},
				{
					"name": "生物灾害",
					"url": "javascript:draw('item23')",
					"id":"item23"
				},
				{
					"name": "森林草原火灾",
					"url": "javascript:draw('item24')",
					"id":"item24"
				}
				
			]
		},
		{
			"name": "事故灾难",
			"submenu": [
				{
					"name": "生产安全事故",
					"url": "javascript:draw('item25')",
					"id":"item25"
				},
				{
					"name": "火灾爆炸事故",
					"url": "javascript:draw('item26')",
					"id":"item26"
				},
				{
					"name": "交通运输事故",
					"url": "javascript:draw('item27')",
					"id":"item27"
				},
				{
					"name": "公共设施和设备事故",
					"url": "javascript:draw('item28')",
					"id":"item28"
				},
				{
					"name": "环境污染和生态破坏事件",
					"url": "javascript:draw('item29')",
					"id":"item29"
				}
			]
		}
	];
	
	$(function(){
		new AccordionMenu({menuArrs:testMenu},'.wrap-menu');
	});

}


//monitor点击配置元素页面树数据配置---------------------------------------------------------------------------------
function createtree(){
	var testMenu=[
		{
			"name": "公共卫生",
			"submenu": [
				{
					"name": "食品安全",
					"url": "javascript:loadsel('itempz1','食品安全')",
					"id":"itempz1"
				},
				{
					"name": "传染病疫情",
					"url": "javascript:loadsel('itempz2','传染病疫情')",
					"id":"itempz2"
				},
				{
					"name": "动物疫情",
					"url": "javascript:loadsel('itempz3','动物疫情')",
					"id":"itempz3"
				}
			]
		},
		{
			"name": "社会安全",
			"submenu": [
				{
					"name": "恐怖袭击事件",
					"url": "javascript:loadsel('itempz4','恐怖袭击事件')",
					"id":"itempz4"
				},
				{
					"name": "经济安全事件",
					"url": "javascript:loadsel('itempz5','经济安全事件')",
					"id":"itempz5"
				},
				{
					"name": "涉外突发事件",
					"url": "javascript:loadsel('itempz6','涉外突发事件')",
					"id":"itempz6"
				},
				{
					"name": "社会治安事件",
					"url":"javascript:loadsel('itempz7','社会治安事件')",
					"id":"itempz7"
						
				}
			]
		},
		{
			"name": "自然灾害",
			"submenu": [
				{
					"name": "水旱灾害",
					"url": "javascript:loadsel('itempz8','水旱灾害')",
					"id":"itempz8"
				},
				{
					"name": "气象灾害",
					"url": "javascript:loadsel('itempz9','气象灾害')",
					"id":"itempz9"
				},
				{
					"name": "地震灾害",
					"url": "javascript:loadsel('itempz10','地震灾害')",
					"id":"itempz10"
				},
				{
					"name": "地质灾害",
					"url": "javascript:loadsel('itempz11','地质灾害')",
					"id":"itempz11"
				},
				{
					"name": "海洋灾害",
					"url": "javascript:loadsel('itempz12','海洋灾害')",
					"id":"itempz12"
				},
				{
					"name": "生物灾害",
					"url": "javascript:loadsel('itempz13','生物灾害')",
					"id":"itempz13"
				},
				{
					"name": "森林草原火灾",
					"url": "javascript:loadsel('itempz14','森林草原火灾')",
					"id":"itempz14"
				}
				
			]
		},
		{
			"name": "事故灾难",
			"submenu": [
				{
					"name": "生产安全事故",
					"url": "javascript:loadsel('itempz15','生产安全事故')",
					"id":"itempz15"
				},
				{
					"name": "火灾爆炸事故",
					"url": "javascript:loadsel('itempz26','火灾爆炸事故')",
					"id":"itempz26"
				},
				{
					"name": "交通运输事故",
					"url": "javascript:loadsel('itempz27','交通运输事故')",
					"id":"itempz27"
				},
				{
					"name": "公共设施和设备事故",
					"url": "javascript:loadsel('itempz28','公共设施和设备事故')",
					"id":"itempz28"
				},
				{
					"name": "环境污染和生态破坏事件",
					"url": "javascript:loadsel('itempz29','环境污染和生态破坏事件')",
					"id":"itempz29"
				}
			]
		}
	];
	$(function(){
		new AccordionMenu({menuArrs:testMenu},'.wrapmenu_pz');
	});
}
//gallery主页树数据配置---------------------------------------------------------------------------------