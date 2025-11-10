const CUSTOMER_SITES = {    
  maotai: {        
    api: 'https://caiji.maotaizy.cc/api.php/provide/vod/at/josn',        
    name: '茅台资源',    
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
  }
};

// 调用全局方法合并（原有逻辑不变）
if (window.extendAPISites) {    
  window.extendAPISites(CUSTOMER_SITES); // 传入包含所有站点的对象
} else {    
  console.error("错误：请先加载 config.js！");
}
