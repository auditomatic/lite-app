/* Auditomatic production Service Worker.
 *
 * The production build replaces the placeholders below with a complete,
 * hashed inventory. Source/dev builds deliberately contain empty inventories;
 * they must never claim production offline readiness.
 */

const BUILD_ID = "6cf458f8de5b901bdc13a27481437184234917bf"
const RELEASE_ID = "6cf458f8de5b901bdc13a27481437184234917bf-1e0fef0090502510"
const VENDOR_ID = "d4588e7735b9430116ed6e5d5356da14ba7cd9a9b7797b4005652bf29728d3cb"
const APP_ASSETS = [{"url":"/assets/AddCustomProviderModal-B2r6Pi2h.js","bytes":17021,"sha256":"5c314a8bc00859efb7d5777c25abb62754f2aadcb172e31c19f4e119d5fd7238"},{"url":"/assets/AddCustomProviderModal-BXibXBfG.css","bytes":879,"sha256":"43c6832a71a2919107e9da1ce197901c602bb287211345c658f3512ab510de69"},{"url":"/assets/BuildJudgeDatasetView-CK2azxzz.js","bytes":6987,"sha256":"6e4b37eb925551934b2fcfc04e3306d651096b16d741526d3ed0bc4b21b27ef2"},{"url":"/assets/BuildJudgeDatasetView-NPOkuEAR.css","bytes":3353,"sha256":"6157af36c2993c0b72ea2cd4685f2ab96688ab99d7cc0ab5b4903e2d3eeedc96"},{"url":"/assets/CodeEditor-CItSiwVJ.js","bytes":897,"sha256":"1b9f658d7333d1e109e7b35bfb1c3fc4487e824d38737efe437c3defd264f5dc"},{"url":"/assets/CodeEditor-CfrosA3M.css","bytes":415,"sha256":"4b46da79967f08d54b6e6aaabbb3417681acd40e882a140511bafa256c9b0046"},{"url":"/assets/ColumnFilterPanel-BFZp7G3N.js","bytes":26417,"sha256":"77d768626b08b0902481d0756d44ba527732c1da31cf697496e26b0a4fdec9a2"},{"url":"/assets/ColumnFilterPanel-D-uNO3-O.css","bytes":2280,"sha256":"608718efe88864cc91eb2850c886dc9eaa1bb4d9c2fc4bc29315ee2c7d88149b"},{"url":"/assets/DatasetPreview-6N73bAK6.css","bytes":6379,"sha256":"96643f572ef57afac6c0faf876d73af10d5719c2e0bce78c7969bea725ad4718"},{"url":"/assets/DatasetPreview-Dw1iRP_k.js","bytes":193051,"sha256":"6a4e1a52383ce5a53dadd10fdccb1f0f590aac5d81fb5dc2cc62898a6497ae8a"},{"url":"/assets/DatasetsView-B3QSkzjk.css","bytes":2215,"sha256":"f59eb980effa3548aa7f1248fe0db0f10cb3d1f48e42bd0fbba8c3687bbc05b1"},{"url":"/assets/DatasetsView-DAIqZzZM.js","bytes":9106,"sha256":"f292ae0f2ffcafc3218c79463d3648875ad3cc629141f16985c9a7344c0992ea"},{"url":"/assets/ExportDataModal-BFYwKsn8.js","bytes":37185,"sha256":"2758ecd6a87a6ee4724256b26e444f1c851ba8e035e2545bcd66f41eb25c30e2"},{"url":"/assets/ExportDataModal-Ee-aAGef.css","bytes":4598,"sha256":"321c52576a915001a609bedff4a27f90a724f13a8854fe7a09c01038eac9705b"},{"url":"/assets/GenericModelSelectorModal-DW2vPRyU.css","bytes":15062,"sha256":"ff73a07f4fc9e0c115c885ac3c25de9dd5cbdd39a5fb54cffc28a12a4aece08f"},{"url":"/assets/GenericModelSelectorModal-ii0dC4A7.js","bytes":46305,"sha256":"62efcf55df22f383049b2bc97bdd5f57dbe497ddb20579555c022b6e2623f6d4"},{"url":"/assets/HomeView-BHlqhqJM.css","bytes":4565,"sha256":"efa24babb349d45ac236e450e8ea115c989e49e689c311888b115d80f8822db6"},{"url":"/assets/HomeView-D1CKhY27.js","bytes":10064,"sha256":"c79632af154f9d6431c722f9e676f440606ea549d0552810e34e1f763c916828"},{"url":"/assets/HydratedPromptPreview-CszOmz-M.js","bytes":10752,"sha256":"df7c8934f82bfc1bfffc482b1ce830f5c761c472ac5f1aa56e0f4858158920b2"},{"url":"/assets/HydratedPromptPreview-dIGoYJXr.css","bytes":8011,"sha256":"0d796a1ab0c3ab796a0473ab359ba372ab40fd2fabd424799d5e2b102ec74a52"},{"url":"/assets/ModelConfiguration-BUZU9vfx.js","bytes":17618,"sha256":"dc1058bb556321d7250e8058d2899c3731d71c0835a96b2c746d734f3de86d40"},{"url":"/assets/ModelConfiguration-Cae6EZj5.css","bytes":4249,"sha256":"6f4b58a43ed8659360717e90f47f3b1cc681bd5967025ef9e9370d52c08d61e9"},{"url":"/assets/ModelContractInspectorModal-B_4EqDJr.js","bytes":4976,"sha256":"bb8b748974cb1c3c6c0261162c71ffee3673a5c4fb7fb7b704b8ac0a6621ce2f"},{"url":"/assets/ModelContractInspectorModal-dhTnqUJ_.css","bytes":1859,"sha256":"1775e2dff0359ca0d443e4acd9f70c1334bd67c3686efba3ae8070d128e24b81"},{"url":"/assets/ModelsView-CN2Q_r_S.js","bytes":45382,"sha256":"3842a87b593251ab812d0b3b4eec2480d5bff90a0fd65a2d6b18f092119c0159"},{"url":"/assets/ModelsView-DfvvBbE0.css","bytes":13861,"sha256":"25d8f6004b88d76c34b983638e9cae4b3d5317f86d6d9660ebbb2aec1dcaa2bc"},{"url":"/assets/OllamaModelManager-CKgcwFz4.css","bytes":15299,"sha256":"37d3c9f9cae62ba29707606da74037ab039d43729c13e3f19f5cf4314fe78dff"},{"url":"/assets/OllamaModelManager-CtcmOK7H.js","bytes":27920,"sha256":"9d7cfb992b04d656ebcc07024461e3ad1aeda0eb7dc439483efdde36339cb48d"},{"url":"/assets/ParserEditor-B89YvhVr.js","bytes":20557,"sha256":"067d68697a0e83c96268cbc826e5a3babc014a7fafca8e379e5cdf7a144d0eaf"},{"url":"/assets/ParserEditor-D5hTBSvn.css","bytes":5015,"sha256":"3de26d1b4d78840e8fb11fefb362c0e5140e62a73065f5658f5e5391cd92cce1"},{"url":"/assets/ParserSelector-BpxLIfCr.js","bytes":10556,"sha256":"b2da22db15d30c88adab589f5330cf2cf48d648a287f0401fee4feff37da8ef1"},{"url":"/assets/ParserSelector-CqcA0oTw.css","bytes":6552,"sha256":"c53c809709ee79876333734fb9fdff5d13f21df026af62feae7868d7dfe72252"},{"url":"/assets/ParserTestSectionCompact-Cfwewf9V.css","bytes":2788,"sha256":"fddea098654eab6591656143ac11bf813193e35ccf1e06b843bdac65c3717c29"},{"url":"/assets/ParserTestSectionCompact-D4Qv4pph.js","bytes":11299,"sha256":"ecce0799e9b52111776a3f584933b8b670498c871da479837d486f5316eada38"},{"url":"/assets/ParserTesterModal-DAc8de1-.js","bytes":1954,"sha256":"654a9f42fc97e011aa2bf3893409b0e3b7db75fafe9c1655e34f484c12a75bd3"},{"url":"/assets/ParserTesterModal-DVfa-M7N.css","bytes":882,"sha256":"a45f185deed1a36003ea56ed806accfb7ef17b806369b809975ae32038486b7a"},{"url":"/assets/PlaygroundChatHistoryView-BLyZlGmd.css","bytes":560,"sha256":"7114ed4740ec1116801b24446e50559c0ad07e6d254d4e4e59b518856efa6207"},{"url":"/assets/PlaygroundChatHistoryView-DVR8BPMH.js","bytes":3545,"sha256":"423af53571c939637fcde0ab56f4a421039b1f86b2f07ae07fff1ec57b3cdac6"},{"url":"/assets/PlaygroundChatView-C5Wyxdl9.js","bytes":152466,"sha256":"8d9b649b03139681a5c37790f462d7f308d5315371de08801e52454bdc845e33"},{"url":"/assets/PlaygroundChatView-CNXHJsA_.css","bytes":9860,"sha256":"98ae9004dd69819c9e6ddac0998be70e8baa7a017a570eec199677a46d65b7ac"},{"url":"/assets/PlaygroundHistoryView-4jQ0y1zM.js","bytes":24556,"sha256":"8c13cceffc8aeeca0d067698442ef5e9d9528d8f5af7a4227a4f1fab88c08a70"},{"url":"/assets/PlaygroundHistoryView-tvzjR77N.css","bytes":6582,"sha256":"b3fbc1ac1e823f3ac04916a2bb85203840b1e5815cfc1b8dc88cff7161cc1507"},{"url":"/assets/PlaygroundMultiView-CHQvBrd4.js","bytes":22931,"sha256":"bcd79cc1793733322d08386302ed112e95cc90c5e3d15964423b2374692b725f"},{"url":"/assets/PlaygroundMultiView-HCcNzcdx.css","bytes":5063,"sha256":"c7687799627edae6f71a7b62620ce95d8685c6fa1af3012e33faad54f5c48750"},{"url":"/assets/PlaygroundStructuredOutputEditor-BrPBiODz.js","bytes":4304,"sha256":"d8090ef29bd8f4d59d0ff2c11e2e147e6491aaa8ad9a4c2a2d2508062748330a"},{"url":"/assets/PlaygroundStructuredOutputEditor-CGE2VrSQ.css","bytes":373,"sha256":"4410551cb6e947228cd496fcac7fecc75b2b8bf5f8e96cffcafccce5ff788cdb"},{"url":"/assets/PlaygroundView-C75Opszh.js","bytes":34895,"sha256":"0740927715db6614fa50c022fbba348e308e46ec0336037246f231373b5e1db6"},{"url":"/assets/PlaygroundView-mErwZrVh.css","bytes":16454,"sha256":"7402a537fc3ff38607b1d983020e8738b630f94f62a1d31e39c63181e95ada33"},{"url":"/assets/PromptAuthoringStack-BWpazx9S.css","bytes":11592,"sha256":"9cf35cba5f617410dac3563eef02f6ec91053a9c523478ae4c025e963ff40786"},{"url":"/assets/PromptAuthoringStack-C0r6oekF.js","bytes":13881,"sha256":"8212bcf94ba1dcfc9e21ecd89ae7b84e4da9537f3acf8456c3bd059dd37438fe"},{"url":"/assets/ResponseFormatEditor-Ccqx-llB.js","bytes":11910,"sha256":"b8286bb764d62d8e7f1927eba8a5d68f82ada39285ed80886b1f410aaf67a00f"},{"url":"/assets/ResponseFormatEditor-DUhYbFpL.css","bytes":8548,"sha256":"83b119cc5ab711a4ba3a12b17e627e4584b6c8c17c88486eb2269325d8b388c6"},{"url":"/assets/SettingsView-CZ7QKN-q.js","bytes":73710,"sha256":"a3b26dba9cdb7163757736262ad1a0f1ba93c9cc4b48afbf58b043685a7bac80"},{"url":"/assets/SettingsView-D2KslGEk.css","bytes":25817,"sha256":"762f856ab46597bb1ffaff6fd055a6f93f04af7ab5c361a8aafc5a9c7bbb6794"},{"url":"/assets/SetupView-DBHR_dAP.css","bytes":4029,"sha256":"fb93b00d5b89cb0502cc555538acf272cb15f0750b473b67db197e5082ab5ffe"},{"url":"/assets/SetupView-DBJG3raD.js","bytes":4978,"sha256":"1fba30a4dbc48f6e79f3c015c2d19e4e9a5dda7a0cfba3f1415f145ea8574ed2"},{"url":"/assets/SpreadsheetEditor-CssMYtP9.js","bytes":76388,"sha256":"831a5385359351c7b0026e27ccd2c68629f003555c8bffc3cacf989bc5058613"},{"url":"/assets/SpreadsheetEditor-ILssV3OO.css","bytes":33683,"sha256":"67e16364200662e7e8fa6868d8f79bf71b253da71aeb7d93c9476340f9153a32"},{"url":"/assets/SpreadsheetsView-Bq3iSPdU.js","bytes":24359,"sha256":"e65ba8a2658d888f11ac5791193a1d67a1f663dfad2b22843683b3a76f32e477"},{"url":"/assets/SpreadsheetsView-CIrAer4p.css","bytes":5131,"sha256":"744e424d86fc3a59c2ddb5ced88c79ab6e0bd0212181436ab7cebfe97ed9a856"},{"url":"/assets/StorageModeChoice-Dz9CR1XW.css","bytes":2409,"sha256":"7115c0a9edaa3616be71459be51ae0273809078f8bf9311aad688697ed95c69b"},{"url":"/assets/StorageModeChoice-ewDvnuXr.js","bytes":9054,"sha256":"c127970fd63a1054a514cf5dcc1a3feb2858200039add486e1fa7c174c8bbe1b"},{"url":"/assets/TemplateEditor-BooDZmAh.js","bytes":242667,"sha256":"04f5a3711c6b194042542b25579aed167f0559bfb1fcbb83a8d6a632134480fe"},{"url":"/assets/TemplateEditor-BurTT-aB.css","bytes":17866,"sha256":"f3e9bb1b35cf3b82fdb93adcf7eee3a9131ecf7494f3ea78c064ff6cb62aaca3"},{"url":"/assets/TemplatesView-C1MVFUvV.js","bytes":15877,"sha256":"f682f828301f64a40dbcfdb3cfaa53a491040798fce784c69a07810ea93bfe11"},{"url":"/assets/TemplatesView-DX7gSIcL.css","bytes":4302,"sha256":"60fa1a8900b8837be7b3e8596af1c5e927f19ce6cc1855f25d9c12044dfb0f87"},{"url":"/assets/TrialCreation-CYw9ntoD.css","bytes":8702,"sha256":"08c6d1a81165eea68770f47636ea9634144fe77ae4e4874bc0b414611fc9fd61"},{"url":"/assets/TrialCreation-FIaPgjZv.js","bytes":39158,"sha256":"cdc8e47a8b02a111f6af1968d0127699385fc1c97c3f68060f8e6852567c5cba"},{"url":"/assets/TrialsView-C1Dz3K0l.js","bytes":265225,"sha256":"0238cb5f92ac50df3f9d44640910820a1b2f65bd909682b64bcb92ef940fcab8"},{"url":"/assets/TrialsView-C8wtxqmb.css","bytes":94453,"sha256":"7ffae64f71b027d8ea9834cfb4ce1c058cec483332d5631111c27e475a183382"},{"url":"/assets/VariableListEditor-GCLtAjZp.css","bytes":10476,"sha256":"b70d840637382b80e306010b4901aea0096838f292d914fe7400e762ab54f263"},{"url":"/assets/VariableListEditor-SEhtcf8U.js","bytes":18340,"sha256":"f0da810dcaa0922edb55329b438cf525ac4337bd3bdddfbadb7428ae4bc346d9"},{"url":"/assets/VariableListsView-BH5kuXxV.js","bytes":17949,"sha256":"71da907ab2ed9c81edaa89156c04920d832f2e9138ad3046197336842d5b2920"},{"url":"/assets/VariableListsView-DovSlVju.css","bytes":3882,"sha256":"cf8a4c288e2fb6559b9f030658086d8a0afc6ac426211291199b573a3aa4c727"},{"url":"/assets/WizardComplete-Bre5h3Mr.css","bytes":3460,"sha256":"79aae02a1829a1e1b3f9214c9567f64ef0a63f6a265897905d007ef7dfb52402"},{"url":"/assets/WizardComplete-CwIxPf_s.js","bytes":3263,"sha256":"72063232096909e8a20354dd2f0803a87b81aaa2c192a915fe0a68e0aaa0419d"},{"url":"/assets/WizardLocalFirst-B1hjTP3S.css","bytes":2524,"sha256":"2e83cb5fef3298c1c8e2e38199dbfff0d4e44d01574f2e16e6173f1f77b74ad1"},{"url":"/assets/WizardLocalFirst-CwDdTpUD.js","bytes":5776,"sha256":"609460e1264ee0ce37f56864a7187bee37c9ab374d59b64b2082962a8e728426"},{"url":"/assets/WizardProviderConfig-B564SZi4.js","bytes":23896,"sha256":"ba30729c2cfb8fa8421a0230d9f24b1881a68f8361bc63e8ec8f4ac42a7f3646"},{"url":"/assets/WizardProviderConfig-Dw_ZDq-d.css","bytes":8222,"sha256":"657fcc97fd3a0ff814e48e0289aaeed78c1b60e77fdd72444bf4b3fa388d9823"},{"url":"/assets/WizardProviderSelection-CyR73BP0.css","bytes":4121,"sha256":"9146995fb080231c700c903626b80b8315ebb39e3010ef8be94034b3c377d568"},{"url":"/assets/WizardProviderSelection-DFOPk5Ql.js","bytes":11174,"sha256":"27c0ddb5eca0966f82db18eeabd20e002bca1bd359f99a74d854621845ffb180"},{"url":"/assets/WizardSecurity-pnC3WyVE.css","bytes":207,"sha256":"66a0060bc318c6d65e714ebc51229f4382f4978830b3ca4d58048ac288eae387"},{"url":"/assets/WizardSecurity-ridTafd3.js","bytes":1146,"sha256":"a77bdc92f1a41e6b39d40a909dbf5965755cc91f3b0fcc6d0f62c3c2f5752687"},{"url":"/assets/WizardStorageGate-BVCDyJSS.js","bytes":8764,"sha256":"901a4a3392e626284edb0f8b73dbf916b3f8560f72d84a918308721c3e538b99"},{"url":"/assets/WizardStorageGate-PvJVTKL9.css","bytes":6451,"sha256":"936a7cca6057e4b0d8310298d6448c4d6b0121e8e6556a5762250c0ff36e724c"},{"url":"/assets/WizardTelemetry-6B75SJJK.js","bytes":2469,"sha256":"98acb415ed4e69c9c3d37e92844cb3a5032e625603ddd7cd806a53bd468f0c41"},{"url":"/assets/WizardTelemetry-DS8qeCDs.css","bytes":2085,"sha256":"0fefc1f05a5b9276b771eeef0ab359cd5a8c77ad1c98c446412b9fc255ef773f"},{"url":"/assets/WizardWelcome-BHeQS2mb.js","bytes":6299,"sha256":"adb917564150e9650f45ea5d15538320ffb0b477ebc5043bc1e9e54c3a48208a"},{"url":"/assets/WizardWelcome-DNlzQekw.css","bytes":4930,"sha256":"46d1d6a469d9cce48d42b4a55a9802bb61d03f6d559d3910e3751844a425c9d2"},{"url":"/assets/anthropic-CTyLc6wY.js","bytes":657,"sha256":"db5464aded393084e37ca8b935bb37844018678323db104b2e7165101d350308"},{"url":"/assets/anthropic-messages-Dn28aUJf.js","bytes":2780,"sha256":"696f819be31376bd4d4f48616d35ff4249107a54ae4c84f3061e2c15542a764d"},{"url":"/assets/authored-source-compatibility-3dgglpXo.js","bytes":2454,"sha256":"9039ccbf8d60d107b077d02716a217d6ddc8f205b51554a7f9b7c82638ef5bac"},{"url":"/assets/authoring-DzBPTJSn.js","bytes":1728,"sha256":"89f1528650ec536f9bf33bf5a18ae7af1154d53edecc7bfe23350a6efa2f8088"},{"url":"/assets/confirm-action-nkqei7eU.js","bytes":67,"sha256":"852b1e68ac07d9c8cd3d44ecff5fa9f564213e27bd98ed6dcd9facd6dbe1cd6e"},{"url":"/assets/copy-name-DW3oLa2R.js","bytes":6466,"sha256":"3e279098ded3e5b0a38549711c6189235273a4b9c3e1fc5ca52ffee90c14baf0"},{"url":"/assets/cost-calculation-Dp_zBPLi.js","bytes":843,"sha256":"4714aa5245e1ebb49283220230849d0b1bb6664cab30f23a35e0171c94f4b61e"},{"url":"/assets/costs-_ObfVwKg.js","bytes":1891,"sha256":"7eef3607c8d1f945b4090502eb4057fae5f1020833476017ae15342ee527726d"},{"url":"/assets/csp-reporter-Eu8kcW1-.js","bytes":2134,"sha256":"67b174257a810780efcd9d1b374fe05b6111c467b47f02a32097a509218d164e"},{"url":"/assets/curl-generator-D6c_z8jT.js","bytes":827,"sha256":"5aac1adffa19228064fcf602cff0a367f16d7386c0260ef8c76169853e91452c"},{"url":"/assets/custom-providers-CyYIoisv.js","bytes":4155,"sha256":"27769b6761aaae79428f26b6877bf80b80b86e1dfb07869295322d856f5ed383"},{"url":"/assets/data-vendor-CKwrMZHi.js","bytes":499549,"sha256":"f895dd67a19c78f7cfa4069482c2f9bd4c754167dc8f9b15f11988e5358ee1ba"},{"url":"/assets/dataset-export.service-Dk82gQU7.js","bytes":2522,"sha256":"283df22f26374681ff58f576ae6e069c1838cf1a6f1e94cbb00c334b03bf83e0"},{"url":"/assets/dataset-from-trial-Bbt6ELlP.js","bytes":2525,"sha256":"df4f3225f02e746642663b3dc8633f81fbac0ae64377d263bb15e609c2608f7b"},{"url":"/assets/dataset-operations-BNSG8ITZ.js","bytes":2766,"sha256":"1b445ad22a5276a6cec1c2687ef1cfbda5e1946086651e2cdf33420d80995992"},{"url":"/assets/dataset-parquet-DAUNJRcJ.js","bytes":478,"sha256":"f8e1c1908c4ecbcd8a6448623c6fc98fd60358633d64ae6a519da60cb5a1a35b"},{"url":"/assets/dataset-persistence-BdmKMgfF.js","bytes":1705,"sha256":"06170ed7b55c30d75a6499d98a735039b4da3101d6ad5fbdf69c9f472c739860"},{"url":"/assets/dataset-summary-CBmJCSe3.js","bytes":503,"sha256":"f9925d9a3f7c2777e04a0003019fefc174990aedfb7a72c73a7504d4503aa275"},{"url":"/assets/deep-equal-bLv6XEjO.js","bytes":817,"sha256":"8131e299b9c54f7d76b7e4d17de7e20876eb1e895df199e79336ced3959a4a8e"},{"url":"/assets/derived-whKA8IE0.js","bytes":214,"sha256":"e5c23615e06eedcf25637275eeceec90e5bab33b5b9fb9f8135d6e031cbae977"},{"url":"/assets/deterministic-CswtmBLq.js","bytes":489,"sha256":"3d4c6ec1ede298b7c9312b5b0186f786cd9b024029f69e6c82245bce1fd665a5"},{"url":"/assets/deterministic-Dn3mS_T3.js","bytes":1156,"sha256":"436a69eebd0199980fbb975bbedb6f43b4c581963be11fe8282c37d4e4bfcd06"},{"url":"/assets/display-values-D3R-R7BQ.js","bytes":711,"sha256":"643237f7e342dc07a71fc5be487e6b16ae4c458e223b7819d0f0fd0fa6264b7e"},{"url":"/assets/draft-DB7cacTw.js","bytes":5943,"sha256":"1eb5c5e5c3a0d08ad03c7218b3b171b57f41ba175d603714da3f3ab1ca7cdf31"},{"url":"/assets/edit-source-umkvRbQf.js","bytes":932,"sha256":"920e57baaa929c6ab0f76a024e04448cca12c82cec2738f1ffc8129e78265cc0"},{"url":"/assets/environmental-7SaNww_r.js","bytes":450,"sha256":"84cebbbd936fd31a7709bd34d36c104471cd45b65f505a61ea2fc81f6e317457"},{"url":"/assets/environmental-BaXR2Z0P.js","bytes":436,"sha256":"7a0dba6027154614b9b82b0106c09008e8aab9df16a9303d4ed966486539ba9d"},{"url":"/assets/environmental-CST2cyag.js","bytes":1023,"sha256":"a3ec6c7399b1580323e2d069fa87bb4e0680d764315360a41ab89bf8f84627a0"},{"url":"/assets/environmental-CmakTgQN.js","bytes":445,"sha256":"25ec52ea28c751b0bed6ad8614000894004a05b307ee01d380f8f838ba2b8c2f"},{"url":"/assets/error-serialization-Bbw-acia.js","bytes":1060,"sha256":"56868c29216d2c5d68a6530f267bee215d301dbaea28a8818a7235338762e614"},{"url":"/assets/estimate-DrQ_EV4t.js","bytes":9335,"sha256":"bb7400daff4f3f76e714985a0e6733fdfc5f283d2c4cc7bc7c873c99eea10f22"},{"url":"/assets/execution-BZ2Aiqlp.js","bytes":7962,"sha256":"ecae46817d289cc4a8f7991f781731a75540b56d81a0d9db58087c50b8fc7742"},{"url":"/assets/field-ids-DXrUeamA.js","bytes":428,"sha256":"59e9139888a1aa61122457ad9423f997e4528f2889175f6722ff9ba4540700c9"},{"url":"/assets/full-backup.service-DjOKKmXC.js","bytes":2086,"sha256":"23741665ce18eeacd788459c7669dbceedc57dbee2afd57e9cfe1fea115adba9"},{"url":"/assets/full-restore.service-C0bhUoO7.js","bytes":23637,"sha256":"98dcabd7b6d5b3732b00fe701bc483831dc9807afd9335fc36cf004d128e993c"},{"url":"/assets/huggingface-_GseyfpK.js","bytes":920,"sha256":"4e4e5260447653c3a9e60050d0b2037bac0ec9b44146953a5940d7864a7a610f"},{"url":"/assets/index-BYsDtk6n.js","bytes":101758,"sha256":"5d365ab0c17cfef5d573ae4482396fe2dc3fe5786c22e97f9eb07c9bc6120a08"},{"url":"/assets/index-CPg-v_TE.css","bytes":2542,"sha256":"d0dabfb2b538fa4ab9b1d7707b47da6072f198a356f9cb65fc06ffcff8afc5f6"},{"url":"/assets/index-CullbiGz.js","bytes":712463,"sha256":"96265faf851571f4403d23121e034f4a6b4c38dcd6f6a3b82b91e10bcc62f00d"},{"url":"/assets/index-D7FmHGnm.js","bytes":123,"sha256":"ddc503a318b653117e1f161fe4a62fc29885370bf862b10104560e6e71e230e3"},{"url":"/assets/index-Dh-2vaBP.js","bytes":2211,"sha256":"63494422f4114f94b6d1140b998c75e240709da949aaa046134a5c5b4199938c"},{"url":"/assets/index-Pi3egD3z.js","bytes":115554,"sha256":"708ac6ad22ed61304525572c826571808d4e3c3482cf249c1c2026f3179fe691"},{"url":"/assets/index-YL8p_peF.css","bytes":54901,"sha256":"395a3ad92433f2072d1ad0e6f69cb8b83bd66386a633e0b9ee3f5d9e36253c2f"},{"url":"/assets/index-YxH0xInq.js","bytes":23412,"sha256":"0fe5d3a6fe331e2e385415ffd2215295e363c5959032b9160bf0b25eeed1cbca"},{"url":"/assets/index-cvbUNgHb.js","bytes":1057,"sha256":"9381ee2d3b70ca6fd1c1db975c4bd3169725a1ab1d0aac6299a11aa45b797346"},{"url":"/assets/index.browser-CbKMCre9.js","bytes":4878,"sha256":"b034fc8cd0a7d361a8f46c9300374f08105483e735f6e3f7622cc30afe8c70e5"},{"url":"/assets/initialization-Lp5T07ex.js","bytes":5641,"sha256":"4de96c639bb8843d07a8152736218e53f5efec8b91c4a8f53a18a3ca9acbe174"},{"url":"/assets/interrupted-generation-DOwKhRRl.js","bytes":2790,"sha256":"93a15e3318a61ff564fe3f71832101f0318b280b4f7539698deb4f2eadae1d17"},{"url":"/assets/local-config-BtAQGRqe.js","bytes":1909,"sha256":"6d2876284c7f30837dc6e7df2bd8e426478bf1735d19fc071dee9a24ff24d7f6"},{"url":"/assets/mistral-B6b8aYd5.js","bytes":1184,"sha256":"c06d7667932c41379c2d2ee1d200ff5e4327015d434fece0a601b58caa71070c"},{"url":"/assets/nebius-BPZtkA7u.js","bytes":1191,"sha256":"5a67443f1893fd324e805eb61cf1c805f8e9dcbff433d46d7bdb959effc80e41"},{"url":"/assets/ollama-B4DpGuLV.js","bytes":608,"sha256":"1bf809d3c61a20422fd39e131a3d6e73263d01d0484ce654079ce2ef5cb5d959"},{"url":"/assets/ollama-chat-BcdN-dwV.js","bytes":3507,"sha256":"fc249038debbc498ea25930e62a9476cc533fa8ce05e9a96b1a8fcde8ee4b2c7"},{"url":"/assets/ollama-generate-BfG1ZiiW.js","bytes":3888,"sha256":"e3c6e0a12480787b21b25292c6fceeb508d571638cf9c5b6bee40a878150361a"},{"url":"/assets/openai-chat-Bh9rmqG-.js","bytes":2760,"sha256":"046a2e1aa8479c443dd684b8bfb18424b5593c091044eb135d1b5733e9642823"},{"url":"/assets/openai-hdutPmT6.js","bytes":1003,"sha256":"459c68a33396a816ea2f8adf085175e97e610d68711eb15024c3e28726e513a6"},{"url":"/assets/openai-responses-DlTacXH7.js","bytes":3881,"sha256":"cac1a006c43cd8770af2a1bb93dee22b15c9bec6ff91e941eec9dab25ec4de9d"},{"url":"/assets/openrouter-Dcp1z8a-.js","bytes":4442,"sha256":"505f0991c09aeedc279ea0346b96306325016c1f5d94461099452fd04146a0b4"},{"url":"/assets/openrouter-defaults-9rWrck2t.js","bytes":3123,"sha256":"0ac6e123bd4bf632084f348108e1c3dc5fe577ac433d12421920786b8ef9cf51"},{"url":"/assets/opfs-sync-writer.worker-Bguqhj4u.js","bytes":1000,"sha256":"cb82b29f9b4b2ae25e7631fb9c49555c35af855de53792c53a3b914bd24f3f72"},{"url":"/assets/paged-table-reader-Cui7blz8.js","bytes":393,"sha256":"62f2cdf5789d993451cd457d068c3bf4f0d0f5c0317df9cf7c31c3c80444ee6f"},{"url":"/assets/parameter-summary-C838nMrx.js","bytes":11561,"sha256":"90d51a84eb076ce868f209dbcc2231bc685d3029523bbacd1a0ebe0ff2457dd8"},{"url":"/assets/prompt-compile-sIzXO5gU.js","bytes":2081,"sha256":"e02ae0a0037023494be5c23ef0e479e250ac0f693ec22c8eb0f21f1df9682d2f"},{"url":"/assets/provider-enablement-BXNF80hP.js","bytes":709,"sha256":"87798a6a65b5aaba66d51c1e28e51d66bea0bce235213262b5b26d17e87f001b"},{"url":"/assets/pyodide.worker-UXA_A12b.js","bytes":13711,"sha256":"f2a326dd774bf8455e6df381b9182dcc950e980451eb05ddf6280cbe3fd80b53"},{"url":"/assets/render-qmDhwMvs.js","bytes":851,"sha256":"071a3e37a8052d09c9abfcfd0007d5e0817abd7b067d152e77ef6ceee1d86a32"},{"url":"/assets/repository-DrYi46uN.js","bytes":1158,"sha256":"076c68a9bf7afe35c7a3e0957a0be8ae0dfba6ffe59daa735e4df9037b621d9d"},{"url":"/assets/repository-SNFRWPS7.js","bytes":2359,"sha256":"70a0233ba04e49828b97c4485214ea4ca2514b4ffea0594dd8c7fe99d69a1438"},{"url":"/assets/response-evidence-codec-CDBYwcB8.js","bytes":8918,"sha256":"34d95e404096a80c5dcad5eaabc0aca8d03ef46988c2192991e6e1bf9b318ab3"},{"url":"/assets/response-features-Q4DlOVdq.js","bytes":460,"sha256":"383359708bf71ed484eafe3c5ca0d5963ff9cab798765cb928246133a363df98"},{"url":"/assets/row-filters-DVNsrKUs.js","bytes":405,"sha256":"f0e85d49e328197830832f0f7a9dc7fb635806600dd0b7ba13099f10830e322f"},{"url":"/assets/save-file-CH343YFl.js","bytes":945,"sha256":"e0ef6f929f2d64c6ee5ad19828f78d6d44d8e320c91f50477ffeb72c08371e09"},{"url":"/assets/shipped-order-ChxezyMM.js","bytes":457143,"sha256":"844feff4958df64d4979ca2f21489f6632902c3d3152cc39437a8eed52ceabd3"},{"url":"/assets/sql-wasm-C1U8OeUW.wasm","bytes":659806,"sha256":"0734155c83e493983d1f2ff5b09a4fab6e35a32e9449c7e4e545756439f62d73"},{"url":"/assets/tabular-export-BGu39sqN.js","bytes":83389,"sha256":"428c27a33e78b655f985d32d5fa5d3e340dbb90ee3da5380e6e2f542995f2f0a"},{"url":"/assets/tauri-download-utilities-B3xSnlow.js","bytes":3348,"sha256":"d3dfecfc9155d84827fdcccc755eb3554e1bfc7de9e7672836942b20f72742af"},{"url":"/assets/tauri-vendor-CMy7hGlg.js","bytes":15658,"sha256":"9ebe68e8be861f560e21260b837a577d98b8aa1f5264c888dbe2a752bb50f465"},{"url":"/assets/template-variables-T4-5MHs4.js","bytes":606,"sha256":"68f9ea82c6690f7fc29d9afe477699b20b8c3beb41cbec218142d74010fc65e4"},{"url":"/assets/token-calculator-CINd8-z3.js","bytes":5438,"sha256":"736aa036ab8822affed223269d3b2a5f3da2bc8743a0ff6c73b02dd1207142e8"},{"url":"/assets/token-counting.worker-DzyAsXBu.js","bytes":2037530,"sha256":"6f6af764f67e6a05da52ded39892cfb7c1e032796f3949ab955a002deacaa33c"},{"url":"/assets/trial-bundle.service-Bxeai0GP.js","bytes":23720,"sha256":"b97f399c7c2eb5cd046a097b689b0ad772c8a390d3fc00bc90064f86a82e2ea8"},{"url":"/assets/trial-execution-lease-CeCNxJDE.js","bytes":699,"sha256":"01b053028f2e260ae4092bf798230a8973e1f48a073a1816d17db8886decd71f"},{"url":"/assets/trials-0mVd889o.js","bytes":17973,"sha256":"f9ea6876ab9c9b0406bec1a5eee4faa41bd24399f0bbba69ad580ce932f41efb"},{"url":"/assets/ui-vendor-C1ajn_XG.js","bytes":986409,"sha256":"e1b43dbad999da1deb74c46e22ca3a34d22fb670f7a9e81b48cc6409c3b49153"},{"url":"/assets/useCostEstimation-CQUy91xD.js","bytes":512,"sha256":"51738563b5afd3ab3c661e9105e429a34e9ee844748b4200e104ac415c433ad4"},{"url":"/assets/useCrossTab-D655ahxv.js","bytes":671,"sha256":"4b01bb1b18a9b1ba08e22c11f86491cad0ab35bb69116f8141c02e0154d4a6da"},{"url":"/assets/useHeatmapStyling-BzfPYxvG.js","bytes":5254,"sha256":"1e7ba45d840cd088cf572b07ea035b9fb0d4928e31621bf878fd4873c593adc4"},{"url":"/assets/useLiveQuery-CTlckaLl.js","bytes":728,"sha256":"1575c077ac279c649a927c52a520feb933824d2457f60a9f02f9e1835b8cc65f"},{"url":"/assets/useModels-CLgTOoCP.js","bytes":2559,"sha256":"d88a4806b41bb859e045cabaeb8f6ef9c84ec033b95254fdb0d4da7efbfa5838"},{"url":"/assets/usePlaygroundDraft-DFJxUFgu.css","bytes":6941,"sha256":"d9533fd2f91d6084102948e8873ed219568c8eed0fd2136dd90db0cde141d196"},{"url":"/assets/usePlaygroundDraft-DVJi1YZp.js","bytes":9031,"sha256":"bd6fdf3a6ccf0bd737e58b01208db44bc9b45b39dcae422912287d6783a0c4bb"},{"url":"/assets/useSpreadsheetPrompts-CUo6q1tR.js","bytes":3325,"sha256":"273935b3ca8145449ad972c9b9c272d5b1ac2986e1c60aa7b6676076fad57cf5"},{"url":"/assets/useTemplateCommands-Dxyig1yu.js","bytes":23854,"sha256":"7161858b9968e4c2a5230a5e03bbc24fc65c54dbf85ee5df5484fbc22bf67290"},{"url":"/assets/useTemplates-BnlORziX.js","bytes":3574,"sha256":"b5d3221df8cbd19b87fe5ae5545da910bfa498a973a30fbd7256d8942f5412c9"},{"url":"/assets/useThrottled-DQO0kFEr.js","bytes":244,"sha256":"7fbfef42f0fc2cc3f44261cbd9e7b4bb5b1ddba11f17e10adfd118b89d254d55"},{"url":"/assets/useTokenCount-B6lmBv5E.js","bytes":3154,"sha256":"1e9b8e559451564eb863185b6efb857b2c4adaa8c6ed64b081604be12c01259a"},{"url":"/assets/useVariableListCommands-DRFZcbUG.js","bytes":2877,"sha256":"0217ddfbbf1eefae0be0cea3bb256fd288c58d8f737c9f5392a5e7ebef01e876"},{"url":"/assets/useVariableLists-BCgEcexp.js","bytes":1972,"sha256":"c70f5efdda6b27932da6fa36865df251d2d98dcc475cb91f194f70ef4c53ee33"},{"url":"/assets/utils-vendor-B3deJ26_.js","bytes":42345,"sha256":"70be20d1410df67641ddb0310b1c34545693aa6fd478c63d4bad7b61894166cb"},{"url":"/assets/variables-BPWwhDUE.js","bytes":10572,"sha256":"08580c4f7c7f3c14909d29fd0e2de685aaf88c5154dee9e51df8ec3e37988540"},{"url":"/assets/vue-vendor-BiegT0HZ.js","bytes":108581,"sha256":"ba3672dfea866425f0d24d310cccb47edb2586694622ce33495391009a5cb6c1"},{"url":"/assets/vue-virtual-scroller-BCw0uU-l.css","bytes":1220,"sha256":"4d71315fd8c42dc3e7d0ba1e8cb831ad725c22c34cb76c8ff8dbce87d628abb4"},{"url":"/assets/vue-virtual-scroller-CyNULZYm.js","bytes":16632,"sha256":"31a37b36d8db9725a48db7061009e07baa43d9e39092aa93fadcda2e49206402"},{"url":"/assets/webview-DLxETPQz.js","bytes":16145,"sha256":"a788c706ef4188302f0f92345dc779a1b1b49c92fccec376391d594fcb3fb236"},{"url":"/assets/wizard-flow-Bu3pj7gw.js","bytes":3031,"sha256":"9d9ca842570f5e06755719fff187d0b432a5606070306623ce05ed8f76a83a87"},{"url":"/favicon-128x128.png","bytes":3706,"sha256":"bbbdeeb9b6966ec47cd61ff198fb0def1ea34d9a785aa8be877d0489fb319167"},{"url":"/favicon-32x32.png","bytes":1081,"sha256":"3c49bb0a85918d8c69f13a724c35395e0f28cbcf67f445ae38b50a3c71d07af2"},{"url":"/favicon.ico","bytes":16672,"sha256":"57222d5e378250fd4cfe1d63ea90269c2f1dfe6c1411998482868782d71a7708"},{"url":"/favicon.png","bytes":14488,"sha256":"98a188b69c38bb92f851f6acc230625f3872f75e4e2a1dbb6291bd40ff1f99b1"},{"url":"/favicon.svg","bytes":684,"sha256":"a9b3b819d4e9b63857d2303ec278c84afbd7957ee517160fad880f6de3206b7e"},{"url":"/icon-192.png","bytes":15066,"sha256":"a5ea9af435092fef44e73b3ccd9c406837e6761f52a7baaeeb61a70ba93d9735"},{"url":"/icon-256x256.png","bytes":19034,"sha256":"74472788a02991156831720912580413451f2d3dde2a3104b330d1dc7dc46fb8"},{"url":"/icon-512.png","bytes":16100,"sha256":"5f69f2d26d0c8945116ce3e93408eef4bec8014ed4e896aaa865df0dea14cc50"},{"url":"/index.html","bytes":2394,"sha256":"bce95e11a3d337e474fcda66bacdaaf632e3c0910a6fe30621a7d05e2ffc1bab"},{"url":"/manifest.json","bytes":1260,"sha256":"cf09d81ea03708d3f882f794c0eae4529378c6bda164a18006459102dc21f53a"},{"url":"/maskable-192.png","bytes":12217,"sha256":"f5a4eb0f2e68330466fb36aec9757a73e43ddd9a71cc1613af7c874ca423a339"},{"url":"/maskable-512.png","bytes":36502,"sha256":"fe2e9671e8283eeb07138502e2173a27dc10973119743b6bebed5069ae90742d"}]
const VENDOR_CORE_ASSETS = [{"url":"/vendor/pyodide/0.29.4/json_repair-0.63.4-py3-none-any.whl","bytes":51295,"sha256":"0f374f3eee21454aef0a5d72c06b8689b660a1788f80ab392639e3f7d5c5d458"},{"url":"/vendor/pyodide/0.29.4/manifest.json","bytes":2880,"sha256":"56a42868565c1862c7dadb3602ae003aacfacae3d3ed67962eb0a5f14273ea83"},{"url":"/vendor/pyodide/0.29.4/micropip-0.11.1-py3-none-any.whl","bytes":115486,"sha256":"a5569ea4002b9cdd6cf50eda0c14fb3fcb0da9d8c702feadcfd04459b4c3040a"},{"url":"/vendor/pyodide/0.29.4/pyodide-lock.json","bytes":4572,"sha256":"2ff40666b8389b574feb3569bb2c486590b0e6e32f27f533d1fa351480744b33"},{"url":"/vendor/pyodide/0.29.4/pyodide.asm.js","bytes":1080165,"sha256":"7bb324fa3ce56dd6815c30b38adf2dc81ad03cf0d410ef834bb9e697941af7e6"},{"url":"/vendor/pyodide/0.29.4/pyodide.asm.wasm","bytes":8647684,"sha256":"10090fe41e019ae669d512e1f747021a8db2aaab0f6dd6f85fa9368c55d681e3"},{"url":"/vendor/pyodide/0.29.4/pyodide.mjs","bytes":17616,"sha256":"8fdfed5eaf81bde14bcdeaeea11f2672675b2362248f8537446b6fda5e4a4751"},{"url":"/vendor/pyodide/0.29.4/python_stdlib.zip","bytes":2424002,"sha256":"92cb24faa546818f3ef4050fd5bd2b6487bd2042efed2113af141d035f30efb4"}]
const VENDOR_OPTIONAL_ASSETS = [{"url":"/vendor/nltk-data/corpora/names.zip","bytes":21326,"sha256":"0eec7e958b34982662b8f05824ae64642dea097b08057ade65c252191c5fe7ca"},{"url":"/vendor/nltk-data/corpora/nonbreaking_prefixes.zip","bytes":25437,"sha256":"62dd9fe11b21d201ca26cf2351595512965d5fe064f9d6ce1873c6231b46d869"},{"url":"/vendor/nltk-data/corpora/opinion_lexicon.zip","bytes":24947,"sha256":"7a5da68d53016c5d1fca38f7dd81844cff73466371f90968d1ef15c85b873193"},{"url":"/vendor/nltk-data/corpora/paradigms.zip","bytes":24902,"sha256":"5875c44cd547b6a8fdde48f8f798fe45bcad7cb232a93ee5fae17fed130c9870"},{"url":"/vendor/nltk-data/corpora/stopwords.zip","bytes":37733,"sha256":"48c0e52d8b52546e827f53761fb30300c0ab94f70660d28bd65ba0a86270946b"},{"url":"/vendor/nltk-data/corpora/swadesh.zip","bytes":22828,"sha256":"0b69919501a098f25d2abad9edb84689e1ed44915ca1c65c7832d2bf9d1de3b9"},{"url":"/vendor/nltk-data/grammars/basque_grammars.zip","bytes":4704,"sha256":"40ec8a0e92079f32a6900189e8551909506e727b19652f28641fcd825a374ec7"},{"url":"/vendor/nltk-data/grammars/book_grammars.zip","bytes":9103,"sha256":"cc63b32d680888c04b3c332218d645a9f9db8571ffe7229808391c889796ffbd"},{"url":"/vendor/nltk-data/grammars/large_grammars.zip","bytes":283747,"sha256":"5a81e5278757fafe6e8f19b16f6e4363783635ee332c5c238a30e190f735da59"},{"url":"/vendor/nltk-data/grammars/sample_grammars.zip","bytes":20293,"sha256":"8c3e4fecdc47ef1d262401eda08bde995cf4ed912a7934a32905263485240872"},{"url":"/vendor/nltk-data/grammars/spanish_grammars.zip","bytes":4047,"sha256":"4207035d8795d37000c06391d97b068ae470a43db697d96473018f392552b742"},{"url":"/vendor/nltk-data/help/tagsets_json.zip","bytes":13239,"sha256":"6b80fb9ed475e4e811fbd4429100313844988cf7a8ab36728bcc75cecc8220f0"},{"url":"/vendor/nltk-data/index.json","bytes":2988,"sha256":"75dac38e8d7bcbb73ebf83f907c00a7947f5ea622e39204c7eff075d508a44c1"},{"url":"/vendor/nltk-data/sentiment/vader_lexicon.zip","bytes":90486,"sha256":"8adba4294eef3964d820bf655e37e61bdc3a341994356af59b74fb3b4a36ce5c"},{"url":"/vendor/nltk-data/stemmers/rslp.zip","bytes":3805,"sha256":"f482f9666a2a76cdd4acab16b01a44b002550ebaac29906dbd5a1bbc281e4f8b"},{"url":"/vendor/nltk-data/taggers/universal_tagset.zip","bytes":19095,"sha256":"d490e1ae8f5625dcdfdda04be15c22a2aade8c2561a36a61edcdf0c7d6aa8352"},{"url":"/vendor/nltk-data/tokenizers/punkt_tab.zip","bytes":4319076,"sha256":"e57f64187974277726a3417ca6f181ec5403676c717672eef6a748a7b20e0106"},{"url":"/vendor/pyodide/0.29.4/beautifulsoup4-4.13.3-py3-none-any.whl","bytes":104396,"sha256":"d51d13768fd4cdf3fd4370f9d5b2b4f42a97c3a450eead1a6a691685cee69c99"},{"url":"/vendor/pyodide/0.29.4/lxml-6.0.2-cp313-cp313-pyemscripten_2025_0_wasm32.whl","bytes":1637504,"sha256":"726fd93726e98fb9472d6ded592bc1a564e7e1bf1895bd51fb86cd0b03aac43f"},{"url":"/vendor/pyodide/0.29.4/msgspec-0.19.0-cp313-cp313-pyemscripten_2025_0_wasm32.whl","bytes":129627,"sha256":"28f35d34d638eb6228a9e5b8a33f27477d11620d2c722c298d1df79bee36a8a4"},{"url":"/vendor/pyodide/0.29.4/nltk-3.9.1-py3-none-any.whl","bytes":1225564,"sha256":"85d7fd659d938a1a0b003d1c67d600f7bfb1dc5b98bf4cd27b7e67a82ee3dd5f"},{"url":"/vendor/pyodide/0.29.4/numpy-2.2.5-cp313-cp313-pyemscripten_2025_0_wasm32.whl","bytes":2823762,"sha256":"800c98edc0c864dfa49f07005680c699b4b42b84eae1f8cb19d35b3634e7f05c"},{"url":"/vendor/pyodide/0.29.4/orjson-3.10.16-cp313-cp313-pyemscripten_2025_0_wasm32.whl","bytes":134365,"sha256":"7ca4fbc865d41c417ab1d8252a55d360c850f62ff96d24d33cf2c6b1be6c1665"},{"url":"/vendor/pyodide/0.29.4/regex-2024.11.6-cp313-cp313-pyemscripten_2025_0_wasm32.whl","bytes":200280,"sha256":"bd05caf01bfb89d74aa3db160ebae3ae343a35540c98657f08167ba4c4ce325d"},{"url":"/vendor/pyodide/0.29.4/soupsieve-2.6-py3-none-any.whl","bytes":36185,"sha256":"127cca016cc103ef5e3ea165b02f2263f4b38f206a05ee05badc3e6c39f92ad1"},{"url":"/vendor/pyodide/0.29.4/sqlite3-1.0.0-cp313-cp313-pyemscripten_2025_0_wasm32.whl","bytes":560803,"sha256":"3d64fee45743c2d9662110709086b342a226389253b0ea7f531a92845b008fea"},{"url":"/vendor/pyodide/0.29.4/typing_extensions-4.15.0-py3-none-any.whl","bytes":44613,"sha256":"42190f892f6219350c50e107954f57cb6196acac818fece4a7d21689c94f71de"}]

