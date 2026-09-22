/* Auditomatic production Service Worker.
 *
 * The production build replaces the placeholders below with a complete,
 * hashed inventory. Source/dev builds deliberately contain empty inventories;
 * they must never claim production offline readiness.
 */

const BUILD_ID = "a41d0bec29312ccc64b39c7b0ce53f1520076a4d"
const RELEASE_ID = "a41d0bec29312ccc64b39c7b0ce53f1520076a4d-526ba7c5704ac9c9"
const VENDOR_ID = "d4588e7735b9430116ed6e5d5356da14ba7cd9a9b7797b4005652bf29728d3cb"
const APP_ASSETS = [{"url":"/assets/AddCustomProviderModal-BXibXBfG.css","bytes":879,"sha256":"43c6832a71a2919107e9da1ce197901c602bb287211345c658f3512ab510de69"},{"url":"/assets/AddCustomProviderModal-hccwOUQg.js","bytes":17021,"sha256":"c55aa05c33589c06f12e9cb7b2af8668511613f90ea18bd2acccb2d4b0c9dc92"},{"url":"/assets/BuildJudgeDatasetView-C5EuggHC.js","bytes":6987,"sha256":"a171641a5aecc5f0f3f946b519eff98428676c821004d877d076051c791a023e"},{"url":"/assets/BuildJudgeDatasetView-NPOkuEAR.css","bytes":3353,"sha256":"6157af36c2993c0b72ea2cd4685f2ab96688ab99d7cc0ab5b4903e2d3eeedc96"},{"url":"/assets/CodeEditor-Bpo-OVeG.js","bytes":897,"sha256":"b1263aa0fd000151fe2bf65ec568dc6d70aa0adb889353a9c320b73dd5733c17"},{"url":"/assets/CodeEditor-CfrosA3M.css","bytes":415,"sha256":"4b46da79967f08d54b6e6aaabbb3417681acd40e882a140511bafa256c9b0046"},{"url":"/assets/ColumnFilterPanel-CHmZObbP.js","bytes":26416,"sha256":"6684cc268d6cb6f7ab6800f8529d37f7581ffb4cd72af1965778282a3b72639d"},{"url":"/assets/ColumnFilterPanel-D-uNO3-O.css","bytes":2280,"sha256":"608718efe88864cc91eb2850c886dc9eaa1bb4d9c2fc4bc29315ee2c7d88149b"},{"url":"/assets/DatasetUploader-CqDc-HJN.js","bytes":193034,"sha256":"055d87c1ca7934194a60055f20cfd1e2331c5ffdbf790d0deeaaef358a9e99ad"},{"url":"/assets/DatasetUploader-D9BF1twZ.css","bytes":6379,"sha256":"ab03dcee8fdc98202ccea2963b766e06c0d72c9e4cc4f52a1b86b7efbf8fddff"},{"url":"/assets/DatasetsView-B6SFQ19U.css","bytes":2233,"sha256":"37d233a8e4ad5f57335444df7bc79491221bedf71e525c5156979dd3365ebd32"},{"url":"/assets/DatasetsView-DlrhGDcB.js","bytes":9107,"sha256":"9278bbcb926784651c7c393a682529fa8e6889e01c152a0465618f312a948aad"},{"url":"/assets/ExportDataModal-BTIeyxTz.js","bytes":37184,"sha256":"610f34e900a0982d6a459a4452892ea242a9da4ad5e38b478146462ed9464299"},{"url":"/assets/ExportDataModal-Ee-aAGef.css","bytes":4598,"sha256":"321c52576a915001a609bedff4a27f90a724f13a8854fe7a09c01038eac9705b"},{"url":"/assets/GenericModelSelectorModal-Bkh8KDUH.css","bytes":15062,"sha256":"a628559e52aa1300390e2abc7a12a1066627106a812720fc9a81cc4587b2a040"},{"url":"/assets/GenericModelSelectorModal-DR-NQYmW.js","bytes":46303,"sha256":"aa00ff7e43890eef88eaf0810c2f8ce71e8ffdde0679ff8bf7b353dcd975617e"},{"url":"/assets/HomeView-C41dsQTs.js","bytes":11451,"sha256":"6bcb0ff23a3fc60799eb1e1857b3888e7d948298084b63dc4c0a02af7801e728"},{"url":"/assets/HomeView-dFzlK7e4.css","bytes":6080,"sha256":"3b7b54a5d91b00ea8388fe9f96cf432ab267301ad8ebed80c27201feef85b06a"},{"url":"/assets/HydratedPromptPreview-CFiz9DY0.css","bytes":8011,"sha256":"2c03603da13051fcd21fbdc68ee9603a55dbc17191bf411d6e3703834c84c6da"},{"url":"/assets/HydratedPromptPreview-ChTc2ni2.js","bytes":10701,"sha256":"b75554b959aabdec685895274060af17bd90e19f4a9f09d6cf6e71102388546a"},{"url":"/assets/ModelConfiguration-Cae6EZj5.css","bytes":4249,"sha256":"6f4b58a43ed8659360717e90f47f3b1cc681bd5967025ef9e9370d52c08d61e9"},{"url":"/assets/ModelConfiguration-CsL6a9Cf.js","bytes":18701,"sha256":"ec84e0cc819205b5fb6e1b3a70e23edaa265164c9e4e4f14b20c4f4a19bd49ee"},{"url":"/assets/ModelContractInspectorModal-BmG6WspJ.js","bytes":4976,"sha256":"5e62796c3f786723ec72d50bcd90d6d40cc6c14de17f08fae1629b668f473842"},{"url":"/assets/ModelContractInspectorModal-dhTnqUJ_.css","bytes":1859,"sha256":"1775e2dff0359ca0d443e4acd9f70c1334bd67c3686efba3ae8070d128e24b81"},{"url":"/assets/ModelsView-CkQw7iL3.css","bytes":13861,"sha256":"258bffbd3fea5477c0d3574c6f315a261c994b69436cabe8cfa1cd6248dd0ef0"},{"url":"/assets/ModelsView-DQWA2YUZ.js","bytes":45367,"sha256":"ca2a91915c2441ea22f35871f890d983c7d7dcf4e3b7d6a1be49c05c269e4998"},{"url":"/assets/OllamaModelManager-ByN7jtvk.js","bytes":27920,"sha256":"017024d47fc619043d8a80dbdfbfc10b4a914b30433f9eeec31599bc4165071e"},{"url":"/assets/OllamaModelManager-CKgcwFz4.css","bytes":15299,"sha256":"37d3c9f9cae62ba29707606da74037ab039d43729c13e3f19f5cf4314fe78dff"},{"url":"/assets/ParserEditor-A58AOPLe.js","bytes":20504,"sha256":"923cb4e6421e3ce861de1032ced47706cbe64e3abcabaead7ccaafedb7b2d161"},{"url":"/assets/ParserEditor-BSNA0r1f.css","bytes":4947,"sha256":"89e870cfa172e0c50822faeb5f9abdf70f282c7efb6cdda4a8c987b030381867"},{"url":"/assets/ParserSelector-BMQvhSW6.js","bytes":10557,"sha256":"11843688e5b2a28997b47f28baa18410dcf56a5aceecfafa0b3b20916c0cc679"},{"url":"/assets/ParserSelector-DQK9o3A4.css","bytes":6442,"sha256":"155381903f3eeeae7ae119534e9619fe6a94a3d9e5eb5073da4089440a0cc3f3"},{"url":"/assets/ParserTestSectionCompact-BpHbi0Ec.js","bytes":11384,"sha256":"7977aea49d551c711cda625780c1bb2072950a225b7e086d75678ecdc3dec3e0"},{"url":"/assets/ParserTestSectionCompact-oi6GLKFm.css","bytes":2766,"sha256":"a7ed81bbe1b0b9772e5404169e4b142acaba64472ff50a280e2c57f418846094"},{"url":"/assets/ParserTesterModal-BuT08HG5.js","bytes":1954,"sha256":"1437fe5f176219bcf5c69269ad1491b10c1355105d7778113a8835dac4507b79"},{"url":"/assets/ParserTesterModal-DVfa-M7N.css","bytes":882,"sha256":"a45f185deed1a36003ea56ed806accfb7ef17b806369b809975ae32038486b7a"},{"url":"/assets/PlaygroundChatHistoryView-BLyZlGmd.css","bytes":560,"sha256":"7114ed4740ec1116801b24446e50559c0ad07e6d254d4e4e59b518856efa6207"},{"url":"/assets/PlaygroundChatHistoryView-XvE2Mfd8.js","bytes":3545,"sha256":"8adfb1a64af01f0c2fa3b79c86cf373aaeaf30f66545e835a7191c825db2f33c"},{"url":"/assets/PlaygroundChatView-CoN32AiP.css","bytes":9827,"sha256":"bd23440e6bd780757c6dc9a9e565ee8c1f03b48f3717fcec9aa9224003e182e2"},{"url":"/assets/PlaygroundChatView-hsLj3nlL.js","bytes":152429,"sha256":"a86e8fe593b4fe5578f7f8e488ce079c54f3087d3708ba4743bfb3a504ab57ed"},{"url":"/assets/PlaygroundHistoryView-D7HffgLM.js","bytes":24556,"sha256":"b8850bd7fd69bd9be95b20c7c989d1fc2f4fe04bc2dde74dd8cfd56e708537c5"},{"url":"/assets/PlaygroundHistoryView-Duqjp-rM.css","bytes":6530,"sha256":"bb25d1949e97aaca6a93ec16287ce9c6b747441625b9d905b9e9896574ceb935"},{"url":"/assets/PlaygroundMultiView-BWW6uAM7.js","bytes":22762,"sha256":"696415be4ca32bc3bd2bfc0edc3ea72d904ad39fdd8149858dc77a6573f9238c"},{"url":"/assets/PlaygroundMultiView-Dttpo9Wq.css","bytes":5063,"sha256":"2d8529f617a0d194e82282f8ebd728c754f7f7e4c28b4f175613c88d44c8a432"},{"url":"/assets/PlaygroundStructuredOutputEditor-CGE2VrSQ.css","bytes":373,"sha256":"4410551cb6e947228cd496fcac7fecc75b2b8bf5f8e96cffcafccce5ff788cdb"},{"url":"/assets/PlaygroundStructuredOutputEditor-Dgt9wRZd.js","bytes":4305,"sha256":"175d038165faee45ea72402f9620bdeb6ba8dcae23ea2a315d1986ca804f4581"},{"url":"/assets/PlaygroundView-6S41v7C-.css","bytes":16396,"sha256":"a39468f55a7e3357f801249b5aafa8bf1276b3c03495a76f48442565a6243f9b"},{"url":"/assets/PlaygroundView-DHhXi3Yd.js","bytes":34699,"sha256":"b376f49891a87ef4eab3a9cb620e85f9c37133cf2ed0aa129c8d25e6f0641dd6"},{"url":"/assets/PromptAuthoringStack-BWpazx9S.css","bytes":11592,"sha256":"9cf35cba5f617410dac3563eef02f6ec91053a9c523478ae4c025e963ff40786"},{"url":"/assets/PromptAuthoringStack-jtX4t6Kn.js","bytes":13882,"sha256":"9cfe6a9a816c980c98f88ad50b444989796336bcfc82da2af0e34f80473d6ba4"},{"url":"/assets/ResponseFormatEditor-7xfp_fVO.css","bytes":8547,"sha256":"f1acef0d7d994535e841104f5c57b4209d7963392cedf0f973ce1065c641ee95"},{"url":"/assets/ResponseFormatEditor-Dv5HiTfU.js","bytes":11856,"sha256":"d069927e3a3fb8bce8df129ecdb8572c3169f267037740ffc505af103e8d1500"},{"url":"/assets/SettingsView-BX9X-Sw2.css","bytes":25817,"sha256":"9dd93c7989f71e6c23187e42cf7ae28def9edaa806b5f804c2c68f32a34452f7"},{"url":"/assets/SettingsView-BmIyLD3B.js","bytes":73692,"sha256":"aee04b4f8028e9cfc19cdcfaaa2a0e06987fcc9af68eec9a97da1985b4a54219"},{"url":"/assets/SetupView-C1zlmNbA.js","bytes":4977,"sha256":"7e0c2cb92d16352c8cd2da3cc29ac30c70d54025369996bcda565a623c5df75c"},{"url":"/assets/SetupView-DBHR_dAP.css","bytes":4029,"sha256":"fb93b00d5b89cb0502cc555538acf272cb15f0750b473b67db197e5082ab5ffe"},{"url":"/assets/SpreadsheetEditor-CFGAXdun.css","bytes":33683,"sha256":"1e33fec0d831a4fdbe0e83150eae395793982f1bff2607e929711f89adfc737b"},{"url":"/assets/SpreadsheetEditor-D2CouaHk.js","bytes":76123,"sha256":"30cdaac26ac4ef489af5e61bfaac691c5a22f5f26346079c2eab5038e1f7901f"},{"url":"/assets/SpreadsheetNewTrial-Co40lo-v.css","bytes":4815,"sha256":"4445bf9bab56b349b946a4619f5a89e2a33a8c262ca7c0613a208fe5cd3d341a"},{"url":"/assets/SpreadsheetNewTrial-tg77SwWg.js","bytes":15414,"sha256":"23eb0b1636c678cd31b60ab05584d44bdfbc0d098c2bf1c4b083d2bccfe9f558"},{"url":"/assets/SpreadsheetsView-DyINDyVC.js","bytes":24323,"sha256":"95bf4de48e73cb3e092fa34608f3652c8e7ea9a3a365358c15e19e6ccfff1f15"},{"url":"/assets/SpreadsheetsView-naY7qo3V.css","bytes":5131,"sha256":"52eb371b368912bd7b394380aa30e4cbb6c670a8fdc4b497b019d5fc6301f3d5"},{"url":"/assets/StorageModeChoice-CldHds0S.js","bytes":9054,"sha256":"5351e55a8eeca4b01798a3351b070f90ea664b7affa5465edfffcbd5784d2a90"},{"url":"/assets/StorageModeChoice-Dz9CR1XW.css","bytes":2409,"sha256":"7115c0a9edaa3616be71459be51ae0273809078f8bf9311aad688697ed95c69b"},{"url":"/assets/TemplateEditor-3XlI7okK.css","bytes":17866,"sha256":"01a98d5c36842ad843dde355a2ca5c6253e0686fcfa297d20883bba41c2e11d5"},{"url":"/assets/TemplateEditor-JVOnWJ80.js","bytes":241495,"sha256":"692a3e66943926ef05d6a0c778723f71a083039be54a1a8a10a979f39e13fca1"},{"url":"/assets/TemplatesView-BtCgscUa.js","bytes":15881,"sha256":"876012dc1938d899ce6747e9b93c5bc0ea90485c2b817d6150064f4b44f01915"},{"url":"/assets/TemplatesView-DU7cky_6.css","bytes":4302,"sha256":"6eac0aadd0114a9d7d2fd62dd3c392cdb6c00bb55daff0e89d2c3f4cb19046ca"},{"url":"/assets/TrialConflictModal-B6jTJtpJ.js","bytes":5568,"sha256":"6cf7911d43e20b5ff13db9041559b1077689c1a7e3a913a1131fc634b65d6ec7"},{"url":"/assets/TrialConflictModal-BigzNcmN.css","bytes":2638,"sha256":"685281ae3799c5b9f75776f33242c8818bb8ccbbff27afa091781f67c05d5534"},{"url":"/assets/TrialCreation-CV7gbihw.css","bytes":16930,"sha256":"e05fe8ffff8680e14f0a28c4c6f145b1bc6f6269a8a9600ab5a7d9b794c70c1e"},{"url":"/assets/TrialCreation-Crf7H02K.js","bytes":50616,"sha256":"640f3c3dfe0abaa6fb4ef1126a534ab3b059852124b0c58219defaefe467e49e"},{"url":"/assets/TrialsView-DqamGyGC.css","bytes":94260,"sha256":"acf0551e6e29760fb7a5767cfdce64109632e12e682be64bea8ceadf514e6ca0"},{"url":"/assets/TrialsView-yOdCkfxo.js","bytes":262504,"sha256":"27a3dccd6171e6c7eb454e2ff0bad695e77202e715b644eb32cfd4363598d69b"},{"url":"/assets/VariableListEditor-CkM6MRKj.css","bytes":10476,"sha256":"dd57bf148c36d9bae2e7bd70026c86cb95b251b1e52ec33b4edd394d2e8c92d8"},{"url":"/assets/VariableListEditor-DL6KzBdv.js","bytes":18290,"sha256":"14854040efae76951968fd0fa45c1bef737c85a1c53770077a9f22c01245d9c0"},{"url":"/assets/VariableListsView-Dc4pHMSv.js","bytes":17900,"sha256":"3d182bd9b62c52ca2dc27d7b0cfad71b9e3d855ae8573c0307a5ba6fea06b3dd"},{"url":"/assets/VariableListsView-rgUkXC5g.css","bytes":3882,"sha256":"54875ec994d5e19a84af31fcee361d89b81d5ceac9f074cfb6b3934ae0e4e305"},{"url":"/assets/WizardComplete-Bre5h3Mr.css","bytes":3460,"sha256":"79aae02a1829a1e1b3f9214c9567f64ef0a63f6a265897905d007ef7dfb52402"},{"url":"/assets/WizardComplete-CKSxI2ee.js","bytes":3263,"sha256":"f6204e782b79d1f7491ecca74ecee3b77bf7f7bde22739eebac8a382f37dd679"},{"url":"/assets/WizardLocalFirst-B1hjTP3S.css","bytes":2524,"sha256":"2e83cb5fef3298c1c8e2e38199dbfff0d4e44d01574f2e16e6173f1f77b74ad1"},{"url":"/assets/WizardLocalFirst-C21ROdcf.js","bytes":5775,"sha256":"03d1822d6b3b3bdf10ff75fd8c940c58387ad2400afaa779a01976d5ebafbeab"},{"url":"/assets/WizardProviderConfig-Bjm62aIA.js","bytes":23896,"sha256":"ddfe4f4dee73bca64ad927454044fd3178bc8b9b0c66b74331a4ecb2ccfd31ab"},{"url":"/assets/WizardProviderConfig-Dw_ZDq-d.css","bytes":8222,"sha256":"657fcc97fd3a0ff814e48e0289aaeed78c1b60e77fdd72444bf4b3fa388d9823"},{"url":"/assets/WizardProviderSelection-C5RTUJ-y.js","bytes":11174,"sha256":"43615575e5972764a8a0ef37d68d0ce743b28571aad5a53679dcbb6a28d2721a"},{"url":"/assets/WizardProviderSelection-CyR73BP0.css","bytes":4121,"sha256":"9146995fb080231c700c903626b80b8315ebb39e3010ef8be94034b3c377d568"},{"url":"/assets/WizardSecurity-DL9KZYt5.js","bytes":1146,"sha256":"edbe44657448671980982220019e7a147243eabbde170870ad9c28f82ae87a66"},{"url":"/assets/WizardSecurity-pnC3WyVE.css","bytes":207,"sha256":"66a0060bc318c6d65e714ebc51229f4382f4978830b3ca4d58048ac288eae387"},{"url":"/assets/WizardStorageGate-D_BeYlTf.js","bytes":8764,"sha256":"eec394206754cc82059a11148be0f2aa48d3ffa354b6aa6ff0052bf24899db09"},{"url":"/assets/WizardStorageGate-PvJVTKL9.css","bytes":6451,"sha256":"936a7cca6057e4b0d8310298d6448c4d6b0121e8e6556a5762250c0ff36e724c"},{"url":"/assets/WizardTelemetry-DS8qeCDs.css","bytes":2085,"sha256":"0fefc1f05a5b9276b771eeef0ab359cd5a8c77ad1c98c446412b9fc255ef773f"},{"url":"/assets/WizardTelemetry-YnpSiK46.js","bytes":2469,"sha256":"a04846eddc39476a574d4333fbc970959d64c4eb2b71938393d2112c14547f45"},{"url":"/assets/WizardWelcome-DNlzQekw.css","bytes":4930,"sha256":"46d1d6a469d9cce48d42b4a55a9802bb61d03f6d559d3910e3751844a425c9d2"},{"url":"/assets/WizardWelcome-Y_h12lDi.js","bytes":6299,"sha256":"03bcb14e418ca6daba614564472d76a2b9ca2d24eb7e7bd8d1fd34be5e03e9bd"},{"url":"/assets/anthropic-CTyLc6wY.js","bytes":657,"sha256":"db5464aded393084e37ca8b935bb37844018678323db104b2e7165101d350308"},{"url":"/assets/anthropic-messages-Dn28aUJf.js","bytes":2780,"sha256":"696f819be31376bd4d4f48616d35ff4249107a54ae4c84f3061e2c15542a764d"},{"url":"/assets/authored-source-compatibility-COGd4nUv.js","bytes":2454,"sha256":"74d21bd4e64546ab8d48285b795930f0ab977aa8b30b0a4dd4523ca425be0662"},{"url":"/assets/authoring-DzBPTJSn.js","bytes":1728,"sha256":"89f1528650ec536f9bf33bf5a18ae7af1154d53edecc7bfe23350a6efa2f8088"},{"url":"/assets/confirm-action-nkqei7eU.js","bytes":67,"sha256":"852b1e68ac07d9c8cd3d44ecff5fa9f564213e27bd98ed6dcd9facd6dbe1cd6e"},{"url":"/assets/copy-name-7YM1C3qU.js","bytes":6466,"sha256":"5eb9f32351735ee9ba0e22bf4df2c76e5bbbbf8a84f5bb4b8a659fd2a46f9f37"},{"url":"/assets/cost-calculation-Dp_zBPLi.js","bytes":843,"sha256":"4714aa5245e1ebb49283220230849d0b1bb6664cab30f23a35e0171c94f4b61e"},{"url":"/assets/costs-DQVLmvyG.js","bytes":1891,"sha256":"900efcb830eabb72a0d1a49027ee894b492b27d7f2b011f476368e649fe03df8"},{"url":"/assets/csp-reporter-BPCtQIfZ.js","bytes":2134,"sha256":"9634e924ab5f2c22d1f7c47ef1c0a69fbc07c8f31f59167951bdf7c38a0c072e"},{"url":"/assets/curl-generator-Dlv1BTUp.js","bytes":827,"sha256":"44d7fdcca2b580db693788cc92e8a5b1d9b6d7d773d70a5f4ddc3238dcb4d0f1"},{"url":"/assets/custom-providers-BEKXU90X.js","bytes":4155,"sha256":"c0c3e36894c73ee9dd361789ce7072acc36797316fae2325e37548ba5348d145"},{"url":"/assets/data-vendor-CKwrMZHi.js","bytes":499549,"sha256":"f895dd67a19c78f7cfa4069482c2f9bd4c754167dc8f9b15f11988e5358ee1ba"},{"url":"/assets/dataset-export.service-By3RC1xt.js","bytes":2522,"sha256":"30bb41c95b12a8706587e57a2af381b6f5174a05f72fd00ab6c15972b83ef165"},{"url":"/assets/dataset-from-trial-DBbzfXSl.js","bytes":2525,"sha256":"548045bc75d44d7cb91bef83635493947b5584debd06257f19735b387903ce2e"},{"url":"/assets/dataset-operations-DsG7GN3J.js","bytes":2766,"sha256":"b52804d3aaa7f4a8cf026e8cb2c3b03c3145269d4bb74ea077ff1c4a12d704cc"},{"url":"/assets/dataset-parquet-B-IkMwGy.js","bytes":478,"sha256":"4d614d2f7e42cd67ff7e325111dbd7b578828a107bcddc81e2397d8ac3a955a9"},{"url":"/assets/dataset-persistence-D1MZHztw.js","bytes":1705,"sha256":"5c654e4deced85b939dd7976d2a81a766c23d49212f6ecf87d61e362a0953027"},{"url":"/assets/dataset-summary-CBmJCSe3.js","bytes":503,"sha256":"f9925d9a3f7c2777e04a0003019fefc174990aedfb7a72c73a7504d4503aa275"},{"url":"/assets/deep-equal-bLv6XEjO.js","bytes":817,"sha256":"8131e299b9c54f7d76b7e4d17de7e20876eb1e895df199e79336ced3959a4a8e"},{"url":"/assets/derived-PrFGoAFL.js","bytes":214,"sha256":"9dd6fbd87c30221d2f9230da86ffcd3d76d48f1e82871e5adfe56c7680ab0487"},{"url":"/assets/deterministic-CswtmBLq.js","bytes":489,"sha256":"3d4c6ec1ede298b7c9312b5b0186f786cd9b024029f69e6c82245bce1fd665a5"},{"url":"/assets/deterministic-Dn3mS_T3.js","bytes":1156,"sha256":"436a69eebd0199980fbb975bbedb6f43b4c581963be11fe8282c37d4e4bfcd06"},{"url":"/assets/display-values-D3R-R7BQ.js","bytes":711,"sha256":"643237f7e342dc07a71fc5be487e6b16ae4c458e223b7819d0f0fd0fa6264b7e"},{"url":"/assets/draft-B-VjnwvV.js","bytes":5943,"sha256":"278a4f6b731478791e0db96e6434250e573036fca999ab57694775187b7f6822"},{"url":"/assets/edit-source-D2szZP6C.js","bytes":828,"sha256":"2c3a0d4a5cc44e3c09020e7d69369e25dfc47b00a4f42bf6e22216a133692fcb"},{"url":"/assets/environmental-7SaNww_r.js","bytes":450,"sha256":"84cebbbd936fd31a7709bd34d36c104471cd45b65f505a61ea2fc81f6e317457"},{"url":"/assets/environmental-BaXR2Z0P.js","bytes":436,"sha256":"7a0dba6027154614b9b82b0106c09008e8aab9df16a9303d4ed966486539ba9d"},{"url":"/assets/environmental-CST2cyag.js","bytes":1023,"sha256":"a3ec6c7399b1580323e2d069fa87bb4e0680d764315360a41ab89bf8f84627a0"},{"url":"/assets/environmental-CmakTgQN.js","bytes":445,"sha256":"25ec52ea28c751b0bed6ad8614000894004a05b307ee01d380f8f838ba2b8c2f"},{"url":"/assets/error-serialization-Bbw-acia.js","bytes":1060,"sha256":"56868c29216d2c5d68a6530f267bee215d301dbaea28a8818a7235338762e614"},{"url":"/assets/estimate-C6it_575.js","bytes":9330,"sha256":"45b88a378a0bad19ee7c24d79a1c82725a1c75451d834224434463eb2cccb729"},{"url":"/assets/execution-CkA86XN1.js","bytes":7961,"sha256":"8908ab8d1ad522cf111af5ef8e3e7024cf1314fadad950ac23a39f31f8135157"},{"url":"/assets/field-ids-DXrUeamA.js","bytes":428,"sha256":"59e9139888a1aa61122457ad9423f997e4528f2889175f6722ff9ba4540700c9"},{"url":"/assets/full-backup.service-Cu48CpyK.js","bytes":2085,"sha256":"cba6a7ff23b32ab147770c7823cd291e9a8b0c31f36c80cd88797fec56293e17"},{"url":"/assets/full-restore.service-Db6Qtubf.js","bytes":23637,"sha256":"1f254e7dfa06624fcc55c088be6a924f4e1fb3cdcba3d2b722f77c0b63c04bbe"},{"url":"/assets/huggingface-_GseyfpK.js","bytes":920,"sha256":"4e4e5260447653c3a9e60050d0b2037bac0ec9b44146953a5940d7864a7a610f"},{"url":"/assets/index-B14tB6cT.js","bytes":23412,"sha256":"39b0f49631b4fb7698f61bb75a62bbb24b55e12c6bcad526011027d93f1eae6e"},{"url":"/assets/index-C3QykxgW.js","bytes":713896,"sha256":"f4d4e6976dda9422bbea8dc743ce8ce29f3fd9da7075f4f26c408b640ebb28d9"},{"url":"/assets/index-CPg-v_TE.css","bytes":2542,"sha256":"d0dabfb2b538fa4ab9b1d7707b47da6072f198a356f9cb65fc06ffcff8afc5f6"},{"url":"/assets/index-D7FmHGnm.js","bytes":123,"sha256":"ddc503a318b653117e1f161fe4a62fc29885370bf862b10104560e6e71e230e3"},{"url":"/assets/index-Df6dDJZC.js","bytes":101758,"sha256":"ac688aa69d044b2272a7c2b4a8d2647afe7c77d69790314ca24167d22b1cf6fa"},{"url":"/assets/index-Dh-2vaBP.js","bytes":2211,"sha256":"63494422f4114f94b6d1140b998c75e240709da949aaa046134a5c5b4199938c"},{"url":"/assets/index-Pi3egD3z.js","bytes":115554,"sha256":"708ac6ad22ed61304525572c826571808d4e3c3482cf249c1c2026f3179fe691"},{"url":"/assets/index-cvbUNgHb.js","bytes":1057,"sha256":"9381ee2d3b70ca6fd1c1db975c4bd3169725a1ab1d0aac6299a11aa45b797346"},{"url":"/assets/index-eaL0WW7P.css","bytes":56254,"sha256":"008ba335caee7b7dd1f8c64c080a2e58a04c2482282bb606486ae613d3e6f544"},{"url":"/assets/index.browser-DurNpRy-.js","bytes":4878,"sha256":"ee43c9dc290ca87d638df8ec18de86f36dad23808f6861907f1a0e0a21c092ef"},{"url":"/assets/initialization-CibOL0Ao.js","bytes":5641,"sha256":"56b173a8b1d28b38e8770bc1cb583e3ecc4169731ccef31b51f1c60d2cae30a1"},{"url":"/assets/interrupted-generation-BsN1RC0I.js","bytes":2790,"sha256":"cc9635ee5521e107198f91bdf561db45d653ced31fc722e31ab6d579ca854a60"},{"url":"/assets/local-config-CPmiiXlp.js","bytes":1909,"sha256":"f2a5d3234d212d92a17cfabe05016e889a3bff14e6cf01b7975d6d57fbc073b1"},{"url":"/assets/mistral-B6b8aYd5.js","bytes":1184,"sha256":"c06d7667932c41379c2d2ee1d200ff5e4327015d434fece0a601b58caa71070c"},{"url":"/assets/nebius-BPZtkA7u.js","bytes":1191,"sha256":"5a67443f1893fd324e805eb61cf1c805f8e9dcbff433d46d7bdb959effc80e41"},{"url":"/assets/ollama-XShvfcPA.js","bytes":607,"sha256":"82d3c92b73d3c700fdae6dbc5eac114a7727d18ecf2c50b859e0801a6ee8142a"},{"url":"/assets/ollama-chat-BcdN-dwV.js","bytes":3507,"sha256":"fc249038debbc498ea25930e62a9476cc533fa8ce05e9a96b1a8fcde8ee4b2c7"},{"url":"/assets/ollama-generate-BfG1ZiiW.js","bytes":3888,"sha256":"e3c6e0a12480787b21b25292c6fceeb508d571638cf9c5b6bee40a878150361a"},{"url":"/assets/openai-chat-Bh9rmqG-.js","bytes":2760,"sha256":"046a2e1aa8479c443dd684b8bfb18424b5593c091044eb135d1b5733e9642823"},{"url":"/assets/openai-hdutPmT6.js","bytes":1003,"sha256":"459c68a33396a816ea2f8adf085175e97e610d68711eb15024c3e28726e513a6"},{"url":"/assets/openai-responses-DlTacXH7.js","bytes":3881,"sha256":"cac1a006c43cd8770af2a1bb93dee22b15c9bec6ff91e941eec9dab25ec4de9d"},{"url":"/assets/openrouter-Dcp1z8a-.js","bytes":4442,"sha256":"505f0991c09aeedc279ea0346b96306325016c1f5d94461099452fd04146a0b4"},{"url":"/assets/openrouter-defaults-9rWrck2t.js","bytes":3123,"sha256":"0ac6e123bd4bf632084f348108e1c3dc5fe577ac433d12421920786b8ef9cf51"},{"url":"/assets/opfs-sync-writer.worker-Bguqhj4u.js","bytes":1000,"sha256":"cb82b29f9b4b2ae25e7631fb9c49555c35af855de53792c53a3b914bd24f3f72"},{"url":"/assets/paged-table-reader-Cui7blz8.js","bytes":393,"sha256":"62f2cdf5789d993451cd457d068c3bf4f0d0f5c0317df9cf7c31c3c80444ee6f"},{"url":"/assets/parameter-summary-CCoXIjWh.js","bytes":10253,"sha256":"e9a2334bdc1718b9e413c3e787c92f698b87452efabd1f4582107efa6edf2f0d"},{"url":"/assets/prompt-compile-aFXHEAQx.js","bytes":2080,"sha256":"f0e8927e84d19239a57bfc59cfcea802ab7f94928bd9143a31eeff3404ea5165"},{"url":"/assets/provider-enablement-DwXUstXP.js","bytes":709,"sha256":"e9c48fa56ed5d79f4e64c95eb38ccc7d44a3ce17ee31e796d2d36bf5565d1621"},{"url":"/assets/pyodide.worker-UXA_A12b.js","bytes":13711,"sha256":"f2a326dd774bf8455e6df381b9182dcc950e980451eb05ddf6280cbe3fd80b53"},{"url":"/assets/render-BSG72gRr.js","bytes":854,"sha256":"15abb8345f475bfc6531a5a0f0e29ebb4c7df004f0fdc94a68858e984ab9e75f"},{"url":"/assets/repository-CC6TzDIJ.js","bytes":2359,"sha256":"e072549b4fff6969515492654c83801a9a11158c636a8305aeda47997aef2883"},{"url":"/assets/repository-DJ8MsKTI.js","bytes":1158,"sha256":"12ab43762c49c2f4447e11ed90d8b6580d42909858c73baf9066b4d41c639fbc"},{"url":"/assets/response-evidence-codec-BOKokMs3.js","bytes":8918,"sha256":"09428c7842687e6866853df60b32d89d2f77426b32c2e043492f7664eb362558"},{"url":"/assets/response-features-Q4DlOVdq.js","bytes":460,"sha256":"383359708bf71ed484eafe3c5ca0d5963ff9cab798765cb928246133a363df98"},{"url":"/assets/row-filters-DVNsrKUs.js","bytes":405,"sha256":"f0e85d49e328197830832f0f7a9dc7fb635806600dd0b7ba13099f10830e322f"},{"url":"/assets/save-file-nZfqYyLq.js","bytes":944,"sha256":"84df73a565758f83a9baa0b804807d578d1f436d7abf9b6b93bbb92729bf54c6"},{"url":"/assets/shipped-order-6HBjStft.js","bytes":443358,"sha256":"d1a2e7974f1fce51f9a13220e17b4085f4bfab14adfd943cfb5aa135ca9a4605"},{"url":"/assets/sql-wasm-C1U8OeUW.wasm","bytes":659806,"sha256":"0734155c83e493983d1f2ff5b09a4fab6e35a32e9449c7e4e545756439f62d73"},{"url":"/assets/tabular-export-DaJW9BUL.js","bytes":83389,"sha256":"bd51c26027eaae25da54cddfffdf3d71a79dfb60b79fe0a466ea86e33b299a1d"},{"url":"/assets/tauri-download-utilities-CXLB5r1Q.js","bytes":3347,"sha256":"dce68ac83cc4f51a82dbf7feb3da63524426110f960eb01b7948615438e977a7"},{"url":"/assets/tauri-vendor-CMy7hGlg.js","bytes":15658,"sha256":"9ebe68e8be861f560e21260b837a577d98b8aa1f5264c888dbe2a752bb50f465"},{"url":"/assets/template-variables-T4-5MHs4.js","bytes":606,"sha256":"68f9ea82c6690f7fc29d9afe477699b20b8c3beb41cbec218142d74010fc65e4"},{"url":"/assets/token-calculator-BVXxjUiK.js","bytes":5438,"sha256":"864afb27c3094f92b31abb038fa7e722419bae74f8637145fbdbee308e61e09a"},{"url":"/assets/token-counting.worker-DzyAsXBu.js","bytes":2037530,"sha256":"6f6af764f67e6a05da52ded39892cfb7c1e032796f3949ab955a002deacaa33c"},{"url":"/assets/trial-bundle.service-DlFP2Ike.js","bytes":23719,"sha256":"2a9cd99e766e26f00e630aa06b3a1b3bfa0dc263de8d5cdd4dc49758b8a8fc5f"},{"url":"/assets/trial-execution-lease-Amo58XSA.js","bytes":699,"sha256":"3cb59944ecb5a29947bb749158d191ca415d7fb95e3f4dc18652b5edaef601b8"},{"url":"/assets/trials-Dpfrm5CI.js","bytes":17540,"sha256":"132624033a88918e6633b84dd4da4ed6ab66a249778e452130e83e74994af218"},{"url":"/assets/ui-vendor-Dlha3CV7.js","bytes":986409,"sha256":"29e78aa81067773be4ed57f225a864693ed96d51a74927ad54ffa6a4bf2da4d5"},{"url":"/assets/useCostEstimation-BkTW09Zr.js","bytes":512,"sha256":"381b933abd495aa17d02885fcc9ad1c0789f246d4b8690431ee92f31008a7a99"},{"url":"/assets/useCrossTab-DPK70Aus.js","bytes":671,"sha256":"5856e10935dd5130da954898c904cc599eae9a18f09c195c2fd7236118e54911"},{"url":"/assets/useHeatmapStyling-Dol6TuVe.js","bytes":5254,"sha256":"05b3fe74fba6f284945766807dbc5781a5816f52b18ab8ca71e9d13fe65f41e2"},{"url":"/assets/useLiveQuery-Dr8CaLn5.js","bytes":728,"sha256":"6dad5f0590bbbe675049f841c3bd7a13b9c407aebe150747c6429437327282ac"},{"url":"/assets/useModels-DfrgxtOG.js","bytes":2559,"sha256":"ab45be36208cb3462168f714343c058ea7895857de5931c517ad457da17b8073"},{"url":"/assets/usePlaygroundDraft-CsdsLSPx.css","bytes":6941,"sha256":"6f1aca108bdfdac193bc69db9d7e436030f09cbcceea81bfc585e2c5cf6fc828"},{"url":"/assets/usePlaygroundDraft-DA67N9XO.js","bytes":9013,"sha256":"74a0e21dfabacc56cb65914a2b0cedd38a4cba77cae7951be76d0774299500e9"},{"url":"/assets/useSpreadsheetPrompts-C5OqYghM.js","bytes":3325,"sha256":"966de46b6947880f28b37d36a90d0b652a723ea085f323e682a8ef92929a886b"},{"url":"/assets/useTemplateCommands-BjbVgVI2.js","bytes":23859,"sha256":"1327175ceb72d3797cd7cacb173351990c7bfad49640474fb65550362fa3e4f6"},{"url":"/assets/useTemplates-DE_EYKur.js","bytes":3574,"sha256":"d6b8289bf393ffabfa5b475b37faa6db9b4802849a8033c726df27d0d1c2f55a"},{"url":"/assets/useThrottled-r0aK3gmE.js","bytes":244,"sha256":"89dd47cdce56c1b4434ccaf1a431c03350a738ea65d8ad08197ba63caa4a8cb2"},{"url":"/assets/useTokenCount-Ca8olXJI.js","bytes":3154,"sha256":"6f2d77a6449c46dd5bd074ab4ba49f7ab92b0e186240e6a81ebef5f46e3a1775"},{"url":"/assets/useVariableListCommands-B36limKg.js","bytes":13399,"sha256":"e668098e483a3c8548a9b1895b4d888319ed31e14a50207a1731467de5a13f31"},{"url":"/assets/useVariableLists-kKONpUem.js","bytes":1972,"sha256":"c2b43bca7a042b48cb786e79b075b895caa353ed87f01fe3bf0f11de7069f102"},{"url":"/assets/utils-vendor-C__G4_v4.js","bytes":42345,"sha256":"a9bb692c5e0983648220dfffba41af307e8c7c4ffc6d8c99ec6a359812c0211f"},{"url":"/assets/vue-vendor-DrmF77KR.js","bytes":113130,"sha256":"b408ae6ee8bcdb7aa5e86e7db8fbcd23fdbb4941e415096ff1c348abc3319a66"},{"url":"/assets/vue-virtual-scroller-BCw0uU-l.css","bytes":1220,"sha256":"4d71315fd8c42dc3e7d0ba1e8cb831ad725c22c34cb76c8ff8dbce87d628abb4"},{"url":"/assets/vue-virtual-scroller-Dwnz0XcT.js","bytes":16632,"sha256":"66aa52a5a7062876900b5b6a29552ca14d9af846345d551b6cabf9a3cead7057"},{"url":"/assets/webview-DLxETPQz.js","bytes":16145,"sha256":"a788c706ef4188302f0f92345dc779a1b1b49c92fccec376391d594fcb3fb236"},{"url":"/assets/wizard-flow-CNJ_BOK3.js","bytes":3031,"sha256":"f440883889a75a1015ab7eb53864fdf27885be80b6d40c735abf3d8654e92fe2"},{"url":"/favicon-128x128.png","bytes":3706,"sha256":"bbbdeeb9b6966ec47cd61ff198fb0def1ea34d9a785aa8be877d0489fb319167"},{"url":"/favicon-32x32.png","bytes":1081,"sha256":"3c49bb0a85918d8c69f13a724c35395e0f28cbcf67f445ae38b50a3c71d07af2"},{"url":"/favicon.ico","bytes":16672,"sha256":"57222d5e378250fd4cfe1d63ea90269c2f1dfe6c1411998482868782d71a7708"},{"url":"/favicon.png","bytes":14488,"sha256":"98a188b69c38bb92f851f6acc230625f3872f75e4e2a1dbb6291bd40ff1f99b1"},{"url":"/favicon.svg","bytes":684,"sha256":"a9b3b819d4e9b63857d2303ec278c84afbd7957ee517160fad880f6de3206b7e"},{"url":"/icon-192.png","bytes":15066,"sha256":"a5ea9af435092fef44e73b3ccd9c406837e6761f52a7baaeeb61a70ba93d9735"},{"url":"/icon-256x256.png","bytes":19034,"sha256":"74472788a02991156831720912580413451f2d3dde2a3104b330d1dc7dc46fb8"},{"url":"/icon-512.png","bytes":16100,"sha256":"5f69f2d26d0c8945116ce3e93408eef4bec8014ed4e896aaa865df0dea14cc50"},{"url":"/index.html","bytes":1929,"sha256":"266d163d9a69f4bedc7f37764b573c6e65cc0e36460b2f1b4bea26d6c863041f"},{"url":"/manifest.json","bytes":1260,"sha256":"cf09d81ea03708d3f882f794c0eae4529378c6bda164a18006459102dc21f53a"},{"url":"/maskable-192.png","bytes":12217,"sha256":"f5a4eb0f2e68330466fb36aec9757a73e43ddd9a71cc1613af7c874ca423a339"},{"url":"/maskable-512.png","bytes":36502,"sha256":"fe2e9671e8283eeb07138502e2173a27dc10973119743b6bebed5069ae90742d"}]
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
