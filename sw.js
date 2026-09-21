/* Auditomatic production Service Worker.
 *
 * The production build replaces the placeholders below with a complete,
 * hashed inventory. Source/dev builds deliberately contain empty inventories;
 * they must never claim production offline readiness.
 */

const BUILD_ID = "97ae7f32a70baa16aa32ecb3e4d45e82b36c6b07"
const RELEASE_ID = "97ae7f32a70baa16aa32ecb3e4d45e82b36c6b07-d0f3351f2390b5ef"
const VENDOR_ID = "d4588e7735b9430116ed6e5d5356da14ba7cd9a9b7797b4005652bf29728d3cb"
const APP_ASSETS = [{"url":"/assets/AddCustomProviderModal-BB_cY47o.css","bytes":879,"sha256":"cb44b7b5d7e3107680d40883bf3d21a355a781c5924f3f65d112309541fd9970"},{"url":"/assets/AddCustomProviderModal-DSgpxPXr.js","bytes":17092,"sha256":"d39346034736307855d702c3bf89ecc3eae9002a8093a9193dea7f9eaa1ca96f"},{"url":"/assets/BuildJudgeDatasetView-NPOkuEAR.css","bytes":3353,"sha256":"6157af36c2993c0b72ea2cd4685f2ab96688ab99d7cc0ab5b4903e2d3eeedc96"},{"url":"/assets/BuildJudgeDatasetView-mQ9P5Mfa.js","bytes":6987,"sha256":"6ca1d48a2d9e97d1880bbb0afcd123587530d1fa622a83e72fa0d80ddadabde5"},{"url":"/assets/CodeEditor-CfrosA3M.css","bytes":415,"sha256":"4b46da79967f08d54b6e6aaabbb3417681acd40e882a140511bafa256c9b0046"},{"url":"/assets/CodeEditor-CkBAQGkm.js","bytes":897,"sha256":"c0914efd3c1aabfe5221676584231677b021ec6f02a22fbae2d3834a14aaf8ab"},{"url":"/assets/ColumnFilterPanel-BYZ1Vl5v.js","bytes":26417,"sha256":"f42f099f45ee1dae39cbb69f08ae859c35de02650aeafde9a65252cc02f09286"},{"url":"/assets/ColumnFilterPanel-D-uNO3-O.css","bytes":2280,"sha256":"608718efe88864cc91eb2850c886dc9eaa1bb4d9c2fc4bc29315ee2c7d88149b"},{"url":"/assets/DatasetUploader-Bsp8RQ70.js","bytes":193033,"sha256":"da5ddeedff22c272b9d3eae4332c0a1f5424a294f5173be2191cf09bb3c59971"},{"url":"/assets/DatasetUploader-D9BF1twZ.css","bytes":6379,"sha256":"ab03dcee8fdc98202ccea2963b766e06c0d72c9e4cc4f52a1b86b7efbf8fddff"},{"url":"/assets/DatasetsView-1TgMSeKa.js","bytes":9108,"sha256":"9756f053245e38f035b2092ff9f7765f5ca34222885d9bc23334ce5ce6abe1d3"},{"url":"/assets/DatasetsView-B6SFQ19U.css","bytes":2233,"sha256":"37d233a8e4ad5f57335444df7bc79491221bedf71e525c5156979dd3365ebd32"},{"url":"/assets/ExportDataModal-CPdzolBW.js","bytes":37184,"sha256":"0be4c7dcd5bfdb8dc63da140ed8512b10a4053a560c0142cbf1b435ab7b5088b"},{"url":"/assets/ExportDataModal-Ee-aAGef.css","bytes":4598,"sha256":"321c52576a915001a609bedff4a27f90a724f13a8854fe7a09c01038eac9705b"},{"url":"/assets/GenericModelSelectorModal-ChZxxfc6.js","bytes":45016,"sha256":"7437db10f0cf991548a8d075c14c6297816a15f08668f7899720398a6790eeca"},{"url":"/assets/GenericModelSelectorModal-Dti6dqjQ.css","bytes":14924,"sha256":"e4ea5a9a71ca6a6d6c4402d0071f567a2f8e981b36ff1e96c49a5d633d41ae48"},{"url":"/assets/HomeView-5-3Ca819.js","bytes":11451,"sha256":"02b7e3bc7d82d546ad3b8147371efee9000629b20c8c47646aa13fdecdb0c3a7"},{"url":"/assets/HomeView-dFzlK7e4.css","bytes":6080,"sha256":"3b7b54a5d91b00ea8388fe9f96cf432ab267301ad8ebed80c27201feef85b06a"},{"url":"/assets/HydratedPromptPreview-CFiz9DY0.css","bytes":8011,"sha256":"2c03603da13051fcd21fbdc68ee9603a55dbc17191bf411d6e3703834c84c6da"},{"url":"/assets/HydratedPromptPreview-CN-Afb5a.js","bytes":10702,"sha256":"85b99219fbdab5779dbbd39bc36b7dec2152ace39e236fc8936014d83fd668af"},{"url":"/assets/MasterPasswordSetupModal-C0hkn3OE.js","bytes":12391,"sha256":"30331d2e53751481e492a51eddb582180e118b0d842ee76679264c0f89f8a324"},{"url":"/assets/MasterPasswordSetupModal-D3RxoUMh.css","bytes":5099,"sha256":"3b7f1798fe219c6c5e33472a3f1087f083d22a6cf1ab6b0c37bd12efc7da531b"},{"url":"/assets/ModelConfiguration-B75w9mis.js","bytes":18703,"sha256":"2672a6ea68690c918918e051d1eda7768033e2b40225cfb730ef927d7e663743"},{"url":"/assets/ModelConfiguration-Cae6EZj5.css","bytes":4249,"sha256":"6f4b58a43ed8659360717e90f47f3b1cc681bd5967025ef9e9370d52c08d61e9"},{"url":"/assets/ModelContractInspectorModal-Bap_qsly.js","bytes":4976,"sha256":"b4d50a9d0c131ccd96e632d05ce58b38639918fc24069dc81f7cce3f435b6895"},{"url":"/assets/ModelContractInspectorModal-dhTnqUJ_.css","bytes":1859,"sha256":"1775e2dff0359ca0d443e4acd9f70c1334bd67c3686efba3ae8070d128e24b81"},{"url":"/assets/ModelsView-QSfqacsy.js","bytes":45537,"sha256":"ae2638baaef889504f2bda25888e4cdd0eb6554c1c1bf1fc09acffc361740c57"},{"url":"/assets/ModelsView-w6fcLRmX.css","bytes":14325,"sha256":"f4a79e2c38a004ebd64085c7128d90f970593f7863aa92589a30eb29211979d3"},{"url":"/assets/OllamaModelManager-BRPgWwlF.css","bytes":15299,"sha256":"48f29bb92f057a7252fecac2caaeac3334c3d31251cd9dfae5c9a40d52904445"},{"url":"/assets/OllamaModelManager-DbPZlXzW.js","bytes":29444,"sha256":"4cd527e7c726a2e0b02a64ca5a2e32eedc2fe8f3aa2ba599129a99b13370f3d8"},{"url":"/assets/ParserEditor-Dj5khoKL.js","bytes":20500,"sha256":"ad01feea4ba78db56787f937b71e2fc32a66199e34715c8537d0c8c8e25769d9"},{"url":"/assets/ParserEditor-tVuAU8iq.css","bytes":4947,"sha256":"2bcd536c9fadddbbacc4ebb596c16b70eef89d4d10d45beefc79c70f696b56c6"},{"url":"/assets/ParserSelector-BZEJQEOa.js","bytes":10556,"sha256":"7491735f5cfb2d4713f533b69108611abd0c21d1dc2b2f4838eefab41c7ec96c"},{"url":"/assets/ParserSelector-DQK9o3A4.css","bytes":6442,"sha256":"155381903f3eeeae7ae119534e9619fe6a94a3d9e5eb5073da4089440a0cc3f3"},{"url":"/assets/ParserTestSectionCompact-C96Ak-c1.js","bytes":11386,"sha256":"716c114a11051fe84694781cf53d01ed136fea3740830be83f638c7ce2b142d2"},{"url":"/assets/ParserTestSectionCompact-oi6GLKFm.css","bytes":2766,"sha256":"a7ed81bbe1b0b9772e5404169e4b142acaba64472ff50a280e2c57f418846094"},{"url":"/assets/ParserTesterModal-BXzyYpRn.js","bytes":1954,"sha256":"61469b6a62ba0576e74e969671cb03b956207ce238f9558035a03d7a63f0a1a4"},{"url":"/assets/ParserTesterModal-DVfa-M7N.css","bytes":882,"sha256":"a45f185deed1a36003ea56ed806accfb7ef17b806369b809975ae32038486b7a"},{"url":"/assets/PlaygroundChatHistoryView-BLyZlGmd.css","bytes":560,"sha256":"7114ed4740ec1116801b24446e50559c0ad07e6d254d4e4e59b518856efa6207"},{"url":"/assets/PlaygroundChatHistoryView-Byw0bz2I.js","bytes":3545,"sha256":"6d0daea0a18b95ff707d29dbc33a49b3152b8490a0b967c0fab615d558a5bac4"},{"url":"/assets/PlaygroundChatView-CoN32AiP.css","bytes":9827,"sha256":"bd23440e6bd780757c6dc9a9e565ee8c1f03b48f3717fcec9aa9224003e182e2"},{"url":"/assets/PlaygroundChatView-f4KWNjlm.js","bytes":152430,"sha256":"cc7c8ad8a31e21139e50575bbea43f601cf34861bf6e7a496e323dc2bb22a05d"},{"url":"/assets/PlaygroundHistoryView-Duqjp-rM.css","bytes":6530,"sha256":"bb25d1949e97aaca6a93ec16287ce9c6b747441625b9d905b9e9896574ceb935"},{"url":"/assets/PlaygroundHistoryView-tYNLRxhO.js","bytes":24554,"sha256":"c264ab54f1e3acf27be056bf4eebac8b3d975b44702f35fb1e35e7b348aa31c2"},{"url":"/assets/PlaygroundMultiView-By3plwa-.js","bytes":22763,"sha256":"d917858f4c6a342a8f9d30f81f0266fc57be17945d890201b42d80b484d236c5"},{"url":"/assets/PlaygroundMultiView-Dttpo9Wq.css","bytes":5063,"sha256":"2d8529f617a0d194e82282f8ebd728c754f7f7e4c28b4f175613c88d44c8a432"},{"url":"/assets/PlaygroundStructuredOutputEditor-CGE2VrSQ.css","bytes":373,"sha256":"4410551cb6e947228cd496fcac7fecc75b2b8bf5f8e96cffcafccce5ff788cdb"},{"url":"/assets/PlaygroundStructuredOutputEditor-Dxut3NSe.js","bytes":4304,"sha256":"d1789cbe09b9b7c46a1ce273110d142d462c3048b18f6b988d8011bd202664ab"},{"url":"/assets/PlaygroundView-DIdUURG8.js","bytes":36808,"sha256":"71424c1b89dabfa164161fbaa3462a73ccb85b8f61af69dfc7238e14c6331eec"},{"url":"/assets/PlaygroundView-ITMAeHu8.css","bytes":17146,"sha256":"4391822cb4fc8a50d18d80e38f161f4e0ce0d013319e0c65aa9715f9ea78cf08"},{"url":"/assets/PromptAuthoringStack-BWpazx9S.css","bytes":11592,"sha256":"9cf35cba5f617410dac3563eef02f6ec91053a9c523478ae4c025e963ff40786"},{"url":"/assets/PromptAuthoringStack-CHB8R82m.js","bytes":13881,"sha256":"1182c463830b1c6cd97369c64dcebcb7911e94b073c7f783bb9718e395e8cd18"},{"url":"/assets/ResponseFormatEditor-7xfp_fVO.css","bytes":8547,"sha256":"f1acef0d7d994535e841104f5c57b4209d7963392cedf0f973ce1065c641ee95"},{"url":"/assets/ResponseFormatEditor-C81pp2Aa.js","bytes":11856,"sha256":"9ce50a295d67f9900a31b23f3d258712cf9ee24317c3eefe16b6fb827a002d03"},{"url":"/assets/SettingsView-DH89kNqk.js","bytes":77639,"sha256":"ef3dbe9b7a5971a35fe80a8a017b51bb292efae2485415177a0fd9f8c38c610d"},{"url":"/assets/SettingsView-OXMtcWPF.css","bytes":26174,"sha256":"53608997dbe66ae8acb3900c416e7772e707322d59ed0d4ed00b992952e6c2fa"},{"url":"/assets/SetupView-C0b9c5HH.css","bytes":4029,"sha256":"07b41cf3a45fd0a84da364a64b219297c32e48d9af595113e034191c6e5442f4"},{"url":"/assets/SetupView-DfatpF7A.js","bytes":4994,"sha256":"ab8ba9ff8c2780d1f67399da44f009213b2144951905712669cc81013121373b"},{"url":"/assets/SpreadsheetEditor-CFGAXdun.css","bytes":33683,"sha256":"1e33fec0d831a4fdbe0e83150eae395793982f1bff2607e929711f89adfc737b"},{"url":"/assets/SpreadsheetEditor-k_S56p8M.js","bytes":76123,"sha256":"50684242f408b4c3fdd2ae3e9ba268dca31e6ef3ffd2815b0bf2d135bf044023"},{"url":"/assets/SpreadsheetNewTrial-Co40lo-v.css","bytes":4815,"sha256":"4445bf9bab56b349b946a4619f5a89e2a33a8c262ca7c0613a208fe5cd3d341a"},{"url":"/assets/SpreadsheetNewTrial-vcsur_m8.js","bytes":15413,"sha256":"0e0d488943bfb65bef2e4b422dbabe5d804a28c03f079e5e6d3503de549a7561"},{"url":"/assets/SpreadsheetsView-fj1oGVBz.js","bytes":24135,"sha256":"0496484bd7652f177f908687d4e5d17fe264b384c529e633e517871a40548479"},{"url":"/assets/SpreadsheetsView-nLdwElta.css","bytes":5176,"sha256":"bd1f88cfc0aa33e887f86f327807997eddfb91a8c05ae96019b1bb19ecfe42e4"},{"url":"/assets/TemplateEditor-3XlI7okK.css","bytes":17866,"sha256":"01a98d5c36842ad843dde355a2ca5c6253e0686fcfa297d20883bba41c2e11d5"},{"url":"/assets/TemplateEditor-DDrv5Bje.js","bytes":241494,"sha256":"7cd3595abfe9e77ef9cfbbba7891afc6d27ef956e36a0548615cc82238f77d7f"},{"url":"/assets/TemplatesView-BOL0nTzU.js","bytes":15963,"sha256":"861b63fe9ccb99e7eeab03e6bfc4bc9e74db2a282dc20b80962b5fab88619981"},{"url":"/assets/TemplatesView-BTU06m2w.css","bytes":4070,"sha256":"93fbd450676d6c12da6d76919ef3ef6f9fb6f7cbc94cc1b505e6b9b25d77f6c0"},{"url":"/assets/TrialConflictModal-BigzNcmN.css","bytes":2638,"sha256":"685281ae3799c5b9f75776f33242c8818bb8ccbbff27afa091781f67c05d5534"},{"url":"/assets/TrialConflictModal-DPEBsCRT.js","bytes":5572,"sha256":"3f867f7ec6c88e426ca584ad23f8c339eb401e4c29fb770dbac88399fb66d1c2"},{"url":"/assets/TrialCreation-B53vvZ3r.js","bytes":50615,"sha256":"eaaab7dfbed538c8a309ea2a652185534a8e6e1e2a8bbf2bbec7ecac7a896e84"},{"url":"/assets/TrialCreation-CV7gbihw.css","bytes":16930,"sha256":"e05fe8ffff8680e14f0a28c4c6f145b1bc6f6269a8a9600ab5a7d9b794c70c1e"},{"url":"/assets/TrialsView-D-GWfWXl.css","bytes":94260,"sha256":"5cc2a4468d45e6b17c9f695ba5a1c63767dff69b20488691d82a3a97fd55d0e2"},{"url":"/assets/TrialsView-deaDi9Dg.js","bytes":262489,"sha256":"d92bae237f049019569c0ad64752d42a5ebe40609b8535cae2df13ce3595cb2a"},{"url":"/assets/VariableListEditor-B5Vg2E9f.js","bytes":18289,"sha256":"812f2463950aac335e94c68cf4b4ed0c06097de730cec26b443afa044030f2be"},{"url":"/assets/VariableListEditor-CkM6MRKj.css","bytes":10476,"sha256":"dd57bf148c36d9bae2e7bd70026c86cb95b251b1e52ec33b4edd394d2e8c92d8"},{"url":"/assets/VariableListsView-L4pPxgUr.css","bytes":4117,"sha256":"831c87ec13b89cf37aaacfc8fb04781f234efd70b55d98df595b8b4abf80adc4"},{"url":"/assets/VariableListsView-MZtoQQuE.js","bytes":17887,"sha256":"48cf574ee96b46c692556568310ffa4198e74b9947ef903c7240043d0c29c8b9"},{"url":"/assets/WizardComplete-BpmUTpmb.css","bytes":3460,"sha256":"d39f7c3908e84239d555afbbc7a31e888ae627fff62b9331b204cef88534558a"},{"url":"/assets/WizardComplete-Dz-7oNLL.js","bytes":3413,"sha256":"ea772fca0a40c87caa72cbacf15358362a293f1ff3279845fa08954fbd84c33e"},{"url":"/assets/WizardLocalFirst-B1hjTP3S.css","bytes":2524,"sha256":"2e83cb5fef3298c1c8e2e38199dbfff0d4e44d01574f2e16e6173f1f77b74ad1"},{"url":"/assets/WizardLocalFirst-C2LviSl2.js","bytes":5776,"sha256":"05625935c7de2966f1cb3ab38460237b6c3829ef54c5323c18030ea51ea648b0"},{"url":"/assets/WizardProviderConfig-9F9B7vUw.js","bytes":22188,"sha256":"9bf3ff31ddb14ec517ebdf9b2626bdbb50502add5b7e02a7d17c1110b5244d2e"},{"url":"/assets/WizardProviderConfig-CfRc3K4g.css","bytes":8222,"sha256":"3ded67fa60338d76c8db66cf05db347955ead84cb7c4d2bf2c17f6951337164a"},{"url":"/assets/WizardProviderSelection-XtrTMnc3.js","bytes":11172,"sha256":"79353019329fadc89b01ebe8c152ad88dfd0bea9c89a26b6d9e221c6ef8338cb"},{"url":"/assets/WizardProviderSelection-llJ_um5d.css","bytes":4082,"sha256":"9eeb85b0efb519da01cadf6bde0b6c056c42607030a67ab8709f6def144b56f9"},{"url":"/assets/WizardSecurity-CHF06QOj.js","bytes":8349,"sha256":"da782304ed3c2bc6698bde91d79c73b3c0675d381aab70a8d47175206fc084e6"},{"url":"/assets/WizardSecurity-ownMu-Pf.css","bytes":5399,"sha256":"338c0d43b22ba12bcb3e7c177a7017c8cb6688d249a4e216ae49e8ed0365e746"},{"url":"/assets/WizardStorageGate-C1m-qHdQ.js","bytes":8769,"sha256":"32031f8f03aab9521b2ddbe85aac30ce3f31538709399dff80ed8d47499686cf"},{"url":"/assets/WizardStorageGate-PvJVTKL9.css","bytes":6451,"sha256":"936a7cca6057e4b0d8310298d6448c4d6b0121e8e6556a5762250c0ff36e724c"},{"url":"/assets/WizardTelemetry-C431sNDv.js","bytes":2469,"sha256":"bd881250f194efd5570b335010245eb8cdf17d95e977329e3c70e4f3f180ce52"},{"url":"/assets/WizardTelemetry-DS8qeCDs.css","bytes":2085,"sha256":"0fefc1f05a5b9276b771eeef0ab359cd5a8c77ad1c98c446412b9fc255ef773f"},{"url":"/assets/WizardWelcome-CVKX8H7j.js","bytes":6299,"sha256":"e4b9b9ed43ab3c4663c2001db62385ab3822d94671282f554c1a24d96fe2ecb6"},{"url":"/assets/WizardWelcome-DNlzQekw.css","bytes":4930,"sha256":"46d1d6a469d9cce48d42b4a55a9802bb61d03f6d559d3910e3751844a425c9d2"},{"url":"/assets/anthropic-CTyLc6wY.js","bytes":657,"sha256":"db5464aded393084e37ca8b935bb37844018678323db104b2e7165101d350308"},{"url":"/assets/anthropic-messages-Dn28aUJf.js","bytes":2780,"sha256":"696f819be31376bd4d4f48616d35ff4249107a54ae4c84f3061e2c15542a764d"},{"url":"/assets/authored-source-compatibility-DwORNNHQ.js","bytes":2454,"sha256":"71ed7dc3249cf3a858468c1458bd730c446677a628859623adaab54e0594cc7e"},{"url":"/assets/authoring-DzBPTJSn.js","bytes":1728,"sha256":"89f1528650ec536f9bf33bf5a18ae7af1154d53edecc7bfe23350a6efa2f8088"},{"url":"/assets/confirm-action-nkqei7eU.js","bytes":67,"sha256":"852b1e68ac07d9c8cd3d44ecff5fa9f564213e27bd98ed6dcd9facd6dbe1cd6e"},{"url":"/assets/copy-name-B5o_keKA.js","bytes":6273,"sha256":"22ea238d3bf7d5f8e817d641f4bb9284f6ea9e43b6423eb9fa01917d7e4610e9"},{"url":"/assets/cost-calculation-Dp_zBPLi.js","bytes":843,"sha256":"4714aa5245e1ebb49283220230849d0b1bb6664cab30f23a35e0171c94f4b61e"},{"url":"/assets/costs-9E2b2hX0.js","bytes":1891,"sha256":"6ddc8fb515f034fe48b82a507818c414569628716ca35b09a28108fcefe51104"},{"url":"/assets/csp-reporter-DPn4z2Ay.js","bytes":2134,"sha256":"544e530d0192cfa92d77ab31f3abdd96635d73b0681d97fefe53982a93487807"},{"url":"/assets/curl-generator-B0QKXOam.js","bytes":827,"sha256":"accd2004f995f6b70fa294268f6bdfc68bf208f45aa0abf6af3a4acf642c5024"},{"url":"/assets/custom-providers-DaLZlYRe.js","bytes":3649,"sha256":"350e7bb070ad963f13d4d2229d9805dacba60bd86ab53698ed4ee93f1126c1c5"},{"url":"/assets/data-vendor-CKwrMZHi.js","bytes":499549,"sha256":"f895dd67a19c78f7cfa4069482c2f9bd4c754167dc8f9b15f11988e5358ee1ba"},{"url":"/assets/dataset-export.service-BZwTEiSw.js","bytes":2522,"sha256":"0d20b3c593a5c9879e09ccb2438673dc0169c483c4553d440e87b40ad7876425"},{"url":"/assets/dataset-from-trial-CZyndZgq.js","bytes":2520,"sha256":"10644cd482b06859e527ac74018ba390ab461ab698bb6afeff089b20b53091ee"},{"url":"/assets/dataset-operations-CTqCHBoW.js","bytes":2767,"sha256":"cf4ad2b8191feae559121e7940905bd7199b1bad194beecffa1b6dd7bab747e6"},{"url":"/assets/dataset-parquet-ChBhaJIB.js","bytes":478,"sha256":"fd1785fad967211828da36e31447775a413eb0ea3f67c2a7626dd5cb89a75f3c"},{"url":"/assets/dataset-persistence-CRucCB1i.js","bytes":1705,"sha256":"87747e7cd6c46f956e2023fa445b69644da65795972791ed8e7fd3c2c37b3365"},{"url":"/assets/dataset-summary-CBmJCSe3.js","bytes":503,"sha256":"f9925d9a3f7c2777e04a0003019fefc174990aedfb7a72c73a7504d4503aa275"},{"url":"/assets/deep-equal-bLv6XEjO.js","bytes":817,"sha256":"8131e299b9c54f7d76b7e4d17de7e20876eb1e895df199e79336ced3959a4a8e"},{"url":"/assets/derived-RWQYdIYF.js","bytes":214,"sha256":"c2e2b8b8d4877942e4b674977203b562e4277fa1d7f7a11e3867d0343b1a5e9e"},{"url":"/assets/deterministic-CswtmBLq.js","bytes":489,"sha256":"3d4c6ec1ede298b7c9312b5b0186f786cd9b024029f69e6c82245bce1fd665a5"},{"url":"/assets/deterministic-Dn3mS_T3.js","bytes":1156,"sha256":"436a69eebd0199980fbb975bbedb6f43b4c581963be11fe8282c37d4e4bfcd06"},{"url":"/assets/display-values-D3R-R7BQ.js","bytes":711,"sha256":"643237f7e342dc07a71fc5be487e6b16ae4c458e223b7819d0f0fd0fa6264b7e"},{"url":"/assets/draft-EEQDb7B5.js","bytes":5765,"sha256":"c1aeca94b05213fd4a8c83098e682519316c5cdceeab4dbf41b8912e366077f3"},{"url":"/assets/edit-source-QfrKEgrm.js","bytes":828,"sha256":"1d8c3e173341f5bf537d0dc4c4281f7eb7fffe2d4dfdece4d32a23bf0417f17d"},{"url":"/assets/environmental-7SaNww_r.js","bytes":450,"sha256":"84cebbbd936fd31a7709bd34d36c104471cd45b65f505a61ea2fc81f6e317457"},{"url":"/assets/environmental-BaXR2Z0P.js","bytes":436,"sha256":"7a0dba6027154614b9b82b0106c09008e8aab9df16a9303d4ed966486539ba9d"},{"url":"/assets/environmental-CST2cyag.js","bytes":1023,"sha256":"a3ec6c7399b1580323e2d069fa87bb4e0680d764315360a41ab89bf8f84627a0"},{"url":"/assets/environmental-CmakTgQN.js","bytes":445,"sha256":"25ec52ea28c751b0bed6ad8614000894004a05b307ee01d380f8f838ba2b8c2f"},{"url":"/assets/error-serialization-Bbw-acia.js","bytes":1060,"sha256":"56868c29216d2c5d68a6530f267bee215d301dbaea28a8818a7235338762e614"},{"url":"/assets/estimate-Dx-A7wb6.js","bytes":9330,"sha256":"b3ea8c5bcb90a89771c3b3bafcb0e23078bf0cb1ee2f3c58114bf231bd2bbb24"},{"url":"/assets/execution-DezAS2aw.js","bytes":7957,"sha256":"ca884a1f7e0145776559c0e1917462ab8d401c043dde2974cea0941edbc316ab"},{"url":"/assets/field-ids-DXrUeamA.js","bytes":428,"sha256":"59e9139888a1aa61122457ad9423f997e4528f2889175f6722ff9ba4540700c9"},{"url":"/assets/full-backup.service-pxcHswav.js","bytes":2086,"sha256":"0eb25ee6b903fc6dc69c269403a6563d1173b97a6153fc0c2304f6efdf039eee"},{"url":"/assets/full-restore.service-BcRxdFdg.js","bytes":23637,"sha256":"a760a9998353bc8f8fbc34758101f14c78e451cffee22bb150df209ebd25595e"},{"url":"/assets/huggingface-_GseyfpK.js","bytes":920,"sha256":"4e4e5260447653c3a9e60050d0b2037bac0ec9b44146953a5940d7864a7a610f"},{"url":"/assets/index-BYpS-M-6.css","bytes":693,"sha256":"25c630060aabc3dbb351816a92dd593f2aeb04e75b60c02d6bbbf3bac6c7c5a6"},{"url":"/assets/index-CDoU33Hn.css","bytes":56425,"sha256":"b15c0cb2c64f20725ff3efb3458d70eff01fbc4ced24f1ec74e0bcd553f68207"},{"url":"/assets/index-D0JjT-lB.js","bytes":101758,"sha256":"7a4e562f5f3c00bec3b3fd10e9b81a91a23ca78be4f51f8860cb597568f0c1bc"},{"url":"/assets/index-D7FmHGnm.js","bytes":123,"sha256":"ddc503a318b653117e1f161fe4a62fc29885370bf862b10104560e6e71e230e3"},{"url":"/assets/index-D7gDfhhG.js","bytes":721436,"sha256":"21b766856060752f2e6db5615ee96a08af97c6e1de177d51831fc2c3e4a36cf1"},{"url":"/assets/index-DdBvZ7Ok.js","bytes":23412,"sha256":"a8274e8752838efaa57471ed1473ae70065497eebca4d40be396dd10761695bc"},{"url":"/assets/index-Dh-2vaBP.js","bytes":2211,"sha256":"63494422f4114f94b6d1140b998c75e240709da949aaa046134a5c5b4199938c"},{"url":"/assets/index-Pi3egD3z.js","bytes":115554,"sha256":"708ac6ad22ed61304525572c826571808d4e3c3482cf249c1c2026f3179fe691"},{"url":"/assets/index-cvbUNgHb.js","bytes":1057,"sha256":"9381ee2d3b70ca6fd1c1db975c4bd3169725a1ab1d0aac6299a11aa45b797346"},{"url":"/assets/index.browser-BM-6uajh.js","bytes":2899,"sha256":"cc32d7baa3d6116d2858131f338da45ae3d698582a1176732020f7c0209dd76a"},{"url":"/assets/initialization-DHQG9rEQ.js","bytes":5641,"sha256":"334c4b3bed2265f0569809f0f146fa78c7aea5c9bb5476a210214094a3653d1d"},{"url":"/assets/interrupted-generation-BCxSwZCI.js","bytes":2790,"sha256":"5677c15a06e54f9106f2658ff972e193cface1cff5b4fe460109b98ae6266564"},{"url":"/assets/local-config-CMfgmO4C.js","bytes":1909,"sha256":"dfc12f379099b9cd22d6a0c6c956ab2b13b2c85426536097043ed38f633c6222"},{"url":"/assets/mistral-B6b8aYd5.js","bytes":1184,"sha256":"c06d7667932c41379c2d2ee1d200ff5e4327015d434fece0a601b58caa71070c"},{"url":"/assets/nebius-BPZtkA7u.js","bytes":1191,"sha256":"5a67443f1893fd324e805eb61cf1c805f8e9dcbff433d46d7bdb959effc80e41"},{"url":"/assets/ollama-XShvfcPA.js","bytes":607,"sha256":"82d3c92b73d3c700fdae6dbc5eac114a7727d18ecf2c50b859e0801a6ee8142a"},{"url":"/assets/ollama-chat-BcdN-dwV.js","bytes":3507,"sha256":"fc249038debbc498ea25930e62a9476cc533fa8ce05e9a96b1a8fcde8ee4b2c7"},{"url":"/assets/ollama-generate-BfG1ZiiW.js","bytes":3888,"sha256":"e3c6e0a12480787b21b25292c6fceeb508d571638cf9c5b6bee40a878150361a"},{"url":"/assets/openai-chat-Bh9rmqG-.js","bytes":2760,"sha256":"046a2e1aa8479c443dd684b8bfb18424b5593c091044eb135d1b5733e9642823"},{"url":"/assets/openai-hdutPmT6.js","bytes":1003,"sha256":"459c68a33396a816ea2f8adf085175e97e610d68711eb15024c3e28726e513a6"},{"url":"/assets/openai-responses-DlTacXH7.js","bytes":3881,"sha256":"cac1a006c43cd8770af2a1bb93dee22b15c9bec6ff91e941eec9dab25ec4de9d"},{"url":"/assets/openrouter-Dcp1z8a-.js","bytes":4442,"sha256":"505f0991c09aeedc279ea0346b96306325016c1f5d94461099452fd04146a0b4"},{"url":"/assets/openrouter-defaults-9rWrck2t.js","bytes":3123,"sha256":"0ac6e123bd4bf632084f348108e1c3dc5fe577ac433d12421920786b8ef9cf51"},{"url":"/assets/opfs-sync-writer.worker-Bguqhj4u.js","bytes":1000,"sha256":"cb82b29f9b4b2ae25e7631fb9c49555c35af855de53792c53a3b914bd24f3f72"},{"url":"/assets/paged-table-reader-Cui7blz8.js","bytes":393,"sha256":"62f2cdf5789d993451cd457d068c3bf4f0d0f5c0317df9cf7c31c3c80444ee6f"},{"url":"/assets/parameter-summary-D2U7t2Q2.js","bytes":10239,"sha256":"8924d23f60c50a581bbca1babcb81c31e7eecdb4a572233fa5d953907f8e95a0"},{"url":"/assets/prompt-compile-CfMdfNdX.js","bytes":2081,"sha256":"6a273b59e03851bef3da71c4cd8c6fe057c3017ab89251f21e24736571a9f9f6"},{"url":"/assets/provider-enablement-Co-c2GpP.js","bytes":709,"sha256":"93c2f9524db48721491143a1a22fc30812f3820ee2a2b69f6e0f8e97c92e4149"},{"url":"/assets/pyodide.worker-UXA_A12b.js","bytes":13711,"sha256":"f2a326dd774bf8455e6df381b9182dcc950e980451eb05ddf6280cbe3fd80b53"},{"url":"/assets/render-CiSvrTFj.js","bytes":852,"sha256":"8b528ec8089a8b5b21533410b05cd15bf1ee319daa1e734d0019f9f6bd099f40"},{"url":"/assets/repository-BCT3ZKrf.js","bytes":2359,"sha256":"d192426a4682941c2d6dbbbd1b01359a3e146d9bc5ce64d803926fd835514c1e"},{"url":"/assets/repository-BQvNaKc3.js","bytes":1158,"sha256":"c086d8e4528623873674262c1714f95a7d38c10725d54981cbee0a022a79e7a0"},{"url":"/assets/response-evidence-codec-A16T47l7.js","bytes":8918,"sha256":"013e7b8300cc3c59d871dab9d9cae4f21666676810e75a81c89d55eb19941e17"},{"url":"/assets/response-features-Q4DlOVdq.js","bytes":460,"sha256":"383359708bf71ed484eafe3c5ca0d5963ff9cab798765cb928246133a363df98"},{"url":"/assets/row-filters-DVNsrKUs.js","bytes":405,"sha256":"f0e85d49e328197830832f0f7a9dc7fb635806600dd0b7ba13099f10830e322f"},{"url":"/assets/save-file-DTe6gLVO.js","bytes":945,"sha256":"108fc273e171229db7ce9ddfac82ab5bea966410f3cc9595e55f8ba5cb7a1b4a"},{"url":"/assets/shipped-order-BpB79QT1.js","bytes":443358,"sha256":"53565b01c05ecd08143aa7e8fde5ead11d146b7d91cce2c2dd26924cc4614fbb"},{"url":"/assets/sql-wasm-C1U8OeUW.wasm","bytes":659806,"sha256":"0734155c83e493983d1f2ff5b09a4fab6e35a32e9449c7e4e545756439f62d73"},{"url":"/assets/tabular-export-CE2U9VB8.js","bytes":83389,"sha256":"060da10c1f4f04c66e65e0af20856808cb8d5059c5ce4ca1776f420e591e3132"},{"url":"/assets/tauri-download-utilities-BUW9vosN.js","bytes":3348,"sha256":"1d9abce67793404cdb16a969d44721737fe385c6da5e123ba6be8286110c7e57"},{"url":"/assets/tauri-vendor-CMy7hGlg.js","bytes":15658,"sha256":"9ebe68e8be861f560e21260b837a577d98b8aa1f5264c888dbe2a752bb50f465"},{"url":"/assets/template-variables-T4-5MHs4.js","bytes":606,"sha256":"68f9ea82c6690f7fc29d9afe477699b20b8c3beb41cbec218142d74010fc65e4"},{"url":"/assets/timestamps-CGloZApi.js","bytes":197,"sha256":"b533d4d3fc966288182131a26af89af92eb2d35d47a05398552276d9d7ff22ea"},{"url":"/assets/token-calculator-B7ZtXj40.js","bytes":5438,"sha256":"58936c0a3c8c7b0dd3193a93571fdde0449084d46b7daf266369983d98480a18"},{"url":"/assets/token-counting.worker-DzyAsXBu.js","bytes":2037530,"sha256":"6f6af764f67e6a05da52ded39892cfb7c1e032796f3949ab955a002deacaa33c"},{"url":"/assets/trial-bundle.service-Cs8hclZo.js","bytes":23721,"sha256":"965813a61921d2c295a517f649a2ae1c965422d2c98757acfc84c06bab779af3"},{"url":"/assets/trial-execution-lease-D5Vt6NZF.js","bytes":699,"sha256":"baf314aa824f7bdb4f7fb11a4c10b1edfb487b3cab13bb5cf1744d7136795e46"},{"url":"/assets/trials-ROWQiJdG.js","bytes":17540,"sha256":"ade9211b16ada0a5bda58d7bd61d5323f21294a270acef673615ebb4d28778c5"},{"url":"/assets/ui-vendor-CrSZg1BI.js","bytes":986409,"sha256":"13a7078e9083ffec0c3232cacfef93fb10143e79d1a7e6a0f060daa45127d049"},{"url":"/assets/useCostEstimation-DuwSS0oN.js","bytes":512,"sha256":"c303ad147332c6fa6e11e427e15c5136c3894fee42382d77675e26b55a626934"},{"url":"/assets/useCrossTab-CBbY5wKq.js","bytes":671,"sha256":"657973af6769d66de90e213a0273980fbdb2e8e7f26959719cddd7eb1b0ca960"},{"url":"/assets/useHeatmapStyling-x_ojOLYL.js","bytes":5254,"sha256":"5e1022ffea9a7665429ed8e97609a4af17528ff7eaff30591bd91ebb5b72b4ef"},{"url":"/assets/useLiveQuery-BUmWHmiT.js","bytes":728,"sha256":"4988cbf4501628cb7d6c94561036b8fabadee302a86e55e2be5f182856803433"},{"url":"/assets/useModels-BS4efzt5.js","bytes":2559,"sha256":"2fc62b1c4cd51200a2b0b656045179f1b7bd50e29e2547c0e6386354361bd785"},{"url":"/assets/usePlaygroundDraft-BDlQsw0q.js","bytes":8407,"sha256":"94f654bd138d8319f7939aa68dadf72f2872e6e9ffa13aa9f7e8396a5ff0859b"},{"url":"/assets/usePlaygroundDraft-DNdxMM09.css","bytes":6660,"sha256":"86914b4ab00a7f6986a092c92707e824277dc1d6ade3dd125755be26b2fefae0"},{"url":"/assets/useSpreadsheetPrompts-C71M25Ln.js","bytes":3325,"sha256":"adb255dbb122620525c61fdb71087fa42bfb2017f349dabbf21db2f805a73cc3"},{"url":"/assets/useTemplateCommands-CwoFq5R1.js","bytes":23860,"sha256":"d8bab9c46558ab52bcef9c7a04297f608c9ad835dff3b40856434c8087c7b9e6"},{"url":"/assets/useTemplates-geb8jxCm.js","bytes":3574,"sha256":"c5e629f73225a8118219256bbb19f3a1dc7daa1ce9b8469d42dac80bdbc49ae4"},{"url":"/assets/useThrottled-C_9kGPmj.js","bytes":244,"sha256":"19a0c673e2659dac7420c8dbd327321429e73cdf4c662bd89ee05dba49a2c668"},{"url":"/assets/useTokenCount-CCZXt_Nx.js","bytes":3154,"sha256":"b23e153bb9bc6e60e21d431540b3eee6d1ec0868e521a8260fd36d90d42fd23b"},{"url":"/assets/useVariableListCommands-C0eZC2f0.js","bytes":13399,"sha256":"00107493fbf44660cca72100e7c1cee5360c8b1a1e059f2eb01e6c0f9687fa24"},{"url":"/assets/useVariableLists-CYQvsAYV.js","bytes":1972,"sha256":"623d3a9a095071d75d186a30a1dcb1c43e4921644bcd1cad3002369e195fef5e"},{"url":"/assets/utils-vendor-BrPWOOXP.js","bytes":42345,"sha256":"be39be2e39997163f0def5481785834364732c1615dc6466fae7bbc5deda3b8f"},{"url":"/assets/vue-vendor-DyGN_9cH.js","bytes":113022,"sha256":"149a3cb79c31c3fbf15e279f9a5e1878444887cd1629a122fc550b61b4aac1df"},{"url":"/assets/vue-virtual-scroller-BCw0uU-l.css","bytes":1220,"sha256":"4d71315fd8c42dc3e7d0ba1e8cb831ad725c22c34cb76c8ff8dbce87d628abb4"},{"url":"/assets/vue-virtual-scroller-fivZdvoE.js","bytes":16632,"sha256":"58c02913425c3feb33b7979fe6136d9ecca4a10597e5f2dfbcf7ab500f5584c1"},{"url":"/assets/webview-DLxETPQz.js","bytes":16145,"sha256":"a788c706ef4188302f0f92345dc779a1b1b49c92fccec376391d594fcb3fb236"},{"url":"/assets/wizard-flow-CBFg4T_4.js","bytes":3031,"sha256":"3e9403bd7cb6d5d475ae9a9f25e014d8b2bafeff43d86a8dfb9a8d56adca373c"},{"url":"/favicon-128x128.png","bytes":3706,"sha256":"bbbdeeb9b6966ec47cd61ff198fb0def1ea34d9a785aa8be877d0489fb319167"},{"url":"/favicon-32x32.png","bytes":1081,"sha256":"3c49bb0a85918d8c69f13a724c35395e0f28cbcf67f445ae38b50a3c71d07af2"},{"url":"/favicon.ico","bytes":16672,"sha256":"57222d5e378250fd4cfe1d63ea90269c2f1dfe6c1411998482868782d71a7708"},{"url":"/favicon.png","bytes":14488,"sha256":"98a188b69c38bb92f851f6acc230625f3872f75e4e2a1dbb6291bd40ff1f99b1"},{"url":"/favicon.svg","bytes":684,"sha256":"a9b3b819d4e9b63857d2303ec278c84afbd7957ee517160fad880f6de3206b7e"},{"url":"/icon-192.png","bytes":15066,"sha256":"a5ea9af435092fef44e73b3ccd9c406837e6761f52a7baaeeb61a70ba93d9735"},{"url":"/icon-256x256.png","bytes":19034,"sha256":"74472788a02991156831720912580413451f2d3dde2a3104b330d1dc7dc46fb8"},{"url":"/icon-512.png","bytes":16100,"sha256":"5f69f2d26d0c8945116ce3e93408eef4bec8014ed4e896aaa865df0dea14cc50"},{"url":"/index.html","bytes":1929,"sha256":"74145db1647a95305aa174fd72b1bfb80b111a5ba7f981e922385e979e4ea539"},{"url":"/manifest.json","bytes":1260,"sha256":"cf09d81ea03708d3f882f794c0eae4529378c6bda164a18006459102dc21f53a"},{"url":"/maskable-192.png","bytes":12217,"sha256":"f5a4eb0f2e68330466fb36aec9757a73e43ddd9a71cc1613af7c874ca423a339"},{"url":"/maskable-512.png","bytes":36502,"sha256":"fe2e9671e8283eeb07138502e2173a27dc10973119743b6bebed5069ae90742d"}]
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