const CACHE_PREFIX = 'auditomatic-pwa-'
const RELEASE_CACHE = `${CACHE_PREFIX}release-${RELEASE_ID}`
const VENDOR_CACHE = `${CACHE_PREFIX}vendor-${VENDOR_ID}`
const COMPLETE_MARKER = '/__auditomatic_offline_complete__'
const CORE_MARKER = '/__auditomatic_offline_core_complete__'
const OPTIONAL_MARKER = '/__auditomatic_offline_optional_complete__'
const LEGACY_CACHES = new Set([
  'auditomatic-release',
  'auditomatic-release-dev',
  'auditomatic-vendor'
])

const appInventory = new Map(APP_ASSETS.map(asset => [asset.url, asset]))
const vendorCoreInventory = new Map(VENDOR_CORE_ASSETS.map(asset => [asset.url, asset]))
const vendorOptionalInventory = new Map(VENDOR_OPTIONAL_ASSETS.map(asset => [asset.url, asset]))
const vendorInventory = new Map([...vendorCoreInventory, ...vendorOptionalInventory])

/**
 * Whether the optional vendor tier has been requested in this worker.
 *
 * Set by the PRECACHE_OPTIONAL message (an installed PWA at launch) and by the
 * fetch handler the instant any optional asset is fetched (a tab's first
 * numpy/nltk import). Each worker instance starts with it false; the cache it
 * points at persists independently, so readiness never depends on the flag
 * outliving the browser session.
 */
