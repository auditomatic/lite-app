/* Auditomatic production Service Worker.
 *
 * The production build replaces the placeholders below with a complete,
 * hashed inventory. Source/dev builds deliberately contain empty inventories;
 * they must never claim production offline readiness.
 */

const BUILD_ID = "83a6d05ae5e5db853e6dd2fbf4abde2367b603b0"
const RELEASE_ID = "83a6d05ae5e5db853e6dd2fbf4abde2367b603b0-f2d4270f14a16d73"
const VENDOR_ID = "d4588e7735b9430116ed6e5d5356da14ba7cd9a9b7797b4005652bf29728d3cb"
const APP_ASSETS = [{"url":"/assets/AddCustomProviderModal-B0GBudJ5.js","bytes":17021,"sha256":"76c1d14394fca87345b1aca420cd69f3e1d9f38bb433922f4f5bd50d0de48c73"},{"url":"/assets/AddCustomProviderModal-BXibXBfG.css","bytes":879,"sha256":"43c6832a71a2919107e9da1ce197901c602bb287211345c658f3512ab510de69"},{"url":"/assets/BuildJudgeDatasetView-Cczomb5Y.js","bytes":6987,"sha256":"dc0325b2d183b768ccfaf8e4de8b0440546087bd7db6d2f5ff7bd2b4ac9f2a3d"},{"url":"/assets/BuildJudgeDatasetView-NPOkuEAR.css","bytes":3353,"sha256":"6157af36c2993c0b72ea2cd4685f2ab96688ab99d7cc0ab5b4903e2d3eeedc96"},{"url":"/assets/CodeEditor-CfrosA3M.css","bytes":415,"sha256":"4b46da79967f08d54b6e6aaabbb3417681acd40e882a140511bafa256c9b0046"},{"url":"/assets/CodeEditor-DTTtrR_l.js","bytes":897,"sha256":"3f572b852f5e563bdfdf11aa33692f8934046c002d73da3731356a03b97ffc23"},{"url":"/assets/ColumnFilterPanel-C98UMqF7.js","bytes":25528,"sha256":"f86f5abbcfe52a1f6abd7ec9ce21f11c1399d529aba876fdcff0d4889d00ad00"},{"url":"/assets/ColumnFilterPanel-D-uNO3-O.css","bytes":2280,"sha256":"608718efe88864cc91eb2850c886dc9eaa1bb4d9c2fc4bc29315ee2c7d88149b"},{"url":"/assets/DatasetPreview-6N73bAK6.css","bytes":6379,"sha256":"96643f572ef57afac6c0faf876d73af10d5719c2e0bce78c7969bea725ad4718"},{"url":"/assets/DatasetPreview-CssaaNgJ.js","bytes":193051,"sha256":"73cf6f643fac2bc02d377248d377af592e27d72b3266bcef4aa67d497d16f580"},{"url":"/assets/DatasetsView-B3QSkzjk.css","bytes":2215,"sha256":"f59eb980effa3548aa7f1248fe0db0f10cb3d1f48e42bd0fbba8c3687bbc05b1"},{"url":"/assets/DatasetsView-sPGmygWl.js","bytes":9106,"sha256":"74a1cd268abb89dfd68de7561efbcb1a75d1139aef7a8f45794a4e6d2dcb527a"},{"url":"/assets/ExportDataModal-ChI2aBW7.js","bytes":37216,"sha256":"40c1289f493e8e4e98fabc5a90d09b8d953a156ab16f52eccdcc36700d636765"},{"url":"/assets/ExportDataModal-Ee-aAGef.css","bytes":4598,"sha256":"321c52576a915001a609bedff4a27f90a724f13a8854fe7a09c01038eac9705b"},{"url":"/assets/GenericModelSelectorModal-C4fQEt_i.js","bytes":46310,"sha256":"25ca13cba0049e12000eee616e76f4bd5b79d85621ca25557d18a8f9d1fc0086"},{"url":"/assets/GenericModelSelectorModal-DhdGdvrE.css","bytes":15062,"sha256":"c99ebf2bee9a0f4e7cb77eb73beba429a8cbdd64041ea26280f6168cf2bc205a"},{"url":"/assets/HomeView-B1w5kcT6.js","bytes":10064,"sha256":"09f47232622401375d41b11d1c4f3ff19ac4b9bdfc18d52cd48ad726c8379e77"},{"url":"/assets/HomeView-BHlqhqJM.css","bytes":4565,"sha256":"efa24babb349d45ac236e450e8ea115c989e49e689c311888b115d80f8822db6"},{"url":"/assets/HydratedPromptPreview-dIGoYJXr.css","bytes":8011,"sha256":"0d796a1ab0c3ab796a0473ab359ba372ab40fd2fabd424799d5e2b102ec74a52"},{"url":"/assets/HydratedPromptPreview-wgvc1I8V.js","bytes":10752,"sha256":"ac46e481c252b11c18209a4df2fda84f9979459310eec06169c4cc97c8397015"},{"url":"/assets/ModelConfiguration-CRPdBm1n.js","bytes":17959,"sha256":"f914955563be62a0ff3b39f7a2f8c36d74836ef7ada201b0f1878f59b9f0b3d8"},{"url":"/assets/ModelConfiguration-DnUexjgh.css","bytes":4249,"sha256":"5d89ee02b4ad27b85b0b7ab7b290956bbc638dc591473cc408a2d1f5f82b279a"},{"url":"/assets/ModelContractInspectorModal-DLvQ5Aqo.js","bytes":5011,"sha256":"f2a26afaf797cb260b74f6e37086a89b836b26f2f2907275fc2c87f4b331ff5a"},{"url":"/assets/ModelContractInspectorModal-dhTnqUJ_.css","bytes":1859,"sha256":"1775e2dff0359ca0d443e4acd9f70c1334bd67c3686efba3ae8070d128e24b81"},{"url":"/assets/ModelsView-4ptByH15.css","bytes":13861,"sha256":"022aac7d73d809bc4d092b1a1480a8309f5aa3996c330a19a7d727b34e33ee4b"},{"url":"/assets/ModelsView-CVbRvkaM.js","bytes":45376,"sha256":"f937aac3148d6463b775bcc65c249cd5795755e1f7e542fe8fa54563de077599"},{"url":"/assets/OllamaModelManager-CKgcwFz4.css","bytes":15299,"sha256":"37d3c9f9cae62ba29707606da74037ab039d43729c13e3f19f5cf4314fe78dff"},{"url":"/assets/OllamaModelManager-i3kIU7ez.js","bytes":27920,"sha256":"9cc46354874d3fe9c1c23da7c763988b4c94c842a0b2474cc134e77dfa754d1e"},{"url":"/assets/ParserEditor-BLLNC30k.js","bytes":20557,"sha256":"053294072258d2bef015b5fe74380696571e3c2ec96f93d85e8a33d5af47f3d8"},{"url":"/assets/ParserEditor-D5hTBSvn.css","bytes":5015,"sha256":"3de26d1b4d78840e8fb11fefb362c0e5140e62a73065f5658f5e5391cd92cce1"},{"url":"/assets/ParserSelector-CqcA0oTw.css","bytes":6552,"sha256":"c53c809709ee79876333734fb9fdff5d13f21df026af62feae7868d7dfe72252"},{"url":"/assets/ParserSelector-DsktuViG.js","bytes":10556,"sha256":"aaf040ff097c23da96a2479cc98111307363faa06e93afe685a0e98dc2ca11da"},{"url":"/assets/ParserTestSectionCompact-B0Qa8pkm.js","bytes":11299,"sha256":"a53746f57776a44ed2135576e829662cda91751b8244fec6fc04bdf934ed5ac3"},{"url":"/assets/ParserTestSectionCompact-Cfwewf9V.css","bytes":2788,"sha256":"fddea098654eab6591656143ac11bf813193e35ccf1e06b843bdac65c3717c29"},{"url":"/assets/ParserTesterModal-D7meaXQY.js","bytes":1954,"sha256":"76da7f97fe6cd6078833ef57b97725a18dc36112e85e1b4503ab31853bfbe7ec"},{"url":"/assets/ParserTesterModal-DVfa-M7N.css","bytes":882,"sha256":"a45f185deed1a36003ea56ed806accfb7ef17b806369b809975ae32038486b7a"},{"url":"/assets/PlaygroundChatHistoryView-BLyZlGmd.css","bytes":560,"sha256":"7114ed4740ec1116801b24446e50559c0ad07e6d254d4e4e59b518856efa6207"},{"url":"/assets/PlaygroundChatHistoryView-BbLOnmCK.js","bytes":3545,"sha256":"10f43a5a627037ba89acbfcc10f52c0889079fb911f5d60e9bb4c7a1d028cbb7"},{"url":"/assets/PlaygroundChatView-CNXHJsA_.css","bytes":9860,"sha256":"98ae9004dd69819c9e6ddac0998be70e8baa7a017a570eec199677a46d65b7ac"},{"url":"/assets/PlaygroundChatView-CrNPhp1X.js","bytes":152466,"sha256":"7388d35ebbcf2f52fc9a01b0a8a97fc087d5c75ce59688eeb83515d5e6dca372"},{"url":"/assets/PlaygroundHistoryView-mGJIc0vM.js","bytes":24556,"sha256":"b23b348c8cdcfed4c8bafff15ba3a283cc9a56d0ef4148a8200c4f34cbabb586"},{"url":"/assets/PlaygroundHistoryView-tvzjR77N.css","bytes":6582,"sha256":"b3fbc1ac1e823f3ac04916a2bb85203840b1e5815cfc1b8dc88cff7161cc1507"},{"url":"/assets/PlaygroundMultiView-Bnw4wwpR.js","bytes":22966,"sha256":"1e7c492bd0afeefba42d3292e238105c35a8adabe5b59748e4952c04a7bc1224"},{"url":"/assets/PlaygroundMultiView-HCcNzcdx.css","bytes":5063,"sha256":"c7687799627edae6f71a7b62620ce95d8685c6fa1af3012e33faad54f5c48750"},{"url":"/assets/PlaygroundStructuredOutputEditor-CGE2VrSQ.css","bytes":373,"sha256":"4410551cb6e947228cd496fcac7fecc75b2b8bf5f8e96cffcafccce5ff788cdb"},{"url":"/assets/PlaygroundStructuredOutputEditor-DidKxuOt.js","bytes":4304,"sha256":"08ee1ff2b227d5d095ae160470d25f5c24ac84c9bd31fd8d5228ee53dd9ca2a8"},{"url":"/assets/PlaygroundView-Bpr2Ho_-.js","bytes":34927,"sha256":"5351e8ac25f2ad4e468b39d34e9f20d596f435c8cdb948cffcfb45efd44bfa71"},{"url":"/assets/PlaygroundView-mErwZrVh.css","bytes":16454,"sha256":"7402a537fc3ff38607b1d983020e8738b630f94f62a1d31e39c63181e95ada33"},{"url":"/assets/PromptAuthoringStack-BRX8W4_a.js","bytes":13881,"sha256":"431b5daa257226499b25a4c98853eedba1abd5a8d3fbb8800fac33588e54d3b0"},{"url":"/assets/PromptAuthoringStack-BWpazx9S.css","bytes":11592,"sha256":"9cf35cba5f617410dac3563eef02f6ec91053a9c523478ae4c025e963ff40786"},{"url":"/assets/ResponseFormatEditor-DUhYbFpL.css","bytes":8548,"sha256":"83b119cc5ab711a4ba3a12b17e627e4584b6c8c17c88486eb2269325d8b388c6"},{"url":"/assets/ResponseFormatEditor-DbT7GPQA.js","bytes":11910,"sha256":"6372048f447004cf2f4d27d0a5515bfbc1e8217ee9f2d9f7543ee2074687da11"},{"url":"/assets/SettingsView-BK5tybEf.js","bytes":73818,"sha256":"b4d5b9e5a5dca4ce89c67befc028520ae262b089a2a27ac2b43c728d2fd417fb"},{"url":"/assets/SettingsView-C1EVj9kD.css","bytes":25862,"sha256":"ad69155b3749e1739e0d60a4d182193ca417d432493fa96409c5e88853fdb987"},{"url":"/assets/SetupView-Cfzz9ZlE.js","bytes":4978,"sha256":"74fdbbf4a44784ae60a3d094542cd3fad46a13d151283c88b58b1d45e1dcd2fe"},{"url":"/assets/SetupView-DBHR_dAP.css","bytes":4029,"sha256":"fb93b00d5b89cb0502cc555538acf272cb15f0750b473b67db197e5082ab5ffe"},{"url":"/assets/SpreadsheetEditor-DB8NJF2K.js","bytes":76388,"sha256":"abfc4cfe8b3bcd4397e11f4af83fcf5c9d194fafc2f7b3a2ae72e492c107ee20"},{"url":"/assets/SpreadsheetEditor-ILssV3OO.css","bytes":33683,"sha256":"67e16364200662e7e8fa6868d8f79bf71b253da71aeb7d93c9476340f9153a32"},{"url":"/assets/SpreadsheetsView-CCnzozMl.js","bytes":24360,"sha256":"6f5678c4dbac2f28cd76b1d7e51d73be06e95f65af175c55784c89cf9e0f5e48"},{"url":"/assets/SpreadsheetsView-CIrAer4p.css","bytes":5131,"sha256":"744e424d86fc3a59c2ddb5ced88c79ab6e0bd0212181436ab7cebfe97ed9a856"},{"url":"/assets/StorageModeChoice-DaoJmiVT.js","bytes":9089,"sha256":"cbe545a7a9c497cfc0aacac5e7e3a5a687c45bbaf7f8847d1747350279d8ce04"},{"url":"/assets/StorageModeChoice-Dz9CR1XW.css","bytes":2409,"sha256":"7115c0a9edaa3616be71459be51ae0273809078f8bf9311aad688697ed95c69b"},{"url":"/assets/TemplateEditor-BjuSPFc6.js","bytes":242667,"sha256":"fc4bd034313a9441f0f5c3b0a7b0f0ee527400a37c2a288e35bb28b4d4bc260a"},{"url":"/assets/TemplateEditor-BurTT-aB.css","bytes":17866,"sha256":"f3e9bb1b35cf3b82fdb93adcf7eee3a9131ecf7494f3ea78c064ff6cb62aaca3"},{"url":"/assets/TemplatesView-BhrYZ0nK.js","bytes":15877,"sha256":"99c2c9ccc22fbb6a34ab9da8cf60d4b023d67c50871c0f6cf9b8c1e78980bb7f"},{"url":"/assets/TemplatesView-DX7gSIcL.css","bytes":4302,"sha256":"60fa1a8900b8837be7b3e8596af1c5e927f19ce6cc1855f25d9c12044dfb0f87"},{"url":"/assets/TrialCreation-BcJcSdw_.js","bytes":39162,"sha256":"4f6d46b77c1574cab92dfc963a94d4dd05bd610d0bf82df81954efed69f3fef5"},{"url":"/assets/TrialCreation-CYw9ntoD.css","bytes":8702,"sha256":"08c6d1a81165eea68770f47636ea9634144fe77ae4e4874bc0b414611fc9fd61"},{"url":"/assets/TrialsView-DtvuQuaI.js","bytes":257202,"sha256":"ccb1db29d2306919ba91187edfbe950d2d587394ab540d91c960aaf70e66e61b"},{"url":"/assets/TrialsView-sqp6qMgg.css","bytes":94453,"sha256":"a09c7799d5c0280eeefa17d9c1fef098af2be9c204f679ba67df5f686e55279b"},{"url":"/assets/VariableListEditor-CnCIlV0H.js","bytes":18340,"sha256":"ba0146d82690d9d69fac0c4163e302aa1fe9968554bc9fc7249e1b11f601ea45"},{"url":"/assets/VariableListEditor-S1Ed0WEj.css","bytes":10476,"sha256":"8d2835b430f608b04861be28575eac1ee80ef250b5928b9a3b0e1d3bafa1a5f7"},{"url":"/assets/VariableListsView-DovSlVju.css","bytes":3882,"sha256":"cf8a4c288e2fb6559b9f030658086d8a0afc6ac426211291199b573a3aa4c727"},{"url":"/assets/VariableListsView-Dztgrr_k.js","bytes":17949,"sha256":"2455a20ad633b14b586c2db4d859072578aea6249a3388a9737599451c46faea"},{"url":"/assets/WizardComplete-Bre5h3Mr.css","bytes":3460,"sha256":"79aae02a1829a1e1b3f9214c9567f64ef0a63f6a265897905d007ef7dfb52402"},{"url":"/assets/WizardComplete-DnnwdaXN.js","bytes":3263,"sha256":"4004c7f0e2ccaa25fd3bb9ce53d783f58b538ddd56ae5dadca0d259897820a03"},{"url":"/assets/WizardLocalFirst-C_WrUZcd.css","bytes":2524,"sha256":"97a1f40fe1c3ffdf0b5179f7dd2fcbbc165a3c84fc5e80aceb4b7178fc68e1d1"},{"url":"/assets/WizardLocalFirst-DAzojshb.js","bytes":6079,"sha256":"465cf4b2e2eb6b22f3f976511a31fa7305ee913729cb139da550e9867d436bda"},{"url":"/assets/WizardProviderConfig-CaEhSwdd.css","bytes":8222,"sha256":"5018a3b61e31b0156e7310421c2280c2dc867346a58516c6528f48cce2c894f3"},{"url":"/assets/WizardProviderConfig-trZfSLgF.js","bytes":23485,"sha256":"c97a12374c2581421c33dd48d3c12da6177b5198d27b93bf4812d2e3a7e40ea2"},{"url":"/assets/WizardProviderSelection-CyR73BP0.css","bytes":4121,"sha256":"9146995fb080231c700c903626b80b8315ebb39e3010ef8be94034b3c377d568"},{"url":"/assets/WizardProviderSelection-xdJGgzS2.js","bytes":11174,"sha256":"2bdfb59f2b7b0683ac24b28abda458f2acd1955781ef2443d517d1ee0a90defd"},{"url":"/assets/WizardSecurity-mn_qXoRy.js","bytes":1146,"sha256":"82c5dd25bbccc0ce102ffc302a64d48cde32d8ae286dd14491c337c9473c63ef"},{"url":"/assets/WizardSecurity-pnC3WyVE.css","bytes":207,"sha256":"66a0060bc318c6d65e714ebc51229f4382f4978830b3ca4d58048ac288eae387"},{"url":"/assets/WizardStorageGate-4hapDw2n.css","bytes":6739,"sha256":"a9346b3ee1b49a67573c975764f178c7d6c1f70e7e350521c223b67aed5d52b8"},{"url":"/assets/WizardStorageGate-DMBL11l1.js","bytes":9175,"sha256":"4d6113b675f9ab15fee3a13ca2205ce1f51305c5cc9ab2e73ad6471c3cfd0a35"},{"url":"/assets/WizardTelemetry-DS8qeCDs.css","bytes":2085,"sha256":"0fefc1f05a5b9276b771eeef0ab359cd5a8c77ad1c98c446412b9fc255ef773f"},{"url":"/assets/WizardTelemetry-rgSomlKs.js","bytes":2469,"sha256":"6b4a5da7274cc37456afca896e65f5f4764fb45f3ba6264e417f619f466d619d"},{"url":"/assets/WizardWelcome-DNlzQekw.css","bytes":4930,"sha256":"46d1d6a469d9cce48d42b4a55a9802bb61d03f6d559d3910e3751844a425c9d2"},{"url":"/assets/WizardWelcome-SZuu2gM3.js","bytes":6299,"sha256":"60a7ab48b94d2a6130cc0a0371b4b4e84044159c70b0026ad3d029111a525f7f"},{"url":"/assets/anthropic-CTyLc6wY.js","bytes":657,"sha256":"db5464aded393084e37ca8b935bb37844018678323db104b2e7165101d350308"},{"url":"/assets/anthropic-messages-iPemL--9.js","bytes":2828,"sha256":"2fca6629164c42d7816c1f8af0ffe654cafcd946464d1a9edfaf9be545020cd2"},{"url":"/assets/authored-source-compatibility-B3b0dX2u.js","bytes":2454,"sha256":"190be8adadd7a429d76c10caa88db372f6c7e443e0e74a72c998cd3d435dae58"},{"url":"/assets/authoring-DzBPTJSn.js","bytes":1728,"sha256":"89f1528650ec536f9bf33bf5a18ae7af1154d53edecc7bfe23350a6efa2f8088"},{"url":"/assets/confirm-action-nkqei7eU.js","bytes":67,"sha256":"852b1e68ac07d9c8cd3d44ecff5fa9f564213e27bd98ed6dcd9facd6dbe1cd6e"},{"url":"/assets/copy-name-CLtOe1Yd.js","bytes":6466,"sha256":"4ef32b1e79da17f1d3e0e85a7e2c8d575a07823497ca2f3428e729e056e12631"},{"url":"/assets/cost-calculation-FV75NA7U.js","bytes":840,"sha256":"6872c9d247212fdc9a9d75292caf7900d30eef3456490f1a17b9ce8ef75dd345"},{"url":"/assets/costs-BQmMBoro.js","bytes":1891,"sha256":"da5735449c9ffe997ad9beb0f43faf7e05e76b368a3e2ea4e2aa6fa5a3bd1793"},{"url":"/assets/csp-reporter-BDzyHr1B.js","bytes":2134,"sha256":"6775dd71eb2b93e444f63ff5c8e3663095e08bb33dcbae43c642773b714b2367"},{"url":"/assets/curl-generator-BEsRU1TB.js","bytes":827,"sha256":"d9986ce0ed52517fe5f9de287e7001c571967ac51740ee7f427d1f84368227cf"},{"url":"/assets/custom-providers-YL1fYPFV.js","bytes":4155,"sha256":"6e88acea4aa891bce61bf97df62111a6856ca712eb5d603f722d657308056a30"},{"url":"/assets/data-vendor-CKwrMZHi.js","bytes":499549,"sha256":"f895dd67a19c78f7cfa4069482c2f9bd4c754167dc8f9b15f11988e5358ee1ba"},{"url":"/assets/dataset-export.service-Ch5rjFA-.js","bytes":2557,"sha256":"293de3150dbbcaec249a3e8ec6f634e7dcf4c55a1158de012bfe8b8b6d69eba8"},{"url":"/assets/dataset-from-trial-DOa8vL7K.js","bytes":2525,"sha256":"8c026af8f14758a2f732be0d725e203b5674c984d13c3b779c800da455d38558"},{"url":"/assets/dataset-jsonl-Cu7tFX5y.js","bytes":203,"sha256":"8041253f9c54271c8ae4da9a02eb8f8806baf4ce39a9cbefc88862a140e5f2e1"},{"url":"/assets/dataset-operations-D1Ayd_1D.js","bytes":2767,"sha256":"0082875dd296b5eaf72455c7139aaeb287e0ae2cfbd955f85292b993b0b4f794"},{"url":"/assets/dataset-persistence-k9IaMzME.js","bytes":1705,"sha256":"1b65aefd8802b8059dd14014380314f70db99f282bafb4ebe5dca24889e3d2c6"},{"url":"/assets/dataset-summary-CBmJCSe3.js","bytes":503,"sha256":"f9925d9a3f7c2777e04a0003019fefc174990aedfb7a72c73a7504d4503aa275"},{"url":"/assets/deep-equal-bLv6XEjO.js","bytes":817,"sha256":"8131e299b9c54f7d76b7e4d17de7e20876eb1e895df199e79336ced3959a4a8e"},{"url":"/assets/derived-D8l4Pc2F.js","bytes":214,"sha256":"d0e42b888be2e0db59ec909d0555c3eb6a8823a301a66265051662f76096f10d"},{"url":"/assets/desktop-downloads-DZuuUAzn.js","bytes":173,"sha256":"285b8a6f2a1cdd3c529f487c5c72418c1be1a14d7dbbbb15e6b4c9ca922f0860"},{"url":"/assets/deterministic-CswtmBLq.js","bytes":489,"sha256":"3d4c6ec1ede298b7c9312b5b0186f786cd9b024029f69e6c82245bce1fd665a5"},{"url":"/assets/deterministic-Dn3mS_T3.js","bytes":1156,"sha256":"436a69eebd0199980fbb975bbedb6f43b4c581963be11fe8282c37d4e4bfcd06"},{"url":"/assets/display-values-CK7BqR8V.js","bytes":605,"sha256":"116cad61529024ab6caea77e4c5c0f4834c3097c5c0fcdecd910463a6c949302"},{"url":"/assets/draft-C_H7iqV2.js","bytes":5943,"sha256":"11e797e4a883595c70aed832e1c3d98bd8d6d5c3fc7cfe04e4db0750596557aa"},{"url":"/assets/edit-source-B0Ft4o1l.js","bytes":932,"sha256":"3b7defd41dde3518835420cd2909903acc88bc7c2e87a1c803c67e5b9cbd4ef7"},{"url":"/assets/environmental-7SaNww_r.js","bytes":450,"sha256":"84cebbbd936fd31a7709bd34d36c104471cd45b65f505a61ea2fc81f6e317457"},{"url":"/assets/environmental-BaXR2Z0P.js","bytes":436,"sha256":"7a0dba6027154614b9b82b0106c09008e8aab9df16a9303d4ed966486539ba9d"},{"url":"/assets/environmental-CST2cyag.js","bytes":1023,"sha256":"a3ec6c7399b1580323e2d069fa87bb4e0680d764315360a41ab89bf8f84627a0"},{"url":"/assets/environmental-CmakTgQN.js","bytes":445,"sha256":"25ec52ea28c751b0bed6ad8614000894004a05b307ee01d380f8f838ba2b8c2f"},{"url":"/assets/error-serialization-Bbw-acia.js","bytes":1060,"sha256":"56868c29216d2c5d68a6530f267bee215d301dbaea28a8818a7235338762e614"},{"url":"/assets/estimate-DBYNo8Tr.js","bytes":9294,"sha256":"1d51e54d7690f2543d3fc56c70b5a3fc11e47212b2a20cea53937bc67de7a850"},{"url":"/assets/execution-_s31Jf1R.js","bytes":7962,"sha256":"dbb28dfd2c0b3b19c280417bf84cb7f198de1e49092c8fc750f63fb6c3c7e329"},{"url":"/assets/field-ids-DXrUeamA.js","bytes":428,"sha256":"59e9139888a1aa61122457ad9423f997e4528f2889175f6722ff9ba4540700c9"},{"url":"/assets/full-backup.service-B2ilz1a0.js","bytes":2086,"sha256":"190fa1d7d089804aacd20ce380076900efecdd701c75e5154511e2c8e406ad96"},{"url":"/assets/full-restore.service-DJuw3fd-.js","bytes":23826,"sha256":"7b971500e813566d3117906652dc904c43404016885f21671c4cc3cd18d708d6"},{"url":"/assets/huggingface-_GseyfpK.js","bytes":920,"sha256":"4e4e5260447653c3a9e60050d0b2037bac0ec9b44146953a5940d7864a7a610f"},{"url":"/assets/index-B8C8U9lI.js","bytes":123,"sha256":"590b4d0314f3bb323bd57ddf52c07be47183de5364090a8eaebb45a06294ed9f"},{"url":"/assets/index-BO0SpFV0.js","bytes":18046,"sha256":"c887dfa461fa3083f56b5e6a75b2535afdf495f4ff2fffecd1a932138a0103cb"},{"url":"/assets/index-BPJP4Pb4.css","bytes":54806,"sha256":"e6771a840a460bd9b3adeb2dec686a7a7473e75dbc68b4923f2ecddd9a01ee40"},{"url":"/assets/index-Cbf95Eil.js","bytes":341,"sha256":"07e4d38a3671aa09a2559d1696b2d2f4b93e29e6caa941b799386a3a9a02d160"},{"url":"/assets/index-Cdt2ifuX.js","bytes":80341,"sha256":"2d5d2633cade396d48eeafb2f79c0d8a542250a2f81952bc42a92293663573dc"},{"url":"/assets/index-CnTrXU14.css","bytes":2542,"sha256":"01270f0ed179807fdc3a695329a8f26ade381b97881c96dcd8dda62faf13e737"},{"url":"/assets/index-DU2e_x1F.js","bytes":710951,"sha256":"51eee9e563671948b68b9812cef142f39e2a8f8193b3f9417c6537e1deb7eedf"},{"url":"/assets/index-DsFTXQsp.js","bytes":162288,"sha256":"3ea1860f9f22dfd71268d9a2c652fb3bc419330535cf3a066323c6929e9cdfe2"},{"url":"/assets/index-Dsx9-pMF.js","bytes":1057,"sha256":"7b43f25427fb0b27c3b985336e3e3897dc1ab58017c27308cd1cd156453b8534"},{"url":"/assets/index.browser-BQTCXdDo.js","bytes":4839,"sha256":"ce078e0b7c09b5f69d0c0d3a2cb65a44a66b9c322273acd396d46d8f65241eac"},{"url":"/assets/initialization-Cm81javv.js","bytes":5641,"sha256":"29599f615daaf7a6c83ad2a4bdbc4bbfbc5ecc25b219f67ba911a15feee91f2d"},{"url":"/assets/interrupted-generation-CkfUD8N0.js","bytes":2790,"sha256":"015d6055fe1812ee53b29258ad7f24b594048893f649e1d96bf785b72840a656"},{"url":"/assets/list-entries-i3oySrJd.js","bytes":590,"sha256":"14672f299cd6ded6e32f5d47ab38337cebffaae3f7067af0fed9e60062e4415f"},{"url":"/assets/local-config-dtll0SbS.js","bytes":1909,"sha256":"991cabb025362db9ffac861c3a8f2450d462cbb95cf10567c2a692e08e97b101"},{"url":"/assets/mistral-B6b8aYd5.js","bytes":1184,"sha256":"c06d7667932c41379c2d2ee1d200ff5e4327015d434fece0a601b58caa71070c"},{"url":"/assets/nebius-BPZtkA7u.js","bytes":1191,"sha256":"5a67443f1893fd324e805eb61cf1c805f8e9dcbff433d46d7bdb959effc80e41"},{"url":"/assets/ollama-B4DpGuLV.js","bytes":608,"sha256":"1bf809d3c61a20422fd39e131a3d6e73263d01d0484ce654079ce2ef5cb5d959"},{"url":"/assets/ollama-chat-BcdN-dwV.js","bytes":3507,"sha256":"fc249038debbc498ea25930e62a9476cc533fa8ce05e9a96b1a8fcde8ee4b2c7"},{"url":"/assets/ollama-generate-BfG1ZiiW.js","bytes":3888,"sha256":"e3c6e0a12480787b21b25292c6fceeb508d571638cf9c5b6bee40a878150361a"},{"url":"/assets/openai-chat-Bh9rmqG-.js","bytes":2760,"sha256":"046a2e1aa8479c443dd684b8bfb18424b5593c091044eb135d1b5733e9642823"},{"url":"/assets/openai-hdutPmT6.js","bytes":1003,"sha256":"459c68a33396a816ea2f8adf085175e97e610d68711eb15024c3e28726e513a6"},{"url":"/assets/openai-responses-DlTacXH7.js","bytes":3881,"sha256":"cac1a006c43cd8770af2a1bb93dee22b15c9bec6ff91e941eec9dab25ec4de9d"},{"url":"/assets/openrouter-Dcp1z8a-.js","bytes":4442,"sha256":"505f0991c09aeedc279ea0346b96306325016c1f5d94461099452fd04146a0b4"},{"url":"/assets/opfs-sync-writer.worker-Bguqhj4u.js","bytes":1000,"sha256":"cb82b29f9b4b2ae25e7631fb9c49555c35af855de53792c53a3b914bd24f3f72"},{"url":"/assets/paged-table-reader-Cui7blz8.js","bytes":393,"sha256":"62f2cdf5789d993451cd457d068c3bf4f0d0f5c0317df9cf7c31c3c80444ee6f"},{"url":"/assets/parameter-summary-DHbEaOdw.js","bytes":11561,"sha256":"35f849371246dff6ada8d98779e99ef962057000d82050689007108a159eab5d"},{"url":"/assets/prompt-compile-C3Xcjd9w.js","bytes":2081,"sha256":"ed5ed2f9fc377dbe0c935fd16754978a617c9d1eff1e3043aafbf4dc82b5a61d"},{"url":"/assets/provider-enablement-yMHjPPR9.js","bytes":873,"sha256":"05d5635513aa03573190fa388cd3439a62b1b837e16ee9cd57548dae84fb5e09"},{"url":"/assets/pyodide.worker-UXA_A12b.js","bytes":13711,"sha256":"f2a326dd774bf8455e6df381b9182dcc950e980451eb05ddf6280cbe3fd80b53"},{"url":"/assets/render-Dt1RGVWP.js","bytes":851,"sha256":"9ec516b37e5bb60aa03f8673e1c3d09274b2648c8dd9b16d49e75d76050e3f6e"},{"url":"/assets/repository-BBFQlHXn.js","bytes":1158,"sha256":"7b0a674acd9b79bb5b6a273e0435950cdc4fdfef5c0ba685ab412b70124d312e"},{"url":"/assets/repository-_6_4aruE.js","bytes":2359,"sha256":"88815ecda641a4317c45b0ad8dd3d506df4fe1d491f72b0fe538f379dfc147ac"},{"url":"/assets/response-evidence-codec-CESM6Eh8.js","bytes":8723,"sha256":"4d76b7f3104fb2a61f2900876211e574201b9ace844134c5740578287b66c1f8"},{"url":"/assets/response-features-DI4AqBEP.js","bytes":1373,"sha256":"4d11d46be0c38de5198e8055eb2e4d1ba7e1fae7cdd65e6c22595cb8b0c2b910"},{"url":"/assets/row-filters-DVNsrKUs.js","bytes":405,"sha256":"f0e85d49e328197830832f0f7a9dc7fb635806600dd0b7ba13099f10830e322f"},{"url":"/assets/save-file-CMIk3gn9.js","bytes":2110,"sha256":"ab47c2e4308634ce692b6d7f3a61b3ae4bef4c529302e38934b7b165425cb6e3"},{"url":"/assets/shipped-order-D6y7u2FO.js","bytes":457501,"sha256":"3720b6937e6d09a4e2fca16e239f8ecff2f97dd23c473396a2da22cdd54f82c0"},{"url":"/assets/sql-wasm-C1U8OeUW.wasm","bytes":659806,"sha256":"0734155c83e493983d1f2ff5b09a4fab6e35a32e9449c7e4e545756439f62d73"},{"url":"/assets/tabular-export-BPjPZ4xr.js","bytes":83329,"sha256":"0203b20a549a6d0a01fd49a3118de7dd4e209222c95a0cf6818b34e05e63076b"},{"url":"/assets/tauri-download-utilities-3CmqOTpC.js","bytes":3348,"sha256":"e7aea08fbf538af20baca6cb3a7d3fd69d0b8fccfbbf65ea20696557681c491d"},{"url":"/assets/tauri-vendor-CP__BcEW.js","bytes":10816,"sha256":"38fcfb2777c16381a569a519391a725712914162b3fbc9b4a8185e27372c5460"},{"url":"/assets/template-variables-T4-5MHs4.js","bytes":606,"sha256":"68f9ea82c6690f7fc29d9afe477699b20b8c3beb41cbec218142d74010fc65e4"},{"url":"/assets/token-calculator-Cnn_kOWV.js","bytes":5438,"sha256":"864789e1df1c9fcf6fd4fe1fdf7e1f661b8b6dc8ef226b052b6fc54d5defcdaf"},{"url":"/assets/token-counting.worker-DzyAsXBu.js","bytes":2037530,"sha256":"6f6af764f67e6a05da52ded39892cfb7c1e032796f3949ab955a002deacaa33c"},{"url":"/assets/trial-bundle.service-DsI4Iglf.js","bytes":23767,"sha256":"98f36a95362ebdf240e04a5640552440f428769fa0ca2090a37efdc9eebbde5e"},{"url":"/assets/trial-execution-lease-B0TJmm21.js","bytes":699,"sha256":"ce63fee79e6526b2fbe9adc47a0f330c3e0ec3d841dde3c568a3a98cdb1a04c5"},{"url":"/assets/trials-DhgA6oNz.js","bytes":17973,"sha256":"a294cace854adea56aae52929a8616acd38ac94cab2d86ce7ab509638cd9435c"},{"url":"/assets/ui-vendor-C1ajn_XG.js","bytes":986409,"sha256":"e1b43dbad999da1deb74c46e22ca3a34d22fb670f7a9e81b48cc6409c3b49153"},{"url":"/assets/useCostEstimation-D1H811em.js","bytes":512,"sha256":"5f27440b6f69d65fae2ec1c02f2d01e6a2a0010d6b90bcf7119edd3a8c5c15fe"},{"url":"/assets/useCrossTab-CfWhwE-a.js","bytes":671,"sha256":"76b50fef3f1e700a527c860a1de1f99a95310a779fe2abd2f87ec6092c05562e"},{"url":"/assets/useHeatmapStyling-LKKTWsRg.js","bytes":19435,"sha256":"2abe96cefc77a7935787e19f4bc529483791b89444517e44a8715c724e289529"},{"url":"/assets/useLiveQuery-CTlckaLl.js","bytes":728,"sha256":"1575c077ac279c649a927c52a520feb933824d2457f60a9f02f9e1835b8cc65f"},{"url":"/assets/useModels-DYr2PB-n.js","bytes":2559,"sha256":"444831109bde41622a79c3ac9b395f30ff7e469897ab7967d09d8f7254403aab"},{"url":"/assets/usePlaygroundDraft-Cj1VdES2.js","bytes":9031,"sha256":"a9060e52f90856ab5fc375d3b98b317334d526e8fff8acd1fdc4c6d37b01772f"},{"url":"/assets/usePlaygroundDraft-DFJxUFgu.css","bytes":6941,"sha256":"d9533fd2f91d6084102948e8873ed219568c8eed0fd2136dd90db0cde141d196"},{"url":"/assets/useSpreadsheetPrompts-DUYfbq3B.js","bytes":3325,"sha256":"8831ccb82869cbc6c6fe59065879a9155e4ddcd0bce49e2f329d0e6d74450d0e"},{"url":"/assets/useTemplateCommands-BvGqULYn.js","bytes":23860,"sha256":"053cc083e9221c1d31ac961ec3ffce88444fa3d530b3cb925edb9fea6132dd4c"},{"url":"/assets/useTemplates-Ha-GqnXC.js","bytes":3574,"sha256":"974a97e498a799d282c27625ed9520ac62200186216b1a1a99ed0af0c463afcb"},{"url":"/assets/useThrottled-DQO0kFEr.js","bytes":244,"sha256":"7fbfef42f0fc2cc3f44261cbd9e7b4bb5b1ddba11f17e10adfd118b89d254d55"},{"url":"/assets/useTokenCount-B5-zaNSm.js","bytes":3154,"sha256":"cf0e1911986b7996776fe403d95161dd48babf077e7fe48bf0e6866de50f0b0a"},{"url":"/assets/useVariableListCommands-DrVv4iQm.js","bytes":2877,"sha256":"df3952ff690748ada1a32b214e6c29858cf9e4e24c05d4342c7e84df123a4564"},{"url":"/assets/useVariableLists-DsAn80GZ.js","bytes":1972,"sha256":"2d2017c3330aeffaebbe814102678c97717c423a3c4345fdb87d9b0bdd07cd92"},{"url":"/assets/utils-vendor-B3deJ26_.js","bytes":42345,"sha256":"70be20d1410df67641ddb0310b1c34545693aa6fd478c63d4bad7b61894166cb"},{"url":"/assets/variables-Bmb4jSxf.js","bytes":10572,"sha256":"a76e62e3f8620a6b0dd625beede3d22d7ef524f91cee35b0ae3a0ec74ab9c173"},{"url":"/assets/vue-vendor-BiegT0HZ.js","bytes":108581,"sha256":"ba3672dfea866425f0d24d310cccb47edb2586694622ce33495391009a5cb6c1"},{"url":"/assets/vue-virtual-scroller-BCw0uU-l.css","bytes":1220,"sha256":"4d71315fd8c42dc3e7d0ba1e8cb831ad725c22c34cb76c8ff8dbce87d628abb4"},{"url":"/assets/vue-virtual-scroller-CyNULZYm.js","bytes":16632,"sha256":"31a37b36d8db9725a48db7061009e07baa43d9e39092aa93fadcda2e49206402"},{"url":"/assets/webview-DSkDGi7j.js","bytes":16145,"sha256":"fb57e7b7607f6ee9bcd88be5f5af5fd27fb56d4cbbbbacd660014b565063c475"},{"url":"/assets/wizard-flow-CjJ9DnPC.js","bytes":3031,"sha256":"780e9295497758270203a19472832e77028a008854aa5642319df76e70190adf"},{"url":"/favicon-128x128.png","bytes":3706,"sha256":"bbbdeeb9b6966ec47cd61ff198fb0def1ea34d9a785aa8be877d0489fb319167"},{"url":"/favicon-32x32.png","bytes":1081,"sha256":"3c49bb0a85918d8c69f13a724c35395e0f28cbcf67f445ae38b50a3c71d07af2"},{"url":"/favicon.ico","bytes":16672,"sha256":"57222d5e378250fd4cfe1d63ea90269c2f1dfe6c1411998482868782d71a7708"},{"url":"/favicon.png","bytes":14488,"sha256":"98a188b69c38bb92f851f6acc230625f3872f75e4e2a1dbb6291bd40ff1f99b1"},{"url":"/favicon.svg","bytes":684,"sha256":"a9b3b819d4e9b63857d2303ec278c84afbd7957ee517160fad880f6de3206b7e"},{"url":"/icon-192.png","bytes":15066,"sha256":"a5ea9af435092fef44e73b3ccd9c406837e6761f52a7baaeeb61a70ba93d9735"},{"url":"/icon-256x256.png","bytes":19034,"sha256":"74472788a02991156831720912580413451f2d3dde2a3104b330d1dc7dc46fb8"},{"url":"/icon-512.png","bytes":16100,"sha256":"5f69f2d26d0c8945116ce3e93408eef4bec8014ed4e896aaa865df0dea14cc50"},{"url":"/index.html","bytes":2394,"sha256":"8995fc393bc9456b406b97509b1f9328b37f49bdae171d0808733f7dabd81397"},{"url":"/manifest.json","bytes":1260,"sha256":"cf09d81ea03708d3f882f794c0eae4529378c6bda164a18006459102dc21f53a"},{"url":"/maskable-192.png","bytes":12217,"sha256":"f5a4eb0f2e68330466fb36aec9757a73e43ddd9a71cc1613af7c874ca423a339"},{"url":"/maskable-512.png","bytes":36502,"sha256":"fe2e9671e8283eeb07138502e2173a27dc10973119743b6bebed5069ae90742d"}]
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
    // Only the app's own document. The router is hash-based, so the app is
    // always '/' (404.html sends strays to '/index.html'); every other page on
    // the site, such as /download/mac/, is a plain page and goes to the
    // network untouched. Answering those here served the app in their place:
    // a navigation fetch returns redirects unfollowed, so GitHub Pages' 301
    // from /download/mac to /download/mac/ arrived as a status-0
    // opaqueredirect, failed the `ok` check below, and got the cached shell.
    if (path !== '/' && path !== '/index.html') return
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
