/* Auditomatic production Service Worker.
 *
 * The production build replaces the placeholders below with a complete,
 * hashed inventory. Source/dev builds deliberately contain empty inventories;
 * they must never claim production offline readiness.
 */

const BUILD_ID = "425347d89f7ee7b402e79acf35b251d6a7339c39"
const RELEASE_ID = "425347d89f7ee7b402e79acf35b251d6a7339c39-217d473e2cee90d6"
const VENDOR_ID = "d4588e7735b9430116ed6e5d5356da14ba7cd9a9b7797b4005652bf29728d3cb"
const APP_ASSETS = [{"url":"/assets/AddCustomProviderModal-Bq0XlR6o.css","bytes":947,"sha256":"04a5e3a680f4e6e392d57451dd162554131ce637b727a4146c53560324e0da62"},{"url":"/assets/AddCustomProviderModal-C0j1gHLB.js","bytes":15926,"sha256":"20290fcf929297cc842eeaf399d1e83dbc8bff92e1085e20e2eaf70b2803af7d"},{"url":"/assets/BuildJudgeDatasetView-4k9__hRK.js","bytes":6951,"sha256":"b891f66945287a8f800fc59cc587a6e89e3ea2aeda4edf4def540e123002dba6"},{"url":"/assets/BuildJudgeDatasetView-NPOkuEAR.css","bytes":3353,"sha256":"6157af36c2993c0b72ea2cd4685f2ab96688ab99d7cc0ab5b4903e2d3eeedc96"},{"url":"/assets/CodeEditor-BHxbzYl4.js","bytes":897,"sha256":"6b3163e12d0d793121a534df3a9e0e034d44e23ad135c2dc8c55b801c32e5888"},{"url":"/assets/CodeEditor-CfrosA3M.css","bytes":415,"sha256":"4b46da79967f08d54b6e6aaabbb3417681acd40e882a140511bafa256c9b0046"},{"url":"/assets/ColumnFilterPanel-CcHHPSGn.js","bytes":24094,"sha256":"4a2bfb36c7f6bd9cecbec3a7fe17f03dddd27f612502a1527462d44b6052db9a"},{"url":"/assets/ColumnFilterPanel-D-uNO3-O.css","bytes":2280,"sha256":"608718efe88864cc91eb2850c886dc9eaa1bb4d9c2fc4bc29315ee2c7d88149b"},{"url":"/assets/DatasetPreview-BAdrpiN1.css","bytes":6379,"sha256":"c96d29440dd9be5a58a3a2c95c38c7cfc3972676e55855f656832fae244bc426"},{"url":"/assets/DatasetPreview-Boq5FCud.js","bytes":171183,"sha256":"f5b45ee68abefce4d1fffbb9a4623643ed6ab03bcf8ed97d896431049e64012f"},{"url":"/assets/DatasetsView-B3QSkzjk.css","bytes":2215,"sha256":"f59eb980effa3548aa7f1248fe0db0f10cb3d1f48e42bd0fbba8c3687bbc05b1"},{"url":"/assets/DatasetsView-CJUtZM3F.js","bytes":9276,"sha256":"2cf76859d54df621575d3f63a29e349209bf8491d4fe262bab6ff26d6bd395c1"},{"url":"/assets/ExecutionValuesFields-1_Dp5kfs.css","bytes":98,"sha256":"4d6d3445a8f58590115155cff370707332e72f366945ffeee2604437ef04fd78"},{"url":"/assets/ExecutionValuesFields-D02zv1sy.js","bytes":3752,"sha256":"bb2e6a6b773bc7e83b5bd33d6cfac3e845a7bdf4c817bd731d84fe938e444044"},{"url":"/assets/ExportDataModal-Cnw2-98M.js","bytes":37217,"sha256":"821ef929f3e4136a334cad236ff4f247b9368713b82db2f46046e1484b20622a"},{"url":"/assets/ExportDataModal-Ee-aAGef.css","bytes":4598,"sha256":"321c52576a915001a609bedff4a27f90a724f13a8854fe7a09c01038eac9705b"},{"url":"/assets/GenericModelSelectorModal-DQMuYjkh.js","bytes":41565,"sha256":"7e24cc506e03a372cbfe14edb8d983aaf15d22a3128481c7cbe891b6f2eb3a6f"},{"url":"/assets/GenericModelSelectorModal-DbhVJhI0.css","bytes":14625,"sha256":"646e4104d5b376ce430e35adb0c38c2f2261f0d5362d0bb89aac9dce5734b382"},{"url":"/assets/HomeView-BZ25dcbZ.js","bytes":9736,"sha256":"c5e96ea31bfdb3e546f42c38dad94bb66596570d92df3378cf57c82ee9fb5ae5"},{"url":"/assets/HomeView-DUdCTR28.css","bytes":4565,"sha256":"c11daa93f24adff508b437aa11e2e7ab13dd84d6cc6043c731a9e9014076e9cc"},{"url":"/assets/HydratedPromptPreview-BMrarkDJ.js","bytes":11216,"sha256":"121015d1eec8360ad23cdd93486f8f98f98fb7d3bece1e75bd695b4a0eb949b5"},{"url":"/assets/HydratedPromptPreview-dIGoYJXr.css","bytes":8011,"sha256":"0d796a1ab0c3ab796a0473ab359ba372ab40fd2fabd424799d5e2b102ec74a52"},{"url":"/assets/ModelConfiguration-CJIKkSgp.css","bytes":4448,"sha256":"2bee4669fb5dc0b215aa9fa7ce977a96cce5783137431a27d10058d9cee75b7e"},{"url":"/assets/ModelConfiguration-DW4xM2aN.js","bytes":16826,"sha256":"91fe70973665e943bf20bb8b408813e68cbc291eec79cdd8158d65b1304bbbd9"},{"url":"/assets/ModelContractInspectorModal-CZHkSo4z.js","bytes":7534,"sha256":"08bd11d6dd91e2e162d46b6897222496c0a5e1c8738afa00393d87edc6f984d4"},{"url":"/assets/ModelContractInspectorModal-dhTnqUJ_.css","bytes":1859,"sha256":"1775e2dff0359ca0d443e4acd9f70c1334bd67c3686efba3ae8070d128e24b81"},{"url":"/assets/ModelsView-Bb2casJz.css","bytes":11303,"sha256":"1be5be8cf17a1b92634ae13218ad631ced4a8f61061f820b32238bb83cbc5767"},{"url":"/assets/ModelsView-Dca01WIC.js","bytes":44341,"sha256":"b1aba4bcc41181ca57e12a6ec57c9188fec3d5bd573a6526df5c475dfd628b72"},{"url":"/assets/OllamaModelManager-CKgcwFz4.css","bytes":15299,"sha256":"37d3c9f9cae62ba29707606da74037ab039d43729c13e3f19f5cf4314fe78dff"},{"url":"/assets/OllamaModelManager-tae2MxRO.js","bytes":27921,"sha256":"0cf7a21f5869acdd2d8bc57d2335c89ca9b24e14e7e1befa3fbd852140465a1c"},{"url":"/assets/ParserEditor-Bi8iYd2V.js","bytes":20480,"sha256":"ef19ab77c59c37e3e7888afe901bcca2bd2829e3589c2b8802584760d1468516"},{"url":"/assets/ParserEditor-D5hTBSvn.css","bytes":5015,"sha256":"3de26d1b4d78840e8fb11fefb362c0e5140e62a73065f5658f5e5391cd92cce1"},{"url":"/assets/ParserSelector-CVcAS45_.js","bytes":10552,"sha256":"92ba2f95c617651015bf1b1b7f1ec2165dd20d375d78dd65ed37d10bb6fa2b00"},{"url":"/assets/ParserSelector-CqcA0oTw.css","bytes":6552,"sha256":"c53c809709ee79876333734fb9fdff5d13f21df026af62feae7868d7dfe72252"},{"url":"/assets/ParserTestSectionCompact-Cfwewf9V.css","bytes":2788,"sha256":"fddea098654eab6591656143ac11bf813193e35ccf1e06b843bdac65c3717c29"},{"url":"/assets/ParserTestSectionCompact-gHrebcgC.js","bytes":11300,"sha256":"63c9e57637b17709d67b2a03f44b0d029f156912ec13709e73817450f619c9a4"},{"url":"/assets/ParserTesterModal-DVfa-M7N.css","bytes":882,"sha256":"a45f185deed1a36003ea56ed806accfb7ef17b806369b809975ae32038486b7a"},{"url":"/assets/ParserTesterModal-DtKheDg9.js","bytes":1954,"sha256":"f9c5dc52854b4acc0a6a1a207c9d3a9d3885ea8b3bf5eb7b3ad6be7cd884483c"},{"url":"/assets/PlaygroundChatHistoryView-BLuvdEGk.css","bytes":560,"sha256":"9df5233967cf097ef6ea4b517e696803fab1c3d5bcbdeae2332c444a09029978"},{"url":"/assets/PlaygroundChatHistoryView-t_vk4VxG.js","bytes":3538,"sha256":"d293eeb3197ea9d337290c7b41b7f19dad70f788b05dee70666fdcfe21f2b010"},{"url":"/assets/PlaygroundChatView-DIcc9QVO.js","bytes":152655,"sha256":"f4caf6d8090d7290035d3c33b1bce6ef55eb3ec8753f622d9bc71ec87a2dcb94"},{"url":"/assets/PlaygroundChatView-DfyK1u7e.css","bytes":9860,"sha256":"871ce2b790c471854567a4afe8f36968ab8f4d22a6f11ffcd72a04a28de6772d"},{"url":"/assets/PlaygroundHistoryView-sFw2Jywk.css","bytes":6582,"sha256":"ca4a5d377ab90aedee24cbcb958b173fcf34acb8fa446439111ec22656ded124"},{"url":"/assets/PlaygroundHistoryView-tCAjnyVh.js","bytes":24654,"sha256":"0df5489e27a3d63cd26e24ab0e02b523189aa47f1be722b3f62ee02ec4c9d5da"},{"url":"/assets/PlaygroundMultiView-C8yRF4bK.css","bytes":5063,"sha256":"a3b0268afbc86baf128cd044fd1f89a8480f9b30e4c630ac927f03e020b345b6"},{"url":"/assets/PlaygroundMultiView-KouhxpZS.js","bytes":21839,"sha256":"f7cd26a9ad6c170843880b5dfe2dafa37a6037dc18d79467f4561e8c31adca09"},{"url":"/assets/PlaygroundStructuredOutputEditor-CGE2VrSQ.css","bytes":373,"sha256":"4410551cb6e947228cd496fcac7fecc75b2b8bf5f8e96cffcafccce5ff788cdb"},{"url":"/assets/PlaygroundStructuredOutputEditor-OT5yLkFW.js","bytes":4305,"sha256":"b719e1ed0c1272f40f02ae484287b2ea6a393e8ec13a4dc3c30090511fdd159e"},{"url":"/assets/PlaygroundView-DafBQ9Lb.css","bytes":16361,"sha256":"1257ff2fced0172b78eac48f8ce7252882fae3bea74bcf0db0786e3cf353fa43"},{"url":"/assets/PlaygroundView-KyX-aBuz.js","bytes":34718,"sha256":"da6dc6199c5d1cadcbe923bc1334110e8b554d6440eab6f66b0e6d7fb45d7403"},{"url":"/assets/PromptAuthoringStack-BXr1vaXB.js","bytes":14030,"sha256":"8af9a254e5bd1bf0c7d08bc3585152eed6964be63a3f55c0a65139fa6e0d83f7"},{"url":"/assets/PromptAuthoringStack-DrMF4RE4.css","bytes":11592,"sha256":"6c8cb398ff243719c105e8cb7755124b5903f3ddd32ba43604e77ea9d2ff462b"},{"url":"/assets/ResponseFormatEditor-Bj6NClVp.js","bytes":11946,"sha256":"c1e7e3ac2ec059b781d21d7a31128cc6bc41ab45df6bec35faa64294c34dff52"},{"url":"/assets/ResponseFormatEditor-Cg5ka3FN.css","bytes":8548,"sha256":"af39f40cc626867cd620adafb44e888ea3fb1bca196741b4a85670da67ecce52"},{"url":"/assets/SettingsView-ByYd7UT-.css","bytes":25862,"sha256":"bbf8fd08a9cfbfe7d5f80e9ebd787dfa0ae62e7215b91ff0b94101d4d29bcb86"},{"url":"/assets/SettingsView-Do9RUkEv.js","bytes":72979,"sha256":"c9abbfa5cf4c4c2a0684edc1f531560a5b55b6f51a160097ce9b6a5aeb820344"},{"url":"/assets/SetupView-Br1TUbIL.js","bytes":4978,"sha256":"cdb32955a338033abe9a6db6b014be96900ac1fca097dd6bfffbff43751d4633"},{"url":"/assets/SetupView-DBHR_dAP.css","bytes":4029,"sha256":"fb93b00d5b89cb0502cc555538acf272cb15f0750b473b67db197e5082ab5ffe"},{"url":"/assets/SpreadsheetEditor-C47lzlor.js","bytes":76339,"sha256":"67d00773d92b74f61dfe8eaff693849c206fc727cced36af2b071c615bb83c9e"},{"url":"/assets/SpreadsheetEditor-CEUiC-Fj.css","bytes":33683,"sha256":"95b880dd09d81d77c21c6ee403680d2874409f621761de89d1e807ffa4a1cebc"},{"url":"/assets/SpreadsheetsView-B181-_ew.js","bytes":25178,"sha256":"2d854cf4840f443544044bbe2225d16632dd4b9f93a77842bd0e47aab39c0e50"},{"url":"/assets/SpreadsheetsView-mvN8rg5L.css","bytes":5131,"sha256":"29be8b6318c7c99eeff6b3a1dc46f4e5ee485ba1fda6d119c31065e854c0c2ff"},{"url":"/assets/StorageModeChoice-CrnUYypo.js","bytes":9090,"sha256":"99d8755680f30044fe0ef192f49abb1eb0b2fd7c31987f55ab17f9dad6f31274"},{"url":"/assets/StorageModeChoice-Dz9CR1XW.css","bytes":2409,"sha256":"7115c0a9edaa3616be71459be51ae0273809078f8bf9311aad688697ed95c69b"},{"url":"/assets/TemplateEditor-C7F6ZSUF.css","bytes":17866,"sha256":"b3c6fdff917684e33b567d299301a7ce079953597fe6908b27b2e04588613436"},{"url":"/assets/TemplateEditor-CQXFtQUz.js","bytes":239613,"sha256":"54d6441c57af5df9e02453ebe3e6e5d961dcdc7314034668c5bb7933cbe7e2c1"},{"url":"/assets/TemplatesView-C30FKea0.js","bytes":17276,"sha256":"7197775c3c9812457dd20de1045d0978dbef5dad68590fbed22ce54298ee9f4a"},{"url":"/assets/TemplatesView-s4HEwBEl.css","bytes":4392,"sha256":"c0365ace2c59e68cf36f6071e996a55dfd56bea5f041ff40ee24a7d9702fa5ea"},{"url":"/assets/TrialCreation-Cj1JnmAz.css","bytes":8792,"sha256":"841b8e37ea4c1d2b143a8a6e1723dbd11a05d2f2506418d09d9251da5a12c842"},{"url":"/assets/TrialCreation-CwgQKhmF.js","bytes":37638,"sha256":"124c53dcfabf15cc486b4a0552a73cc11582e9ca025c6809a65cda195df89f78"},{"url":"/assets/TrialsView-COnqgfa1.css","bytes":94375,"sha256":"08fc2fadea89e7c6d94a3812e9a8ad337eb1f212021e05d026f19a7b56800b5f"},{"url":"/assets/TrialsView-DKY0Pp1e.js","bytes":256871,"sha256":"dea2bf9bb2e4a56258c14ef5e37f432d4a38408f58690b190975716882c2a59e"},{"url":"/assets/VariableListEditor-CtiFmCZM.css","bytes":19010,"sha256":"56fff124038f88ef1caff5da5680c2bb39b4308fefa3bc62caf67984972991d5"},{"url":"/assets/VariableListEditor-D90aHcDP.js","bytes":32746,"sha256":"384e3fade664b66edb19c14da656c433fb881e9c090f644d7419c3ef60c6d06f"},{"url":"/assets/VariableListsView-B1XIGzAD.js","bytes":13163,"sha256":"4022504200588650dfe8cfa28c6cbc98d6cb04ec9d0f24409b5f70aa10821689"},{"url":"/assets/VariableListsView-COAjRrPV.css","bytes":5544,"sha256":"0d9b1ddfe3289d2998d97d6ecf68bf3d1d9d264b49067270ece8acd625007a21"},{"url":"/assets/WizardComplete-BJ3ph79k.js","bytes":3264,"sha256":"2e350cdf08ab4fdee2cbc5f2aa55b8e5869b569afeeeef1eadb0f3eb03c2940e"},{"url":"/assets/WizardComplete-Bre5h3Mr.css","bytes":3460,"sha256":"79aae02a1829a1e1b3f9214c9567f64ef0a63f6a265897905d007ef7dfb52402"},{"url":"/assets/WizardLocalFirst-C_WrUZcd.css","bytes":2524,"sha256":"97a1f40fe1c3ffdf0b5179f7dd2fcbbc165a3c84fc5e80aceb4b7178fc68e1d1"},{"url":"/assets/WizardLocalFirst-D2q3NFC-.js","bytes":6080,"sha256":"77168d8f37163b671062e8f9bb64156f3f3845e32ee92c1b7f5a3006aa7cf408"},{"url":"/assets/WizardProviderConfig-C_8b_KHN.css","bytes":8329,"sha256":"eafbbf84cf2abe3fe7ddc062af15700a492d1826739ed9a4e8fb9627d642b693"},{"url":"/assets/WizardProviderConfig-JwnltlK1.js","bytes":22813,"sha256":"330cd6a8dbc643e0b6bc184c901acee792d19baed4a20c17c8041fe024b0e569"},{"url":"/assets/WizardProviderSelection-CXRsSZGN.js","bytes":8832,"sha256":"e2ce564830be8c1817fd19ce52d4b9c5de09a4da3227b3c4b82d649b7579c646"},{"url":"/assets/WizardProviderSelection-DDsLYfdL.css","bytes":4169,"sha256":"0f21f756f5b1d651cbc1db2cde75334cfdf8caf1d8f3fee5a6e9d0dcfbcdc998"},{"url":"/assets/WizardSecurity-Bj2vF4hE.js","bytes":1146,"sha256":"58fa8cd35a2a9a5dc04d73fc56bac73fcc1638425d4b428945a9852dfce65940"},{"url":"/assets/WizardSecurity-pnC3WyVE.css","bytes":207,"sha256":"66a0060bc318c6d65e714ebc51229f4382f4978830b3ca4d58048ac288eae387"},{"url":"/assets/WizardStorageGate-4hapDw2n.css","bytes":6739,"sha256":"a9346b3ee1b49a67573c975764f178c7d6c1f70e7e350521c223b67aed5d52b8"},{"url":"/assets/WizardStorageGate-DV3G8PDC.js","bytes":9176,"sha256":"c2449cd1446182a233e676a169021dcaa5f36300fb54cd6af9c9b1cacb343cfc"},{"url":"/assets/WizardTelemetry-BUJAAUBH.js","bytes":2474,"sha256":"2eebee065581a402d548da93b3e30d83a690c255e6f6d255b31c27d3b1900ea3"},{"url":"/assets/WizardTelemetry-DS8qeCDs.css","bytes":2085,"sha256":"0fefc1f05a5b9276b771eeef0ab359cd5a8c77ad1c98c446412b9fc255ef773f"},{"url":"/assets/WizardWelcome-DNlzQekw.css","bytes":4930,"sha256":"46d1d6a469d9cce48d42b4a55a9802bb61d03f6d559d3910e3751844a425c9d2"},{"url":"/assets/WizardWelcome-DPVK8M7m.js","bytes":6470,"sha256":"3aa483687ac9826f8466bef6237c9a2b18682fe61ffe121c58360f54efb607be"},{"url":"/assets/anthropic-DwDfvvRw.js","bytes":1085,"sha256":"23f32612553dc2dd66b468cef60054cd4e445cdbde8f533e1f63a44fb7179f18"},{"url":"/assets/anthropic-messages-CtUmF7Wc.js","bytes":1101,"sha256":"a397876ba5dcdbf3f0f9109e0734cd4c61d1a4fef9730cb53d53d3588971ac44"},{"url":"/assets/anthropic-messages-CwT4331Z.js","bytes":2901,"sha256":"271842003863aae57c30e4ca4ae4938bce88c78dfb2a60a7312dcf42cae76bfd"},{"url":"/assets/authored-source-compatibility-CI11CgYl.js","bytes":2454,"sha256":"48f710a1b100647bcb9c8f773b99098b3703128be46c72e7d6a430249f70471f"},{"url":"/assets/binding-values-YFq0DcF-.js","bytes":784,"sha256":"b3bc267b137be404f9d69dd96625af142638919fcab93f41009cb875a3450719"},{"url":"/assets/confirm-action-nkqei7eU.js","bytes":67,"sha256":"852b1e68ac07d9c8cd3d44ecff5fa9f564213e27bd98ed6dcd9facd6dbe1cd6e"},{"url":"/assets/context-CZFbMA04.js","bytes":2447,"sha256":"7c41bca249c8473bba22c2b77cd5a31ba3fd90e3cb6ddc8832aea99fc04d898e"},{"url":"/assets/copy-name-DfI9q3gs.js","bytes":401,"sha256":"89296689234c6ee3ef5d1c45574783e7e270b95ed1e26891bd60dd3e36740ae7"},{"url":"/assets/csp-reporter-Db-gQF9V.js","bytes":2134,"sha256":"47a6e4bda22f6a3b79dcabecdf72072f915229f0dce8c3dbab6e4488d2150bc6"},{"url":"/assets/custom-providers-CVt2pMhE.js","bytes":3500,"sha256":"7d4a9c42c33eceab6f2d649e40dca8ac089f4ee2c9dad40720f1ce128b08ce5d"},{"url":"/assets/data-vendor-CKwrMZHi.js","bytes":499549,"sha256":"f895dd67a19c78f7cfa4069482c2f9bd4c754167dc8f9b15f11988e5358ee1ba"},{"url":"/assets/dataset-export.service-Bb3Gp4wX.js","bytes":2557,"sha256":"4b676527457c8997ade07b9627bf0abe52454d7820f95d724f05dad8a27cff8f"},{"url":"/assets/dataset-from-trial-DQa_xjJE.js","bytes":2525,"sha256":"1e717b89e34e8a32bad0940041f0923276a56ba91ec8d458da71d23075167e74"},{"url":"/assets/dataset-jsonl-Cu7tFX5y.js","bytes":203,"sha256":"8041253f9c54271c8ae4da9a02eb8f8806baf4ce39a9cbefc88862a140e5f2e1"},{"url":"/assets/dataset-operations-DeC0NCnT.js","bytes":2761,"sha256":"19036cc4d52221ab39e600e43315394905cd7409e88ceb62ebccc168d38c5e3e"},{"url":"/assets/dataset-persistence-AOjL3MUH.js","bytes":1705,"sha256":"e5aa60dd4ed77cd47c51fca18d46e6d96241b0ad62f5eac4f3d0eb80f9e684bb"},{"url":"/assets/dataset-summary-CBmJCSe3.js","bytes":503,"sha256":"f9925d9a3f7c2777e04a0003019fefc174990aedfb7a72c73a7504d4503aa275"},{"url":"/assets/deep-equal-CNzIbD56.js","bytes":919,"sha256":"78ca653aa47ceef0e6aa872110f77bbe44360d0959364fe287e5042076aeba25"},{"url":"/assets/default-data-DaS0KfHG.js","bytes":2660,"sha256":"a754ffd84c1769f1cea8f624b0808dd5356acdba5ee4f4d7ee1108bc9ade65a3"},{"url":"/assets/defaultDataV2-q0I9BCaK.js","bytes":456971,"sha256":"6e78380fa288853dbbb0fbd1932ee9a3b7871854fcd068eb964bf675948951d3"},{"url":"/assets/desktop-downloads-DZuuUAzn.js","bytes":173,"sha256":"285b8a6f2a1cdd3c529f487c5c72418c1be1a14d7dbbbb15e6b4c9ca922f0860"},{"url":"/assets/deterministic-BziCvN9l.js","bytes":563,"sha256":"86c31f0a70ac7fa582c6b8de467565f1e9d9909e2bfe2468c5fd6ed0c640ff3d"},{"url":"/assets/deterministic-Dn3mS_T3.js","bytes":1156,"sha256":"436a69eebd0199980fbb975bbedb6f43b4c581963be11fe8282c37d4e4bfcd06"},{"url":"/assets/display-values-B4_HXKBV.js","bytes":1143,"sha256":"37bcd1640a4a24993feb5535d0810ea9d4a331091c0e6764777c74094324ba7f"},{"url":"/assets/draft-BLqpQ61i.js","bytes":5904,"sha256":"bc03c5c5dc8cdca3cba8b43b7e1eeb0895d045cee494b97f8ddfa4a4b5aa9fb4"},{"url":"/assets/edit-source-BZWE5hn7.js","bytes":933,"sha256":"bc108b96bc5317f390c8fb7a69cde8fd770f2b60d89b98bf83f97537220044d6"},{"url":"/assets/environmental-7SaNww_r.js","bytes":450,"sha256":"84cebbbd936fd31a7709bd34d36c104471cd45b65f505a61ea2fc81f6e317457"},{"url":"/assets/environmental-BaXR2Z0P.js","bytes":436,"sha256":"7a0dba6027154614b9b82b0106c09008e8aab9df16a9303d4ed966486539ba9d"},{"url":"/assets/environmental-CST2cyag.js","bytes":1023,"sha256":"a3ec6c7399b1580323e2d069fa87bb4e0680d764315360a41ab89bf8f84627a0"},{"url":"/assets/environmental-CmakTgQN.js","bytes":445,"sha256":"25ec52ea28c751b0bed6ad8614000894004a05b307ee01d380f8f838ba2b8c2f"},{"url":"/assets/error-serialization-Bbw-acia.js","bytes":1060,"sha256":"56868c29216d2c5d68a6530f267bee215d301dbaea28a8818a7235338762e614"},{"url":"/assets/execution-9W29U34W.js","bytes":7322,"sha256":"bb0e5b8ba90867ce5a14c53dc8819eee0295e1031113027baa73ec41254a96bf"},{"url":"/assets/field-ids-DXrUeamA.js","bytes":428,"sha256":"59e9139888a1aa61122457ad9423f997e4528f2889175f6722ff9ba4540700c9"},{"url":"/assets/format-BU_MMyaJ.js","bytes":800,"sha256":"8933abc27d8b5aff3f5326e0f2c765f2fd8e2f7ef1e54aa3ef0897ced8ccde8b"},{"url":"/assets/freeze-VmSbylp0.js","bytes":243,"sha256":"140259a1109c0bf836c94d122dedffa0d93abd36a1e05a7afa1ccd29ee08f5d2"},{"url":"/assets/full-backup.service-xeunlh61.js","bytes":2086,"sha256":"a9906b5cedab6d7356b5003ba2e6760727a3ae3d740c407d838b80aa68c6b863"},{"url":"/assets/full-restore.service-DCJkZ8Ar.js","bytes":24588,"sha256":"9eddb1e3a48ba5178e2cb38ec9ca0765d08d3e32afba4d66fcfd10d04234e7a5"},{"url":"/assets/huggingface-BOkVkTrH.js","bytes":1360,"sha256":"9900d5921565b5a1b5f32c40217dce515bb902339313d97208428cd53836f376"},{"url":"/assets/huggingface-inference-DEw_jJov.js","bytes":2052,"sha256":"ab739130ad215017502411aec93480ff1fff397a9db830ea55b7f1903eb5a27f"},{"url":"/assets/index-AMfGGj-u.css","bytes":2542,"sha256":"5c99db237499b1cc21b22e442970ed1eb95f68bb8144ba7548956215af515c02"},{"url":"/assets/index-B8C8U9lI.js","bytes":123,"sha256":"590b4d0314f3bb323bd57ddf52c07be47183de5364090a8eaebb45a06294ed9f"},{"url":"/assets/index-C3RhCZww.js","bytes":709481,"sha256":"7597dcb554664237f5628ec3034793203723f151484f7d5b6c9809da68252db8"},{"url":"/assets/index-Cbf95Eil.js","bytes":341,"sha256":"07e4d38a3671aa09a2559d1696b2d2f4b93e29e6caa941b799386a3a9a02d160"},{"url":"/assets/index-DHWIBrJh.js","bytes":80564,"sha256":"054140864e96969ed04afcb5b5e08b7814b7a016f6d1132c5174ba76dae57331"},{"url":"/assets/index-DYTZeLGR.css","bytes":54806,"sha256":"41dd61be9161fd0fc45b4a1d25a7b28a8266bfe76e67437e2dacf441e11b0338"},{"url":"/assets/index-DsFTXQsp.js","bytes":162288,"sha256":"3ea1860f9f22dfd71268d9a2c652fb3bc419330535cf3a066323c6929e9cdfe2"},{"url":"/assets/index-Dsx9-pMF.js","bytes":1057,"sha256":"7b43f25427fb0b27c3b985336e3e3897dc1ab58017c27308cd1cd156453b8534"},{"url":"/assets/index-InQxA0pJ.js","bytes":17996,"sha256":"f018404297047d6e7b6be9806f5779bbfe51df6520a5f2a2d6e3f2b0efe3da26"},{"url":"/assets/index.browser-CAbKFq2m.js","bytes":4863,"sha256":"b36fd1783e0baccc08f19f5d55955ea61df0d4557f3847e140439ca7bf942e23"},{"url":"/assets/initialization-Dx49Zhmr.js","bytes":4137,"sha256":"db489dadf4a5d63bb265280176773d6d30022cb9fe4bb7b6d0f934c853fbc6a7"},{"url":"/assets/interrupted-generation-CYwVTrQj.js","bytes":2790,"sha256":"4448bfa60a2d4bc5946fefc7310f3cf746273fb721e8f5969355995b53cb3f8b"},{"url":"/assets/list-entries-C0zIN7K-.js","bytes":590,"sha256":"c28ca7c0402a7f94214eb8536821555cfac3b284d7360aba33cfc6226bf56a0c"},{"url":"/assets/list-transfer-DBRJywcA.js","bytes":5782,"sha256":"7170c1cc6fbcb082028ea32163d18bc5abca7bbf99002db45dcd58cd12725034"},{"url":"/assets/litellm-DcDspMEM.js","bytes":3060,"sha256":"a37d035f6c2d57dda4fac4c7bf81e1ee086ab884f0e08fe821938735e2cc86bf"},{"url":"/assets/local-config-DLN4HNGK.js","bytes":2358,"sha256":"2c31f82f264eb5980d60579ba4ea445d7d580bed25cee45d4cd10b7de1e2a206"},{"url":"/assets/mistral-Bq6s0nH7.js","bytes":1621,"sha256":"5d7ab33f8fc4d9ab99ee8f6ce38d5b966770e2f226dd6c83d6aae7fd6917c42f"},{"url":"/assets/mistral-chat-CjcEn85G.js","bytes":2045,"sha256":"94113de127b1584b75687ea88d0d904d2a0c4ae3c7605338cbc17c435c6c32e6"},{"url":"/assets/nebius-BctY17uo.js","bytes":1647,"sha256":"2460ff08ff530a9efebef8054578216e05955f608b75c518486f3fae2f741be7"},{"url":"/assets/ollama-CqdpSqfM.js","bytes":1031,"sha256":"95e017c1a3773b16ab0831ad3698080be61e50d1df0cb49cab15e8a18321d06e"},{"url":"/assets/ollama-chat-B_cl8UOM.js","bytes":1066,"sha256":"848e0d868c00aa5a16d6b225884743a0fb1db03b21d10704f13c4cf2d59562a1"},{"url":"/assets/ollama-chat-jzlslwtF.js","bytes":3580,"sha256":"a4046800cebd2b74f5bc8e9ae45a8e599e375c4792f07ecc078d0dafe1c526eb"},{"url":"/assets/ollama-generate-C2_9BfZK.js","bytes":3961,"sha256":"460df1d559a86d2099a929292c67623f83f29e7c5bf8d2460f9ea647f9b20e1c"},{"url":"/assets/ollama-generate-CtrfhN-D.js","bytes":1098,"sha256":"ef214796e9827f9341c82cd4ab94f040771d70d7902afedb044217164f5904cd"},{"url":"/assets/openai-B4krSF6X.js","bytes":1481,"sha256":"4ee25514968689a47b1b40c640c09b12b3eab7b683a747b6d5c02a13854aedb6"},{"url":"/assets/openai-chat-6Y-3q2pD.js","bytes":2900,"sha256":"814aacbd3d2ac7d06b2e147861158f1c7a105c84c5345ce002b4586db24ca891"},{"url":"/assets/openai-chat-CS3kRCUQ.js","bytes":2158,"sha256":"86a0084c56822819c55d88aa658034ccc40a3d488db5e0285b5f70f928aedfa9"},{"url":"/assets/openai-responses-DL3o5CH1.js","bytes":4020,"sha256":"fd483e313d12b835c8cf4513c03058603ea2b170ac852ec95569ed588941f59f"},{"url":"/assets/openai-responses-Dc2e7ndS.js","bytes":1131,"sha256":"80f182aadde76d32e0b908d5118dbd290b162481105cbd0dc1af7af59b7a649e"},{"url":"/assets/openrouter-CPErhR3X.js","bytes":4860,"sha256":"e6eba2851fe00a51c1efe1db82a91d6447e2d72ab39da3036005aa76de3cb611"},{"url":"/assets/openrouter-api-cLFWkR1N.js","bytes":1177,"sha256":"4c273780d3f1962a977d2540b407611b1540b98c6a300ca1e2d5853b97e88822"},{"url":"/assets/opfs-sync-writer.worker-Bguqhj4u.js","bytes":1000,"sha256":"cb82b29f9b4b2ae25e7631fb9c49555c35af855de53792c53a3b914bd24f3f72"},{"url":"/assets/paged-table-reader-Cui7blz8.js","bytes":393,"sha256":"62f2cdf5789d993451cd457d068c3bf4f0d0f5c0317df9cf7c31c3c80444ee6f"},{"url":"/assets/papaparse.min-DjsMb7Yx.js","bytes":19392,"sha256":"2231230ccf3234c7cacc555e7b484fb5f088bd4a6a59b2b58e1e1ebdcd074ad3"},{"url":"/assets/parameter-summary-C6_DcFUT.js","bytes":10662,"sha256":"3b86f0ec2ee899ca5751a9ba5dbf76c4fccfd965012834d4a9f8afd9bb6a2c01"},{"url":"/assets/prompt-compile-zU8InGgf.js","bytes":1984,"sha256":"9bb1599d7800c55b308805959941b427752f3a6a75213793724386ef2a47de4e"},{"url":"/assets/provider-enablement-B3JBEI1s.js","bytes":873,"sha256":"40d3e5fbb2b8a5b48386148c713ff2445b3b9a2f92211d3d3bc6961458b57daa"},{"url":"/assets/pyodide.worker-UXA_A12b.js","bytes":13711,"sha256":"f2a326dd774bf8455e6df381b9182dcc950e980451eb05ddf6280cbe3fd80b53"},{"url":"/assets/repository-BgjG4_TD.js","bytes":1158,"sha256":"4ea8b8f9b11083186878c2d1274a16721d1c5d6b503545d2c0d7e9cdcf15d648"},{"url":"/assets/repository-DTw7y-f0.js","bytes":1742,"sha256":"cbb6501ab5455b1e8a4181d5b69ac17a502f62fecc82524626d34068a14c24d7"},{"url":"/assets/response-evidence-codec-Cnfr6--D.js","bytes":8724,"sha256":"ea8cad27a3471b790aef3ebbe20ec626541dfbae50fd17c8ec25226332ac8a2a"},{"url":"/assets/response-features-NT1RyAv_.js","bytes":1373,"sha256":"b90522d46a6181e9aa310e776c9035e229e790ae64d25f02e2df3ceb917db35e"},{"url":"/assets/row-filters-DVNsrKUs.js","bytes":405,"sha256":"f0e85d49e328197830832f0f7a9dc7fb635806600dd0b7ba13099f10830e322f"},{"url":"/assets/run-estimate-Cn7lrmLD.js","bytes":2517,"sha256":"c63d8621f20bbc1a71aa1ac3aac4aa599cb88628b00dbc51fca9e7b5c5b277ea"},{"url":"/assets/save-file-A9eihquJ.js","bytes":2111,"sha256":"3e171f2da408838edfce6779f49f13cb3156d202636554e2279223517425e12d"},{"url":"/assets/sql-wasm-C1U8OeUW.wasm","bytes":659806,"sha256":"0734155c83e493983d1f2ff5b09a4fab6e35a32e9449c7e4e545756439f62d73"},{"url":"/assets/tabular-export-MituPqbi.js","bytes":83328,"sha256":"fb13d9c327275e358632b71bc3cf01492e2b36b3d899f1a3d448d19d43169d6b"},{"url":"/assets/tauri-download-utilities-BlUkEXzC.js","bytes":2945,"sha256":"cd184d1406f522e8b9d2719f2bd4be4778599f36b5f33e21b9e317619311ed8f"},{"url":"/assets/tauri-vendor-CP__BcEW.js","bytes":10816,"sha256":"38fcfb2777c16381a569a519391a725712914162b3fbc9b4a8185e27372c5460"},{"url":"/assets/templates-C0KGdX2M.js","bytes":17115,"sha256":"604fd44742ad2435e3dcb01c42c69e36a7bb667453696abef026e66de320902a"},{"url":"/assets/token-calculator-BCLwAQ6D.js","bytes":3032,"sha256":"a1cef20b5e2a53e9de14478330960f4f5da01cb143bdcd2da94647d5aa46db71"},{"url":"/assets/token-counting-core-BN_zaIa1.js","bytes":2059,"sha256":"3b62336e9e343a250e94fd466b4aa257af5d3f67789c8c675f5e7fa9063c1d8d"},{"url":"/assets/token-counting.worker-CL32tk3y.js","bytes":2037537,"sha256":"4eb4c6caa19e87792474a583c1ef0e8f8754c821cc4e44ae77901480066aca83"},{"url":"/assets/trial-bundle.service-rnJnEx-M.js","bytes":20628,"sha256":"e8bff948974cd882841e3291c752f76dfd533b77902ee88b85fd5520f0b0807d"},{"url":"/assets/trial-execution-lease-BLdPwah9.js","bytes":699,"sha256":"b083007f9969a692d0392418ff2a2dd8459ce48516b84f14f340090f85a293aa"},{"url":"/assets/trials-Dt29vX8Y.js","bytes":17515,"sha256":"0e64af4fddffffaa6f7eb24f84ef7b3e84b18aacc7e13536c49b5d6afb35275d"},{"url":"/assets/ui-vendor-BVzfaij3.js","bytes":986409,"sha256":"e99e83e4b5553778e93a0fb61af2b099430b2ceb685f1fa4779f2f926c20718d"},{"url":"/assets/useCrossTab-B-m17jR_.js","bytes":671,"sha256":"745741b9734c74e7efe4d31256788bc428cd53df732f2fe553c34533983270f2"},{"url":"/assets/useHeatmapStyling-CaZW5rwH.js","bytes":19435,"sha256":"3d356f207d264c3dab39c8b4a12d7eec2ea78c764bb2657dacaa4398bff2b07f"},{"url":"/assets/useLiveQuery-BU00zr_-.js","bytes":728,"sha256":"4af02295ca803c5263a854a4f7f92d698a403f2478d141c79a0d730e5d5450c0"},{"url":"/assets/useModels-JipiA-fK.js","bytes":1945,"sha256":"2a371acc810e7cb869251605ec95d967fb9dd5ec9478b3d854edaca64777161b"},{"url":"/assets/usePlaygroundDraft-D2kFkfbz.css","bytes":6941,"sha256":"2bff3340df02892a7c7da3edf2759a2cc62c3485141c6980eb2d8758cde9761b"},{"url":"/assets/usePlaygroundDraft-Kjhy2mND.js","bytes":9224,"sha256":"e04c4b8e44055c0f23529e718b3664eacb2e048c5172ef30800b199b068db285"},{"url":"/assets/useSpreadsheetPrompts-BkK0UIg4.js","bytes":3325,"sha256":"330b24df9599cb8d426e9b412696dafad30a648a37143027f285cd3d8b051e7d"},{"url":"/assets/useTemplateCommands-BzrQGRUO.js","bytes":1743,"sha256":"fbc0f025aae546df9edd33ed171f385ea7de6adb351730f2a7ee9bac9d5a3a7d"},{"url":"/assets/useTemplates-C9sRVKbu.js","bytes":3383,"sha256":"170ba8024728c19f2a7b90e356b6a65abdbc9d44cb0149b69975aac7421102f8"},{"url":"/assets/useThrottled-CiNjB2U9.js","bytes":244,"sha256":"ed1e91aef1de78d22586d12386c3fd657b15cc85dd31899fabb9904e4f0f0c4d"},{"url":"/assets/useTokenCount-DlmIdwWT.js","bytes":3367,"sha256":"42bf364e2bf73a7d05a797b01de2b69c81a2b42ff6381ce89fa911fb01b0b2cc"},{"url":"/assets/useVariableListCommands-Cyn3B1w0.js","bytes":10273,"sha256":"48c10b45ad25e76f5919a63d66ec620a8f514c3cb86613935416cc1e12c1f499"},{"url":"/assets/useVariableLists-ClxKzHVE.js","bytes":1972,"sha256":"cb13112634daec3a74f8e5db0805117db4db9e2038be2b3920dedc9d495ba1f5"},{"url":"/assets/utils-vendor-CZWtWpZ-.js","bytes":42345,"sha256":"c3beb4db06a338c60f0166fad477219147edd734d1339aac5a3083db550b3152"},{"url":"/assets/vllm-server-B5wWYnjH.js","bytes":2045,"sha256":"8d05f4b8b851bf2411d3f66afe751bff6b821151c831391b845da6f612f6820d"},{"url":"/assets/vue-vendor-Du6N5Nak.js","bytes":108581,"sha256":"26f079c292f6cb9b8f32f9439a7cec32354a1ec91f115a0a607e7106a1602b63"},{"url":"/assets/vue-virtual-scroller-B6KXjDsJ.js","bytes":16628,"sha256":"c510364402a5023b38b6c3700724e74dcbd2caaa2e93370f104a19e59eef505a"},{"url":"/assets/vue-virtual-scroller-BCw0uU-l.css","bytes":1220,"sha256":"4d71315fd8c42dc3e7d0ba1e8cb831ad725c22c34cb76c8ff8dbce87d628abb4"},{"url":"/assets/webview-DSkDGi7j.js","bytes":16145,"sha256":"fb57e7b7607f6ee9bcd88be5f5af5fd27fb56d4cbbbbacd660014b565063c475"},{"url":"/assets/wizard-flow-Bu7dPo0q.js","bytes":2624,"sha256":"e2c85053f5485f79e8b14fbc8b74e8147a32395d8f476496d9700b8909c896c8"},{"url":"/favicon-128x128.png","bytes":3706,"sha256":"bbbdeeb9b6966ec47cd61ff198fb0def1ea34d9a785aa8be877d0489fb319167"},{"url":"/favicon-32x32.png","bytes":1081,"sha256":"3c49bb0a85918d8c69f13a724c35395e0f28cbcf67f445ae38b50a3c71d07af2"},{"url":"/favicon.ico","bytes":16672,"sha256":"57222d5e378250fd4cfe1d63ea90269c2f1dfe6c1411998482868782d71a7708"},{"url":"/favicon.png","bytes":14488,"sha256":"98a188b69c38bb92f851f6acc230625f3872f75e4e2a1dbb6291bd40ff1f99b1"},{"url":"/favicon.svg","bytes":684,"sha256":"a9b3b819d4e9b63857d2303ec278c84afbd7957ee517160fad880f6de3206b7e"},{"url":"/icon-192.png","bytes":15066,"sha256":"a5ea9af435092fef44e73b3ccd9c406837e6761f52a7baaeeb61a70ba93d9735"},{"url":"/icon-256x256.png","bytes":19034,"sha256":"74472788a02991156831720912580413451f2d3dde2a3104b330d1dc7dc46fb8"},{"url":"/icon-512.png","bytes":16100,"sha256":"5f69f2d26d0c8945116ce3e93408eef4bec8014ed4e896aaa865df0dea14cc50"},{"url":"/index.html","bytes":2394,"sha256":"593938a2af59da94ce2339e360b5100d9e793b33ce0f317fa2e2d7a5cbf3de4c"},{"url":"/manifest.json","bytes":1260,"sha256":"cf09d81ea03708d3f882f794c0eae4529378c6bda164a18006459102dc21f53a"},{"url":"/maskable-192.png","bytes":12217,"sha256":"f5a4eb0f2e68330466fb36aec9757a73e43ddd9a71cc1613af7c874ca423a339"},{"url":"/maskable-512.png","bytes":36502,"sha256":"fe2e9671e8283eeb07138502e2173a27dc10973119743b6bebed5069ae90742d"}]
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
