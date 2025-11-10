const CUSTOMER_SITES = {  
  douban: {        
    api: 'https://caiji.dbzy5.com/api.php/provide/vod/at/josn',        
    name: '豆瓣资源',    
  },
  maotai: {        
    api: 'https://caiji.maotaizy.cc/api.php/provide/vod/at/josn',        
    name: '茅台资源',    
  },
  guangsu: {        
    api: 'https://api.guangsuapi.com/api.php/provide/vod',        
    name: '光速资源',    
  },
  subo: {        
    api: 'https://subocj.com/api.php/provide/vod/at/json',        
    name: '速播资源',    
  },
  hongniu: {        
    api: 'https://www.hongniuzy3.com/api.php/provide/vod',        
    name: '红牛资源',    
  },
  haohua: {        
    api: 'https://hhzyapi.com/api.php/provide/vod/at/json',        
    name: '豪华资源',    
  },
  xinlang: {        
    api: 'https://api.xinlangapi.com/xinlangapi.php/provide/vod',        
    name: '新浪资源',    
  },
  // 新增第一个接口：新新资源
  jinying: {        
    api: 'https://jyzyapi.com/provide/vod/from/jinyingm3u8/at/json',        
    name: '金鹰资源',    
  },
  // 新增第二个接口：爱爱资源
  huya: {        
    api: 'https://www.huyaapi.com/api.php/provide/vod/at/json',        
    name: '虎牙资源',    
  },
  // 可继续添加更多...
  jinchan: {        
    api: 'https://zy.jinchancaiji.com/api.php/provide/vod',        
    name: '金蝉资源',    
  },
  // 可继续添加更多...
  ikun: {        
    api: 'https://ikunzy.com/api.php/provide/vod/at/json',        
    name: 'IKUN资源',    
  }
};

// 调用全局方法合并（原有逻辑不变）
if (window.extendAPISites) {    
  window.extendAPISites(CUSTOMER_SITES); // 传入包含所有站点的对象
} else {    
  console.error("错误：请先加载 config.js！");
}
