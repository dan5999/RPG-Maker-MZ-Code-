//=============================================================================
// RMMZ - siakoMobi_RmmzScriptTutorial_03 (如何使用 Sprite 來載入圖片於標題畫面上？)
//=============================================================================

/*:
* @target MZ
* @author siakoMobi
* @plugindesc 學習如何使用 Sprite 來載入圖片於標題畫面上？
* @help siakoMobi_RmmzScriptTutorial_03.js
* 
* 學習如何使用 Sprite 來載入圖片於標題畫面上？
* (圖片讀取 img/pictures 內的圖檔名稱)
*
* @param 標題畫面前景圖片名稱
* @desc 在遊戲標題畫面上，顯示一張圖片
* 預設值：picAtTitle 
* @default picAtTitle
*
*/

(() => {
    //插件參數設定
    const _PLUGIN_NAME = "siakoMobi_RmmzScriptTutorial_03";
    
    let siakoMobi = PluginManager.parameters( _PLUGIN_NAME );
    let showSpritePIC = String( siakoMobi['標題畫面前景圖片名稱'] || 'picAtTitle' );

    //別名引用 Call this Scene_Title.prototype.create 函數並加載新增的 create_PictureAtTitle 函數
    const _RMMZ_SIAKOMOBI_SCENE_TITLE_CREATE = Scene_Title.prototype.create;
    Scene_Title.prototype.create = function() {  
        _RMMZ_SIAKOMOBI_SCENE_TITLE_CREATE.call(this);
        this.create_PictureAtTitle();
    };

    //建立 create_PictureAtTitle 函數來讀取 ./img/pictures 資料夾內的圖片名稱
    Scene_Title.prototype.create_PictureAtTitle = function(){
        this.pictureAtTitle = new Sprite();
        this.pictureAtTitle.bitmap = ImageManager.loadPicture( showSpritePIC );
        this.pictureAtTitle.x = 480;
        this.pictureAtTitle.y = 270;
        this.addChild( this.pictureAtTitle );
    }

})();