let fullVendorRequested = false
/** Coalesces concurrent optional-tier fills (install-trigger + fetch-trigger). */
let optionalFillPromise = null

function sameOriginPath(request) {
  const url = new URL(request.url)
  return url.origin === self.location.origin ? url.pathname : null
}

function bytesToHex(bytes) {
  return [...new Uint8Array(bytes)].map(value => value.toString(16).padStart(2, '0')).join('')
}

async function verifyResponse(response, asset) {
  if (!response.ok || response.type === 'opaque') {
    throw new Error(`${asset.url} responded ${response.status || response.type}`)
  }
  const bytes = await response.clone().arrayBuffer()
  if (bytes.byteLength !== asset.bytes) {
    throw new Error(`${asset.url} size mismatch: expected ${asset.bytes}, got ${bytes.byteLength}`)
  }
  const actual = bytesToHex(await crypto.subtle.digest('SHA-256', bytes))
  if (actual !== asset.sha256) throw new Error(`${asset.url} sha256 mismatch`)
}

async function fetchVerified(asset) {
  const response = await fetch(new Request(asset.url, {
    cache: 'reload',
    credentials: 'same-origin'
  }))
  await verifyResponse(response, asset)
  return response
}

async function cacheInventory(cacheName, inventory, identity, markerUrl) {
  const cache = await caches.open(cacheName)
  const marker = await cache.match(markerUrl)
  if (marker && (await marker.text()) === identity) {
    const entries = await Promise.all(inventory.map(async asset => {
      const response = await cache.match(asset.url)
      if (!response) return false
      try {
        await verifyResponse(response, asset)
        return true
      } catch {
        await cache.delete(asset.url)
        return false
      }
    }))
    if (entries.every(Boolean)) return
    await cache.delete(markerUrl)
  }

  const queue = [...inventory]
  const workers = Array.from({ length: Math.min(4, queue.length) }, async () => {
    while (queue.length > 0) {
      const asset = queue.shift()
      const existing = await cache.match(asset.url)
      if (existing) {
        try {
          await verifyResponse(existing, asset)
          continue
        } catch {
          await cache.delete(asset.url)
        }
      }
      const response = await fetchVerified(asset)
      await cache.put(asset.url, response)
    }
  })
  await Promise.all(workers)
  await cache.put(markerUrl, new Response(identity))
}

