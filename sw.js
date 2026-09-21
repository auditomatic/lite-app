/* Auditomatic production Service Worker.
 *
 * The production build replaces the placeholders below with a complete,
 * hashed inventory. Source/dev builds deliberately contain empty inventories;
 * they must never claim production offline readiness.
 */

const BUILD_ID = "387c6e004537399cca63091283d894692f14871e"
const RELEASE_ID = "387c6e004537399cca63091283d894692f14871e-454c6eb5194050ca"
const VENDOR_ID = "d4588e7735b9430116ed6e5d5356da14ba7cd9a9b7797b4005652bf29728d3cb"
const APP_ASSETS = [{"url":"/assets/AddCustomProviderModal-BXibXBfG.css","bytes":879,"sha256":"43c6832a71a2919107e9da1ce197901c602bb287211345c658f3512ab510de69"},{"url":"/assets/AddCustomProviderModal-CTgaoG9j.js","bytes":17021,"sha256":"cbaca8e7ad79af9cc225a3e3e46d71849f5e89e008c2e7271b381d1d22f8eefa"},{"url":"/assets/BuildJudgeDatasetView-Dseuqyoc.js","bytes":6987,"sha256":"fbf7508bc29d1fbde348c0e7fcd0e64340bce02b48be632632ac547005cf4148"},{"url":"/assets/BuildJudgeDatasetView-NPOkuEAR.css","bytes":3353,"sha256":"6157af36c2993c0b72ea2cd4685f2ab96688ab99d7cc0ab5b4903e2d3eeedc96"},{"url":"/assets/CodeEditor-BKC_VnbV.js","bytes":897,"sha256":"ea9258adbef47ecf158ac6115f34c49b8e6df7647bd7310774f1c686b8d39145"},{"url":"/assets/CodeEditor-CfrosA3M.css","bytes":415,"sha256":"4b46da79967f08d54b6e6aaabbb3417681acd40e882a140511bafa256c9b0046"},{"url":"/assets/ColumnFilterPanel-D-uNO3-O.css","bytes":2280,"sha256":"608718efe88864cc91eb2850c886dc9eaa1bb4d9c2fc4bc29315ee2c7d88149b"},{"url":"/assets/ColumnFilterPanel-DwZ5EyCH.js","bytes":26417,"sha256":"3e99ae9935bfac4bc9cae796c4a709875f67d773c53dfdbc9682e5b9f9407683"},{"url":"/assets/DatasetUploader-CfIGLqHn.js","bytes":193034,"sha256":"69a7aff9590bc4b92983212c47d51bf36df4f1fd7a01617fddc0a15c9b53dabd"},{"url":"/assets/DatasetUploader-D9BF1twZ.css","bytes":6379,"sha256":"ab03dcee8fdc98202ccea2963b766e06c0d72c9e4cc4f52a1b86b7efbf8fddff"},{"url":"/assets/DatasetsView-B6SFQ19U.css","bytes":2233,"sha256":"37d233a8e4ad5f57335444df7bc79491221bedf71e525c5156979dd3365ebd32"},{"url":"/assets/DatasetsView-DA2dHriX.js","bytes":9107,"sha256":"cde973fb1b79c3e754cb4cd0471e18b5a7982a44e7dadc6b6e07f18d966e0fe0"},{"url":"/assets/ExportDataModal-DVLkskEu.js","bytes":37184,"sha256":"40e79db8c49325fa3fe6fdbc2164fb244034c0f91d38360332f061192ffefe59"},{"url":"/assets/ExportDataModal-Ee-aAGef.css","bytes":4598,"sha256":"321c52576a915001a609bedff4a27f90a724f13a8854fe7a09c01038eac9705b"},{"url":"/assets/GenericModelSelectorModal-BjPworRS.js","bytes":46303,"sha256":"d9bd95a968f3fea64795a85071ecab9c2b8debdcaebc8e0cca17eeab39b9e37a"},{"url":"/assets/GenericModelSelectorModal-Bkh8KDUH.css","bytes":15062,"sha256":"a628559e52aa1300390e2abc7a12a1066627106a812720fc9a81cc4587b2a040"},{"url":"/assets/HomeView-DWo0wwKl.js","bytes":11451,"sha256":"ef920501400982f2675dea5f4ce0256138a16d9bb3c004b03e7f9766b8e0faac"},{"url":"/assets/HomeView-dFzlK7e4.css","bytes":6080,"sha256":"3b7b54a5d91b00ea8388fe9f96cf432ab267301ad8ebed80c27201feef85b06a"},{"url":"/assets/HydratedPromptPreview-CFiz9DY0.css","bytes":8011,"sha256":"2c03603da13051fcd21fbdc68ee9603a55dbc17191bf411d6e3703834c84c6da"},{"url":"/assets/HydratedPromptPreview-DhYhKsS2.js","bytes":10701,"sha256":"ab1a93cfc5064d4092eb629bf1c9e9ca1440a45cef2395bae5b396e46f771f1d"},{"url":"/assets/ModelConfiguration-BLqNrqUp.js","bytes":18701,"sha256":"3b907ae5feee2725d877097c4efd928983318b0819e3019c604d8c2661f4aa5f"},{"url":"/assets/ModelConfiguration-Cae6EZj5.css","bytes":4249,"sha256":"6f4b58a43ed8659360717e90f47f3b1cc681bd5967025ef9e9370d52c08d61e9"},{"url":"/assets/ModelContractInspectorModal-CQ8HC4IP.js","bytes":4971,"sha256":"d835db9f35b090545495e82033aef61a6a358f63e0cddd10ab8b23244fb86f52"},{"url":"/assets/ModelContractInspectorModal-dhTnqUJ_.css","bytes":1859,"sha256":"1775e2dff0359ca0d443e4acd9f70c1334bd67c3686efba3ae8070d128e24b81"},{"url":"/assets/ModelsView-CkQw7iL3.css","bytes":13861,"sha256":"258bffbd3fea5477c0d3574c6f315a261c994b69436cabe8cfa1cd6248dd0ef0"},{"url":"/assets/ModelsView-CzBihaca.js","bytes":45367,"sha256":"fcdc14d9943c24fa0e3c7c6d3e43e6c3ddd10414962f160f00f051692146f842"},{"url":"/assets/OllamaModelManager-CKgcwFz4.css","bytes":15299,"sha256":"37d3c9f9cae62ba29707606da74037ab039d43729c13e3f19f5cf4314fe78dff"},{"url":"/assets/OllamaModelManager-DBDvHXz-.js","bytes":27921,"sha256":"99c1b32372ffc28f2a488d7507d02f0527f684b583b5bb90adab13fd1ae2cd80"},{"url":"/assets/ParserEditor-D9CjA6Ma.js","bytes":20503,"sha256":"f102537cd6b4944da7f0185ae758dd45348ffbf4694f9f728377f02b6f332e89"},{"url":"/assets/ParserEditor-tVuAU8iq.css","bytes":4947,"sha256":"2bcd536c9fadddbbacc4ebb596c16b70eef89d4d10d45beefc79c70f696b56c6"},{"url":"/assets/ParserSelector-Cv_K4l-K.js","bytes":10557,"sha256":"22f48dce6ccbc9d54042b06e7485fa39c1e26fde0888046391b8ff2e3fc7c9b9"},{"url":"/assets/ParserSelector-DQK9o3A4.css","bytes":6442,"sha256":"155381903f3eeeae7ae119534e9619fe6a94a3d9e5eb5073da4089440a0cc3f3"},{"url":"/assets/ParserTestSectionCompact-C3UsHICT.js","bytes":11384,"sha256":"dc3fdc89c911b481af860f90f4cb09c48061bf13ad02adbc2bb302f0342f3eed"},{"url":"/assets/ParserTestSectionCompact-oi6GLKFm.css","bytes":2766,"sha256":"a7ed81bbe1b0b9772e5404169e4b142acaba64472ff50a280e2c57f418846094"},{"url":"/assets/ParserTesterModal-C0WnQvoJ.js","bytes":1954,"sha256":"2d2588073dd5d1273c3b9b85a0222141b52d1443fd89c5ed546655920aa4d506"},{"url":"/assets/ParserTesterModal-DVfa-M7N.css","bytes":882,"sha256":"a45f185deed1a36003ea56ed806accfb7ef17b806369b809975ae32038486b7a"},{"url":"/assets/PlaygroundChatHistoryView-BLyZlGmd.css","bytes":560,"sha256":"7114ed4740ec1116801b24446e50559c0ad07e6d254d4e4e59b518856efa6207"},{"url":"/assets/PlaygroundChatHistoryView-rQ-naar3.js","bytes":3545,"sha256":"468c5dd11be1de3e589341f7ac99aef94a51845c8e1dc9fe110c3f2a796b37ee"},{"url":"/assets/PlaygroundChatView-Br3d1L1V.js","bytes":152429,"sha256":"1b6d5cd1bdf82445c00019fd97a3849646b9cbea1a91f9d50d1b13fed03767e8"},{"url":"/assets/PlaygroundChatView-CoN32AiP.css","bytes":9827,"sha256":"bd23440e6bd780757c6dc9a9e565ee8c1f03b48f3717fcec9aa9224003e182e2"},{"url":"/assets/PlaygroundHistoryView-Duqjp-rM.css","bytes":6530,"sha256":"bb25d1949e97aaca6a93ec16287ce9c6b747441625b9d905b9e9896574ceb935"},{"url":"/assets/PlaygroundHistoryView-mXADiZnX.js","bytes":24556,"sha256":"9706909d5570814d5b6f2fa9b83e61f5ee480d556ccf17365adff70687c6f655"},{"url":"/assets/PlaygroundMultiView-BdJ-0q2-.js","bytes":22761,"sha256":"92ee919c27dea6260a8c09061259ad35228844c50039866d01743f92d24d5b46"},{"url":"/assets/PlaygroundMultiView-Dttpo9Wq.css","bytes":5063,"sha256":"2d8529f617a0d194e82282f8ebd728c754f7f7e4c28b4f175613c88d44c8a432"},{"url":"/assets/PlaygroundStructuredOutputEditor-CGE2VrSQ.css","bytes":373,"sha256":"4410551cb6e947228cd496fcac7fecc75b2b8bf5f8e96cffcafccce5ff788cdb"},{"url":"/assets/PlaygroundStructuredOutputEditor-CsRAvwQS.js","bytes":4304,"sha256":"44a86d7cf07f94f7867b84ed9086af6ce0b4f715be82b91ae051ea0852616afe"},{"url":"/assets/PlaygroundView-D4oHBB4v.js","bytes":34103,"sha256":"50e82c9b72b054dca72227668d54470c237c78ad818382f7e4f47a103089425e"},{"url":"/assets/PlaygroundView-D7mTGkyz.css","bytes":16396,"sha256":"5222ecf76fad6d4ee7f8f8ef561684ae6d3a87cb43993126a4df6f1d2165377a"},{"url":"/assets/PromptAuthoringStack-BWpazx9S.css","bytes":11592,"sha256":"9cf35cba5f617410dac3563eef02f6ec91053a9c523478ae4c025e963ff40786"},{"url":"/assets/PromptAuthoringStack-CpRq51HX.js","bytes":13882,"sha256":"744a21f7cee83e50f2b4682d70bf7079b23c86e037838e90f0cf3e79ad49be47"},{"url":"/assets/ResponseFormatEditor-76HN2dfk.js","bytes":11856,"sha256":"7b4f5d52a8bc5df4890fc9ac7172cd699e4a0cb8edca5e7ea21bcaae6ada8f8b"},{"url":"/assets/ResponseFormatEditor-7xfp_fVO.css","bytes":8547,"sha256":"f1acef0d7d994535e841104f5c57b4209d7963392cedf0f973ce1065c641ee95"},{"url":"/assets/SettingsView-BX9X-Sw2.css","bytes":25817,"sha256":"9dd93c7989f71e6c23187e42cf7ae28def9edaa806b5f804c2c68f32a34452f7"},{"url":"/assets/SettingsView-CTELcFy9.js","bytes":73693,"sha256":"b379c45651c2785107114d46de636947015a0e10f9b6e5649a6eb4c2e9dd87ac"},{"url":"/assets/SetupView-8tk-lkw0.js","bytes":4977,"sha256":"51021885d9d77550ec3196781889e607a640ef7a5433758fe4235c729fdddb81"},{"url":"/assets/SetupView-DBHR_dAP.css","bytes":4029,"sha256":"fb93b00d5b89cb0502cc555538acf272cb15f0750b473b67db197e5082ab5ffe"},{"url":"/assets/SpreadsheetEditor-CFGAXdun.css","bytes":33683,"sha256":"1e33fec0d831a4fdbe0e83150eae395793982f1bff2607e929711f89adfc737b"},{"url":"/assets/SpreadsheetEditor-DGXeZpt8.js","bytes":76122,"sha256":"f55892d9d4ca743520e9a73de452abc6031357a394a6a336ac1baf6aef382aaf"},{"url":"/assets/SpreadsheetNewTrial-Co40lo-v.css","bytes":4815,"sha256":"4445bf9bab56b349b946a4619f5a89e2a33a8c262ca7c0613a208fe5cd3d341a"},{"url":"/assets/SpreadsheetNewTrial-_VFj3oFF.js","bytes":15413,"sha256":"2575a40dbeada878aeae2d3ff3802af727b5d0385c381bcc807b804e53de62af"},{"url":"/assets/SpreadsheetsView-Bdod7tfI.js","bytes":24323,"sha256":"f6fa97824c4b6c77afbee4dbf28bd3b169b26ec86f2dac61f5ac761c19484157"},{"url":"/assets/SpreadsheetsView-naY7qo3V.css","bytes":5131,"sha256":"52eb371b368912bd7b394380aa30e4cbb6c670a8fdc4b497b019d5fc6301f3d5"},{"url":"/assets/StorageModeChoice-Dz9CR1XW.css","bytes":2409,"sha256":"7115c0a9edaa3616be71459be51ae0273809078f8bf9311aad688697ed95c69b"},{"url":"/assets/StorageModeChoice-U5GtwlhO.js","bytes":9054,"sha256":"c1d61fbdffdcd1ab03de1303f505108455013e0a221b57c0775fd024f8200a00"},{"url":"/assets/TemplateEditor-3XlI7okK.css","bytes":17866,"sha256":"01a98d5c36842ad843dde355a2ca5c6253e0686fcfa297d20883bba41c2e11d5"},{"url":"/assets/TemplateEditor-CitT6x6G.js","bytes":241494,"sha256":"a86aca02bb0a7675651428a796f8631f33155c7ad09e88e5313ab02f7c7515b6"},{"url":"/assets/TemplatesView-BqQ0QDgP.js","bytes":15881,"sha256":"a20df5dcafcd7d0acb5eeed05b74bf95122fecd5d590990c00d86da44adff047"},{"url":"/assets/TemplatesView-DU7cky_6.css","bytes":4302,"sha256":"6eac0aadd0114a9d7d2fd62dd3c392cdb6c00bb55daff0e89d2c3f4cb19046ca"},{"url":"/assets/TrialConflictModal-BigzNcmN.css","bytes":2638,"sha256":"685281ae3799c5b9f75776f33242c8818bb8ccbbff27afa091781f67c05d5534"},{"url":"/assets/TrialConflictModal-DqHg9kRJ.js","bytes":5571,"sha256":"96b0b887bd0a5b829d943e2cad1269143eaa514fda63ae35f45ede8aa846f2bd"},{"url":"/assets/TrialCreation-B5WUgIsA.js","bytes":50615,"sha256":"3d58e6fd527a0123735bcc2a648b02cfe954208c961309e6c2c203f9049fafc7"},{"url":"/assets/TrialCreation-CV7gbihw.css","bytes":16930,"sha256":"e05fe8ffff8680e14f0a28c4c6f145b1bc6f6269a8a9600ab5a7d9b794c70c1e"},{"url":"/assets/TrialsView-D-GWfWXl.css","bytes":94260,"sha256":"5cc2a4468d45e6b17c9f695ba5a1c63767dff69b20488691d82a3a97fd55d0e2"},{"url":"/assets/TrialsView-D0kAYmzg.js","bytes":262490,"sha256":"72219e36ad1080a367cd5fc75543730202aec4a2fb3640b72cdc3f6b040c2c56"},{"url":"/assets/VariableListEditor-BW2xZUxS.js","bytes":18290,"sha256":"9a4437005f8e286251c60d8c9b73ee52bab02882e4b30637a3741a4635d7c0ed"},{"url":"/assets/VariableListEditor-CkM6MRKj.css","bytes":10476,"sha256":"dd57bf148c36d9bae2e7bd70026c86cb95b251b1e52ec33b4edd394d2e8c92d8"},{"url":"/assets/VariableListsView-DPq8RWge.js","bytes":17900,"sha256":"ed247a559a3042e709f3e8f491ca85baf65ab13e077c519e2aac805ccaa11d0c"},{"url":"/assets/VariableListsView-rgUkXC5g.css","bytes":3882,"sha256":"54875ec994d5e19a84af31fcee361d89b81d5ceac9f074cfb6b3934ae0e4e305"},{"url":"/assets/WizardComplete-Bre5h3Mr.css","bytes":3460,"sha256":"79aae02a1829a1e1b3f9214c9567f64ef0a63f6a265897905d007ef7dfb52402"},{"url":"/assets/WizardComplete-CXvds-G5.js","bytes":3263,"sha256":"31f7c86934423fcd26eeed4970e005a88485228d8df0062de4ac9427a64cf887"},{"url":"/assets/WizardLocalFirst-B1hjTP3S.css","bytes":2524,"sha256":"2e83cb5fef3298c1c8e2e38199dbfff0d4e44d01574f2e16e6173f1f77b74ad1"},{"url":"/assets/WizardLocalFirst-C1gdBX4A.js","bytes":5776,"sha256":"4e3849b3732dac2f1bd483fb8286b305b231a179118a7445fdd378643fc8cfad"},{"url":"/assets/WizardProviderConfig-DUIlehWN.js","bytes":23896,"sha256":"3190b90e8d3a5ed1be407bab4ca7c68ce86ce6bbb80f48ae97692d22155cf26d"},{"url":"/assets/WizardProviderConfig-Dw_ZDq-d.css","bytes":8222,"sha256":"657fcc97fd3a0ff814e48e0289aaeed78c1b60e77fdd72444bf4b3fa388d9823"},{"url":"/assets/WizardProviderSelection-CyR73BP0.css","bytes":4121,"sha256":"9146995fb080231c700c903626b80b8315ebb39e3010ef8be94034b3c377d568"},{"url":"/assets/WizardProviderSelection-D4v_c59E.js","bytes":11174,"sha256":"4caada1ecb2af1d3904a53de58e67a1ad89ae0499c466b7f9aa692ddf833d68e"},{"url":"/assets/WizardSecurity-CG7YOGMW.js","bytes":1146,"sha256":"49d1be13f8d1e44f87a193c717caa4fa07198d62fa273e8187a8fdeae82b2914"},{"url":"/assets/WizardSecurity-pnC3WyVE.css","bytes":207,"sha256":"66a0060bc318c6d65e714ebc51229f4382f4978830b3ca4d58048ac288eae387"},{"url":"/assets/WizardStorageGate-DWiaCgfk.js","bytes":8764,"sha256":"a87f5c831d05b10ba3494b47d05b8ac817140fcb130aa560142a0fcaa8e6a0a5"},{"url":"/assets/WizardStorageGate-PvJVTKL9.css","bytes":6451,"sha256":"936a7cca6057e4b0d8310298d6448c4d6b0121e8e6556a5762250c0ff36e724c"},{"url":"/assets/WizardTelemetry-DS8qeCDs.css","bytes":2085,"sha256":"0fefc1f05a5b9276b771eeef0ab359cd5a8c77ad1c98c446412b9fc255ef773f"},{"url":"/assets/WizardTelemetry-oSY8YOKO.js","bytes":2469,"sha256":"5791d90adb9de1856ee7993e29a0bf538bd65c22eff6385342f4e5916b74dc0d"},{"url":"/assets/WizardWelcome-10qsx2sr.js","bytes":6299,"sha256":"d0627259c902a80becccddd42aca0239c4681460e1535aac30ec309e971d8279"},{"url":"/assets/WizardWelcome-DNlzQekw.css","bytes":4930,"sha256":"46d1d6a469d9cce48d42b4a55a9802bb61d03f6d559d3910e3751844a425c9d2"},{"url":"/assets/anthropic-CTyLc6wY.js","bytes":657,"sha256":"db5464aded393084e37ca8b935bb37844018678323db104b2e7165101d350308"},{"url":"/assets/anthropic-messages-Dn28aUJf.js","bytes":2780,"sha256":"696f819be31376bd4d4f48616d35ff4249107a54ae4c84f3061e2c15542a764d"},{"url":"/assets/authored-source-compatibility-ZY4thl-L.js","bytes":2454,"sha256":"4a0033b4344974e183b92f7f5ef15a5bffa1cd38fbcadc70ed058fc82c373a2f"},{"url":"/assets/authoring-DzBPTJSn.js","bytes":1728,"sha256":"89f1528650ec536f9bf33bf5a18ae7af1154d53edecc7bfe23350a6efa2f8088"},{"url":"/assets/confirm-action-nkqei7eU.js","bytes":67,"sha256":"852b1e68ac07d9c8cd3d44ecff5fa9f564213e27bd98ed6dcd9facd6dbe1cd6e"},{"url":"/assets/copy-name-D7WnCoBX.js","bytes":6466,"sha256":"ed1d92b663e893ce392cf2d05fb8c5cfd746f15cd1f1f8932cd24cbff5b04008"},{"url":"/assets/cost-calculation-Dp_zBPLi.js","bytes":843,"sha256":"4714aa5245e1ebb49283220230849d0b1bb6664cab30f23a35e0171c94f4b61e"},{"url":"/assets/costs-Cgw3WNQT.js","bytes":1891,"sha256":"826758b6351bb771e6bb2948abdd02dcd6b13d64c4f91cd6a5894be53bb456ad"},{"url":"/assets/csp-reporter-BRofdPMI.js","bytes":2134,"sha256":"2eb17c43778f3ae8e5d98a06c1b3ae6934ab7908c35a6711c655246c3e69000d"},{"url":"/assets/curl-generator-jO1epDnm.js","bytes":827,"sha256":"f5fdc43a268ae959b1763f970ebcdbcd35e278ad63b77b2e256e3a6b975a704a"},{"url":"/assets/custom-providers-C8_UONK1.js","bytes":4155,"sha256":"1d9e8b3db8df78ddec2e7ede1296c57de14caeb9d9af4d89eb9faf0ccba11373"},{"url":"/assets/data-vendor-CKwrMZHi.js","bytes":499549,"sha256":"f895dd67a19c78f7cfa4069482c2f9bd4c754167dc8f9b15f11988e5358ee1ba"},{"url":"/assets/dataset-export.service-CckWOaMW.js","bytes":2522,"sha256":"43f23abc11dfee4ca0fb6c7f3aa1baba039bb23d0be4ea8b3a7c877aef48a45b"},{"url":"/assets/dataset-from-trial-qKA7-zjR.js","bytes":2525,"sha256":"6ddb2ae006a42b12bbd5cea70e86b51773026924b4cb5e934f7462551a384de0"},{"url":"/assets/dataset-operations-CY7hqORj.js","bytes":2766,"sha256":"0b80e824e26277da9b22f60b02bb4d704dc7e9ccd9631b770b1a3f1eba647355"},{"url":"/assets/dataset-parquet-rfW1M_Bv.js","bytes":478,"sha256":"512316504033f1f75148b66726d99a02ded36bffa74b7eeabc3c8ffa2708c5f9"},{"url":"/assets/dataset-persistence-CdKxfund.js","bytes":1705,"sha256":"4f0fbb2b8f1f1802fc5066e6e2fa7e7274bfc811ced9755d8b2e0eb09d55b600"},{"url":"/assets/dataset-summary-CBmJCSe3.js","bytes":503,"sha256":"f9925d9a3f7c2777e04a0003019fefc174990aedfb7a72c73a7504d4503aa275"},{"url":"/assets/deep-equal-bLv6XEjO.js","bytes":817,"sha256":"8131e299b9c54f7d76b7e4d17de7e20876eb1e895df199e79336ced3959a4a8e"},{"url":"/assets/derived--bs6-KS6.js","bytes":214,"sha256":"7bac00c2d3c91c2fd76f98339f57e949b4b50ace1da2ea9b76ec19273356140a"},{"url":"/assets/deterministic-CswtmBLq.js","bytes":489,"sha256":"3d4c6ec1ede298b7c9312b5b0186f786cd9b024029f69e6c82245bce1fd665a5"},{"url":"/assets/deterministic-Dn3mS_T3.js","bytes":1156,"sha256":"436a69eebd0199980fbb975bbedb6f43b4c581963be11fe8282c37d4e4bfcd06"},{"url":"/assets/display-values-D3R-R7BQ.js","bytes":711,"sha256":"643237f7e342dc07a71fc5be487e6b16ae4c458e223b7819d0f0fd0fa6264b7e"},{"url":"/assets/draft-B47jWa5b.js","bytes":5943,"sha256":"567c00eb857d68080ae147c0b0a964bf4951f31a4cd594e5c742bdd09dd8c373"},{"url":"/assets/edit-source-CMxnuz8K.js","bytes":828,"sha256":"100e2b84d99b6069ff714114c6767e00fe19282d6c5893e709b36059aae5a189"},{"url":"/assets/environmental-7SaNww_r.js","bytes":450,"sha256":"84cebbbd936fd31a7709bd34d36c104471cd45b65f505a61ea2fc81f6e317457"},{"url":"/assets/environmental-BaXR2Z0P.js","bytes":436,"sha256":"7a0dba6027154614b9b82b0106c09008e8aab9df16a9303d4ed966486539ba9d"},{"url":"/assets/environmental-CST2cyag.js","bytes":1023,"sha256":"a3ec6c7399b1580323e2d069fa87bb4e0680d764315360a41ab89bf8f84627a0"},{"url":"/assets/environmental-CmakTgQN.js","bytes":445,"sha256":"25ec52ea28c751b0bed6ad8614000894004a05b307ee01d380f8f838ba2b8c2f"},{"url":"/assets/error-serialization-Bbw-acia.js","bytes":1060,"sha256":"56868c29216d2c5d68a6530f267bee215d301dbaea28a8818a7235338762e614"},{"url":"/assets/estimate-VIG1jjC8.js","bytes":9335,"sha256":"d026eec69866f0389d04afebda74e4da3f395b63e904b6fb52eff2ed3f57145f"},{"url":"/assets/execution-DpkA7Fsl.js","bytes":7962,"sha256":"18b1a0ff1609b05c8ee2971b6f5051e3a53be1a74dcbf0999dd2ab41ef6abab4"},{"url":"/assets/field-ids-DXrUeamA.js","bytes":428,"sha256":"59e9139888a1aa61122457ad9423f997e4528f2889175f6722ff9ba4540700c9"},{"url":"/assets/full-backup.service-DywOoLoC.js","bytes":2086,"sha256":"178836c6c8b088b6575e4040d46c7adf82c81a7473f676e8bebc92a2aa41646e"},{"url":"/assets/full-restore.service-DiIKWzYj.js","bytes":23637,"sha256":"df5132240b9b1a3420e532a3b0bec3f90e98deb47d83e7c5ec062cf38065af3d"},{"url":"/assets/huggingface-_GseyfpK.js","bytes":920,"sha256":"4e4e5260447653c3a9e60050d0b2037bac0ec9b44146953a5940d7864a7a610f"},{"url":"/assets/index-C4BrnIkZ.js","bytes":23412,"sha256":"3108e57c780e1e9b73b6652706728dca39240697cccd62c6fefcda768fc06800"},{"url":"/assets/index-C85ieg7A.js","bytes":101758,"sha256":"d1f45e3005e7ac06b3d4b5519045a6ef6f62a4776e876f97cdac8d436bb601b9"},{"url":"/assets/index-CNLKCF2g.js","bytes":712817,"sha256":"d46519c2e0e5b9b509b69aaeb78e4634f3acc07e8c94f4d23bc1258bf02beb66"},{"url":"/assets/index-COsTMJTH.css","bytes":2535,"sha256":"b1a7c87318517489f6142a2e5ac52f4037286a764658bca36d54be972b3a8dfe"},{"url":"/assets/index-D7FmHGnm.js","bytes":123,"sha256":"ddc503a318b653117e1f161fe4a62fc29885370bf862b10104560e6e71e230e3"},{"url":"/assets/index-Dh-2vaBP.js","bytes":2211,"sha256":"63494422f4114f94b6d1140b998c75e240709da949aaa046134a5c5b4199938c"},{"url":"/assets/index-Pi3egD3z.js","bytes":115554,"sha256":"708ac6ad22ed61304525572c826571808d4e3c3482cf249c1c2026f3179fe691"},{"url":"/assets/index-cvbUNgHb.js","bytes":1057,"sha256":"9381ee2d3b70ca6fd1c1db975c4bd3169725a1ab1d0aac6299a11aa45b797346"},{"url":"/assets/index-eaL0WW7P.css","bytes":56254,"sha256":"008ba335caee7b7dd1f8c64c080a2e58a04c2482282bb606486ae613d3e6f544"},{"url":"/assets/index.browser-CuGhdRGA.js","bytes":4826,"sha256":"5bc3e2343c93f4b97e9fcb9c6967fcc309761c0b9cb7e9ed4ba61099a51ca2ec"},{"url":"/assets/initialization-CJZPCJMP.js","bytes":5641,"sha256":"163511e8e72f3626ae037c651a3ab7d430dfc6b2acf2302894fa9658eae7db49"},{"url":"/assets/interrupted-generation-UikdsXKq.js","bytes":2790,"sha256":"79c288d96078436bda2bf47068163780529de57fd1be6118f7253b58bb703a77"},{"url":"/assets/local-config-Bzbn5GRF.js","bytes":1909,"sha256":"4fa70e430e51c582d5852cb13af892e9d9d7818e5251344b266a5370857452cf"},{"url":"/assets/mistral-B6b8aYd5.js","bytes":1184,"sha256":"c06d7667932c41379c2d2ee1d200ff5e4327015d434fece0a601b58caa71070c"},{"url":"/assets/nebius-BPZtkA7u.js","bytes":1191,"sha256":"5a67443f1893fd324e805eb61cf1c805f8e9dcbff433d46d7bdb959effc80e41"},{"url":"/assets/ollama-XShvfcPA.js","bytes":607,"sha256":"82d3c92b73d3c700fdae6dbc5eac114a7727d18ecf2c50b859e0801a6ee8142a"},{"url":"/assets/ollama-chat-BcdN-dwV.js","bytes":3507,"sha256":"fc249038debbc498ea25930e62a9476cc533fa8ce05e9a96b1a8fcde8ee4b2c7"},{"url":"/assets/ollama-generate-BfG1ZiiW.js","bytes":3888,"sha256":"e3c6e0a12480787b21b25292c6fceeb508d571638cf9c5b6bee40a878150361a"},{"url":"/assets/openai-chat-Bh9rmqG-.js","bytes":2760,"sha256":"046a2e1aa8479c443dd684b8bfb18424b5593c091044eb135d1b5733e9642823"},{"url":"/assets/openai-hdutPmT6.js","bytes":1003,"sha256":"459c68a33396a816ea2f8adf085175e97e610d68711eb15024c3e28726e513a6"},{"url":"/assets/openai-responses-DlTacXH7.js","bytes":3881,"sha256":"cac1a006c43cd8770af2a1bb93dee22b15c9bec6ff91e941eec9dab25ec4de9d"},{"url":"/assets/openrouter-Dcp1z8a-.js","bytes":4442,"sha256":"505f0991c09aeedc279ea0346b96306325016c1f5d94461099452fd04146a0b4"},{"url":"/assets/openrouter-defaults-9rWrck2t.js","bytes":3123,"sha256":"0ac6e123bd4bf632084f348108e1c3dc5fe577ac433d12421920786b8ef9cf51"},{"url":"/assets/opfs-sync-writer.worker-Bguqhj4u.js","bytes":1000,"sha256":"cb82b29f9b4b2ae25e7631fb9c49555c35af855de53792c53a3b914bd24f3f72"},{"url":"/assets/paged-table-reader-Cui7blz8.js","bytes":393,"sha256":"62f2cdf5789d993451cd457d068c3bf4f0d0f5c0317df9cf7c31c3c80444ee6f"},{"url":"/assets/parameter-summary-Big4GY4t.js","bytes":10239,"sha256":"ac3bbfa130dba96360111a9b23b48d8868837a689192c4bf9c034d9ac9bdbf54"},{"url":"/assets/prompt-compile-piwYKgBO.js","bytes":2081,"sha256":"ba148df620433c27818ccac5dac01dd1be37643b67be4642da24a64b859db469"},{"url":"/assets/provider-enablement-CmU49_qE.js","bytes":709,"sha256":"87308b4c0f424f9416481c7800ecac100d6ce2b10d1bdaa73cd91677ab53d999"},{"url":"/assets/pyodide.worker-UXA_A12b.js","bytes":13711,"sha256":"f2a326dd774bf8455e6df381b9182dcc950e980451eb05ddf6280cbe3fd80b53"},{"url":"/assets/render-D8XTBm4B.js","bytes":851,"sha256":"3f019ffbf3ffdfc3de20ab8d8ae84e9471cde58074de6bfdd53dcc9cf2030625"},{"url":"/assets/repository-CU9C5u_8.js","bytes":2359,"sha256":"fe93236164256dcf3f6704c8d641251c70db707c3fdf4b71a69bbf5fcb8595fb"},{"url":"/assets/repository-DCWsON3F.js","bytes":1158,"sha256":"a084c8aae97e9c70da05f9c92947e1b495f3ef2ac9193bd47f0e5b7e1bcadab2"},{"url":"/assets/response-evidence-codec-CNbqe0C7.js","bytes":8918,"sha256":"563e41d5f36f8d92778045d99b3becc2a3ce99d22ee0784437035544bc6b1184"},{"url":"/assets/response-features-Q4DlOVdq.js","bytes":460,"sha256":"383359708bf71ed484eafe3c5ca0d5963ff9cab798765cb928246133a363df98"},{"url":"/assets/row-filters-DVNsrKUs.js","bytes":405,"sha256":"f0e85d49e328197830832f0f7a9dc7fb635806600dd0b7ba13099f10830e322f"},{"url":"/assets/save-file-BFYy4rra.js","bytes":945,"sha256":"ae16ba0eb50a774dbbab97f1fcc602e2c8a6418e987c33028b9d648c36d336d2"},{"url":"/assets/shipped-order-2OApmpyv.js","bytes":443358,"sha256":"5dee1e3a59faa640b40220d21515e740b07b5dd86664dee0c2b8fdcb27a62208"},{"url":"/assets/sql-wasm-C1U8OeUW.wasm","bytes":659806,"sha256":"0734155c83e493983d1f2ff5b09a4fab6e35a32e9449c7e4e545756439f62d73"},{"url":"/assets/tabular-export-XBdGNPA5.js","bytes":83389,"sha256":"31a3ff1fd5176ffe63e62bf9ffdbbac3cd713166c9a5292324543a38ab5acb1b"},{"url":"/assets/tauri-download-utilities-DWm7SBfp.js","bytes":3348,"sha256":"77ac978d33a2595d661aa90163f3950dab72f5c8ef1dbca31fc348b865791e38"},{"url":"/assets/tauri-vendor-CMy7hGlg.js","bytes":15658,"sha256":"9ebe68e8be861f560e21260b837a577d98b8aa1f5264c888dbe2a752bb50f465"},{"url":"/assets/template-variables-T4-5MHs4.js","bytes":606,"sha256":"68f9ea82c6690f7fc29d9afe477699b20b8c3beb41cbec218142d74010fc65e4"},{"url":"/assets/token-calculator-9fkgAKFt.js","bytes":5438,"sha256":"94d6bbcaf02a81c221716b1d2b849b2cecb19df6a313a7ce94cbceb883574342"},{"url":"/assets/token-counting.worker-DzyAsXBu.js","bytes":2037530,"sha256":"6f6af764f67e6a05da52ded39892cfb7c1e032796f3949ab955a002deacaa33c"},{"url":"/assets/trial-bundle.service-CboeoP6M.js","bytes":23720,"sha256":"44acb4a91c3f53c7f46a33829686b09800d6d814b445d52cd41c76ca84b80bb9"},{"url":"/assets/trial-execution-lease-C74xPweS.js","bytes":699,"sha256":"8d972fa9722f3a20dddef4f0062b4d8d087354dfbd58d5f9c4c4d08ea67a80eb"},{"url":"/assets/trials-n_U65dcV.js","bytes":17540,"sha256":"c2918a4a45d67344eff14f8e0566a45aa0237608551b73e2cc67db9af5173b26"},{"url":"/assets/ui-vendor-jNJ2Rlng.js","bytes":986409,"sha256":"dda68320690126fcdeb0506bdb505d3bb0618794ebc013d3012408af6aa28bb8"},{"url":"/assets/useCostEstimation-caVvmpaW.js","bytes":512,"sha256":"2a67008641f99bee1ac256161bf0a88f820c717c249263f90ea70dc24f17a355"},{"url":"/assets/useCrossTab-JYfWCs7L.js","bytes":671,"sha256":"fabb4f2ed2ca8bae3d6c662346f9ccaa7e33353285d7ff4468f9f7c69421f1d3"},{"url":"/assets/useHeatmapStyling-DVl-VZwG.js","bytes":5254,"sha256":"11a419dccab8a7b14be33d98ce8d6101ebff6dea25985d5eba692c20dd612f47"},{"url":"/assets/useLiveQuery-CDGjnDsr.js","bytes":728,"sha256":"077f90aa9b2e1245ee0b8b19664f10d928a1e88acf2734e9fc0218ea3b9ae637"},{"url":"/assets/useModels-GdprXaAt.js","bytes":2559,"sha256":"8adeacd07ff595e10dabe2d15d5908ffdc1c1b732abeac62747ab5769cf91a2e"},{"url":"/assets/usePlaygroundDraft-CsdsLSPx.css","bytes":6941,"sha256":"6f1aca108bdfdac193bc69db9d7e436030f09cbcceea81bfc585e2c5cf6fc828"},{"url":"/assets/usePlaygroundDraft-mqJSg_29.js","bytes":9013,"sha256":"0a05aa739197a0d548ff7767281a3403a34b2e9fb6571a918105812f2f2a7f18"},{"url":"/assets/useSpreadsheetPrompts-xrNWvM47.js","bytes":3325,"sha256":"8e957607a801f595b0fdf3c7cec8e74c2008e0921b5a98e6e22c5491c66a5bd1"},{"url":"/assets/useTemplateCommands-CavJtqYe.js","bytes":23854,"sha256":"be618e20989739b9da82cb03169cce373da69fc386908474e5a5d3881c2e141d"},{"url":"/assets/useTemplates-CGYnOqql.js","bytes":3574,"sha256":"c837578c8664fc3d447958eddce95100f264474c3054fa78bc17965a6f38f30e"},{"url":"/assets/useThrottled-mnxaaWoJ.js","bytes":244,"sha256":"451d4f65f16734067c4d7f80acf0b6ea0ab333923c5a8ebd9e7749978f16449d"},{"url":"/assets/useTokenCount-D8f5rtsn.js","bytes":3154,"sha256":"94a5ebe9e67bd85bdb932e5d6cd8eec5cc5d8e804c2d05cdb4d4f029ad1604c6"},{"url":"/assets/useVariableListCommands-KixQ7XeL.js","bytes":13399,"sha256":"c1011fdb921e3595562fab8029218634b8b871940d3128e1e639ac4807d41be4"},{"url":"/assets/useVariableLists-DHnESnHl.js","bytes":1972,"sha256":"5d5ad773e45029ceed18acff2fb09b6760969bea8d75414c74e7d2dcbdfd3aaf"},{"url":"/assets/utils-vendor-Bx45-6jr.js","bytes":42345,"sha256":"e0c6e2024ca8108e1ee395207fe64ce23e2a8bf8c302de4640d1f2de66fd9ec5"},{"url":"/assets/vue-vendor-CZGf7iM2.js","bytes":113130,"sha256":"f8952db84562a08694f02351595001072763420568524cc4b489669ddaf26240"},{"url":"/assets/vue-virtual-scroller-BCw0uU-l.css","bytes":1220,"sha256":"4d71315fd8c42dc3e7d0ba1e8cb831ad725c22c34cb76c8ff8dbce87d628abb4"},{"url":"/assets/vue-virtual-scroller-CD61hDZM.js","bytes":16632,"sha256":"03bce0de5fd6ec39a1d2a776271d9e8b3380addc6fed8717abcc02801dd4429b"},{"url":"/assets/webview-DLxETPQz.js","bytes":16145,"sha256":"a788c706ef4188302f0f92345dc779a1b1b49c92fccec376391d594fcb3fb236"},{"url":"/assets/wizard-flow-BZRGzTPh.js","bytes":3031,"sha256":"37b4f5f3280247b1ffbbb4a7a2e2082114b0c6706aa80445f0c857c01f9ae873"},{"url":"/favicon-128x128.png","bytes":3706,"sha256":"bbbdeeb9b6966ec47cd61ff198fb0def1ea34d9a785aa8be877d0489fb319167"},{"url":"/favicon-32x32.png","bytes":1081,"sha256":"3c49bb0a85918d8c69f13a724c35395e0f28cbcf67f445ae38b50a3c71d07af2"},{"url":"/favicon.ico","bytes":16672,"sha256":"57222d5e378250fd4cfe1d63ea90269c2f1dfe6c1411998482868782d71a7708"},{"url":"/favicon.png","bytes":14488,"sha256":"98a188b69c38bb92f851f6acc230625f3872f75e4e2a1dbb6291bd40ff1f99b1"},{"url":"/favicon.svg","bytes":684,"sha256":"a9b3b819d4e9b63857d2303ec278c84afbd7957ee517160fad880f6de3206b7e"},{"url":"/icon-192.png","bytes":15066,"sha256":"a5ea9af435092fef44e73b3ccd9c406837e6761f52a7baaeeb61a70ba93d9735"},{"url":"/icon-256x256.png","bytes":19034,"sha256":"74472788a02991156831720912580413451f2d3dde2a3104b330d1dc7dc46fb8"},{"url":"/icon-512.png","bytes":16100,"sha256":"5f69f2d26d0c8945116ce3e93408eef4bec8014ed4e896aaa865df0dea14cc50"},{"url":"/index.html","bytes":1929,"sha256":"74de5158da31bf7a9c94f513bee37db52a412c84b38b72c68c4e0191b197190f"},{"url":"/manifest.json","bytes":1260,"sha256":"cf09d81ea03708d3f882f794c0eae4529378c6bda164a18006459102dc21f53a"},{"url":"/maskable-192.png","bytes":12217,"sha256":"f5a4eb0f2e68330466fb36aec9757a73e43ddd9a71cc1613af7c874ca423a339"},{"url":"/maskable-512.png","bytes":36502,"sha256":"fe2e9671e8283eeb07138502e2173a27dc10973119743b6bebed5069ae90742d"}]
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
