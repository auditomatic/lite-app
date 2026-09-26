/* Auditomatic production Service Worker.
 *
 * The production build replaces the placeholders below with a complete,
 * hashed inventory. Source/dev builds deliberately contain empty inventories;
 * they must never claim production offline readiness.
 */

const BUILD_ID = "84ddea4c6ec4affbb0eec52611021e4d5d71f04c"
const RELEASE_ID = "84ddea4c6ec4affbb0eec52611021e4d5d71f04c-b4f43adfbbcb2f43"
const VENDOR_ID = "d4588e7735b9430116ed6e5d5356da14ba7cd9a9b7797b4005652bf29728d3cb"
const APP_ASSETS = [{"url":"/assets/AddCustomProviderModal-BKL1h-u8.js","bytes":17021,"sha256":"8c09cc0790ff6808477eb6f20f948f4f5c4cf4ead241fa785232f186da862702"},{"url":"/assets/AddCustomProviderModal-BXibXBfG.css","bytes":879,"sha256":"43c6832a71a2919107e9da1ce197901c602bb287211345c658f3512ab510de69"},{"url":"/assets/BuildJudgeDatasetView-CnREBbNk.js","bytes":6987,"sha256":"20e25b7495b6a3c00d4dead88f238778ede8c8a5eb62b4474a3336fe50049613"},{"url":"/assets/BuildJudgeDatasetView-NPOkuEAR.css","bytes":3353,"sha256":"6157af36c2993c0b72ea2cd4685f2ab96688ab99d7cc0ab5b4903e2d3eeedc96"},{"url":"/assets/CodeEditor-CfrosA3M.css","bytes":415,"sha256":"4b46da79967f08d54b6e6aaabbb3417681acd40e882a140511bafa256c9b0046"},{"url":"/assets/CodeEditor-DdI2YO_F.js","bytes":897,"sha256":"e53c42d961e10e8ecb139b75f00203f25d474535de80bed7f635657b11fbd0a3"},{"url":"/assets/ColumnFilterPanel-D-uNO3-O.css","bytes":2280,"sha256":"608718efe88864cc91eb2850c886dc9eaa1bb4d9c2fc4bc29315ee2c7d88149b"},{"url":"/assets/ColumnFilterPanel-fkDqudc3.js","bytes":25528,"sha256":"8a93ca5b45130ed7bfe136295f5a4869f567b43362359600789246a5026ccf58"},{"url":"/assets/DatasetPreview-6N73bAK6.css","bytes":6379,"sha256":"96643f572ef57afac6c0faf876d73af10d5719c2e0bce78c7969bea725ad4718"},{"url":"/assets/DatasetPreview-BQWWzUne.js","bytes":193051,"sha256":"a83ca427989fce2a0b815db96cfc9b710a24920882052f5f14fcbdef4d2cf04a"},{"url":"/assets/DatasetsView-B3QSkzjk.css","bytes":2215,"sha256":"f59eb980effa3548aa7f1248fe0db0f10cb3d1f48e42bd0fbba8c3687bbc05b1"},{"url":"/assets/DatasetsView-rypBNve-.js","bytes":9106,"sha256":"59069fce1ccb7d27c966fbfa0956397c33ffee2ce0d088c6b2dbb89273aa9b26"},{"url":"/assets/ExportDataModal-B-SoFvZe.js","bytes":37216,"sha256":"5bf123c45de50ccea56abd1f1430d91044505dbcfb4b2b090e327c94a30c6941"},{"url":"/assets/ExportDataModal-Ee-aAGef.css","bytes":4598,"sha256":"321c52576a915001a609bedff4a27f90a724f13a8854fe7a09c01038eac9705b"},{"url":"/assets/GenericModelSelectorModal-9UIkmkU8.js","bytes":46310,"sha256":"da4b6e3da452e12e7d5ccf32586d8c2b35dad1753ad6eeb29ceb61b6e945dbc5"},{"url":"/assets/GenericModelSelectorModal-DhdGdvrE.css","bytes":15062,"sha256":"c99ebf2bee9a0f4e7cb77eb73beba429a8cbdd64041ea26280f6168cf2bc205a"},{"url":"/assets/HomeView-BHlqhqJM.css","bytes":4565,"sha256":"efa24babb349d45ac236e450e8ea115c989e49e689c311888b115d80f8822db6"},{"url":"/assets/HomeView-CzEvmS0L.js","bytes":10064,"sha256":"67370f1f74190b5b9c9415fe8d6e609dd3abb25faa5c68b7ea0bd2d653408338"},{"url":"/assets/HydratedPromptPreview-C_fqMCo6.js","bytes":10752,"sha256":"dcec3eb4b329c616293fa125cf70b899dc5b03ab5b3af5cab284ae039dc7445f"},{"url":"/assets/HydratedPromptPreview-dIGoYJXr.css","bytes":8011,"sha256":"0d796a1ab0c3ab796a0473ab359ba372ab40fd2fabd424799d5e2b102ec74a52"},{"url":"/assets/ModelConfiguration-ClpB9_Kw.js","bytes":18301,"sha256":"9974c9bf6e0202ce9ee644527fd5c2954140166f14b87ecc0449667f5dbe23ed"},{"url":"/assets/ModelConfiguration-DKLQo5uX.css","bytes":4249,"sha256":"c3b83e10a5996089bdb5bd65ec3df2052eadec73259a65c7fb91d514d57dbfca"},{"url":"/assets/ModelContractInspectorModal-CSfnamMM.js","bytes":5011,"sha256":"7daada0a95c9b606b7c3bfebe6c13fe134af5d424fc307edd8bfa6ed270e1222"},{"url":"/assets/ModelContractInspectorModal-dhTnqUJ_.css","bytes":1859,"sha256":"1775e2dff0359ca0d443e4acd9f70c1334bd67c3686efba3ae8070d128e24b81"},{"url":"/assets/ModelsView-4ptByH15.css","bytes":13861,"sha256":"022aac7d73d809bc4d092b1a1480a8309f5aa3996c330a19a7d727b34e33ee4b"},{"url":"/assets/ModelsView-DRRXYbZD.js","bytes":45376,"sha256":"6c121fe3cc46cbafd4ca525d28d0dbec38ac674ab600862551a137a7572c5eb2"},{"url":"/assets/OllamaModelManager-CKgcwFz4.css","bytes":15299,"sha256":"37d3c9f9cae62ba29707606da74037ab039d43729c13e3f19f5cf4314fe78dff"},{"url":"/assets/OllamaModelManager-DugggwSD.js","bytes":27920,"sha256":"74f059e9e5f9907664366e5e4fd7a609677f20787bcfe2e7fce3ef4b79cd49f5"},{"url":"/assets/ParserEditor-CwiTuOF4.js","bytes":20557,"sha256":"065b004a01562186ea1d451a171faf272acea949cfa964898d81a74d304921c1"},{"url":"/assets/ParserEditor-D5hTBSvn.css","bytes":5015,"sha256":"3de26d1b4d78840e8fb11fefb362c0e5140e62a73065f5658f5e5391cd92cce1"},{"url":"/assets/ParserSelector-CqcA0oTw.css","bytes":6552,"sha256":"c53c809709ee79876333734fb9fdff5d13f21df026af62feae7868d7dfe72252"},{"url":"/assets/ParserSelector-T7fVYYSN.js","bytes":10556,"sha256":"d17da8c5d127873b5baaf47d30f83da0a6676dd1949fe02974ce0f98ff3794b4"},{"url":"/assets/ParserTestSectionCompact-BUvLXjY3.js","bytes":11299,"sha256":"06fd1dd7044598804c03484b685dcb7417237aac3361a1672c3e9f3d83aab704"},{"url":"/assets/ParserTestSectionCompact-Cfwewf9V.css","bytes":2788,"sha256":"fddea098654eab6591656143ac11bf813193e35ccf1e06b843bdac65c3717c29"},{"url":"/assets/ParserTesterModal-DVfa-M7N.css","bytes":882,"sha256":"a45f185deed1a36003ea56ed806accfb7ef17b806369b809975ae32038486b7a"},{"url":"/assets/ParserTesterModal-DuA3gyhE.js","bytes":1954,"sha256":"0d51555a738e8672eaf6d081f77be8a9e53c297af381ef7c234d9f5c9bb8e850"},{"url":"/assets/PlaygroundChatHistoryView-BLyZlGmd.css","bytes":560,"sha256":"7114ed4740ec1116801b24446e50559c0ad07e6d254d4e4e59b518856efa6207"},{"url":"/assets/PlaygroundChatHistoryView-DrXnUClX.js","bytes":3545,"sha256":"73628192def634ae2949faca7d51e0c0982e1fb4261397794a8a29e262505b36"},{"url":"/assets/PlaygroundChatView-CNXHJsA_.css","bytes":9860,"sha256":"98ae9004dd69819c9e6ddac0998be70e8baa7a017a570eec199677a46d65b7ac"},{"url":"/assets/PlaygroundChatView-DuEwZFC2.js","bytes":152466,"sha256":"e4c097c38b7ac7bd521783d67ce7f7f593a3adda36c3d1852df5b37e9791bcc6"},{"url":"/assets/PlaygroundHistoryView-Cy7PgMuk.js","bytes":24556,"sha256":"f5286e060726d499c957ad1b9d576d393d120a37a59c4f1f887a7a7c54882e61"},{"url":"/assets/PlaygroundHistoryView-tvzjR77N.css","bytes":6582,"sha256":"b3fbc1ac1e823f3ac04916a2bb85203840b1e5815cfc1b8dc88cff7161cc1507"},{"url":"/assets/PlaygroundMultiView-D5niGX79.js","bytes":22966,"sha256":"ce6f471b5eb15773dcb4d705a59345242982b54edc8c4f4212a8f35dcbadb45b"},{"url":"/assets/PlaygroundMultiView-HCcNzcdx.css","bytes":5063,"sha256":"c7687799627edae6f71a7b62620ce95d8685c6fa1af3012e33faad54f5c48750"},{"url":"/assets/PlaygroundStructuredOutputEditor-CGE2VrSQ.css","bytes":373,"sha256":"4410551cb6e947228cd496fcac7fecc75b2b8bf5f8e96cffcafccce5ff788cdb"},{"url":"/assets/PlaygroundStructuredOutputEditor-CSLPCH2y.js","bytes":4304,"sha256":"058b69a1364549dd77e384cd52e37d1e44b7b8fb555cd04bdb7461e899a1dce5"},{"url":"/assets/PlaygroundView-9ugaaqwY.js","bytes":34927,"sha256":"3b25129725416d75a38f216905bf141b0ea543a26fdcba5a8d9ec286f60aec97"},{"url":"/assets/PlaygroundView-mErwZrVh.css","bytes":16454,"sha256":"7402a537fc3ff38607b1d983020e8738b630f94f62a1d31e39c63181e95ada33"},{"url":"/assets/PromptAuthoringStack-BWpazx9S.css","bytes":11592,"sha256":"9cf35cba5f617410dac3563eef02f6ec91053a9c523478ae4c025e963ff40786"},{"url":"/assets/PromptAuthoringStack-DZRpmaLX.js","bytes":13881,"sha256":"e97014b38d724f9256910f4d003276f64d1012083cb2a9f5925de20b57a8008a"},{"url":"/assets/ResponseFormatEditor-Bon8KGzR.js","bytes":11910,"sha256":"d22ee75bd2cfdd106c7d637874bac3f1fc4a30d48d60819909a589fa9c4bb0d3"},{"url":"/assets/ResponseFormatEditor-DUhYbFpL.css","bytes":8548,"sha256":"83b119cc5ab711a4ba3a12b17e627e4584b6c8c17c88486eb2269325d8b388c6"},{"url":"/assets/SettingsView-CBReprVy.js","bytes":73818,"sha256":"1efe0d1e1780bfc02cf87a6f336204c13abc2933529c0d1ff200f58350376afd"},{"url":"/assets/SettingsView-DrmsSNqq.css","bytes":25817,"sha256":"152e7df1fc6fc48a18a0fde1ce90f01673e2d444c96b700382483d12d2ce04dd"},{"url":"/assets/SetupView-CNF4ZY7H.js","bytes":4978,"sha256":"811ea000d2830bac07c0b83fa41f975683e4911fc2a3b696a09bf65f073820ba"},{"url":"/assets/SetupView-DBHR_dAP.css","bytes":4029,"sha256":"fb93b00d5b89cb0502cc555538acf272cb15f0750b473b67db197e5082ab5ffe"},{"url":"/assets/SpreadsheetEditor-BH_o2Rh6.js","bytes":76388,"sha256":"9cb49c4c77ac83d1e7b2ec73c7762a1451a7c2545a12b96894d7206193f18337"},{"url":"/assets/SpreadsheetEditor-ILssV3OO.css","bytes":33683,"sha256":"67e16364200662e7e8fa6868d8f79bf71b253da71aeb7d93c9476340f9153a32"},{"url":"/assets/SpreadsheetsView-Bub1XE-6.js","bytes":24360,"sha256":"6bfab2ef8e101562d7c022d332cdfd8d3e70c7297f826c7ada9c48b9c70133c1"},{"url":"/assets/SpreadsheetsView-CIrAer4p.css","bytes":5131,"sha256":"744e424d86fc3a59c2ddb5ced88c79ab6e0bd0212181436ab7cebfe97ed9a856"},{"url":"/assets/StorageModeChoice-Dz9CR1XW.css","bytes":2409,"sha256":"7115c0a9edaa3616be71459be51ae0273809078f8bf9311aad688697ed95c69b"},{"url":"/assets/StorageModeChoice-YFWXjpcI.js","bytes":9089,"sha256":"a08c0a5eb15daf8e4989b9f9e1ec0013814cb82b82155345d747b6cf76f04192"},{"url":"/assets/TemplateEditor-BurTT-aB.css","bytes":17866,"sha256":"f3e9bb1b35cf3b82fdb93adcf7eee3a9131ecf7494f3ea78c064ff6cb62aaca3"},{"url":"/assets/TemplateEditor-BxxWQ-Cz.js","bytes":242667,"sha256":"ff5a85e3631c6dd47fc0f0ffd6de8af2e611cd44e7bedc01043f44f795649fd2"},{"url":"/assets/TemplatesView-BTmHEk0n.js","bytes":15877,"sha256":"ba4a128c9b07f6552151d8e5155d1bbdee9ce3dc0111d03d3caa64fca72db664"},{"url":"/assets/TemplatesView-DX7gSIcL.css","bytes":4302,"sha256":"60fa1a8900b8837be7b3e8596af1c5e927f19ce6cc1855f25d9c12044dfb0f87"},{"url":"/assets/TrialCreation-CYw9ntoD.css","bytes":8702,"sha256":"08c6d1a81165eea68770f47636ea9634144fe77ae4e4874bc0b414611fc9fd61"},{"url":"/assets/TrialCreation-Dq1pv24O.js","bytes":39162,"sha256":"8b77b73368ec87eb4fea67633fabc1ead9a769114a0e28224a613cde6dea463b"},{"url":"/assets/TrialsView-CPCw4N7Z.js","bytes":257202,"sha256":"57c66beb004649ca814e116ef3b6833825957be932fde37748b614531ec2a81d"},{"url":"/assets/TrialsView-sqp6qMgg.css","bytes":94453,"sha256":"a09c7799d5c0280eeefa17d9c1fef098af2be9c204f679ba67df5f686e55279b"},{"url":"/assets/VariableListEditor-BwUMiGwm.js","bytes":18340,"sha256":"02c13afdddca944ad370ece1fb34123645ce935bbc7bef1edd0754d7a1055688"},{"url":"/assets/VariableListEditor-S1Ed0WEj.css","bytes":10476,"sha256":"8d2835b430f608b04861be28575eac1ee80ef250b5928b9a3b0e1d3bafa1a5f7"},{"url":"/assets/VariableListsView-B_PufESk.js","bytes":17949,"sha256":"519b5ed45729b53944ffa3b2edec630688837b041d8bfff0616cc36c015b9b7a"},{"url":"/assets/VariableListsView-DovSlVju.css","bytes":3882,"sha256":"cf8a4c288e2fb6559b9f030658086d8a0afc6ac426211291199b573a3aa4c727"},{"url":"/assets/WizardComplete-Bre5h3Mr.css","bytes":3460,"sha256":"79aae02a1829a1e1b3f9214c9567f64ef0a63f6a265897905d007ef7dfb52402"},{"url":"/assets/WizardComplete-CH-iW1MG.js","bytes":3263,"sha256":"9cff96c1327de420403b25dd65ca58bd3838265b0014cb3ef5406e5577aa72be"},{"url":"/assets/WizardLocalFirst-B1hjTP3S.css","bytes":2524,"sha256":"2e83cb5fef3298c1c8e2e38199dbfff0d4e44d01574f2e16e6173f1f77b74ad1"},{"url":"/assets/WizardLocalFirst-Bk-nG-SW.js","bytes":5776,"sha256":"1fd094798f11065f8a3592ff4a79a7fc47549ee3994ca4e322f0e1c56027b671"},{"url":"/assets/WizardProviderConfig-BsKAFj8j.js","bytes":23485,"sha256":"5cb7e56bd087990bb9f9f23715c603cdb21d02b376e5ba10db1b70c0ed9df3b6"},{"url":"/assets/WizardProviderConfig-CaEhSwdd.css","bytes":8222,"sha256":"5018a3b61e31b0156e7310421c2280c2dc867346a58516c6528f48cce2c894f3"},{"url":"/assets/WizardProviderSelection-CyR73BP0.css","bytes":4121,"sha256":"9146995fb080231c700c903626b80b8315ebb39e3010ef8be94034b3c377d568"},{"url":"/assets/WizardProviderSelection-DIGbpulJ.js","bytes":11174,"sha256":"e826669fe180fa28cbeb955945488905ecb08f17b255e70dbf3e8849a84265d4"},{"url":"/assets/WizardSecurity-D5h3swLo.js","bytes":1146,"sha256":"521f07c3bdf28dd1aedb010992d8eee9ec65ff910d30b6ebd66d291c09912f08"},{"url":"/assets/WizardSecurity-pnC3WyVE.css","bytes":207,"sha256":"66a0060bc318c6d65e714ebc51229f4382f4978830b3ca4d58048ac288eae387"},{"url":"/assets/WizardStorageGate-Cea5903T.js","bytes":8764,"sha256":"047c8491be41ac53ced34e0db41f0d78473eef867f1891ae4a1c0b67854b13c1"},{"url":"/assets/WizardStorageGate-PvJVTKL9.css","bytes":6451,"sha256":"936a7cca6057e4b0d8310298d6448c4d6b0121e8e6556a5762250c0ff36e724c"},{"url":"/assets/WizardTelemetry-DS8qeCDs.css","bytes":2085,"sha256":"0fefc1f05a5b9276b771eeef0ab359cd5a8c77ad1c98c446412b9fc255ef773f"},{"url":"/assets/WizardTelemetry-P9W_bppm.js","bytes":2469,"sha256":"6fe06650f39135a7655212f0f787345a20b206b0c64d259c726e34a9525fe2d3"},{"url":"/assets/WizardWelcome-BrsyWCwO.js","bytes":6299,"sha256":"fd7a0d4967ccee2a82b74f07d1aa79c621fad6f3ec4ae5d3de7f45e69842790a"},{"url":"/assets/WizardWelcome-DNlzQekw.css","bytes":4930,"sha256":"46d1d6a469d9cce48d42b4a55a9802bb61d03f6d559d3910e3751844a425c9d2"},{"url":"/assets/anthropic-CTyLc6wY.js","bytes":657,"sha256":"db5464aded393084e37ca8b935bb37844018678323db104b2e7165101d350308"},{"url":"/assets/anthropic-messages-iPemL--9.js","bytes":2828,"sha256":"2fca6629164c42d7816c1f8af0ffe654cafcd946464d1a9edfaf9be545020cd2"},{"url":"/assets/authored-source-compatibility-DKJ-6pYW.js","bytes":2454,"sha256":"a3af4310656511009d8c41758362282144ccad46ec4202d38c189ed560f25677"},{"url":"/assets/authoring-DzBPTJSn.js","bytes":1728,"sha256":"89f1528650ec536f9bf33bf5a18ae7af1154d53edecc7bfe23350a6efa2f8088"},{"url":"/assets/confirm-action-nkqei7eU.js","bytes":67,"sha256":"852b1e68ac07d9c8cd3d44ecff5fa9f564213e27bd98ed6dcd9facd6dbe1cd6e"},{"url":"/assets/copy-name-Dw07wO9o.js","bytes":6466,"sha256":"f6f736af3f185c49826a96b0de88de03172e65dbc43257d285967c5577708093"},{"url":"/assets/cost-calculation-Cz3eOycU.js","bytes":840,"sha256":"f6a1668de6895909f3c6fc621049fae7e704b61880592d1212753d1e86f3bc55"},{"url":"/assets/costs-v1OoWaD2.js","bytes":1891,"sha256":"5cc2e8ebe97c651d8e24bcf2cdb20d2a594347d3e5a6562d7e58a38eed7c1714"},{"url":"/assets/csp-reporter-CKFHEqsF.js","bytes":2134,"sha256":"4b01c0a6ff82a20260a103c856f7ebc7268140e5044057a9c9932cb4e1289340"},{"url":"/assets/curl-generator-DT5yQaZW.js","bytes":827,"sha256":"700331c052889c14bbe573ba4da71c64d68c8cb77ef96049fbbc6870a56f8803"},{"url":"/assets/custom-providers-D5LYmy-J.js","bytes":4155,"sha256":"d3ea361f7f9117f866735f69a01c2f5eeaa6b59fb4f0c95c7c65e296346e17df"},{"url":"/assets/data-vendor-CKwrMZHi.js","bytes":499549,"sha256":"f895dd67a19c78f7cfa4069482c2f9bd4c754167dc8f9b15f11988e5358ee1ba"},{"url":"/assets/dataset-export.service-ColKF7F7.js","bytes":2557,"sha256":"56ac0d1f9fc349eddffe0937d745ee864c091f29823248c58646c64b7fc4269f"},{"url":"/assets/dataset-from-trial-vJgwgwxN.js","bytes":2525,"sha256":"7ea2adcc118f83eb3ac4b5b9f52f3f875c3454148d5d4fc05ef55c28f3b51a84"},{"url":"/assets/dataset-jsonl-Cu7tFX5y.js","bytes":203,"sha256":"8041253f9c54271c8ae4da9a02eb8f8806baf4ce39a9cbefc88862a140e5f2e1"},{"url":"/assets/dataset-operations-DKmyJvcK.js","bytes":2767,"sha256":"dd008a48402a737fc108d36de6b860f8fd3a6a97837555e015458cf803f7dac7"},{"url":"/assets/dataset-persistence-C91sO12z.js","bytes":1705,"sha256":"e6b5e51515e0d9e51accc146f4313032bd021dd547d10a4e497d49b8f124b757"},{"url":"/assets/dataset-summary-CBmJCSe3.js","bytes":503,"sha256":"f9925d9a3f7c2777e04a0003019fefc174990aedfb7a72c73a7504d4503aa275"},{"url":"/assets/deep-equal-bLv6XEjO.js","bytes":817,"sha256":"8131e299b9c54f7d76b7e4d17de7e20876eb1e895df199e79336ced3959a4a8e"},{"url":"/assets/derived-B25jpB_1.js","bytes":214,"sha256":"e2175d9c700d092d7c6a4e3bb20fc1b2b50594530619b34b53266af3bfc8e6a2"},{"url":"/assets/deterministic-CswtmBLq.js","bytes":489,"sha256":"3d4c6ec1ede298b7c9312b5b0186f786cd9b024029f69e6c82245bce1fd665a5"},{"url":"/assets/deterministic-Dn3mS_T3.js","bytes":1156,"sha256":"436a69eebd0199980fbb975bbedb6f43b4c581963be11fe8282c37d4e4bfcd06"},{"url":"/assets/display-values-CK7BqR8V.js","bytes":605,"sha256":"116cad61529024ab6caea77e4c5c0f4834c3097c5c0fcdecd910463a6c949302"},{"url":"/assets/draft-C-h_lEv2.js","bytes":5943,"sha256":"af0b39fcf35d0166155d6561711a44ac2d9d79ff517b35591a4e1d5f1c3de68c"},{"url":"/assets/edit-source-lfQYf0ud.js","bytes":932,"sha256":"bad251ecb580fbdb8ee011c9535a37fe1ee041a1b61f1d79959946d74863baa2"},{"url":"/assets/environmental-7SaNww_r.js","bytes":450,"sha256":"84cebbbd936fd31a7709bd34d36c104471cd45b65f505a61ea2fc81f6e317457"},{"url":"/assets/environmental-BaXR2Z0P.js","bytes":436,"sha256":"7a0dba6027154614b9b82b0106c09008e8aab9df16a9303d4ed966486539ba9d"},{"url":"/assets/environmental-CST2cyag.js","bytes":1023,"sha256":"a3ec6c7399b1580323e2d069fa87bb4e0680d764315360a41ab89bf8f84627a0"},{"url":"/assets/environmental-CmakTgQN.js","bytes":445,"sha256":"25ec52ea28c751b0bed6ad8614000894004a05b307ee01d380f8f838ba2b8c2f"},{"url":"/assets/error-serialization-Bbw-acia.js","bytes":1060,"sha256":"56868c29216d2c5d68a6530f267bee215d301dbaea28a8818a7235338762e614"},{"url":"/assets/estimate-BgFaBp-a.js","bytes":9294,"sha256":"9d67de6913c934ade35a3fe09351a5397c6030a0c29efa5721649db5ca48f271"},{"url":"/assets/execution-LtM6omG1.js","bytes":7962,"sha256":"6a4a0c3942a4161f63f79ef4c3572ba5838e39540ae1b2650f8306e588194a95"},{"url":"/assets/field-ids-DXrUeamA.js","bytes":428,"sha256":"59e9139888a1aa61122457ad9423f997e4528f2889175f6722ff9ba4540700c9"},{"url":"/assets/full-backup.service-CBIYIubI.js","bytes":2086,"sha256":"51d39e41f2a953b790c3592dc71b84869997895fba75584eef62919dde9e8066"},{"url":"/assets/full-restore.service-DfO20SVc.js","bytes":23826,"sha256":"f0b19a5a9bb3a397799017741beee182175bae9f2008536dd38b1edfa72f9d87"},{"url":"/assets/huggingface-_GseyfpK.js","bytes":920,"sha256":"4e4e5260447653c3a9e60050d0b2037bac0ec9b44146953a5940d7864a7a610f"},{"url":"/assets/index-B8C8U9lI.js","bytes":123,"sha256":"590b4d0314f3bb323bd57ddf52c07be47183de5364090a8eaebb45a06294ed9f"},{"url":"/assets/index-BikQ--W0.js","bytes":18877,"sha256":"fba2a1a2fd5554b6e701efec2b5d94759eb256462eb3f97ac5d5921ae3a1bf2c"},{"url":"/assets/index-C2gJxO_I.js","bytes":710899,"sha256":"f0ec4b2f75fdcf75831de2bbf9329481050dbb3c24581df8892e8fa1e4c5c455"},{"url":"/assets/index-Cbf95Eil.js","bytes":341,"sha256":"07e4d38a3671aa09a2559d1696b2d2f4b93e29e6caa941b799386a3a9a02d160"},{"url":"/assets/index-CnTrXU14.css","bytes":2542,"sha256":"01270f0ed179807fdc3a695329a8f26ade381b97881c96dcd8dda62faf13e737"},{"url":"/assets/index-DmmbY0H6.js","bytes":80341,"sha256":"7daf6cdb3ff29ff2fdd52f7c58242bc2710ff4c68131648068f547159e135550"},{"url":"/assets/index-DsFTXQsp.js","bytes":162288,"sha256":"3ea1860f9f22dfd71268d9a2c652fb3bc419330535cf3a066323c6929e9cdfe2"},{"url":"/assets/index-Dsx9-pMF.js","bytes":1057,"sha256":"7b43f25427fb0b27c3b985336e3e3897dc1ab58017c27308cd1cd156453b8534"},{"url":"/assets/index-YL8p_peF.css","bytes":54901,"sha256":"395a3ad92433f2072d1ad0e6f69cb8b83bd66386a633e0b9ee3f5d9e36253c2f"},{"url":"/assets/index.browser-B8uj0Ogv.js","bytes":4839,"sha256":"9ab931392d4f8e101e1a847920a9e3de783ea73f33240b0d4be45d0a63d3ffed"},{"url":"/assets/initialization-BqJNSoGC.js","bytes":5641,"sha256":"4865b1583670a0ee0d23eaaf1951a7237b61c53aa1795f6ad9c084e7cf1750d3"},{"url":"/assets/interrupted-generation-6vJlYTKQ.js","bytes":2790,"sha256":"a826a1655f9d41b3930422ed8216756194198241c06df4baba13c36d04ee2b79"},{"url":"/assets/list-entries-CgaRlHdJ.js","bytes":663,"sha256":"bc1067105ff61bd04cffdf9da77ddae0caa7e053f54f43fc867f0cf5be60b59f"},{"url":"/assets/local-config-gxRfVtVn.js","bytes":1909,"sha256":"d32a47b1a67307bd7ccafa507b2912f17749b2e3b8aca8fe18b387b838648c7e"},{"url":"/assets/mistral-B6b8aYd5.js","bytes":1184,"sha256":"c06d7667932c41379c2d2ee1d200ff5e4327015d434fece0a601b58caa71070c"},{"url":"/assets/nebius-BPZtkA7u.js","bytes":1191,"sha256":"5a67443f1893fd324e805eb61cf1c805f8e9dcbff433d46d7bdb959effc80e41"},{"url":"/assets/ollama-B4DpGuLV.js","bytes":608,"sha256":"1bf809d3c61a20422fd39e131a3d6e73263d01d0484ce654079ce2ef5cb5d959"},{"url":"/assets/ollama-chat-BcdN-dwV.js","bytes":3507,"sha256":"fc249038debbc498ea25930e62a9476cc533fa8ce05e9a96b1a8fcde8ee4b2c7"},{"url":"/assets/ollama-generate-BfG1ZiiW.js","bytes":3888,"sha256":"e3c6e0a12480787b21b25292c6fceeb508d571638cf9c5b6bee40a878150361a"},{"url":"/assets/openai-chat-Bh9rmqG-.js","bytes":2760,"sha256":"046a2e1aa8479c443dd684b8bfb18424b5593c091044eb135d1b5733e9642823"},{"url":"/assets/openai-hdutPmT6.js","bytes":1003,"sha256":"459c68a33396a816ea2f8adf085175e97e610d68711eb15024c3e28726e513a6"},{"url":"/assets/openai-responses-DlTacXH7.js","bytes":3881,"sha256":"cac1a006c43cd8770af2a1bb93dee22b15c9bec6ff91e941eec9dab25ec4de9d"},{"url":"/assets/openrouter-Dcp1z8a-.js","bytes":4442,"sha256":"505f0991c09aeedc279ea0346b96306325016c1f5d94461099452fd04146a0b4"},{"url":"/assets/opfs-sync-writer.worker-Bguqhj4u.js","bytes":1000,"sha256":"cb82b29f9b4b2ae25e7631fb9c49555c35af855de53792c53a3b914bd24f3f72"},{"url":"/assets/paged-table-reader-Cui7blz8.js","bytes":393,"sha256":"62f2cdf5789d993451cd457d068c3bf4f0d0f5c0317df9cf7c31c3c80444ee6f"},{"url":"/assets/parameter-summary-DEpmEdCQ.js","bytes":11561,"sha256":"ee61a1acd53545237ef5a0357302f70ad1d0ab11849eeaf46fa962e155930da8"},{"url":"/assets/prompt-compile-CJXXO4tm.js","bytes":2081,"sha256":"63ceb759ad3fb5027a628ba6cb18df101d2c5cd0e28095c1dad4f9ebfa21dcfd"},{"url":"/assets/provider-enablement-BmcmQ4Di.js","bytes":873,"sha256":"3aa1ac33c4016140a36b2baed0f02a1141b5378fa54490a3c8ef77ae39d8ea9d"},{"url":"/assets/pyodide.worker-UXA_A12b.js","bytes":13711,"sha256":"f2a326dd774bf8455e6df381b9182dcc950e980451eb05ddf6280cbe3fd80b53"},{"url":"/assets/render-Cu-w9_gJ.js","bytes":851,"sha256":"c4e1e492ecbe3d403e142d4c26fb6f031a8749dc3e8454276c8552533f8f19d7"},{"url":"/assets/repository-IKrXWvxz.js","bytes":1158,"sha256":"4300365d521215aa5f908162a23b7ccd29e76c3ec374b35b41aa16abb1a7b443"},{"url":"/assets/repository-tvKGgmQ-.js","bytes":2359,"sha256":"7861b1fdc85bc8054f5ab34dc6e0717ec4169eea3eace58ec932d4db940c940c"},{"url":"/assets/response-evidence-codec-DcwYTP45.js","bytes":8723,"sha256":"d34b4a5ed8d6b59b372b08baad9c27a312c075f690d0543a011183517be11634"},{"url":"/assets/response-features-DlDENTda.js","bytes":1373,"sha256":"0e3ac024f59918d9f7408cda5178fb767da3b8c5d53950ea41ca05986f109571"},{"url":"/assets/row-filters-DVNsrKUs.js","bytes":405,"sha256":"f0e85d49e328197830832f0f7a9dc7fb635806600dd0b7ba13099f10830e322f"},{"url":"/assets/save-file-DlKAOdEs.js","bytes":2110,"sha256":"cc6ab23b1b4abf46fd237110e82407eaa3afc88a587f30a5543a7cdd24706aea"},{"url":"/assets/shipped-order-Dbv4VG3W.js","bytes":457501,"sha256":"8ea91ec782cd4ccf0aeaf1221d3fc72197dd6981e9a76825caf6f4c6c4992160"},{"url":"/assets/sql-wasm-C1U8OeUW.wasm","bytes":659806,"sha256":"0734155c83e493983d1f2ff5b09a4fab6e35a32e9449c7e4e545756439f62d73"},{"url":"/assets/tabular-export-Db--liZM.js","bytes":83329,"sha256":"99343d36e0229fe18b340614dfd5d7b3d4761d047b98fb17c864b48e23da1c8d"},{"url":"/assets/tauri-download-utilities-DVzrjg3O.js","bytes":3348,"sha256":"c41d931f16fd475324452535feddad3c9ca0752569e470a05796a49b7080533b"},{"url":"/assets/tauri-vendor-CP__BcEW.js","bytes":10816,"sha256":"38fcfb2777c16381a569a519391a725712914162b3fbc9b4a8185e27372c5460"},{"url":"/assets/template-variables-T4-5MHs4.js","bytes":606,"sha256":"68f9ea82c6690f7fc29d9afe477699b20b8c3beb41cbec218142d74010fc65e4"},{"url":"/assets/token-calculator-e4P1lYjT.js","bytes":5438,"sha256":"d3fc805472047f30b05e3832b4ffd71b1d38383c765fa260d048e0bb51356b0c"},{"url":"/assets/token-counting.worker-DzyAsXBu.js","bytes":2037530,"sha256":"6f6af764f67e6a05da52ded39892cfb7c1e032796f3949ab955a002deacaa33c"},{"url":"/assets/trial-bundle.service-jgV8ZzJA.js","bytes":23767,"sha256":"dbce4bd8929d3ca70cadbee72c697a4a845d399e788f477c78665a4bfd602513"},{"url":"/assets/trial-execution-lease-RttmPoo2.js","bytes":699,"sha256":"712ca4238ad3c2bbd3e43c4722ea38a7c7e146d4f53bf5d42867fc465d2a59bf"},{"url":"/assets/trials-D6qIOPa0.js","bytes":17973,"sha256":"9e18507e631bb897731afb940ad7da509dd7c90cd553ae2a75fbc0bd64d5a715"},{"url":"/assets/ui-vendor-C1ajn_XG.js","bytes":986409,"sha256":"e1b43dbad999da1deb74c46e22ca3a34d22fb670f7a9e81b48cc6409c3b49153"},{"url":"/assets/useCostEstimation-B0N8zyDt.js","bytes":512,"sha256":"28516c7ab3e4c67a4e15803280d4eec9c894d92d704630b3e011a7c63cb3371a"},{"url":"/assets/useCrossTab-CBLod3NH.js","bytes":671,"sha256":"b8ab391fdd7ff3155b03f8eb8c4a62f7f212dca67fe72551107a6ebb61780e86"},{"url":"/assets/useHeatmapStyling-DJmamDSU.js","bytes":19435,"sha256":"773c0a8f9a5fc21a0f8a621aedf43cd9694a8b0316adba03447b4994aaa8f2ba"},{"url":"/assets/useLiveQuery-CTlckaLl.js","bytes":728,"sha256":"1575c077ac279c649a927c52a520feb933824d2457f60a9f02f9e1835b8cc65f"},{"url":"/assets/useModels-CnKzLonp.js","bytes":2559,"sha256":"8df78389937fa4eecce2baed759bc6a1167ac3b1e9fc897da1e9178eb1d0448d"},{"url":"/assets/usePlaygroundDraft-CfY8ZndY.js","bytes":9031,"sha256":"d35da8dea90f2a123dc7a8d372b94235c52cd0c326e0bd1397731ecd758af006"},{"url":"/assets/usePlaygroundDraft-DFJxUFgu.css","bytes":6941,"sha256":"d9533fd2f91d6084102948e8873ed219568c8eed0fd2136dd90db0cde141d196"},{"url":"/assets/useSpreadsheetPrompts-gNKGTA73.js","bytes":3325,"sha256":"f9585ef85244f345659c804f9b095953de4ced72a37c72c2327f7793cedaf6f7"},{"url":"/assets/useTemplateCommands-CvB5u_uk.js","bytes":23860,"sha256":"3f7e60b24b29dca98d7af0e0610671432df9e267e6d15c28df204bb0e129f226"},{"url":"/assets/useTemplates-lAQWauOG.js","bytes":3574,"sha256":"617ae8d1eae0819ccb0e55324b015aea80ebdecfbeca595800da8203e131ce57"},{"url":"/assets/useThrottled-DQO0kFEr.js","bytes":244,"sha256":"7fbfef42f0fc2cc3f44261cbd9e7b4bb5b1ddba11f17e10adfd118b89d254d55"},{"url":"/assets/useTokenCount-DcpJr6NZ.js","bytes":3154,"sha256":"dc1e9b7017a972dafafc21166feb755d0b0274ff244d56cb4f23273f08fccab3"},{"url":"/assets/useVariableListCommands-LZlt_Y3r.js","bytes":2877,"sha256":"3b255a0e58ea2c9fc56b1780698d8c798274179dbc44bfba22a92f8af7cb95da"},{"url":"/assets/useVariableLists-AdKXHwId.js","bytes":1972,"sha256":"e20ea45ba582e23b3c7f4998aef9a4325fa2c5264dd40007fca9a915f28c67dd"},{"url":"/assets/utils-vendor-B3deJ26_.js","bytes":42345,"sha256":"70be20d1410df67641ddb0310b1c34545693aa6fd478c63d4bad7b61894166cb"},{"url":"/assets/variables-DKwGzrvg.js","bytes":10572,"sha256":"629a166b233f82859dce10941d01e8a1604c3e393a3dd60dccc09b0fbd3fa1dc"},{"url":"/assets/vue-vendor-BiegT0HZ.js","bytes":108581,"sha256":"ba3672dfea866425f0d24d310cccb47edb2586694622ce33495391009a5cb6c1"},{"url":"/assets/vue-virtual-scroller-BCw0uU-l.css","bytes":1220,"sha256":"4d71315fd8c42dc3e7d0ba1e8cb831ad725c22c34cb76c8ff8dbce87d628abb4"},{"url":"/assets/vue-virtual-scroller-CyNULZYm.js","bytes":16632,"sha256":"31a37b36d8db9725a48db7061009e07baa43d9e39092aa93fadcda2e49206402"},{"url":"/assets/webview-DSkDGi7j.js","bytes":16145,"sha256":"fb57e7b7607f6ee9bcd88be5f5af5fd27fb56d4cbbbbacd660014b565063c475"},{"url":"/assets/wizard-flow-BtVcqCoq.js","bytes":3031,"sha256":"7f564a67966bed85c27ac3ea6705a8a74fa5b92a417720197c42d8e250d8438a"},{"url":"/favicon-128x128.png","bytes":3706,"sha256":"bbbdeeb9b6966ec47cd61ff198fb0def1ea34d9a785aa8be877d0489fb319167"},{"url":"/favicon-32x32.png","bytes":1081,"sha256":"3c49bb0a85918d8c69f13a724c35395e0f28cbcf67f445ae38b50a3c71d07af2"},{"url":"/favicon.ico","bytes":16672,"sha256":"57222d5e378250fd4cfe1d63ea90269c2f1dfe6c1411998482868782d71a7708"},{"url":"/favicon.png","bytes":14488,"sha256":"98a188b69c38bb92f851f6acc230625f3872f75e4e2a1dbb6291bd40ff1f99b1"},{"url":"/favicon.svg","bytes":684,"sha256":"a9b3b819d4e9b63857d2303ec278c84afbd7957ee517160fad880f6de3206b7e"},{"url":"/icon-192.png","bytes":15066,"sha256":"a5ea9af435092fef44e73b3ccd9c406837e6761f52a7baaeeb61a70ba93d9735"},{"url":"/icon-256x256.png","bytes":19034,"sha256":"74472788a02991156831720912580413451f2d3dde2a3104b330d1dc7dc46fb8"},{"url":"/icon-512.png","bytes":16100,"sha256":"5f69f2d26d0c8945116ce3e93408eef4bec8014ed4e896aaa865df0dea14cc50"},{"url":"/index.html","bytes":2394,"sha256":"a54fbda90299c1fba17d4838307fe49f634c56999a44ccd3755f9d6df637231f"},{"url":"/manifest.json","bytes":1260,"sha256":"cf09d81ea03708d3f882f794c0eae4529378c6bda164a18006459102dc21f53a"},{"url":"/maskable-192.png","bytes":12217,"sha256":"f5a4eb0f2e68330466fb36aec9757a73e43ddd9a71cc1613af7c874ca423a339"},{"url":"/maskable-512.png","bytes":36502,"sha256":"fe2e9671e8283eeb07138502e2173a27dc10973119743b6bebed5069ae90742d"}]
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