/**
 * Report whether every asset in `inventory` is present and valid, independent
 * of whether `markerUrl` was ever written. Truthfulness over speed: assets
 * cached on demand (the fetch handler path) must count toward "complete", and
 * a marker that lied once must not keep claiming completeness.
 */
async function cacheIsComplete(cacheName, inventory) {
  if (inventory.length === 0) return false
  const cache = await caches.open(cacheName)
  const entries = await Promise.all(inventory.map(async asset => {
    const response = await cache.match(asset.url)
    if (!response) return false
    try {
      await verifyResponse(response, asset)
      return true
    } catch {
      return false
    }
  }))
  return entries.every(Boolean)
}

async function offlineStatus() {
  const [appReady, coreReady, optionalReady] = await Promise.all([
    cacheIsComplete(RELEASE_CACHE, APP_ASSETS),
    cacheIsComplete(VENDOR_CACHE, VENDOR_CORE_ASSETS),
    cacheIsComplete(VENDOR_CACHE, VENDOR_OPTIONAL_ASSETS)
  ])
  return {
    type: 'OFFLINE_STATUS',
    buildId: BUILD_ID,
    releaseId: RELEASE_ID,
    vendorId: VENDOR_ID,
    appReady,
    coreReady,
    optionalReady,
    fullVendorRequested,
    // The boot contract is the shell plus the core runtime every parser needs.
    // The optional tier only gates "ready" once a power-user signal has asked
    // for it (PRECACHE_OPTIONAL or a fetch of an optional asset).
    ready: appReady && coreReady && (!fullVendorRequested || optionalReady)
  }
}

