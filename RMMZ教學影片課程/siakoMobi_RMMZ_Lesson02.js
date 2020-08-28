//=============================================================================
// RMMZ - siakoMobi_RmmzScriptTutorial_02 (如何打開遊戲測試時，同時開啟除錯視窗？)
//=============================================================================

/*:
 * @target MZ
 * @author siakoMobi 
 * @plugindesc 如何打開遊戲測試時，同時開啟除錯視窗？
 * 
 * @help siakoMobi_RmmzScriptTutorial_02.js
 * 
 * 學習如何打開遊戲測試時，同時開啟除錯視窗？
 * 
 *
*/

(() => {

    //插件參數設定    
    const _PLUGIN_NAME = "siakoMobi_RmmzScriptTutorial_02";
    
    let params = PluginManager.parameters( _PLUGIN_NAME );

    //別名引用 Call this Scene_Boot.prototype.initialize 函數
    const _RMMZ_SIAKOMOBI_SCENE_BOOT_INITIALIZE = Scene_Boot.prototype.initialize;    
    Scene_Boot.prototype.initialize = function(){
        _RMMZ_SIAKOMOBI_SCENE_BOOT_INITIALIZE.call(this);

        if( Utils.isNwjs() && Utils.isOptionValid('test') ){
            let gui = require('nw.gui');
            let win = gui.Window.get();  
            win.showDevTools()
        }
    };

})();
