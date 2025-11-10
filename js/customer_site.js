const CUSTOMER_SITES = {    
  qiqi: {        
    api: 'https://www.qiqidys.com/api.php/provide/vod',        
    name: '七七资源',    
  },
  // 新增第一个接口：新新资源
  maotai: {        
    api: '	https://caiji.maotaizy.cc/api.php/provide/vod/at/josn',        
    name: '茅台资源',    
  },
  // 新增第二个接口：爱爱资源
  heiliao: {        
    api: 'https://www.heiliaozyapi.com/api.php/provide/vod/?ac=list',        
    name: '黑料资源',    
  },
  // 可继续添加更多...
  xiangjiao: {        
    api: 'https://www.xiangjiaozyw.com/api.php/provide/vod/?ac=list',        
    name: '香蕉资源',    
  }
};

// 调用全局方法合并（原有逻辑不变）
if (window.extendAPISites) {    
  window.extendAPISites(CUSTOMER_SITES); // 传入包含所有站点的对象
} else {    
  console.error("错误：请先加载 config.js！");
}