function reply(event, message) {
  if (event.ports && event.ports[0]) event.ports[0].postMessage(message)
  else if (event.source) event.source.postMessage(message)
}

/**
 * Fill the shell and the core runtime every visitor needs.
 *
 * `allSettled`, not `all`: the install/retry event's `waitUntil` only extends
 * the worker's lifetime until the awaited promise settles. Racing two
 * `cacheInventory` calls with `Promise.all` lets the loser's rejection settle
 * the `await` while the other call is still writing -- the worker can then be
 * terminated mid-write outside any extended lifetime, corrupting whichever
 * cache was still in flight. Waiting for both to finish first, success or
 * failure, keeps every cache write inside the event's lifetime and means only
 * the side that actually failed gets cleaned up.
 *
 * The OPTIONAL tier is deliberately NOT filled here: tabs must not download
 * every non-stdlib package just to visit. It fills on request only —
 * PRECACHE_OPTIONAL (installed PWA at launch) or the first fetch of an
 * optional asset (a parser importing numpy/nltk, an NLTK-data hydration).
 */
async function fillAppAndCore() {
  const [release, core] = await Promise.allSettled([
    cacheInventory(RELEASE_CACHE, APP_ASSETS, RELEASE_ID, COMPLETE_MARKER),
    cacheInventory(VENDOR_CACHE, VENDOR_CORE_ASSETS, VENDOR_ID, CORE_MARKER)
  ])
  if (release.status === 'rejected') await caches.delete(RELEASE_CACHE)
  if (core.status === 'rejected') await caches.delete(VENDOR_CACHE)
  if (release.status === 'rejected') throw release.reason
  if (core.status === 'rejected') throw core.reason
}

