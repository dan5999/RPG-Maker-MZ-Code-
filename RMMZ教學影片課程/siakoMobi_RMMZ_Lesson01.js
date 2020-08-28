//=============================================================================
// RMMZ - New Plugin Command (如何撰寫插件並使用插件命令調用)
//=============================================================================
 
/*:
 * @target MZ
 * @plugindesc 插件命令使用
 * @author siakoMobi
 * 
 * @help newPluginCommand.js
 * 
 * 學習建立一個RMMZ插件，並使用插件命令來調用對話文字顯示 [嗨！歡迎來到 RMMZ 的世界。]
 * 
 * 使用方式：
 * 1. 在 RMMZ 事件編輯器內選擇[插件命令], 於插件命令視窗中選擇名稱[newPluginCommand]
 * 2. 命令名稱會出現可設定的插件值
 * 3. 選擇參數值雙擊滑鼠左鍵並設定參數內容
 * 
 * @command setKey
 * @text 指令對話文字參數
 * @desc 指令對話文字參數
 * 
 * @arg MessageString
 * @type string
 * @text 對話文字內容值
 * @desc 顯示對話文字內容值
 * 
*/

(() => {
    const pluginName = "newPluginCommand";
    let MessageString = "";

    PluginManager.registerCommand( pluginName, "setKey", args => {
        MessageString = String(args.MessageString);
    });

    const _SceneMap_update = Scene_Map.prototype.update;
    Scene_Map.prototype.update = function(){
        _SceneMap_update.call(this);
        $gameVariables.setValue(10, MessageString);
    }
})();