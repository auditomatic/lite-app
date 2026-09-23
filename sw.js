/* Auditomatic production Service Worker.
 *
 * The production build replaces the placeholders below with a complete,
 * hashed inventory. Source/dev builds deliberately contain empty inventories;
 * they must never claim production offline readiness.
 */

const BUILD_ID = "8e50d7578af7bbcd140a9d646ed997591a8a00e6"
const RELEASE_ID = "8e50d7578af7bbcd140a9d646ed997591a8a00e6-bb2da5ebdf0ff8e4"
const VENDOR_ID = "d4588e7735b9430116ed6e5d5356da14ba7cd9a9b7797b4005652bf29728d3cb"
const APP_ASSETS = [{"url":"/assets/AddCustomProviderModal-BXibXBfG.css","bytes":879,"sha256":"43c6832a71a2919107e9da1ce197901c602bb287211345c658f3512ab510de69"},{"url":"/assets/AddCustomProviderModal-Bb0wVEHN.js","bytes":17021,"sha256":"b6d273b061d4a66c337402a21c8e30d4a56243ef7a566cf92cc4d8b54696576a"},{"url":"/assets/BuildJudgeDatasetView-B-7DC4xL.js","bytes":6987,"sha256":"6d58c2673c82629b5eb7387e94fb9324f74c8eee263dfa7710d8830e6db5bea4"},{"url":"/assets/BuildJudgeDatasetView-NPOkuEAR.css","bytes":3353,"sha256":"6157af36c2993c0b72ea2cd4685f2ab96688ab99d7cc0ab5b4903e2d3eeedc96"},{"url":"/assets/CodeEditor-CfrosA3M.css","bytes":415,"sha256":"4b46da79967f08d54b6e6aaabbb3417681acd40e882a140511bafa256c9b0046"},{"url":"/assets/CodeEditor-Dw4rUg70.js","bytes":897,"sha256":"a9708765606953217240fcaaa941c86c1f627609bfc2f3719ed88203d7b5ee89"},{"url":"/assets/ColumnFilterPanel-D-uNO3-O.css","bytes":2280,"sha256":"608718efe88864cc91eb2850c886dc9eaa1bb4d9c2fc4bc29315ee2c7d88149b"},{"url":"/assets/ColumnFilterPanel-Djxs3XwC.js","bytes":26417,"sha256":"fb7ced37af4cfc7082446ff165ea326a1eeda107e85686e4d1421a235aaafe97"},{"url":"/assets/DatasetPreview-6N73bAK6.css","bytes":6379,"sha256":"96643f572ef57afac6c0faf876d73af10d5719c2e0bce78c7969bea725ad4718"},{"url":"/assets/DatasetPreview-DjXHBiqo.js","bytes":193051,"sha256":"41d894593e71f8cb87d05b0423eb045962be9d9629826daa9029dee957a64876"},{"url":"/assets/DatasetsView-B3QSkzjk.css","bytes":2215,"sha256":"f59eb980effa3548aa7f1248fe0db0f10cb3d1f48e42bd0fbba8c3687bbc05b1"},{"url":"/assets/DatasetsView-CWNlw0uR.js","bytes":9106,"sha256":"2493d18e4b8c2d9cc721eea00dfca73b3442d2bb46fd45e65455eb1881e96dbf"},{"url":"/assets/ExportDataModal-BWEakpKG.js","bytes":37185,"sha256":"1b4d7f9b0131d20893a9aab8d65dd43050ab81c6649aced2d8afa2959f749864"},{"url":"/assets/ExportDataModal-Ee-aAGef.css","bytes":4598,"sha256":"321c52576a915001a609bedff4a27f90a724f13a8854fe7a09c01038eac9705b"},{"url":"/assets/GenericModelSelectorModal-Bkh8KDUH.css","bytes":15062,"sha256":"a628559e52aa1300390e2abc7a12a1066627106a812720fc9a81cc4587b2a040"},{"url":"/assets/GenericModelSelectorModal-CFy4Mom7.js","bytes":46305,"sha256":"0ddfc63eeb5c45916148f083bc4eb46c8a151bac704d0cee79a7c8bb39781732"},{"url":"/assets/HomeView-B0y9wv_W.js","bytes":10064,"sha256":"53c0fd0126c4b776547a055f2248f49b7e17502d672511f712341b31af5d3be7"},{"url":"/assets/HomeView-BHlqhqJM.css","bytes":4565,"sha256":"efa24babb349d45ac236e450e8ea115c989e49e689c311888b115d80f8822db6"},{"url":"/assets/HydratedPromptPreview-dIGoYJXr.css","bytes":8011,"sha256":"0d796a1ab0c3ab796a0473ab359ba372ab40fd2fabd424799d5e2b102ec74a52"},{"url":"/assets/HydratedPromptPreview-dLfz7HP4.js","bytes":10752,"sha256":"bf3c7a6512f4c4ad3ee31ff7d29c45acb347b3cce3bedbad6d08aac19997f798"},{"url":"/assets/ModelConfiguration-Cae6EZj5.css","bytes":4249,"sha256":"6f4b58a43ed8659360717e90f47f3b1cc681bd5967025ef9e9370d52c08d61e9"},{"url":"/assets/ModelConfiguration-gFfIox4t.js","bytes":17618,"sha256":"e4ab2d41ec5f9dd0893a3ce62dca690860a4fdd7a43d40e1b103bec575fcb494"},{"url":"/assets/ModelContractInspectorModal-BoLDeSve.js","bytes":4976,"sha256":"48fb8126df17b5d2308f3facf80df07452fe62561362d57c8608971e44881534"},{"url":"/assets/ModelContractInspectorModal-dhTnqUJ_.css","bytes":1859,"sha256":"1775e2dff0359ca0d443e4acd9f70c1334bd67c3686efba3ae8070d128e24b81"},{"url":"/assets/ModelsView-CudaTj0O.js","bytes":45382,"sha256":"64d91c4d355be97e1fe8d17569b788f5805c9cd47b02faf87448143fa22e4a48"},{"url":"/assets/ModelsView-DfvvBbE0.css","bytes":13861,"sha256":"25d8f6004b88d76c34b983638e9cae4b3d5317f86d6d9660ebbb2aec1dcaa2bc"},{"url":"/assets/OllamaModelManager-Bqcuvx65.js","bytes":27920,"sha256":"6326cd4037abbf655e76f3c8fdc74f57454864c833d9cc653da98b22925e9fb8"},{"url":"/assets/OllamaModelManager-CKgcwFz4.css","bytes":15299,"sha256":"37d3c9f9cae62ba29707606da74037ab039d43729c13e3f19f5cf4314fe78dff"},{"url":"/assets/ParserEditor-D5hTBSvn.css","bytes":5015,"sha256":"3de26d1b4d78840e8fb11fefb362c0e5140e62a73065f5658f5e5391cd92cce1"},{"url":"/assets/ParserEditor-DBlMHJw9.js","bytes":20557,"sha256":"43f9c1fa414a58a51505a00e9ca6999c86cda32e78b70c6655ccbb3f5c39f1a6"},{"url":"/assets/ParserSelector-CqcA0oTw.css","bytes":6552,"sha256":"c53c809709ee79876333734fb9fdff5d13f21df026af62feae7868d7dfe72252"},{"url":"/assets/ParserSelector-DjQgpEeJ.js","bytes":10556,"sha256":"ce38bf90d1a6434b1be809085e1816de10a168aef5e60e76e5f3620b47ed153e"},{"url":"/assets/ParserTestSectionCompact-Cfwewf9V.css","bytes":2788,"sha256":"fddea098654eab6591656143ac11bf813193e35ccf1e06b843bdac65c3717c29"},{"url":"/assets/ParserTestSectionCompact-GKtjitUh.js","bytes":11299,"sha256":"8e4af7dbab85d4486b385b4151c247d901677d9bea07cd81bbc32c3da14cb8bd"},{"url":"/assets/ParserTesterModal-BCHiMwj1.js","bytes":1954,"sha256":"767ad6c62d8d128e1d7ca3a37f285dcb4ebe683017b971cce6fb922c275697e6"},{"url":"/assets/ParserTesterModal-DVfa-M7N.css","bytes":882,"sha256":"a45f185deed1a36003ea56ed806accfb7ef17b806369b809975ae32038486b7a"},{"url":"/assets/PlaygroundChatHistoryView-BHK7v-hM.js","bytes":3545,"sha256":"6f2240af2f98683eaa5f7ac50621d0a4e629818db5731bfe103559879d88d3be"},{"url":"/assets/PlaygroundChatHistoryView-BLyZlGmd.css","bytes":560,"sha256":"7114ed4740ec1116801b24446e50559c0ad07e6d254d4e4e59b518856efa6207"},{"url":"/assets/PlaygroundChatView-CNXHJsA_.css","bytes":9860,"sha256":"98ae9004dd69819c9e6ddac0998be70e8baa7a017a570eec199677a46d65b7ac"},{"url":"/assets/PlaygroundChatView-xgpVttt0.js","bytes":152466,"sha256":"230ed9064abfb03f7e7eb788cbaaf5d83bb979700f119d7cd3bf608a7a632bfb"},{"url":"/assets/PlaygroundHistoryView-I4o4lioH.js","bytes":24556,"sha256":"ce23d6b59d92fd45287fca50056a77317e5056739b042a0806e4bf1bea61e051"},{"url":"/assets/PlaygroundHistoryView-tvzjR77N.css","bytes":6582,"sha256":"b3fbc1ac1e823f3ac04916a2bb85203840b1e5815cfc1b8dc88cff7161cc1507"},{"url":"/assets/PlaygroundMultiView-BGVPHAFN.js","bytes":22931,"sha256":"7dee4e65fe2f448df1ce07f746373ce15aa2f275b6fb1487fd341e9006d0d4e8"},{"url":"/assets/PlaygroundMultiView-HCcNzcdx.css","bytes":5063,"sha256":"c7687799627edae6f71a7b62620ce95d8685c6fa1af3012e33faad54f5c48750"},{"url":"/assets/PlaygroundStructuredOutputEditor-Bf8MNKax.js","bytes":4304,"sha256":"c2730102f32d0de8cfdd3af01b294081ee18e07a52b4c78130e22aa56a40cf6b"},{"url":"/assets/PlaygroundStructuredOutputEditor-CGE2VrSQ.css","bytes":373,"sha256":"4410551cb6e947228cd496fcac7fecc75b2b8bf5f8e96cffcafccce5ff788cdb"},{"url":"/assets/PlaygroundView-6S41v7C-.css","bytes":16396,"sha256":"a39468f55a7e3357f801249b5aafa8bf1276b3c03495a76f48442565a6243f9b"},{"url":"/assets/PlaygroundView-BLvYsXPf.js","bytes":34698,"sha256":"3840ebadacdddcb082b76462a8c859bc60aa5739f0c6956b5a72a7c1fcf9689e"},{"url":"/assets/PromptAuthoringStack-BWpazx9S.css","bytes":11592,"sha256":"9cf35cba5f617410dac3563eef02f6ec91053a9c523478ae4c025e963ff40786"},{"url":"/assets/PromptAuthoringStack-DunruwKC.js","bytes":13881,"sha256":"b167cb77c73d67c7c29381f94c90e87e5503e4c512ba3dd2361cb55a5f622781"},{"url":"/assets/ResponseFormatEditor-AlKa-abk.js","bytes":11910,"sha256":"8b7ee50ab7dfebded022ee0ffe0042d362b29450546b83c9a94c7bf38f99780c"},{"url":"/assets/ResponseFormatEditor-DUhYbFpL.css","bytes":8548,"sha256":"83b119cc5ab711a4ba3a12b17e627e4584b6c8c17c88486eb2269325d8b388c6"},{"url":"/assets/SettingsView-D2KslGEk.css","bytes":25817,"sha256":"762f856ab46597bb1ffaff6fd055a6f93f04af7ab5c361a8aafc5a9c7bbb6794"},{"url":"/assets/SettingsView-Dnq0Moc-.js","bytes":73710,"sha256":"17d8f38ef73def6cfabe5821e0b4e636328fc8c9e0f7b0411d1f0e8eeba870d8"},{"url":"/assets/SetupView-BYxt6S1t.js","bytes":4978,"sha256":"ecc334f6eed0d06003746b7308dc4199214a500790443d3f713da4bf44d23afc"},{"url":"/assets/SetupView-DBHR_dAP.css","bytes":4029,"sha256":"fb93b00d5b89cb0502cc555538acf272cb15f0750b473b67db197e5082ab5ffe"},{"url":"/assets/SpreadsheetEditor-CyQuDacJ.js","bytes":76388,"sha256":"ac5f550964c52959b236678054df2b267cb6a500c6fdfbeb28144719534bd5c0"},{"url":"/assets/SpreadsheetEditor-ILssV3OO.css","bytes":33683,"sha256":"67e16364200662e7e8fa6868d8f79bf71b253da71aeb7d93c9476340f9153a32"},{"url":"/assets/SpreadsheetsView-CIrAer4p.css","bytes":5131,"sha256":"744e424d86fc3a59c2ddb5ced88c79ab6e0bd0212181436ab7cebfe97ed9a856"},{"url":"/assets/SpreadsheetsView-ChseitQZ.js","bytes":24359,"sha256":"6a77e3c8f171eb88607517a9321b85b7c267edefcd415d223f83a212c8f3a642"},{"url":"/assets/StorageModeChoice-CTmlouqu.js","bytes":9054,"sha256":"807900204bd9f192765a59439c01bd276eb1488667fb140d08ad27f9d9d419c9"},{"url":"/assets/StorageModeChoice-Dz9CR1XW.css","bytes":2409,"sha256":"7115c0a9edaa3616be71459be51ae0273809078f8bf9311aad688697ed95c69b"},{"url":"/assets/TemplateEditor-ClcABGrG.js","bytes":241531,"sha256":"4362a165e7153b5d8eaea4ee9c5b5494442faec0ce681cb7ad2b19f8e12d0181"},{"url":"/assets/TemplateEditor-tgKLT5Hb.css","bytes":17866,"sha256":"853462360b48e91ab4d007195b3fe9463b9941a7b13c825ebe02ced7a8b43eaf"},{"url":"/assets/TemplatesView-CLFtMOC4.js","bytes":15877,"sha256":"cfe7fd0d69a78b37854b205165efaa7d071cf0ac704a6f57b79867519aab37ed"},{"url":"/assets/TemplatesView-DX7gSIcL.css","bytes":4302,"sha256":"60fa1a8900b8837be7b3e8596af1c5e927f19ce6cc1855f25d9c12044dfb0f87"},{"url":"/assets/TrialCreation-BRx_QbxO.css","bytes":8702,"sha256":"a2a2b32ac549fd033e57434b956cf0f7a14536a6669afda60d26ad5ce947f581"},{"url":"/assets/TrialCreation-IkoSjY5R.js","bytes":39111,"sha256":"91401ecef2d30e342ff21572c3afa58c2918b4791721558ba750007b1a1ac64a"},{"url":"/assets/TrialsView-C8wtxqmb.css","bytes":94453,"sha256":"7ffae64f71b027d8ea9834cfb4ce1c058cec483332d5631111c27e475a183382"},{"url":"/assets/TrialsView-CnF0KU9k.js","bytes":265225,"sha256":"b553027e33c2b5787f7989213dcd5f4b0d95c91e2974679021c2ab8866fabd20"},{"url":"/assets/VariableListEditor-7PppEESt.js","bytes":18308,"sha256":"15282aab01c4ad126779800433129cc2b7aebe6bd82316e73ba588eba257d952"},{"url":"/assets/VariableListEditor-GCLtAjZp.css","bytes":10476,"sha256":"b70d840637382b80e306010b4901aea0096838f292d914fe7400e762ab54f263"},{"url":"/assets/VariableListsView-Ct1_JSFd.js","bytes":17917,"sha256":"a84a79915b58d4d107d671d1aa198e56b8b732453e7e754495fa61e75804b8a6"},{"url":"/assets/VariableListsView-DovSlVju.css","bytes":3882,"sha256":"cf8a4c288e2fb6559b9f030658086d8a0afc6ac426211291199b573a3aa4c727"},{"url":"/assets/WizardComplete-Bre5h3Mr.css","bytes":3460,"sha256":"79aae02a1829a1e1b3f9214c9567f64ef0a63f6a265897905d007ef7dfb52402"},{"url":"/assets/WizardComplete-DmACnDv7.js","bytes":3263,"sha256":"46f67a9c1d6b27a529febaf6288535fe1e372c96e80490e8ef75267b0948a4cf"},{"url":"/assets/WizardLocalFirst-B1hjTP3S.css","bytes":2524,"sha256":"2e83cb5fef3298c1c8e2e38199dbfff0d4e44d01574f2e16e6173f1f77b74ad1"},{"url":"/assets/WizardLocalFirst-DVjxde5r.js","bytes":5776,"sha256":"7837925009b39bb7400571493b23d3cdb8856e76491bd4f732a4f942aac00b25"},{"url":"/assets/WizardProviderConfig-D19BSKBq.js","bytes":23896,"sha256":"b682717858c6847e552f7bb766c26be6ec722003a12bd988f821ece8e50f0670"},{"url":"/assets/WizardProviderConfig-Dw_ZDq-d.css","bytes":8222,"sha256":"657fcc97fd3a0ff814e48e0289aaeed78c1b60e77fdd72444bf4b3fa388d9823"},{"url":"/assets/WizardProviderSelection-Cnt50-oN.js","bytes":11174,"sha256":"5032af9d052220af408e65fad798fc0479de0dd0cd95374e8993363305dab1ec"},{"url":"/assets/WizardProviderSelection-CyR73BP0.css","bytes":4121,"sha256":"9146995fb080231c700c903626b80b8315ebb39e3010ef8be94034b3c377d568"},{"url":"/assets/WizardSecurity-Cn7aRrZw.js","bytes":1146,"sha256":"46a1c1db3d380a1cfa6d68ffd29572ca1330e2d8d82ac9a548e62f836b0eedf4"},{"url":"/assets/WizardSecurity-pnC3WyVE.css","bytes":207,"sha256":"66a0060bc318c6d65e714ebc51229f4382f4978830b3ca4d58048ac288eae387"},{"url":"/assets/WizardStorageGate-BG8VDNnm.js","bytes":8764,"sha256":"bd515488bfbcc408d6df4f6a7391632c2d46c4709feb797773fe396b2aabbc73"},{"url":"/assets/WizardStorageGate-PvJVTKL9.css","bytes":6451,"sha256":"936a7cca6057e4b0d8310298d6448c4d6b0121e8e6556a5762250c0ff36e724c"},{"url":"/assets/WizardTelemetry-DQPOP2ko.js","bytes":2469,"sha256":"6c124bba9a7bff41c8bdcba6f11d802647d254a6e1b2036b872f39f266bf8399"},{"url":"/assets/WizardTelemetry-DS8qeCDs.css","bytes":2085,"sha256":"0fefc1f05a5b9276b771eeef0ab359cd5a8c77ad1c98c446412b9fc255ef773f"},{"url":"/assets/WizardWelcome-D9Fk87ww.js","bytes":6299,"sha256":"ee10377f8933f0a900130784613fb29a9fcf3cbcc436c4278cd2955e075b1aa7"},{"url":"/assets/WizardWelcome-DNlzQekw.css","bytes":4930,"sha256":"46d1d6a469d9cce48d42b4a55a9802bb61d03f6d559d3910e3751844a425c9d2"},{"url":"/assets/anthropic-CTyLc6wY.js","bytes":657,"sha256":"db5464aded393084e37ca8b935bb37844018678323db104b2e7165101d350308"},{"url":"/assets/anthropic-messages-Dn28aUJf.js","bytes":2780,"sha256":"696f819be31376bd4d4f48616d35ff4249107a54ae4c84f3061e2c15542a764d"},{"url":"/assets/authored-source-compatibility-DconnbzT.js","bytes":2454,"sha256":"7ee618b5ca4cb760bad34f04a8b92d96d48bacfdb77291b71e4329903191cfe9"},{"url":"/assets/authoring-DzBPTJSn.js","bytes":1728,"sha256":"89f1528650ec536f9bf33bf5a18ae7af1154d53edecc7bfe23350a6efa2f8088"},{"url":"/assets/confirm-action-nkqei7eU.js","bytes":67,"sha256":"852b1e68ac07d9c8cd3d44ecff5fa9f564213e27bd98ed6dcd9facd6dbe1cd6e"},{"url":"/assets/copy-name-BOSTo-wU.js","bytes":6466,"sha256":"53b5c621ee35161b1f76e824ebde02e1fb40958806a681f268db51eca22bb233"},{"url":"/assets/cost-calculation-Dp_zBPLi.js","bytes":843,"sha256":"4714aa5245e1ebb49283220230849d0b1bb6664cab30f23a35e0171c94f4b61e"},{"url":"/assets/costs-CxNv-CnP.js","bytes":1891,"sha256":"043536ea2d24f0691cadef613f14f16290c759b66c836dfcbf889c88cdfa031f"},{"url":"/assets/csp-reporter-74vF7flv.js","bytes":2134,"sha256":"80457cd35901fcc708fda222f5d10c00a852a2e2da5ef5748c96804a69715137"},{"url":"/assets/curl-generator-C32lQGWV.js","bytes":827,"sha256":"92432bce48f8fe5f06ff88c2ab70d0a1fae0f69259130cce2626cf2f32ebe4d9"},{"url":"/assets/custom-providers-C2CJyfiJ.js","bytes":4155,"sha256":"e0f2cdde887e594abba0a36d1df9a8e9a8b699fdaf9a4ef4cb3ab150db0ab543"},{"url":"/assets/data-vendor-CKwrMZHi.js","bytes":499549,"sha256":"f895dd67a19c78f7cfa4069482c2f9bd4c754167dc8f9b15f11988e5358ee1ba"},{"url":"/assets/dataset-export.service-DM13Dnpe.js","bytes":2522,"sha256":"7067e020fa881a78951c2edc7d9d0757276b2deb61a1ef25e0dd03b5d4be0c8d"},{"url":"/assets/dataset-from-trial-B8-cqmrW.js","bytes":2525,"sha256":"ffead16fd9699c930ba42f7ee14c5b42d8a9bebee8e4530786ba7e33546e2a7e"},{"url":"/assets/dataset-operations-X9Ce6Bwr.js","bytes":2766,"sha256":"8ad2fda28a38f86d5e2ca6f3126ccfa7fb5d7b2c4b16ae25775e4cc072d3a191"},{"url":"/assets/dataset-parquet-Dnyca11y.js","bytes":478,"sha256":"28671f10227033c69ba2e27de2c9ffe95e4949f76481dae7cd7035050c07f7d6"},{"url":"/assets/dataset-persistence-MK6jod9h.js","bytes":1705,"sha256":"2660a49155ef22cab72f879d1fec60ff0acf6e9e5ea21aad8e2d778dd52da999"},{"url":"/assets/dataset-summary-CBmJCSe3.js","bytes":503,"sha256":"f9925d9a3f7c2777e04a0003019fefc174990aedfb7a72c73a7504d4503aa275"},{"url":"/assets/deep-equal-bLv6XEjO.js","bytes":817,"sha256":"8131e299b9c54f7d76b7e4d17de7e20876eb1e895df199e79336ced3959a4a8e"},{"url":"/assets/derived-CYsvIzdD.js","bytes":214,"sha256":"18b657affab6df839ff000fab409562ffe7ec8750dc00452dc36b84f8603bdb0"},{"url":"/assets/deterministic-CswtmBLq.js","bytes":489,"sha256":"3d4c6ec1ede298b7c9312b5b0186f786cd9b024029f69e6c82245bce1fd665a5"},{"url":"/assets/deterministic-Dn3mS_T3.js","bytes":1156,"sha256":"436a69eebd0199980fbb975bbedb6f43b4c581963be11fe8282c37d4e4bfcd06"},{"url":"/assets/display-values-D3R-R7BQ.js","bytes":711,"sha256":"643237f7e342dc07a71fc5be487e6b16ae4c458e223b7819d0f0fd0fa6264b7e"},{"url":"/assets/draft-RabVuVXU.js","bytes":5943,"sha256":"6c718fa6565c410365bc5f19401a3bf8992a9268718d2822d08e6320dff5870a"},{"url":"/assets/edit-source-wE4xt6KR.js","bytes":828,"sha256":"02b01b43fe1568c61a1687ef28ab6c1ddcb11129c01ac19d981c2349e95b54f7"},{"url":"/assets/environmental-7SaNww_r.js","bytes":450,"sha256":"84cebbbd936fd31a7709bd34d36c104471cd45b65f505a61ea2fc81f6e317457"},{"url":"/assets/environmental-BaXR2Z0P.js","bytes":436,"sha256":"7a0dba6027154614b9b82b0106c09008e8aab9df16a9303d4ed966486539ba9d"},{"url":"/assets/environmental-CST2cyag.js","bytes":1023,"sha256":"a3ec6c7399b1580323e2d069fa87bb4e0680d764315360a41ab89bf8f84627a0"},{"url":"/assets/environmental-CmakTgQN.js","bytes":445,"sha256":"25ec52ea28c751b0bed6ad8614000894004a05b307ee01d380f8f838ba2b8c2f"},{"url":"/assets/error-serialization-Bbw-acia.js","bytes":1060,"sha256":"56868c29216d2c5d68a6530f267bee215d301dbaea28a8818a7235338762e614"},{"url":"/assets/estimate-XDjmxhff.js","bytes":9335,"sha256":"f81e959cdcb9adb52bab9f8cbc027b12fe0ecadba6485d532db139e7506f1b5f"},{"url":"/assets/execution-ZPAvzFgY.js","bytes":7962,"sha256":"5a853a39a3c4772ab49c913125443a0489a0fd7e802700ea988e18a34fe47cac"},{"url":"/assets/field-ids-DXrUeamA.js","bytes":428,"sha256":"59e9139888a1aa61122457ad9423f997e4528f2889175f6722ff9ba4540700c9"},{"url":"/assets/full-backup.service-CotzZ4yo.js","bytes":2086,"sha256":"7094fb6326e3d40d2784d7b9b859d460191a2ddb27232d90ed13149b98938685"},{"url":"/assets/full-restore.service-B04pe42r.js","bytes":23637,"sha256":"1c92de34c48efaa0ac65d7da9fe26a90b77a6aa9d80abda5f45c06c1120a92af"},{"url":"/assets/huggingface-_GseyfpK.js","bytes":920,"sha256":"4e4e5260447653c3a9e60050d0b2037bac0ec9b44146953a5940d7864a7a610f"},{"url":"/assets/index-45krOYBr.js","bytes":101758,"sha256":"e48cf0e737ea9e142700984cbdbd180ec163566d009c1e9ffe2773fe536f2a48"},{"url":"/assets/index-BCA9BBT9.js","bytes":712403,"sha256":"4c7b4ae1b163de4d5c79d45ad60f1e02a605cfdc57e08bacdbfd9d2c88b3d7ff"},{"url":"/assets/index-CPg-v_TE.css","bytes":2542,"sha256":"d0dabfb2b538fa4ab9b1d7707b47da6072f198a356f9cb65fc06ffcff8afc5f6"},{"url":"/assets/index-D7FmHGnm.js","bytes":123,"sha256":"ddc503a318b653117e1f161fe4a62fc29885370bf862b10104560e6e71e230e3"},{"url":"/assets/index-Dh-2vaBP.js","bytes":2211,"sha256":"63494422f4114f94b6d1140b998c75e240709da949aaa046134a5c5b4199938c"},{"url":"/assets/index-Pi3egD3z.js","bytes":115554,"sha256":"708ac6ad22ed61304525572c826571808d4e3c3482cf249c1c2026f3179fe691"},{"url":"/assets/index-YL8p_peF.css","bytes":54901,"sha256":"395a3ad92433f2072d1ad0e6f69cb8b83bd66386a633e0b9ee3f5d9e36253c2f"},{"url":"/assets/index-cvbUNgHb.js","bytes":1057,"sha256":"9381ee2d3b70ca6fd1c1db975c4bd3169725a1ab1d0aac6299a11aa45b797346"},{"url":"/assets/index-u228pycO.js","bytes":23412,"sha256":"9e01eb10f3da5f38382f39d4e8875c5df2525e874534677f89fc0977268b6064"},{"url":"/assets/index.browser-DnRWheHN.js","bytes":4878,"sha256":"ccac693a4f583daa69455720aaa1dfea78d2677ca87b4ee269e8a97ef41225cf"},{"url":"/assets/initialization-sRs4OTyp.js","bytes":5641,"sha256":"619d5848039229cd29a3fc8096aafcf5973a42ea7fb89c6fd1e6f8963bc81862"},{"url":"/assets/interrupted-generation-DCI1JBH8.js","bytes":2790,"sha256":"b656322cd79e9585a51afba543d5173bc372fc510a25f2655ead709da3be533a"},{"url":"/assets/local-config-TKUapAG-.js","bytes":1909,"sha256":"059ddc93f6b6ec06d0a39cd595a62eb132903668fabbe657f7438fa6b3c8ff66"},{"url":"/assets/mistral-B6b8aYd5.js","bytes":1184,"sha256":"c06d7667932c41379c2d2ee1d200ff5e4327015d434fece0a601b58caa71070c"},{"url":"/assets/nebius-BPZtkA7u.js","bytes":1191,"sha256":"5a67443f1893fd324e805eb61cf1c805f8e9dcbff433d46d7bdb959effc80e41"},{"url":"/assets/ollama-XShvfcPA.js","bytes":607,"sha256":"82d3c92b73d3c700fdae6dbc5eac114a7727d18ecf2c50b859e0801a6ee8142a"},{"url":"/assets/ollama-chat-BcdN-dwV.js","bytes":3507,"sha256":"fc249038debbc498ea25930e62a9476cc533fa8ce05e9a96b1a8fcde8ee4b2c7"},{"url":"/assets/ollama-generate-BfG1ZiiW.js","bytes":3888,"sha256":"e3c6e0a12480787b21b25292c6fceeb508d571638cf9c5b6bee40a878150361a"},{"url":"/assets/openai-chat-Bh9rmqG-.js","bytes":2760,"sha256":"046a2e1aa8479c443dd684b8bfb18424b5593c091044eb135d1b5733e9642823"},{"url":"/assets/openai-hdutPmT6.js","bytes":1003,"sha256":"459c68a33396a816ea2f8adf085175e97e610d68711eb15024c3e28726e513a6"},{"url":"/assets/openai-responses-DlTacXH7.js","bytes":3881,"sha256":"cac1a006c43cd8770af2a1bb93dee22b15c9bec6ff91e941eec9dab25ec4de9d"},{"url":"/assets/openrouter-Dcp1z8a-.js","bytes":4442,"sha256":"505f0991c09aeedc279ea0346b96306325016c1f5d94461099452fd04146a0b4"},{"url":"/assets/openrouter-defaults-9rWrck2t.js","bytes":3123,"sha256":"0ac6e123bd4bf632084f348108e1c3dc5fe577ac433d12421920786b8ef9cf51"},{"url":"/assets/opfs-sync-writer.worker-Bguqhj4u.js","bytes":1000,"sha256":"cb82b29f9b4b2ae25e7631fb9c49555c35af855de53792c53a3b914bd24f3f72"},{"url":"/assets/paged-table-reader-Cui7blz8.js","bytes":393,"sha256":"62f2cdf5789d993451cd457d068c3bf4f0d0f5c0317df9cf7c31c3c80444ee6f"},{"url":"/assets/parameter-summary-c1xomUIR.js","bytes":11561,"sha256":"f15ce054e4a373a825d3a0b82cf8fe17b943cd5198fdf12afec96831369cf43e"},{"url":"/assets/prompt-compile-Dvq4VUME.js","bytes":2081,"sha256":"d4d3c2c8c78301f81b8daa9f701a76f6bbc43078fc917a3596a69ff33754c32c"},{"url":"/assets/provider-enablement-Bxj9x693.js","bytes":709,"sha256":"163f67ea369ffb4515ff484e09e7a39bea29c2fda4267e2c520132aa462dc363"},{"url":"/assets/pyodide.worker-UXA_A12b.js","bytes":13711,"sha256":"f2a326dd774bf8455e6df381b9182dcc950e980451eb05ddf6280cbe3fd80b53"},{"url":"/assets/render-Cz04XRaF.js","bytes":851,"sha256":"1175ca133ec1e5b0ebd445e09f0cd67d0094475daeb811ce1bf9b7ca1eb6c378"},{"url":"/assets/repository-CQ2DhICU.js","bytes":2359,"sha256":"1573501433871f7443d720fc105b7a635829a8612fba30bdfe65e229d12186c7"},{"url":"/assets/repository-DE7DpDDF.js","bytes":1158,"sha256":"729bcac48e869b19b8e5c53c725791c905bbf9fdd25572e79fae4795d931694e"},{"url":"/assets/response-evidence-codec-BUXYagkS.js","bytes":8918,"sha256":"4d6e11448a308e886edd6beee493076da721dcf43e53a55f53d361f27ee6b131"},{"url":"/assets/response-features-Q4DlOVdq.js","bytes":460,"sha256":"383359708bf71ed484eafe3c5ca0d5963ff9cab798765cb928246133a363df98"},{"url":"/assets/row-filters-DVNsrKUs.js","bytes":405,"sha256":"f0e85d49e328197830832f0f7a9dc7fb635806600dd0b7ba13099f10830e322f"},{"url":"/assets/save-file-DrRSEGWY.js","bytes":945,"sha256":"177d03040866caa6ac9f3b64d9fdff386b7640648640b768f37737202d2d157a"},{"url":"/assets/shipped-order-MPCCVYr7.js","bytes":457143,"sha256":"683ac97b247cdfd11e5f3c83fd107dcf91ea1c6d3f4d62a2fa44a6d9a0f9e0a5"},{"url":"/assets/sql-wasm-C1U8OeUW.wasm","bytes":659806,"sha256":"0734155c83e493983d1f2ff5b09a4fab6e35a32e9449c7e4e545756439f62d73"},{"url":"/assets/tabular-export-CjRmD8VK.js","bytes":83389,"sha256":"1cc514b77d03574939710bc0a424852db1e3538c2694bfce4ee8590c1af96372"},{"url":"/assets/tauri-download-utilities-Clcw48jZ.js","bytes":3348,"sha256":"48b7de9ccaf1969d6f86d42d14d3e4ce9956d1b2e6bb8dabcec0de038667fcb4"},{"url":"/assets/tauri-vendor-CMy7hGlg.js","bytes":15658,"sha256":"9ebe68e8be861f560e21260b837a577d98b8aa1f5264c888dbe2a752bb50f465"},{"url":"/assets/template-variables-T4-5MHs4.js","bytes":606,"sha256":"68f9ea82c6690f7fc29d9afe477699b20b8c3beb41cbec218142d74010fc65e4"},{"url":"/assets/token-calculator-BPaeG5ZB.js","bytes":5438,"sha256":"04213b16877df39800688c24488a2a86058973a11e7f0fc2d10705559c739f2e"},{"url":"/assets/token-counting.worker-DzyAsXBu.js","bytes":2037530,"sha256":"6f6af764f67e6a05da52ded39892cfb7c1e032796f3949ab955a002deacaa33c"},{"url":"/assets/trial-bundle.service-bDDzjNWN.js","bytes":23720,"sha256":"2b307b909f81518f3aa060cf6891d963a6ac6f6b6b2094d01f1a53ce5511db1e"},{"url":"/assets/trial-execution-lease-Cjgmh4CT.js","bytes":699,"sha256":"e76984e9bd9a1b2f832e007ee78c079956cce8288f11e3521932f49f185771b5"},{"url":"/assets/trials-Brfs2jVW.js","bytes":17973,"sha256":"c64045feee6b97a886c708863c692282ebbef01d75478bd1bbc748efb6a823d0"},{"url":"/assets/ui-vendor-C1ajn_XG.js","bytes":986409,"sha256":"e1b43dbad999da1deb74c46e22ca3a34d22fb670f7a9e81b48cc6409c3b49153"},{"url":"/assets/useCostEstimation-L_8GPR4i.js","bytes":512,"sha256":"d052514d4dba7ed1b14780855a16d13777b0ecddfc81d141a5d5cebd8f3573f1"},{"url":"/assets/useCrossTab-DGN9gWO0.js","bytes":671,"sha256":"9de5e8f15202dd8579b353f92fae56b60613b1c321d5f57c927a7119bf734b5b"},{"url":"/assets/useHeatmapStyling-BzfPYxvG.js","bytes":5254,"sha256":"1e7ba45d840cd088cf572b07ea035b9fb0d4928e31621bf878fd4873c593adc4"},{"url":"/assets/useLiveQuery-CTlckaLl.js","bytes":728,"sha256":"1575c077ac279c649a927c52a520feb933824d2457f60a9f02f9e1835b8cc65f"},{"url":"/assets/useModels-DFoBZvFo.js","bytes":2559,"sha256":"837a60ff48fad50ed7bdb114c1ea67f1f59b397c3db6209a926d401bb7d369aa"},{"url":"/assets/usePlaygroundDraft-CmsVufA9.js","bytes":9031,"sha256":"0153556c19ba4c915144112e00b01d3d0693d1013a7d7795cd49c5f88285d1ef"},{"url":"/assets/usePlaygroundDraft-DFJxUFgu.css","bytes":6941,"sha256":"d9533fd2f91d6084102948e8873ed219568c8eed0fd2136dd90db0cde141d196"},{"url":"/assets/useSpreadsheetPrompts-DAFtUGdN.js","bytes":3325,"sha256":"e278d4700477dabb64090420a22f73ee0e65e5bf188e6f6d4cf430c3d65c484a"},{"url":"/assets/useTemplateCommands-DKCye-ev.js","bytes":23854,"sha256":"09285269a5d7701db3c4f2ba33ffe2412425b09d2cbbf10434bd03661b63b039"},{"url":"/assets/useTemplates-VNF-3djn.js","bytes":3574,"sha256":"7c70c377622bc15cc06d8f6071239347669719f96500bdeba14e9952dcb0cc04"},{"url":"/assets/useThrottled-DQO0kFEr.js","bytes":244,"sha256":"7fbfef42f0fc2cc3f44261cbd9e7b4bb5b1ddba11f17e10adfd118b89d254d55"},{"url":"/assets/useTokenCount-B9mZYFTw.js","bytes":3154,"sha256":"5aa1a20b1c993ec2aea9ad58de4bb221607841d1ef4943a2d148a77298d6a9f0"},{"url":"/assets/useVariableListCommands-DLN2ZjEh.js","bytes":13399,"sha256":"e80b9f318e1819ec44d161eca12d2219c50e9c1cb0b5e1b3b1912d54a722e571"},{"url":"/assets/useVariableLists-xfUik8mg.js","bytes":1972,"sha256":"093964b8caa47a033420a8bc20a4cd71a42ed1234ae4f5c6c248168253441a78"},{"url":"/assets/utils-vendor-B3deJ26_.js","bytes":42345,"sha256":"70be20d1410df67641ddb0310b1c34545693aa6fd478c63d4bad7b61894166cb"},{"url":"/assets/vue-vendor-BiegT0HZ.js","bytes":108581,"sha256":"ba3672dfea866425f0d24d310cccb47edb2586694622ce33495391009a5cb6c1"},{"url":"/assets/vue-virtual-scroller-BCw0uU-l.css","bytes":1220,"sha256":"4d71315fd8c42dc3e7d0ba1e8cb831ad725c22c34cb76c8ff8dbce87d628abb4"},{"url":"/assets/vue-virtual-scroller-CyNULZYm.js","bytes":16632,"sha256":"31a37b36d8db9725a48db7061009e07baa43d9e39092aa93fadcda2e49206402"},{"url":"/assets/webview-DLxETPQz.js","bytes":16145,"sha256":"a788c706ef4188302f0f92345dc779a1b1b49c92fccec376391d594fcb3fb236"},{"url":"/assets/wizard-flow-JIERYHjs.js","bytes":3031,"sha256":"35600a8cfbdb0bb2239f1d7047fbbbbd0662d011935c37f6888f6f5828e4b42d"},{"url":"/favicon-128x128.png","bytes":3706,"sha256":"bbbdeeb9b6966ec47cd61ff198fb0def1ea34d9a785aa8be877d0489fb319167"},{"url":"/favicon-32x32.png","bytes":1081,"sha256":"3c49bb0a85918d8c69f13a724c35395e0f28cbcf67f445ae38b50a3c71d07af2"},{"url":"/favicon.ico","bytes":16672,"sha256":"57222d5e378250fd4cfe1d63ea90269c2f1dfe6c1411998482868782d71a7708"},{"url":"/favicon.png","bytes":14488,"sha256":"98a188b69c38bb92f851f6acc230625f3872f75e4e2a1dbb6291bd40ff1f99b1"},{"url":"/favicon.svg","bytes":684,"sha256":"a9b3b819d4e9b63857d2303ec278c84afbd7957ee517160fad880f6de3206b7e"},{"url":"/icon-192.png","bytes":15066,"sha256":"a5ea9af435092fef44e73b3ccd9c406837e6761f52a7baaeeb61a70ba93d9735"},{"url":"/icon-256x256.png","bytes":19034,"sha256":"74472788a02991156831720912580413451f2d3dde2a3104b330d1dc7dc46fb8"},{"url":"/icon-512.png","bytes":16100,"sha256":"5f69f2d26d0c8945116ce3e93408eef4bec8014ed4e896aaa865df0dea14cc50"},{"url":"/index.html","bytes":2394,"sha256":"347b438d7537e6d0c7f6484b6bfedf6dc1054e6c3ff6ef6d66367cb9ef6fa708"},{"url":"/manifest.json","bytes":1260,"sha256":"cf09d81ea03708d3f882f794c0eae4529378c6bda164a18006459102dc21f53a"},{"url":"/maskable-192.png","bytes":12217,"sha256":"f5a4eb0f2e68330466fb36aec9757a73e43ddd9a71cc1613af7c874ca423a339"},{"url":"/maskable-512.png","bytes":36502,"sha256":"fe2e9671e8283eeb07138502e2173a27dc10973119743b6bebed5069ae90742d"}]
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