/**
 * Fill the optional tier, once, coalescing every concurrent trigger. A failure
 * leaves the existing partial entries and the marker unwritten so the next
 * signal retries; it must NOT delete the vendor cache, which already holds a
 * good core tier.
 */
function fillOptionalTier() {
  if (optionalFillPromise) return optionalFillPromise
  optionalFillPromise = cacheInventory(
    VENDOR_CACHE,
    VENDOR_OPTIONAL_ASSETS,
    VENDOR_ID,
    OPTIONAL_MARKER
  ).catch(() => {
    // Keep existing (verified) entries; the next trigger re-fills the rest.
  }).finally(() => {
    optionalFillPromise = null
  })
  return optionalFillPromise
}

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    if (APP_ASSETS.length === 0 || VENDOR_CORE_ASSETS.length === 0) {
      throw new Error('production offline inventory was not injected')
    }
    await fillAppAndCore()
  })())
})

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys()
    // Activation only happens through the coordinated ACTIVATE_RELEASE flow:
    // the update coordinator drains every tab's leases and waits for
    // controllerchange before any tab depends on the new release, so no
    // client can still need bytes from a prior auditomatic-pwa-* cache by the
    // time this runs. Keep only the current release/vendor caches plus
    // whatever isn't ours.
    const stale = keys.filter(key =>
      LEGACY_CACHES.has(key) ||
      (key.startsWith(CACHE_PREFIX) && key !== RELEASE_CACHE && key !== VENDOR_CACHE)
    )
    await Promise.all(stale.map(key => caches.delete(key)))
    await self.clients.claim()
  })())
})

