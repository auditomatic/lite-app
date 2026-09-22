/* Auditomatic production Service Worker.
 *
 * The production build replaces the placeholders below with a complete,
 * hashed inventory. Source/dev builds deliberately contain empty inventories;
 * they must never claim production offline readiness.
 */

const BUILD_ID = "c0fa83789c15632deee3a80d685f4f19f7641af7"
const RELEASE_ID = "c0fa83789c15632deee3a80d685f4f19f7641af7-3cec55547b6b080e"
const VENDOR_ID = "d4588e7735b9430116ed6e5d5356da14ba7cd9a9b7797b4005652bf29728d3cb"
const APP_ASSETS = [{"url":"/assets/AddCustomProviderModal-B1M8edEv.js","bytes":17021,"sha256":"f4b69e5f39a8ef638bd5e97dd3e9c87c30b951f68ab0f96326718a16e7b56495"},{"url":"/assets/AddCustomProviderModal-BXibXBfG.css","bytes":879,"sha256":"43c6832a71a2919107e9da1ce197901c602bb287211345c658f3512ab510de69"},{"url":"/assets/BuildJudgeDatasetView-DfAu-EvU.js","bytes":6987,"sha256":"a80a591172b27db804d5ae162c02131ade0009dd2169d139eaa30ecc41d4341b"},{"url":"/assets/BuildJudgeDatasetView-NPOkuEAR.css","bytes":3353,"sha256":"6157af36c2993c0b72ea2cd4685f2ab96688ab99d7cc0ab5b4903e2d3eeedc96"},{"url":"/assets/CodeEditor-CfrosA3M.css","bytes":415,"sha256":"4b46da79967f08d54b6e6aaabbb3417681acd40e882a140511bafa256c9b0046"},{"url":"/assets/CodeEditor-e_YNT2y-.js","bytes":897,"sha256":"c0575c02e76753b530a19eef595eaf352716d01ae4c0771066386a4241056a1d"},{"url":"/assets/ColumnFilterPanel-Buy8N5vD.js","bytes":26416,"sha256":"44e73eb1d722f1cda4efad71915dbf37f9a62554b69503d8795299136370a802"},{"url":"/assets/ColumnFilterPanel-D-uNO3-O.css","bytes":2280,"sha256":"608718efe88864cc91eb2850c886dc9eaa1bb4d9c2fc4bc29315ee2c7d88149b"},{"url":"/assets/DatasetUploader-D9BF1twZ.css","bytes":6379,"sha256":"ab03dcee8fdc98202ccea2963b766e06c0d72c9e4cc4f52a1b86b7efbf8fddff"},{"url":"/assets/DatasetUploader-DY0pNAkg.js","bytes":193034,"sha256":"695e7eb3d6e297fea2b941c04a54b5dc2a3b0da388727fad9ea54b783cccc688"},{"url":"/assets/DatasetsView-B6SFQ19U.css","bytes":2233,"sha256":"37d233a8e4ad5f57335444df7bc79491221bedf71e525c5156979dd3365ebd32"},{"url":"/assets/DatasetsView-Cfa5QYGA.js","bytes":9107,"sha256":"2c0a97bbd256c6e082b74a7eb302709308a6b17dcc963a0d0e8e824f89ebc5a7"},{"url":"/assets/ExportDataModal-Bmikemxj.js","bytes":37184,"sha256":"d7741f40b8a76280ab5383c3b40891816bac49f794ee85a24b11b85c7cef176c"},{"url":"/assets/ExportDataModal-Ee-aAGef.css","bytes":4598,"sha256":"321c52576a915001a609bedff4a27f90a724f13a8854fe7a09c01038eac9705b"},{"url":"/assets/GenericModelSelectorModal-B4DCiMjx.js","bytes":46303,"sha256":"98f7f47c588f0868eac865356aba77050a24d1cef175e2d317e0ef2473233600"},{"url":"/assets/GenericModelSelectorModal-Bkh8KDUH.css","bytes":15062,"sha256":"a628559e52aa1300390e2abc7a12a1066627106a812720fc9a81cc4587b2a040"},{"url":"/assets/HomeView-DcRAB5Lq.js","bytes":11451,"sha256":"0bac61b964625d7b49b10ccd3cf1a9afe1ac26675c9eef03a71a5b304c52b93d"},{"url":"/assets/HomeView-dFzlK7e4.css","bytes":6080,"sha256":"3b7b54a5d91b00ea8388fe9f96cf432ab267301ad8ebed80c27201feef85b06a"},{"url":"/assets/HydratedPromptPreview-CFiz9DY0.css","bytes":8011,"sha256":"2c03603da13051fcd21fbdc68ee9603a55dbc17191bf411d6e3703834c84c6da"},{"url":"/assets/HydratedPromptPreview-DYdIxErC.js","bytes":10701,"sha256":"fccd34b4b421b6301f528fab530fb65cf12c12f7aca7e9ac1afab97cba800391"},{"url":"/assets/ModelConfiguration-Cae6EZj5.css","bytes":4249,"sha256":"6f4b58a43ed8659360717e90f47f3b1cc681bd5967025ef9e9370d52c08d61e9"},{"url":"/assets/ModelConfiguration-DtHVBvJ4.js","bytes":18701,"sha256":"34e045c583865b46cbfd37acad96d47d4b652074c88a621da2ac8d1959663eb0"},{"url":"/assets/ModelContractInspectorModal-_I_7DEo8.js","bytes":4976,"sha256":"954fac7f6afde97201509b47adf2b1e34529c371664589276f140b2ffbf7bb93"},{"url":"/assets/ModelContractInspectorModal-dhTnqUJ_.css","bytes":1859,"sha256":"1775e2dff0359ca0d443e4acd9f70c1334bd67c3686efba3ae8070d128e24b81"},{"url":"/assets/ModelsView-Bqpg-RI3.js","bytes":45367,"sha256":"6af64c2c613c62b7d501334a7e2c4807d501a643e7da374ce0b61b1207507961"},{"url":"/assets/ModelsView-CkQw7iL3.css","bytes":13861,"sha256":"258bffbd3fea5477c0d3574c6f315a261c994b69436cabe8cfa1cd6248dd0ef0"},{"url":"/assets/OllamaModelManager-CKgcwFz4.css","bytes":15299,"sha256":"37d3c9f9cae62ba29707606da74037ab039d43729c13e3f19f5cf4314fe78dff"},{"url":"/assets/OllamaModelManager-D-9ZPO1J.js","bytes":27920,"sha256":"a5b0ef9e700fb15a24ff948dde69c1e08cdf1847d02c75f887a6b6f1cb1bb3d1"},{"url":"/assets/ParserEditor-BSNA0r1f.css","bytes":4947,"sha256":"89e870cfa172e0c50822faeb5f9abdf70f282c7efb6cdda4a8c987b030381867"},{"url":"/assets/ParserEditor-BTqjDjux.js","bytes":20504,"sha256":"655fb9897a0a1d9855d1e54920a15394fc8b71117f2316e88291e09e7cf61b86"},{"url":"/assets/ParserSelector-DQK9o3A4.css","bytes":6442,"sha256":"155381903f3eeeae7ae119534e9619fe6a94a3d9e5eb5073da4089440a0cc3f3"},{"url":"/assets/ParserSelector-nPX-b-ca.js","bytes":10557,"sha256":"8f4fa0b13b0a9a6c8e4ac765d4feb293cd3bab1efc5b0150c06f2ac4287d936a"},{"url":"/assets/ParserTestSectionCompact-oi6GLKFm.css","bytes":2766,"sha256":"a7ed81bbe1b0b9772e5404169e4b142acaba64472ff50a280e2c57f418846094"},{"url":"/assets/ParserTestSectionCompact-vvflSG9D.js","bytes":11384,"sha256":"7f041e321a3abd6f6c8b08d0c05a28b94e5096f0a8cb9bcc203cc69d364316ff"},{"url":"/assets/ParserTesterModal-DI7VplHo.js","bytes":1954,"sha256":"3c0aaa5fd5fa26cdc752844bc1b90dcb4486f733d4eb71c98e05ded6a743053c"},{"url":"/assets/ParserTesterModal-DVfa-M7N.css","bytes":882,"sha256":"a45f185deed1a36003ea56ed806accfb7ef17b806369b809975ae32038486b7a"},{"url":"/assets/PlaygroundChatHistoryView-BLyZlGmd.css","bytes":560,"sha256":"7114ed4740ec1116801b24446e50559c0ad07e6d254d4e4e59b518856efa6207"},{"url":"/assets/PlaygroundChatHistoryView-BsD6TOIq.js","bytes":3545,"sha256":"2fd94c5b65e78944df1d1479eb0373db81adcaadc4150bf679fb01670833bc3a"},{"url":"/assets/PlaygroundChatView-CRG9c6-w.js","bytes":152429,"sha256":"d5b4951232a7952d640b4fc972f025f60f6ea33fce4aea5c28927638b43b3fb3"},{"url":"/assets/PlaygroundChatView-CoN32AiP.css","bytes":9827,"sha256":"bd23440e6bd780757c6dc9a9e565ee8c1f03b48f3717fcec9aa9224003e182e2"},{"url":"/assets/PlaygroundHistoryView-Cdfq5rr-.js","bytes":24556,"sha256":"e861420f307247d662af217193c74d0d327c846782164d729323e974f7b0bcb1"},{"url":"/assets/PlaygroundHistoryView-Duqjp-rM.css","bytes":6530,"sha256":"bb25d1949e97aaca6a93ec16287ce9c6b747441625b9d905b9e9896574ceb935"},{"url":"/assets/PlaygroundMultiView-Dttpo9Wq.css","bytes":5063,"sha256":"2d8529f617a0d194e82282f8ebd728c754f7f7e4c28b4f175613c88d44c8a432"},{"url":"/assets/PlaygroundMultiView-O7H2r6Iz.js","bytes":22762,"sha256":"e236fd12b275a0803e595680e2547d51293a98f2c0a8ef47ec61a4775dc986bf"},{"url":"/assets/PlaygroundStructuredOutputEditor-CGE2VrSQ.css","bytes":373,"sha256":"4410551cb6e947228cd496fcac7fecc75b2b8bf5f8e96cffcafccce5ff788cdb"},{"url":"/assets/PlaygroundStructuredOutputEditor-DRVHcUZ_.js","bytes":4305,"sha256":"b9a3436a18cd0eefeb5e5e46aaf336348b334db75eaeb27747362bb7f5a8b706"},{"url":"/assets/PlaygroundView-6S41v7C-.css","bytes":16396,"sha256":"a39468f55a7e3357f801249b5aafa8bf1276b3c03495a76f48442565a6243f9b"},{"url":"/assets/PlaygroundView-C6mVIq9Y.js","bytes":34699,"sha256":"de7e5d59d67f7c5fce6f7317d1fe6a3189945bfb8e650aee3812aa5a8f90b602"},{"url":"/assets/PromptAuthoringStack-BWpazx9S.css","bytes":11592,"sha256":"9cf35cba5f617410dac3563eef02f6ec91053a9c523478ae4c025e963ff40786"},{"url":"/assets/PromptAuthoringStack-DDhWdtoO.js","bytes":13882,"sha256":"7c24c10f7d031e1758d2c182a541ff4093d5c3cc3556cb2b3eccec0c1fffa3c6"},{"url":"/assets/ResponseFormatEditor-7xfp_fVO.css","bytes":8547,"sha256":"f1acef0d7d994535e841104f5c57b4209d7963392cedf0f973ce1065c641ee95"},{"url":"/assets/ResponseFormatEditor-KYY3PmT4.js","bytes":11856,"sha256":"5031a438549f4fd29c76459986db08645158d79625134b0ae46c7d4083709500"},{"url":"/assets/SettingsView-BX9X-Sw2.css","bytes":25817,"sha256":"9dd93c7989f71e6c23187e42cf7ae28def9edaa806b5f804c2c68f32a34452f7"},{"url":"/assets/SettingsView-COBVfX8i.js","bytes":73692,"sha256":"a393f232f26e19931e90ce84cbc75835cf8f801676aea676c347dce0855941bc"},{"url":"/assets/SetupView-DBHR_dAP.css","bytes":4029,"sha256":"fb93b00d5b89cb0502cc555538acf272cb15f0750b473b67db197e5082ab5ffe"},{"url":"/assets/SetupView-w3UDNqYH.js","bytes":4977,"sha256":"f991a5253dec50e933635cd646a8102d1726d351ea31d79e4e32798b8e1982ac"},{"url":"/assets/SpreadsheetEditor-CFGAXdun.css","bytes":33683,"sha256":"1e33fec0d831a4fdbe0e83150eae395793982f1bff2607e929711f89adfc737b"},{"url":"/assets/SpreadsheetEditor-CmHTjCge.js","bytes":76123,"sha256":"f55f1ba9ce8320d99ee16b03179b38bef15285bfe4dc4b5c411fe43f73903ed3"},{"url":"/assets/SpreadsheetNewTrial-Co40lo-v.css","bytes":4815,"sha256":"4445bf9bab56b349b946a4619f5a89e2a33a8c262ca7c0613a208fe5cd3d341a"},{"url":"/assets/SpreadsheetNewTrial-CoDHB4ND.js","bytes":15414,"sha256":"ef5894957e382720e92452a2518333f882d808796966744b35a17fd43afb3a09"},{"url":"/assets/SpreadsheetsView-CRX6I5mR.js","bytes":24323,"sha256":"e71b86844492a518b02ce6f11f214a3716953c784b1dcbb9ad453c9bb3cca43d"},{"url":"/assets/SpreadsheetsView-naY7qo3V.css","bytes":5131,"sha256":"52eb371b368912bd7b394380aa30e4cbb6c670a8fdc4b497b019d5fc6301f3d5"},{"url":"/assets/StorageModeChoice-Dz9CR1XW.css","bytes":2409,"sha256":"7115c0a9edaa3616be71459be51ae0273809078f8bf9311aad688697ed95c69b"},{"url":"/assets/StorageModeChoice-OIT0rT14.js","bytes":9054,"sha256":"ed37ca1b4353ef9b98d463355983e1f400a6ae18ea49086bd80101702599f084"},{"url":"/assets/TemplateEditor-3XlI7okK.css","bytes":17866,"sha256":"01a98d5c36842ad843dde355a2ca5c6253e0686fcfa297d20883bba41c2e11d5"},{"url":"/assets/TemplateEditor-CszC-EUB.js","bytes":241495,"sha256":"7d30e1d4a8f963bd9d572938f6ef0f853097fc71237f70a610bdfe1b9cb21d34"},{"url":"/assets/TemplatesView-CNjhKXA4.js","bytes":15881,"sha256":"297a392db0448bdf4643152449b078d6bdffce9a5948e243ebc49cbb8816d729"},{"url":"/assets/TemplatesView-DU7cky_6.css","bytes":4302,"sha256":"6eac0aadd0114a9d7d2fd62dd3c392cdb6c00bb55daff0e89d2c3f4cb19046ca"},{"url":"/assets/TrialConflictModal-BigzNcmN.css","bytes":2638,"sha256":"685281ae3799c5b9f75776f33242c8818bb8ccbbff27afa091781f67c05d5534"},{"url":"/assets/TrialConflictModal-igMHWr7v.js","bytes":5568,"sha256":"c30c98bc115586da19912a9c9fd9e805ac8aa6376e71860ba21b75dd6094e1e8"},{"url":"/assets/TrialCreation-BeN18o21.js","bytes":50616,"sha256":"75d568c6d378e5bc6b86a1a19cc47e4aa29dcb803f308e50a25620805ca0bb71"},{"url":"/assets/TrialCreation-CV7gbihw.css","bytes":16930,"sha256":"e05fe8ffff8680e14f0a28c4c6f145b1bc6f6269a8a9600ab5a7d9b794c70c1e"},{"url":"/assets/TrialsView-DqamGyGC.css","bytes":94260,"sha256":"acf0551e6e29760fb7a5767cfdce64109632e12e682be64bea8ceadf514e6ca0"},{"url":"/assets/TrialsView-DsIKo_ti.js","bytes":262504,"sha256":"d7e3ce4ab28919ee9b99992566b2430a86a55b29ca0dac8179d418d39129e7c1"},{"url":"/assets/VariableListEditor-CkM6MRKj.css","bytes":10476,"sha256":"dd57bf148c36d9bae2e7bd70026c86cb95b251b1e52ec33b4edd394d2e8c92d8"},{"url":"/assets/VariableListEditor-D_cIWXMw.js","bytes":18290,"sha256":"0d75700b4ba4df2ddc8b538c9f95dc034bd8d7b3e0b01c687cb30e12a63ea3c2"},{"url":"/assets/VariableListsView-B0xEQAqZ.js","bytes":17900,"sha256":"e2ddafdce522aec4b1a3ed8bfd9bb765b45f309a5a9f0c0bf95cde1c3d6d0ba5"},{"url":"/assets/VariableListsView-rgUkXC5g.css","bytes":3882,"sha256":"54875ec994d5e19a84af31fcee361d89b81d5ceac9f074cfb6b3934ae0e4e305"},{"url":"/assets/WizardComplete-Bre5h3Mr.css","bytes":3460,"sha256":"79aae02a1829a1e1b3f9214c9567f64ef0a63f6a265897905d007ef7dfb52402"},{"url":"/assets/WizardComplete-FeJVRZSE.js","bytes":3263,"sha256":"5f04f73282841f71559bc9f6760033a20f3f8d73c22c7680df108c9bd133effa"},{"url":"/assets/WizardLocalFirst-B1hjTP3S.css","bytes":2524,"sha256":"2e83cb5fef3298c1c8e2e38199dbfff0d4e44d01574f2e16e6173f1f77b74ad1"},{"url":"/assets/WizardLocalFirst-DxDXT3VG.js","bytes":5775,"sha256":"b2f2e8d16129e699e648aad52ab4fdffb54127109afec52ce0c67d3dfb8f4ee7"},{"url":"/assets/WizardProviderConfig-Dw_ZDq-d.css","bytes":8222,"sha256":"657fcc97fd3a0ff814e48e0289aaeed78c1b60e77fdd72444bf4b3fa388d9823"},{"url":"/assets/WizardProviderConfig-GD02rokp.js","bytes":23896,"sha256":"95ebf109e748d1e2cc1e610fd8c1a23070693045012db153ac622591b4176b3a"},{"url":"/assets/WizardProviderSelection-BiIYx1LW.js","bytes":11174,"sha256":"a5ede3233552804120bf11d09c1be8f014b06da04efad9a276fa0729a5c4090b"},{"url":"/assets/WizardProviderSelection-CyR73BP0.css","bytes":4121,"sha256":"9146995fb080231c700c903626b80b8315ebb39e3010ef8be94034b3c377d568"},{"url":"/assets/WizardSecurity-DLXzKkV8.js","bytes":1146,"sha256":"1b913a54e2d031f37ddd067d5026e52f3a88a4723c35bc9c2b3a94cca6b0b285"},{"url":"/assets/WizardSecurity-pnC3WyVE.css","bytes":207,"sha256":"66a0060bc318c6d65e714ebc51229f4382f4978830b3ca4d58048ac288eae387"},{"url":"/assets/WizardStorageGate-D0ZsI-2V.js","bytes":8764,"sha256":"1a9ced49675221fbf0c9d4b782f12e9b3fc144d0bf0dff230f8ccb96b2cec938"},{"url":"/assets/WizardStorageGate-PvJVTKL9.css","bytes":6451,"sha256":"936a7cca6057e4b0d8310298d6448c4d6b0121e8e6556a5762250c0ff36e724c"},{"url":"/assets/WizardTelemetry-DS8qeCDs.css","bytes":2085,"sha256":"0fefc1f05a5b9276b771eeef0ab359cd5a8c77ad1c98c446412b9fc255ef773f"},{"url":"/assets/WizardTelemetry-DjS-2XKd.js","bytes":2469,"sha256":"edd56edcfb6ddb9c39099750f0782d6896507c7baab962fbf9cae351738f3f4c"},{"url":"/assets/WizardWelcome-CvL8tn93.js","bytes":6299,"sha256":"09c05416d5911e425a3dbcf34d946f783683fe7057334363179f58ed28c4e00d"},{"url":"/assets/WizardWelcome-DNlzQekw.css","bytes":4930,"sha256":"46d1d6a469d9cce48d42b4a55a9802bb61d03f6d559d3910e3751844a425c9d2"},{"url":"/assets/anthropic-CTyLc6wY.js","bytes":657,"sha256":"db5464aded393084e37ca8b935bb37844018678323db104b2e7165101d350308"},{"url":"/assets/anthropic-messages-Dn28aUJf.js","bytes":2780,"sha256":"696f819be31376bd4d4f48616d35ff4249107a54ae4c84f3061e2c15542a764d"},{"url":"/assets/authored-source-compatibility-DQBqcgMe.js","bytes":2454,"sha256":"7ad9600326964a10dcfa78bea9c93364edabf58409337c076ac228f88cf2d35d"},{"url":"/assets/authoring-DzBPTJSn.js","bytes":1728,"sha256":"89f1528650ec536f9bf33bf5a18ae7af1154d53edecc7bfe23350a6efa2f8088"},{"url":"/assets/confirm-action-nkqei7eU.js","bytes":67,"sha256":"852b1e68ac07d9c8cd3d44ecff5fa9f564213e27bd98ed6dcd9facd6dbe1cd6e"},{"url":"/assets/copy-name-1k3FAWSe.js","bytes":6466,"sha256":"9cd649ef3d294298d40bf4174b18355e42f914078f2887ec53a27571c3605cf9"},{"url":"/assets/cost-calculation-Dp_zBPLi.js","bytes":843,"sha256":"4714aa5245e1ebb49283220230849d0b1bb6664cab30f23a35e0171c94f4b61e"},{"url":"/assets/costs-BvznzQya.js","bytes":1891,"sha256":"70ecb3c1316afd233a5185a1295d491433bde8f2901aeba46b17874333c1af01"},{"url":"/assets/csp-reporter-Di0N597c.js","bytes":2134,"sha256":"fd31c3a9cf61dd9913a332ab53523b3c06ec18ab7c945a4d0870dc5fff46b859"},{"url":"/assets/curl-generator-DtIImz9S.js","bytes":827,"sha256":"3467d816adaccaec53f5a1fdf841dc3c658a4a491f9772dbcf20a27bf0666900"},{"url":"/assets/custom-providers-vuJehomj.js","bytes":4155,"sha256":"7e91c5f3123f8b17291d99dd7179a39278e9528751f7836e68768794c2ae886e"},{"url":"/assets/data-vendor-CKwrMZHi.js","bytes":499549,"sha256":"f895dd67a19c78f7cfa4069482c2f9bd4c754167dc8f9b15f11988e5358ee1ba"},{"url":"/assets/dataset-export.service-DjcpgK2U.js","bytes":2522,"sha256":"f340e658ffbb83fd07a9cd9048dabbf2df5735f6b8e0387ee1dc31119397ff04"},{"url":"/assets/dataset-from-trial-BcNlgK6r.js","bytes":2525,"sha256":"4ef83b27b4863133e4510d42cbb98b2aac60561e97f64397a88b29f1e2e86301"},{"url":"/assets/dataset-operations-B_YIDpzx.js","bytes":2766,"sha256":"af72d604b60dae28349f71ad4efbe51beacd00d896dfd7cab2eefa296638f95f"},{"url":"/assets/dataset-parquet-BpTUH_ue.js","bytes":478,"sha256":"e3fdafebe1cd2d1fa0685e911b2ec78f82e500410de0743d74fe790f484ef2f9"},{"url":"/assets/dataset-persistence-DUUPWr2w.js","bytes":1705,"sha256":"0885c0b4a574befc1465025e3ee5aab14921e84b04db8f2cbf835d2973fb6159"},{"url":"/assets/dataset-summary-CBmJCSe3.js","bytes":503,"sha256":"f9925d9a3f7c2777e04a0003019fefc174990aedfb7a72c73a7504d4503aa275"},{"url":"/assets/deep-equal-bLv6XEjO.js","bytes":817,"sha256":"8131e299b9c54f7d76b7e4d17de7e20876eb1e895df199e79336ced3959a4a8e"},{"url":"/assets/derived-CfruFge3.js","bytes":214,"sha256":"8ceebc8be849174f61587791315c9aa50b91ff0cedf62ed9b46bd8d97ec2ed7a"},{"url":"/assets/deterministic-CswtmBLq.js","bytes":489,"sha256":"3d4c6ec1ede298b7c9312b5b0186f786cd9b024029f69e6c82245bce1fd665a5"},{"url":"/assets/deterministic-Dn3mS_T3.js","bytes":1156,"sha256":"436a69eebd0199980fbb975bbedb6f43b4c581963be11fe8282c37d4e4bfcd06"},{"url":"/assets/display-values-D3R-R7BQ.js","bytes":711,"sha256":"643237f7e342dc07a71fc5be487e6b16ae4c458e223b7819d0f0fd0fa6264b7e"},{"url":"/assets/draft-stjR47rX.js","bytes":5943,"sha256":"53fcd5dc94b0c45a6f837e9d9a3c822e2e7d6ee384a46b2d37b119ddb7db5023"},{"url":"/assets/edit-source-h2gj7_ZM.js","bytes":828,"sha256":"ad3c6cc55951e6e8e10edf2209fb6fa51576b71be62d48587e20e4bf3882cc22"},{"url":"/assets/environmental-7SaNww_r.js","bytes":450,"sha256":"84cebbbd936fd31a7709bd34d36c104471cd45b65f505a61ea2fc81f6e317457"},{"url":"/assets/environmental-BaXR2Z0P.js","bytes":436,"sha256":"7a0dba6027154614b9b82b0106c09008e8aab9df16a9303d4ed966486539ba9d"},{"url":"/assets/environmental-CST2cyag.js","bytes":1023,"sha256":"a3ec6c7399b1580323e2d069fa87bb4e0680d764315360a41ab89bf8f84627a0"},{"url":"/assets/environmental-CmakTgQN.js","bytes":445,"sha256":"25ec52ea28c751b0bed6ad8614000894004a05b307ee01d380f8f838ba2b8c2f"},{"url":"/assets/error-serialization-Bbw-acia.js","bytes":1060,"sha256":"56868c29216d2c5d68a6530f267bee215d301dbaea28a8818a7235338762e614"},{"url":"/assets/estimate-NOjX9T93.js","bytes":9330,"sha256":"f6ebbb1b4522ed325a4538c242e2bd38ea2304cf4dbff904334ad96c75eb1f3c"},{"url":"/assets/execution-htmuDhYp.js","bytes":7961,"sha256":"510cb7d695b1df43d212f8b71d10562a9e740c1c246bb9a175ab12999db42522"},{"url":"/assets/field-ids-DXrUeamA.js","bytes":428,"sha256":"59e9139888a1aa61122457ad9423f997e4528f2889175f6722ff9ba4540700c9"},{"url":"/assets/full-backup.service-B7LLQi2F.js","bytes":2085,"sha256":"73481aa9cc222f3082fb46c4d89c2fcfa62d50ed990437a2793e9e38505117fa"},{"url":"/assets/full-restore.service-KFVr60kr.js","bytes":23637,"sha256":"0818b052d20d1d7001406f67ab69c23718f1a95db8bc1cbb1f4fed38b0eac951"},{"url":"/assets/huggingface-_GseyfpK.js","bytes":920,"sha256":"4e4e5260447653c3a9e60050d0b2037bac0ec9b44146953a5940d7864a7a610f"},{"url":"/assets/index-B-E1EYoZ.js","bytes":101758,"sha256":"1f77b7ca0c3fc9524eef1b28a0f3915bfa954e7fc56e0a79f9be518b318442e5"},{"url":"/assets/index-BtiQ53hi.js","bytes":713896,"sha256":"50d396bba34de5497db4477e4c177fb9eda63767478204a16d2ee2f0f71f3e79"},{"url":"/assets/index-CPg-v_TE.css","bytes":2542,"sha256":"d0dabfb2b538fa4ab9b1d7707b47da6072f198a356f9cb65fc06ffcff8afc5f6"},{"url":"/assets/index-Cfb64Z8Z.js","bytes":23412,"sha256":"f497365d00835e1604d9e164b10b28e3070d8bcd667d410008a77fff43d27f7b"},{"url":"/assets/index-D7FmHGnm.js","bytes":123,"sha256":"ddc503a318b653117e1f161fe4a62fc29885370bf862b10104560e6e71e230e3"},{"url":"/assets/index-Dh-2vaBP.js","bytes":2211,"sha256":"63494422f4114f94b6d1140b998c75e240709da949aaa046134a5c5b4199938c"},{"url":"/assets/index-Pi3egD3z.js","bytes":115554,"sha256":"708ac6ad22ed61304525572c826571808d4e3c3482cf249c1c2026f3179fe691"},{"url":"/assets/index-cvbUNgHb.js","bytes":1057,"sha256":"9381ee2d3b70ca6fd1c1db975c4bd3169725a1ab1d0aac6299a11aa45b797346"},{"url":"/assets/index-eaL0WW7P.css","bytes":56254,"sha256":"008ba335caee7b7dd1f8c64c080a2e58a04c2482282bb606486ae613d3e6f544"},{"url":"/assets/index.browser-Bo-ebNvc.js","bytes":4878,"sha256":"7fb0764ac1a6ed7b4fabecfcd70d7cd55d597601a0b2017bc2742b87f40fb90b"},{"url":"/assets/initialization-Bq4lX2Xh.js","bytes":5641,"sha256":"4a21e92341c7bdf9c18f301abe23cb914c2a29c9c2c8f138e737e9a0ce1167e8"},{"url":"/assets/interrupted-generation-D1n_SFCU.js","bytes":2790,"sha256":"63a1563459c386bf6bb09798d65dc010657c9fa8a17d8af22161494597cf41c0"},{"url":"/assets/local-config-CgwjT2Pt.js","bytes":1909,"sha256":"b456d11540e7714d01c8b37648f72dca399a4836f842cb8871b5f3d58a4f6442"},{"url":"/assets/mistral-B6b8aYd5.js","bytes":1184,"sha256":"c06d7667932c41379c2d2ee1d200ff5e4327015d434fece0a601b58caa71070c"},{"url":"/assets/nebius-BPZtkA7u.js","bytes":1191,"sha256":"5a67443f1893fd324e805eb61cf1c805f8e9dcbff433d46d7bdb959effc80e41"},{"url":"/assets/ollama-XShvfcPA.js","bytes":607,"sha256":"82d3c92b73d3c700fdae6dbc5eac114a7727d18ecf2c50b859e0801a6ee8142a"},{"url":"/assets/ollama-chat-BcdN-dwV.js","bytes":3507,"sha256":"fc249038debbc498ea25930e62a9476cc533fa8ce05e9a96b1a8fcde8ee4b2c7"},{"url":"/assets/ollama-generate-BfG1ZiiW.js","bytes":3888,"sha256":"e3c6e0a12480787b21b25292c6fceeb508d571638cf9c5b6bee40a878150361a"},{"url":"/assets/openai-chat-Bh9rmqG-.js","bytes":2760,"sha256":"046a2e1aa8479c443dd684b8bfb18424b5593c091044eb135d1b5733e9642823"},{"url":"/assets/openai-hdutPmT6.js","bytes":1003,"sha256":"459c68a33396a816ea2f8adf085175e97e610d68711eb15024c3e28726e513a6"},{"url":"/assets/openai-responses-DlTacXH7.js","bytes":3881,"sha256":"cac1a006c43cd8770af2a1bb93dee22b15c9bec6ff91e941eec9dab25ec4de9d"},{"url":"/assets/openrouter-Dcp1z8a-.js","bytes":4442,"sha256":"505f0991c09aeedc279ea0346b96306325016c1f5d94461099452fd04146a0b4"},{"url":"/assets/openrouter-defaults-9rWrck2t.js","bytes":3123,"sha256":"0ac6e123bd4bf632084f348108e1c3dc5fe577ac433d12421920786b8ef9cf51"},{"url":"/assets/opfs-sync-writer.worker-Bguqhj4u.js","bytes":1000,"sha256":"cb82b29f9b4b2ae25e7631fb9c49555c35af855de53792c53a3b914bd24f3f72"},{"url":"/assets/paged-table-reader-Cui7blz8.js","bytes":393,"sha256":"62f2cdf5789d993451cd457d068c3bf4f0d0f5c0317df9cf7c31c3c80444ee6f"},{"url":"/assets/parameter-summary-BvJYse-_.js","bytes":10253,"sha256":"86e12525fcc2a17287d0bd19d7375c2e850d51e22fa698980c91aab40405af33"},{"url":"/assets/prompt-compile-24xUTu6n.js","bytes":2080,"sha256":"ff3e656b6f698a8fe72dbb268649107b0e7b466a4b53cd0d284cdaef60e2b633"},{"url":"/assets/provider-enablement-CxYrelHL.js","bytes":709,"sha256":"d884a6269dc007777d887b0dc9048f511a5e7d1984a76444f40b6d5e86a44d74"},{"url":"/assets/pyodide.worker-UXA_A12b.js","bytes":13711,"sha256":"f2a326dd774bf8455e6df381b9182dcc950e980451eb05ddf6280cbe3fd80b53"},{"url":"/assets/render-B1RTPLFN.js","bytes":854,"sha256":"147658987b26d42f7da5f858ba90cff4f1810312fa3098b2a0073c4537684bcc"},{"url":"/assets/repository-BUyEjOzj.js","bytes":1158,"sha256":"c2179d2054482eaf02e9668010c254a0c552993aa3b95ab93113beb26dab38d8"},{"url":"/assets/repository-CbLQGPvm.js","bytes":2359,"sha256":"f4df18c578f71a74411dc6a8ab53a66c9341cea9d48c65d703dd3f1cab3eef05"},{"url":"/assets/response-evidence-codec-eMXXlVQ4.js","bytes":8918,"sha256":"ee14fc3c1d2474a310ecf6b6d5d5bae2800ea25534d8d34c1c57d3f858df8fe0"},{"url":"/assets/response-features-Q4DlOVdq.js","bytes":460,"sha256":"383359708bf71ed484eafe3c5ca0d5963ff9cab798765cb928246133a363df98"},{"url":"/assets/row-filters-DVNsrKUs.js","bytes":405,"sha256":"f0e85d49e328197830832f0f7a9dc7fb635806600dd0b7ba13099f10830e322f"},{"url":"/assets/save-file-Bro0v3Uv.js","bytes":944,"sha256":"bd91fb4a52c80f3d8c5e20eb1de1ae75354d4a83ca63b187d44a13bb63c6efee"},{"url":"/assets/shipped-order-DnzVAt3W.js","bytes":443358,"sha256":"61361e7c4a67f6e5d1d763943e9efcda9c0e668853af9f799100456df03d97b0"},{"url":"/assets/sql-wasm-C1U8OeUW.wasm","bytes":659806,"sha256":"0734155c83e493983d1f2ff5b09a4fab6e35a32e9449c7e4e545756439f62d73"},{"url":"/assets/tabular-export-DpjXkBwn.js","bytes":83389,"sha256":"8cbe5b76c72b9c50e76dbac4c01771b81e0a996199ed128dfd3307cf82ef9215"},{"url":"/assets/tauri-download-utilities-DXaNx7yF.js","bytes":3347,"sha256":"f74a9dca078890ea29817265dfe437156480d7fbeed8f72e4eb1dca5a95d266f"},{"url":"/assets/tauri-vendor-CMy7hGlg.js","bytes":15658,"sha256":"9ebe68e8be861f560e21260b837a577d98b8aa1f5264c888dbe2a752bb50f465"},{"url":"/assets/template-variables-T4-5MHs4.js","bytes":606,"sha256":"68f9ea82c6690f7fc29d9afe477699b20b8c3beb41cbec218142d74010fc65e4"},{"url":"/assets/token-calculator-OUSuVHVm.js","bytes":5438,"sha256":"fe76a6cc3c46430b38da592ae50e4f41952a1be54c41fa46ad55188c5dec2813"},{"url":"/assets/token-counting.worker-DzyAsXBu.js","bytes":2037530,"sha256":"6f6af764f67e6a05da52ded39892cfb7c1e032796f3949ab955a002deacaa33c"},{"url":"/assets/trial-bundle.service-AK8bfWfy.js","bytes":23719,"sha256":"f5c8a2ad6c3858af06c2ddf4e55cea75a88246b07b265b2a505a7d1f12ae59f9"},{"url":"/assets/trial-execution-lease-NdwRcrlV.js","bytes":699,"sha256":"2701e1c7b636657bf8a726bbbf7956785f49063f0f6ff212bbe993d1b553ac0e"},{"url":"/assets/trials-Byebfo86.js","bytes":17540,"sha256":"788576f5f99d47faa25b71092a0da2cad88b985f9c5e5a55ebff6fae7edb4392"},{"url":"/assets/ui-vendor-Dlha3CV7.js","bytes":986409,"sha256":"29e78aa81067773be4ed57f225a864693ed96d51a74927ad54ffa6a4bf2da4d5"},{"url":"/assets/useCostEstimation-C3SgOpdq.js","bytes":512,"sha256":"c558a2b8c88d5d1b796ee8763675ea81e4e60651b90a3da4fe7b53c6cac058cd"},{"url":"/assets/useCrossTab-DdH6KyGN.js","bytes":671,"sha256":"2b77e97ec3469ecb20719882b9d5efa875eb22ed0ef07b22d8f810eeb5a99e73"},{"url":"/assets/useHeatmapStyling-Dol6TuVe.js","bytes":5254,"sha256":"05b3fe74fba6f284945766807dbc5781a5816f52b18ab8ca71e9d13fe65f41e2"},{"url":"/assets/useLiveQuery-Dr8CaLn5.js","bytes":728,"sha256":"6dad5f0590bbbe675049f841c3bd7a13b9c407aebe150747c6429437327282ac"},{"url":"/assets/useModels-C-1i9Geh.js","bytes":2559,"sha256":"283131b00eb40a760da373b9d658e3c01796fe8a39ef905e47a1c6f5733d7268"},{"url":"/assets/usePlaygroundDraft-BHJREXjj.js","bytes":9013,"sha256":"a442a2b195f21e567df23914c36ceea38822b89f12baf7be83f599c802df93b1"},{"url":"/assets/usePlaygroundDraft-CsdsLSPx.css","bytes":6941,"sha256":"6f1aca108bdfdac193bc69db9d7e436030f09cbcceea81bfc585e2c5cf6fc828"},{"url":"/assets/useSpreadsheetPrompts-D53m_G1A.js","bytes":3325,"sha256":"e4fd0025395256ce32efbb6e4c84a55e12a920dd771cdfd2e5a391bc3bd9dcd1"},{"url":"/assets/useTemplateCommands-CGoDs4LY.js","bytes":23859,"sha256":"3fe327f8af6839208db61d3b73a59e9a01887fd5fb32d4422403f23661161ac1"},{"url":"/assets/useTemplates-v1ydJuaB.js","bytes":3574,"sha256":"2a41f96bab90f08a85fa55328136c2b7661c5d8be33a48a68b1321229d09e4e3"},{"url":"/assets/useThrottled-r0aK3gmE.js","bytes":244,"sha256":"89dd47cdce56c1b4434ccaf1a431c03350a738ea65d8ad08197ba63caa4a8cb2"},{"url":"/assets/useTokenCount-CNyZpbxQ.js","bytes":3154,"sha256":"0f8d4c797fe314cfe78b70f5a614895382053ec41967e151a3b4d68c2cf03b74"},{"url":"/assets/useVariableListCommands-CFnnRQcJ.js","bytes":13399,"sha256":"d658e981ed430ff8e9ce2549b0a0bf6a3ca60412757ba2472649aec4e3a17bec"},{"url":"/assets/useVariableLists-CaWUD5WT.js","bytes":1972,"sha256":"abb7db787d2e2f1b6937c0efe18394c05a6b068a477906882b0ce225cc78d622"},{"url":"/assets/utils-vendor-C__G4_v4.js","bytes":42345,"sha256":"a9bb692c5e0983648220dfffba41af307e8c7c4ffc6d8c99ec6a359812c0211f"},{"url":"/assets/vue-vendor-DrmF77KR.js","bytes":113130,"sha256":"b408ae6ee8bcdb7aa5e86e7db8fbcd23fdbb4941e415096ff1c348abc3319a66"},{"url":"/assets/vue-virtual-scroller-BCw0uU-l.css","bytes":1220,"sha256":"4d71315fd8c42dc3e7d0ba1e8cb831ad725c22c34cb76c8ff8dbce87d628abb4"},{"url":"/assets/vue-virtual-scroller-Dwnz0XcT.js","bytes":16632,"sha256":"66aa52a5a7062876900b5b6a29552ca14d9af846345d551b6cabf9a3cead7057"},{"url":"/assets/webview-DLxETPQz.js","bytes":16145,"sha256":"a788c706ef4188302f0f92345dc779a1b1b49c92fccec376391d594fcb3fb236"},{"url":"/assets/wizard-flow-DVdL7XXw.js","bytes":3031,"sha256":"462d86cc89a3ed662f0c0ba4ed60e262e29573b1a8e4faaffe62d0b27ed7fa60"},{"url":"/favicon-128x128.png","bytes":3706,"sha256":"bbbdeeb9b6966ec47cd61ff198fb0def1ea34d9a785aa8be877d0489fb319167"},{"url":"/favicon-32x32.png","bytes":1081,"sha256":"3c49bb0a85918d8c69f13a724c35395e0f28cbcf67f445ae38b50a3c71d07af2"},{"url":"/favicon.ico","bytes":16672,"sha256":"57222d5e378250fd4cfe1d63ea90269c2f1dfe6c1411998482868782d71a7708"},{"url":"/favicon.png","bytes":14488,"sha256":"98a188b69c38bb92f851f6acc230625f3872f75e4e2a1dbb6291bd40ff1f99b1"},{"url":"/favicon.svg","bytes":684,"sha256":"a9b3b819d4e9b63857d2303ec278c84afbd7957ee517160fad880f6de3206b7e"},{"url":"/icon-192.png","bytes":15066,"sha256":"a5ea9af435092fef44e73b3ccd9c406837e6761f52a7baaeeb61a70ba93d9735"},{"url":"/icon-256x256.png","bytes":19034,"sha256":"74472788a02991156831720912580413451f2d3dde2a3104b330d1dc7dc46fb8"},{"url":"/icon-512.png","bytes":16100,"sha256":"5f69f2d26d0c8945116ce3e93408eef4bec8014ed4e896aaa865df0dea14cc50"},{"url":"/index.html","bytes":1929,"sha256":"50337f09ae49d18ae53053132a7917772e00a0a7f3412a2946583f9f3f6cae9c"},{"url":"/manifest.json","bytes":1260,"sha256":"cf09d81ea03708d3f882f794c0eae4529378c6bda164a18006459102dc21f53a"},{"url":"/maskable-192.png","bytes":12217,"sha256":"f5a4eb0f2e68330466fb36aec9757a73e43ddd9a71cc1613af7c874ca423a339"},{"url":"/maskable-512.png","bytes":36502,"sha256":"fe2e9671e8283eeb07138502e2173a27dc10973119743b6bebed5069ae90742d"}]
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