self.addEventListener('message', event => {
  const data = event.data
  if (!data || typeof data !== 'object') return

  if (data.type === 'GET_OFFLINE_STATUS') {
    event.waitUntil(offlineStatus().then(status => reply(event, status)))
    return
  }

  // An installed PWA opts into the full parser inventory at launch. The reply
  // carries the status AFTER the fill, so the page can await one message for
  // "everything is ready offline".
  if (data.type === 'PRECACHE_OPTIONAL') {
    fullVendorRequested = true
    event.waitUntil((async () => {
      try {
        await fillOptionalTier()
        reply(event, await offlineStatus())
      } catch (error) {
        const status = await offlineStatus()
        reply(event, {
          ...status,
          error: error instanceof Error ? error.message : String(error)
        })
      }
    })())
    return
  }

  if (data.type === 'RETRY_OFFLINE_CACHE') {
    event.waitUntil((async () => {
      try {
        await fillAppAndCore()
        if (fullVendorRequested) await fillOptionalTier()
        reply(event, await offlineStatus())
      } catch (error) {
        reply(event, {
          type: 'OFFLINE_STATUS',
          buildId: BUILD_ID,
          releaseId: RELEASE_ID,
          vendorId: VENDOR_ID,
          ready: false,
          error: error instanceof Error ? error.message : String(error)
        })
      }
    })())
    return
  }

  if (data.type === 'ACTIVATE_RELEASE' && data.buildId === BUILD_ID) {
    event.waitUntil((async () => {
      const status = await offlineStatus()
      if (!status.ready) {
        reply(event, { ...status, error: 'release cache is incomplete' })
        return
      }
      reply(event, status)
      await self.skipWaiting()
    })())
  }
})

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return
  const path = sameOriginPath(event.request)
  if (!path) return

  if (event.request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const response = await fetch(event.request)
        if (response.ok) return response
      } catch {
        // Use the immutable release fallback below.
      }
      const cached = await (await caches.open(RELEASE_CACHE)).match('/index.html')
      return cached || Response.error()
    })())
    return
  }

  const asset = appInventory.get(path) || vendorInventory.get(path)
  if (!asset) return
  const cacheName = vendorInventory.has(path) ? VENDOR_CACHE : RELEASE_CACHE
  event.respondWith((async () => {
    // Requesting an optional-tier asset IS the power-user signal: a parser
    // importing numpy/nltk, an NLTK-data hydration, a json_repair install.
    // Fill the whole optional tier in the background so offline all-packages
    // works after this one online use. Served lazily (online or from cache)
    // regardless, so the current request is never blocked on the 12MB fill.
    if (vendorOptionalInventory.has(path) && !fullVendorRequested) {
      fullVendorRequested = true
      void fillOptionalTier()
    }
    const cache = await caches.open(cacheName)
    const cached = await cache.match(asset.url)
    if (cached) return cached
    const response = await fetchVerified(asset)
    await cache.put(asset.url, response.clone())
    return response
  })())
})
