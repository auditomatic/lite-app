/* Auditomatic production Service Worker.
 *
 * The production build replaces the placeholders below with a complete,
 * hashed inventory. Source/dev builds deliberately contain empty inventories;
 * they must never claim production offline readiness.
 */

const BUILD_ID = "6f6822e3186a8cf4b2d4f06f2592fe81066e99e2"
const RELEASE_ID = "6f6822e3186a8cf4b2d4f06f2592fe81066e99e2-455d023474d4f934"
const VENDOR_ID = "3993ccbe7bc1abb4448e0a81955fe586ca43b9509237a8ef2a7bb97b7e9700d9"
const APP_ASSETS = [{"url":"/assets/AddCustomProviderModal-BB_cY47o.css","bytes":879,"sha256":"cb44b7b5d7e3107680d40883bf3d21a355a781c5924f3f65d112309541fd9970"},{"url":"/assets/AddCustomProviderModal-D-cz46cD.js","bytes":17092,"sha256":"73e7ef0c693e1453bc817d64f7d6456af2807ca53316cbdc6ae50f442a06186b"},{"url":"/assets/BuildJudgeDatasetView-NPOkuEAR.css","bytes":3353,"sha256":"6157af36c2993c0b72ea2cd4685f2ab96688ab99d7cc0ab5b4903e2d3eeedc96"},{"url":"/assets/BuildJudgeDatasetView-OXTeq9af.js","bytes":6987,"sha256":"e5829f159b2e75c03e1177ced1d511ba0f786b116910234c436df3cdd091e7f4"},{"url":"/assets/CodeEditor-CLA5o3gU.js","bytes":897,"sha256":"2be0776a73a87100463d8d21f5b98da37df9b220848d7e6b40995de835700a4d"},{"url":"/assets/CodeEditor-CfrosA3M.css","bytes":415,"sha256":"4b46da79967f08d54b6e6aaabbb3417681acd40e882a140511bafa256c9b0046"},{"url":"/assets/ColumnFilterPanel-D-uNO3-O.css","bytes":2280,"sha256":"608718efe88864cc91eb2850c886dc9eaa1bb4d9c2fc4bc29315ee2c7d88149b"},{"url":"/assets/ColumnFilterPanel-DDK6aW5a.js","bytes":26416,"sha256":"f8f66804bc603ca7541122fe69a92dc6ed9739bee3bfbf521c1b88fa7a0beac6"},{"url":"/assets/DatasetUploader-C-A9Es_E.js","bytes":193033,"sha256":"0e8de60fe3e484358e797e855f7d759625196f1f8b94ad47ddec4692e2ec7f1c"},{"url":"/assets/DatasetUploader-D9BF1twZ.css","bytes":6379,"sha256":"ab03dcee8fdc98202ccea2963b766e06c0d72c9e4cc4f52a1b86b7efbf8fddff"},{"url":"/assets/DatasetsView-BJ950UGB.css","bytes":2233,"sha256":"c088d07995eb0442d5e0484b79a70be7d243743e89bd9fe6b2ee6af02e9d7f59"},{"url":"/assets/DatasetsView-lWZDbFwC.js","bytes":9077,"sha256":"4f5baa84236513baf833aea590e98f27f404dc0a1a25825768bb01ba621a0582"},{"url":"/assets/ExportDataModal-B0h_9yS8.js","bytes":37184,"sha256":"241989db4099eb465e71ffbd18fcdd7deb61397fe5ec2b6158568e9f73d71351"},{"url":"/assets/ExportDataModal-Ee-aAGef.css","bytes":4598,"sha256":"321c52576a915001a609bedff4a27f90a724f13a8854fe7a09c01038eac9705b"},{"url":"/assets/GenericModelSelectorModal-CNS8wzjg.css","bytes":14924,"sha256":"51cbb06ff36feece657a234cff688e45092ba41a3a9cd7edb67b4100be5d79c8"},{"url":"/assets/GenericModelSelectorModal-Ddx9ypy3.js","bytes":44802,"sha256":"dff3a59f0062e0979fbe7268d7136ada61f2bc2b43c9aa8071be7fdfa0e354d7"},{"url":"/assets/HomeView-CKuiS4NZ.css","bytes":6080,"sha256":"d8628858b2700bf1e7b8151b5a3eaf05d046dc4aa8417401cc53963aca427bd1"},{"url":"/assets/HomeView-DMGEL-Gg.js","bytes":11446,"sha256":"e18dcdb02b9858a06a27c77807c23d588c504d5f65d4a07fe7dc41cc264a0081"},{"url":"/assets/HydratedPromptPreview-B4lIzSrn.js","bytes":10702,"sha256":"6646be4803a584a6ad7d940a389240d3404a95d69dd74b129429a40b28e62c8f"},{"url":"/assets/HydratedPromptPreview-CFiz9DY0.css","bytes":8011,"sha256":"2c03603da13051fcd21fbdc68ee9603a55dbc17191bf411d6e3703834c84c6da"},{"url":"/assets/MasterPasswordSetupModal-BqAKheck.js","bytes":12390,"sha256":"0c099aee3ad58fee9e95f8da985da5afa0ee96b4e31e79a7b5490fb6a9476540"},{"url":"/assets/MasterPasswordSetupModal-D3RxoUMh.css","bytes":5099,"sha256":"3b7f1798fe219c6c5e33472a3f1087f083d22a6cf1ab6b0c37bd12efc7da531b"},{"url":"/assets/ModelConfiguration-Cae6EZj5.css","bytes":4249,"sha256":"6f4b58a43ed8659360717e90f47f3b1cc681bd5967025ef9e9370d52c08d61e9"},{"url":"/assets/ModelConfiguration-Lplo1hbR.js","bytes":18703,"sha256":"7d98014bae8c65975de0204363eddb0000f1b3e4791cc9626c9ff6856f87e34b"},{"url":"/assets/ModelContractInspectorModal-DnCN9ob0.js","bytes":4976,"sha256":"c355ccf6a703937ba7fc19a7165494dd3b2bdd8a8e08592f5ba799427867ba40"},{"url":"/assets/ModelContractInspectorModal-dhTnqUJ_.css","bytes":1859,"sha256":"1775e2dff0359ca0d443e4acd9f70c1334bd67c3686efba3ae8070d128e24b81"},{"url":"/assets/ModelsView-BnNOz4rB.css","bytes":14325,"sha256":"966064dfd226d8a4467db4b4abadd07463725c40178323114b20ef6a14c1936f"},{"url":"/assets/ModelsView-_EJ_YYiB.js","bytes":45532,"sha256":"41043ff5db14faa0a3897c00008c69e37a650dbfb260808d158eca8b11b4d89d"},{"url":"/assets/OllamaModelManager-BRPgWwlF.css","bytes":15299,"sha256":"48f29bb92f057a7252fecac2caaeac3334c3d31251cd9dfae5c9a40d52904445"},{"url":"/assets/OllamaModelManager-BRSsKcpk.js","bytes":29443,"sha256":"a87d8546b2bd1772b57320e93d32e27948afb46ffc0f36415831bc2e233bf4ad"},{"url":"/assets/ParserEditor-BaBCMZPJ.css","bytes":4947,"sha256":"bd192a5abe947e78bef2bdb17fd2b29a828deb792310e2b077496abfaed9791e"},{"url":"/assets/ParserEditor-C8SQMn1f.js","bytes":20516,"sha256":"46483e99f768dfde03d299c54683524b75acd9e57d681c12260546e53429d260"},{"url":"/assets/ParserSelector-DQK9o3A4.css","bytes":6442,"sha256":"155381903f3eeeae7ae119534e9619fe6a94a3d9e5eb5073da4089440a0cc3f3"},{"url":"/assets/ParserSelector-DYepUVmz.js","bytes":10556,"sha256":"3d14e8c291a0a2ce8bfc30436a50281b7ebb6d0de7e582f4f7390f1f9dc10033"},{"url":"/assets/ParserTestSectionCompact-BdyskOqd.js","bytes":11386,"sha256":"f1498a4ccb0c9335c46d4486032ff5a2796e09cd9113673def451c6300d616c2"},{"url":"/assets/ParserTestSectionCompact-oi6GLKFm.css","bytes":2766,"sha256":"a7ed81bbe1b0b9772e5404169e4b142acaba64472ff50a280e2c57f418846094"},{"url":"/assets/ParserTesterModal-BrYGCLIL.js","bytes":1954,"sha256":"02c25fa16e428bd2f01e909f91234bb3abf78433e346eb37c6d09be2fb6dead7"},{"url":"/assets/ParserTesterModal-DVfa-M7N.css","bytes":882,"sha256":"a45f185deed1a36003ea56ed806accfb7ef17b806369b809975ae32038486b7a"},{"url":"/assets/ParsersView-B3A0_2iV.js","bytes":7099,"sha256":"90b3e7ce4be9d0897ba20d2d37ffaa5b629128ca3a3cf6259338d133f4574a35"},{"url":"/assets/ParsersView-BQ4bRtlE.css","bytes":1871,"sha256":"faa2955fea35f063cbfd4d98ced94f7425435062bc8d57090afa705ccb4fc787"},{"url":"/assets/PlaygroundChatHistoryView-BLyZlGmd.css","bytes":560,"sha256":"7114ed4740ec1116801b24446e50559c0ad07e6d254d4e4e59b518856efa6207"},{"url":"/assets/PlaygroundChatHistoryView-DhiOiszI.js","bytes":3545,"sha256":"35e52adfd35cad096b6d072617512b6c7ce7ee9c7edc8a123d73bcaaad086bfd"},{"url":"/assets/PlaygroundChatView-CRcMC8SK.css","bytes":9594,"sha256":"908db44fbc661a1a55964584f920dae65b0e5576e570a03b0c8a3294962b6eb1"},{"url":"/assets/PlaygroundChatView-DPSUHsB5.js","bytes":152036,"sha256":"7cd9d7fc80a19cf547b6408489cfd7afbe4cd14884d03eeebc89a178015ef6a8"},{"url":"/assets/PlaygroundHistoryView-C0XILSEm.css","bytes":6306,"sha256":"0b76ce2ce903cf6311fe94f01f3bddd892796695583e33549d0dd97960345b46"},{"url":"/assets/PlaygroundHistoryView-ajkd5ttE.js","bytes":24423,"sha256":"33540691c7ac93a11fe0fb26918b315d9d96ae7691dfeff2ff8b8ac1074d52a7"},{"url":"/assets/PlaygroundMultiView-8FukzcqJ.js","bytes":21716,"sha256":"97d8b80578b2d8204f924bd325f4a9f744a0366e2a7874368640ad32b8a06379"},{"url":"/assets/PlaygroundMultiView-B7tjaIiq.css","bytes":4777,"sha256":"9fe4a2cabb9b341cd968a4217a696d4dc196f9039b529585e6320fc4993ed508"},{"url":"/assets/PlaygroundStructuredOutputEditor-BDzl2oyc.js","bytes":4305,"sha256":"b9db4a47822c92f27303583f38817b886bdd1469bb2304674ae87372a1342d16"},{"url":"/assets/PlaygroundStructuredOutputEditor-CGE2VrSQ.css","bytes":373,"sha256":"4410551cb6e947228cd496fcac7fecc75b2b8bf5f8e96cffcafccce5ff788cdb"},{"url":"/assets/PlaygroundView-Bg1opNxw.css","bytes":15309,"sha256":"cd6e5d3289706be2f2b8ccac3fe5bc8888b8cd976d32a7de70f237aac8f0a85c"},{"url":"/assets/PlaygroundView-C5SLHlmj.js","bytes":36082,"sha256":"74efe3cea05b330ba1682f8a9f42b1eb080ef37e9fbbd087417a4392a389bdff"},{"url":"/assets/PromptAuthoringStack-BWpazx9S.css","bytes":11592,"sha256":"9cf35cba5f617410dac3563eef02f6ec91053a9c523478ae4c025e963ff40786"},{"url":"/assets/PromptAuthoringStack-rJCTZSUb.js","bytes":13881,"sha256":"db10cf08d70b01b854135b36d6b4b63125a85e21b83fc62732fae067d574af07"},{"url":"/assets/ResponseFormatEditor-7xfp_fVO.css","bytes":8547,"sha256":"f1acef0d7d994535e841104f5c57b4209d7963392cedf0f973ce1065c641ee95"},{"url":"/assets/ResponseFormatEditor-ZAAEUw9I.js","bytes":11857,"sha256":"f210c94742c49deec7d3daf9e0aab97c8ccfc639d2d9a6affd4ba9bfdcf8579a"},{"url":"/assets/SettingsView-BE7X1LuW.css","bytes":24361,"sha256":"0e0c7d7b655e0e2d02ebc116d79c0c478304b66975e6e44a64a2d7f54d80237d"},{"url":"/assets/SettingsView-D6zMtZql.js","bytes":69884,"sha256":"bf97e308f5b1d9836753875875fbf98733b18fed6ec4d8949d236984a662a3d4"},{"url":"/assets/SetupView-C0b9c5HH.css","bytes":4029,"sha256":"07b41cf3a45fd0a84da364a64b219297c32e48d9af595113e034191c6e5442f4"},{"url":"/assets/SetupView-D_Xjo4bd.js","bytes":4994,"sha256":"1dfecfe541a26d709257858725dca2df7c8738bdd1b107edd9bb19c6931dfc74"},{"url":"/assets/SpreadsheetEditor-BWcq9Xp5.js","bytes":76000,"sha256":"caba944be49441f3f3a375ffcce1b80a7146e3c55d5f60e9d2c436ad8183b782"},{"url":"/assets/SpreadsheetEditor-yTKIw_jg.css","bytes":33683,"sha256":"2495931b6feeb7254f6b1a471bdde346e547331252e4f2c71869a5ce24714711"},{"url":"/assets/SpreadsheetNewTrial-BCXeyyzs.js","bytes":15415,"sha256":"c947e426c6e5ecfd9ecf6132792b5032698e3cb9ab22a1a2ff50394a4217507a"},{"url":"/assets/SpreadsheetNewTrial-Co40lo-v.css","bytes":4815,"sha256":"4445bf9bab56b349b946a4619f5a89e2a33a8c262ca7c0613a208fe5cd3d341a"},{"url":"/assets/SpreadsheetsView-B6nnZlvv.js","bytes":23176,"sha256":"9c2bdd628e362e48a65be47b9aefa5049689feea3e0ce77715055921aa0a92c7"},{"url":"/assets/SpreadsheetsView-CkWj-2hj.css","bytes":4587,"sha256":"b94f4f1a2d8c15647cd3fa824c601ab9514d5d798fd8defbfec1f219bf3480c4"},{"url":"/assets/TemplateEditor-CvA9n46f.js","bytes":240874,"sha256":"e93a6cd65468131e8a83d702aa1992711b0cd5e4dee22c2828c52a6a901b37cf"},{"url":"/assets/TemplateEditor-MoLl6qRN.css","bytes":17866,"sha256":"c9d256d61225acb562828632044d6a71a64723bc039e8590c38d99647d5a65d3"},{"url":"/assets/TemplatesView-DMHy5hFw.css","bytes":3867,"sha256":"0ad425bd959574d8a64bf5feaf9b7f89a98298b4618a22eff548889e19a481b6"},{"url":"/assets/TemplatesView-zddsi6h3.js","bytes":15924,"sha256":"e823de22a432e9455221ef48267bf1561fe96dbd041bf85b211deb7ee3aac52c"},{"url":"/assets/TrialConflictModal-BigzNcmN.css","bytes":2638,"sha256":"685281ae3799c5b9f75776f33242c8818bb8ccbbff27afa091781f67c05d5534"},{"url":"/assets/TrialConflictModal-CYPA1qx3.js","bytes":6379,"sha256":"0d2257d0cc9828a9148788672855e43040d97fec5b2fef7f3bad0abcc2cf6b8a"},{"url":"/assets/TrialCreation-CV7gbihw.css","bytes":16930,"sha256":"e05fe8ffff8680e14f0a28c4c6f145b1bc6f6269a8a9600ab5a7d9b794c70c1e"},{"url":"/assets/TrialCreation-aWeSzrcc.js","bytes":51000,"sha256":"3122edd69b7aca5fa801f2ae4ef628232c0a09885d841952f457b54861375e7c"},{"url":"/assets/TrialsView-D1fy-rIN.css","bytes":93740,"sha256":"1a222af70c800570d361e9ed9396ffaa32ad612f862265cf7da358019cb3f94f"},{"url":"/assets/TrialsView-DPwzriil.js","bytes":262419,"sha256":"3b0eb6de1f48885f9e0ec04451c7c625fcef973f0c01ed59a638f3fb7ff0ddfd"},{"url":"/assets/VariableListEditor-BP8JmjUU.js","bytes":18289,"sha256":"2e77bb087f1bb6604a868d99e69f4017c57bd5bf2cded6e741165a2d912926b7"},{"url":"/assets/VariableListEditor-CkM6MRKj.css","bytes":10476,"sha256":"dd57bf148c36d9bae2e7bd70026c86cb95b251b1e52ec33b4edd394d2e8c92d8"},{"url":"/assets/VariableListsView-DHAi_G4k.js","bytes":17896,"sha256":"99750e0d2eecf25f94d196972bfee4605f5b5be4204f884ad3434b53f5c2450d"},{"url":"/assets/VariableListsView-L4pPxgUr.css","bytes":4117,"sha256":"831c87ec13b89cf37aaacfc8fb04781f234efd70b55d98df595b8b4abf80adc4"},{"url":"/assets/WizardComplete-DKj_S3aj.js","bytes":3406,"sha256":"03e2b7fa8dd58e1359af251015df0698830315ec0921adf6636fbefe2e796f87"},{"url":"/assets/WizardComplete-DmhEOBun.css","bytes":3460,"sha256":"c44deaea702205cab088a2313e77063095be80d5e1be0e51a0efcca5edf53c03"},{"url":"/assets/WizardLocalFirst-B7l3lKdC.js","bytes":5566,"sha256":"99588ecaae7e56b2a792ca1b2654b76907a4190c9a12435016232a654bb69284"},{"url":"/assets/WizardLocalFirst-Bui843bt.css","bytes":2524,"sha256":"7efb9e18db4fa072e31e822a5160f0c6f38510fa421719b6fad5b07dbe3a71be"},{"url":"/assets/WizardProviderConfig-BwOIe930.js","bytes":22188,"sha256":"b58d88d56baf45625936320a5b42b42aa0fc15148fbd4e17682aea7e286b88f5"},{"url":"/assets/WizardProviderConfig-CfRc3K4g.css","bytes":8222,"sha256":"3ded67fa60338d76c8db66cf05db347955ead84cb7c4d2bf2c17f6951337164a"},{"url":"/assets/WizardProviderSelection-BBF-AFnq.css","bytes":4082,"sha256":"fcafed5089f493e9974628a16a418ef91e1ab55f7dd83e659d356aad36281edb"},{"url":"/assets/WizardProviderSelection-qBlJUo4S.js","bytes":11171,"sha256":"9757a382c0312d866097f4dd446d33aaa688a72e0ebea864cb7ad6b1a930075c"},{"url":"/assets/WizardSecurity-B4br4rxT.css","bytes":5399,"sha256":"70a97b7d204559716c0c24f12c1896a2e432631e9d8c19914802101c79f96fc4"},{"url":"/assets/WizardSecurity-DyTMd6wQ.js","bytes":8337,"sha256":"63f489f90b94a630ea65e5f9a3677c7a4490395c757ba9256a5644cd44315f25"},{"url":"/assets/WizardStorageGate-BpN0a20V.js","bytes":8778,"sha256":"850ba860c9726e77e4ca60adaf6954c0fde1dc9e2ebffd5eddd347a5daf19354"},{"url":"/assets/WizardStorageGate-tknMQ_5l.css","bytes":6451,"sha256":"68b52bfb05bb34cc39bfc8cca076358e7b8426f89865e5cacecb28598dda1d71"},{"url":"/assets/WizardTelemetry-D5ezcwFg.js","bytes":2469,"sha256":"1ce7b60abd19cfd97a8f5ad8299426ec2c8f8b44fb3e768acb5779450e0dd322"},{"url":"/assets/WizardTelemetry-DS8qeCDs.css","bytes":2085,"sha256":"0fefc1f05a5b9276b771eeef0ab359cd5a8c77ad1c98c446412b9fc255ef773f"},{"url":"/assets/WizardWelcome-BYKmM-k6.js","bytes":6225,"sha256":"12065493288bb26784b47ee6e4fdc903107b2dff2c3a097785a78b94c9b31893"},{"url":"/assets/WizardWelcome-Bl87Yl5B.css","bytes":4930,"sha256":"32d76a14b5492f0d4ef8657230c7f931ee02c5fa81e573c4654db92d8298078f"},{"url":"/assets/anthropic-CTyLc6wY.js","bytes":657,"sha256":"db5464aded393084e37ca8b935bb37844018678323db104b2e7165101d350308"},{"url":"/assets/anthropic-messages-WjUg9gyw.js","bytes":2759,"sha256":"198994dae17edd5c91196300a4e1856765698ee4be82dd7b1ffa8272c1a78442"},{"url":"/assets/authored-source-compatibility-BsLXTpPD.js","bytes":2489,"sha256":"349c19f74dc1f765f620d5f66111719fc1102ad594d631f790dc488b6d9d7713"},{"url":"/assets/authoring-Bk1mfpKL.js","bytes":1622,"sha256":"d121ed6d3f5bdbbe49cf114fe4a596f7e46dafe717664ef5a883936ceeaff157"},{"url":"/assets/confirm-action-nkqei7eU.js","bytes":67,"sha256":"852b1e68ac07d9c8cd3d44ecff5fa9f564213e27bd98ed6dcd9facd6dbe1cd6e"},{"url":"/assets/copy-name-BGyp_QvQ.js","bytes":6223,"sha256":"c882f0ad34421f2e10d098d0cd89494d34d09c9fd1c017d7dd107dd77007c825"},{"url":"/assets/cost-calculation-Dp_zBPLi.js","bytes":843,"sha256":"4714aa5245e1ebb49283220230849d0b1bb6664cab30f23a35e0171c94f4b61e"},{"url":"/assets/costs-CV71F0IR.js","bytes":1891,"sha256":"b58eebe19eaecf009341a357c292ee26bcbce00c71d0c50faee9c04be80df1dd"},{"url":"/assets/csp-reporter-DUqSxT6o.js","bytes":2134,"sha256":"13642701b6492d02e791cca63c02c4e4c9c9bbf3dcfb6498d2eb73be45b116cb"},{"url":"/assets/curl-generator-C6RgHN_t.js","bytes":827,"sha256":"5139535b3c73cf01ae51f0b7b7700aa644e83e01cab29325f2d8910bdb406f03"},{"url":"/assets/custom-providers-B0m1XO0q.js","bytes":3649,"sha256":"f571eeae36c2499ccaab02d67cfda95c271d4a8369a498ff69c4635a6762a5f1"},{"url":"/assets/data-vendor-CKwrMZHi.js","bytes":499549,"sha256":"f895dd67a19c78f7cfa4069482c2f9bd4c754167dc8f9b15f11988e5358ee1ba"},{"url":"/assets/dataset-export.service-CF8yTQQY.js","bytes":2522,"sha256":"5e6dc1f7c46bf62071aa79338baa217604429f3e085f9984d1cd39febef7ee7e"},{"url":"/assets/dataset-from-trial-BXrmZ92B.js","bytes":2520,"sha256":"9d7e4892dccb7fa3295fec0c408f584debf43d35d1c9e0f015762178bfe67176"},{"url":"/assets/dataset-operations-Cc7sLPdU.js","bytes":2766,"sha256":"4fd68c59569216a5bc7538250f5e285916ee0d597c6d57be66549e31c2de8737"},{"url":"/assets/dataset-parquet-C0LM266M.js","bytes":478,"sha256":"43076c2133961391ca7eba79bc19042d2f541edc6afe07e85038f2bf6a4227b3"},{"url":"/assets/dataset-persistence-943_2NZD.js","bytes":1705,"sha256":"5562720279af6fb98ad213150dbf10efe5937d684b5fd52447254fefa48e97a2"},{"url":"/assets/dataset-summary-CBmJCSe3.js","bytes":503,"sha256":"f9925d9a3f7c2777e04a0003019fefc174990aedfb7a72c73a7504d4503aa275"},{"url":"/assets/deep-equal-bLv6XEjO.js","bytes":817,"sha256":"8131e299b9c54f7d76b7e4d17de7e20876eb1e895df199e79336ced3959a4a8e"},{"url":"/assets/default-prompt-seeding-D7-o3paW.js","bytes":406942,"sha256":"d18c2f87b0e3715bc9147f9a70828defcb2e7e0a4504d9b8d5317aaaf75edfa7"},{"url":"/assets/derived-Jc3wRgjN.js","bytes":214,"sha256":"dcc0dea9385512a43de9c7e83250597d2b08e4c1355993ce9530a3907190dae6"},{"url":"/assets/deterministic-CswtmBLq.js","bytes":489,"sha256":"3d4c6ec1ede298b7c9312b5b0186f786cd9b024029f69e6c82245bce1fd665a5"},{"url":"/assets/deterministic-Dn3mS_T3.js","bytes":1156,"sha256":"436a69eebd0199980fbb975bbedb6f43b4c581963be11fe8282c37d4e4bfcd06"},{"url":"/assets/display-values-D3R-R7BQ.js","bytes":711,"sha256":"643237f7e342dc07a71fc5be487e6b16ae4c458e223b7819d0f0fd0fa6264b7e"},{"url":"/assets/draft-xHm844ow.js","bytes":5735,"sha256":"f158111d2b5f9898b8ac3245ed89644fe93abfd15f2ec9e94501663860372ec8"},{"url":"/assets/edit-source-zIStvwph.js","bytes":828,"sha256":"2867d3a4adc85f6759284e34b2b09881b90b5dce6ecb56b6882bd36ff27a0e5b"},{"url":"/assets/environmental-7SaNww_r.js","bytes":450,"sha256":"84cebbbd936fd31a7709bd34d36c104471cd45b65f505a61ea2fc81f6e317457"},{"url":"/assets/environmental-BaXR2Z0P.js","bytes":436,"sha256":"7a0dba6027154614b9b82b0106c09008e8aab9df16a9303d4ed966486539ba9d"},{"url":"/assets/environmental-CST2cyag.js","bytes":1023,"sha256":"a3ec6c7399b1580323e2d069fa87bb4e0680d764315360a41ab89bf8f84627a0"},{"url":"/assets/environmental-CmakTgQN.js","bytes":445,"sha256":"25ec52ea28c751b0bed6ad8614000894004a05b307ee01d380f8f838ba2b8c2f"},{"url":"/assets/error-serialization-Bbw-acia.js","bytes":1060,"sha256":"56868c29216d2c5d68a6530f267bee215d301dbaea28a8818a7235338762e614"},{"url":"/assets/estimate-D4q-JdPF.js","bytes":9330,"sha256":"e380c901613f265ada7f01e4d15490824ea889fd112071cba7e5539fe827403b"},{"url":"/assets/execution-CC86Mo76.js","bytes":7956,"sha256":"2e5fb463dad2504630bcc134454e06bd14c508918e7582e4957eede3b53b2aec"},{"url":"/assets/field-ids-DXrUeamA.js","bytes":428,"sha256":"59e9139888a1aa61122457ad9423f997e4528f2889175f6722ff9ba4540700c9"},{"url":"/assets/full-backup.service-BRocoJWS.js","bytes":2085,"sha256":"7e5d33fecaf5e95d44aff6dc425497223523b6c216ee5b4e00efaeeaf8c791f2"},{"url":"/assets/full-restore.service-CjIbUYAv.js","bytes":23637,"sha256":"a8336e413d9ef6b8d5e8b54b1bc0e663e1d5197b0bc1ea7102ef6a32d31c2407"},{"url":"/assets/huggingface-cO7-1LQx.js","bytes":914,"sha256":"98503edff8885eda0cd5e9770331826c83fea5c0955cfda321b29dbe2a3bc1f0"},{"url":"/assets/index-B6yhEPQw.js","bytes":123,"sha256":"17d9af8d67376e3f0e8016d5972c3b81193302dd1048e619f8c0dfbc9b42529e"},{"url":"/assets/index-BD2vVUKd.js","bytes":1051,"sha256":"b79cc403b2c05cf13c1303620c71360c61b9772f031efb7eb7739d646c9e659f"},{"url":"/assets/index-CJt_KcCw.js","bytes":582002,"sha256":"014c588f7a7672f3a3da997af61e8351a55c418fd18b6d8e9443dd8e475cc249"},{"url":"/assets/index-ClpqMCxS.js","bytes":2211,"sha256":"0e0411376c34c4ad101d43bb26c8a98106294396bdba77ef21bc6b53a448fd1d"},{"url":"/assets/index-D5buRDyZ.js","bytes":23412,"sha256":"ffa9b3397cdcb8a34630144a081f4772a85928e821490983e7a6996da25e0c89"},{"url":"/assets/index-DaYqCZ3p.css","bytes":735,"sha256":"eba02cdbd2d0c8e7642f1645250dcf658833f18e0db9c41df97c04f035a8794c"},{"url":"/assets/index-Dg1bYxcT.css","bytes":55514,"sha256":"5eed465a3920592b0106ab7c8881779ebbec96b5ffa1ad819c62a03554a85ea2"},{"url":"/assets/index-Pi3egD3z.js","bytes":115554,"sha256":"708ac6ad22ed61304525572c826571808d4e3c3482cf249c1c2026f3179fe691"},{"url":"/assets/index-mDfPEGbU.js","bytes":101758,"sha256":"035de1779a20ec87aba496247435b7b32224ae05633dc480c2b7be612d2c369c"},{"url":"/assets/index.browser-zzeDCZ5A.js","bytes":1748,"sha256":"a5ce5b70a2bee0d05188458033268f8c456983a5d51f63a90db905ecc76cc941"},{"url":"/assets/initialization-C7_uoPje.js","bytes":5597,"sha256":"44a07bc41df0adea5c5d07f6a02c225a5a0b4cc1fd9bc69dd404b59e1b0f091e"},{"url":"/assets/interrupted-generation-B2DDyKJs.js","bytes":2790,"sha256":"5056031b2b03afd6fe337bf1ddfe3f502242255981474900441c23e53f926ba1"},{"url":"/assets/local-config-BMAjw6zX.js","bytes":1909,"sha256":"7b884e4ef249fe4de087ca458662871c659199a5a7bcc544963e23afed992b96"},{"url":"/assets/mistral-osvZAg5N.js","bytes":1058,"sha256":"fcb8bfe5ed13eae7daa9ad895a2961195408d9a7f3b7764b031e31d2affcc431"},{"url":"/assets/nebius-BGamPzHn.js","bytes":1065,"sha256":"6818ce745ad3d367d2c843fe7611720a9048513a63bfcefd664447abac084237"},{"url":"/assets/ollama-XShvfcPA.js","bytes":607,"sha256":"82d3c92b73d3c700fdae6dbc5eac114a7727d18ecf2c50b859e0801a6ee8142a"},{"url":"/assets/ollama-chat-Cj0pUTaj.js","bytes":3507,"sha256":"b9aa89961777da0c9e83bd24d14ee16aeaef6c849b9e76b8175d0378dec709c3"},{"url":"/assets/ollama-generate-CwKq1a7h.js","bytes":3888,"sha256":"f28e13daec33185a6b5d9903f28ce02e0a948e8e371335bb4ab22ac57a917067"},{"url":"/assets/openai-chat-Bh9rmqG-.js","bytes":2760,"sha256":"046a2e1aa8479c443dd684b8bfb18424b5593c091044eb135d1b5733e9642823"},{"url":"/assets/openai-hdutPmT6.js","bytes":1003,"sha256":"459c68a33396a816ea2f8adf085175e97e610d68711eb15024c3e28726e513a6"},{"url":"/assets/openai-responses-DlTacXH7.js","bytes":3881,"sha256":"cac1a006c43cd8770af2a1bb93dee22b15c9bec6ff91e941eec9dab25ec4de9d"},{"url":"/assets/openrouter-7v-7Va9x.js","bytes":3815,"sha256":"0cf22eedbee74c2b072a48524843c0211a4ac88c55de1829ec0adb98670c53a5"},{"url":"/assets/openrouter-defaults-9rWrck2t.js","bytes":3123,"sha256":"0ac6e123bd4bf632084f348108e1c3dc5fe577ac433d12421920786b8ef9cf51"},{"url":"/assets/opfs-sync-writer.worker-Bguqhj4u.js","bytes":1000,"sha256":"cb82b29f9b4b2ae25e7631fb9c49555c35af855de53792c53a3b914bd24f3f72"},{"url":"/assets/paged-table-reader-Cui7blz8.js","bytes":393,"sha256":"62f2cdf5789d993451cd457d068c3bf4f0d0f5c0317df9cf7c31c3c80444ee6f"},{"url":"/assets/parameter-summary-Dd5_F3lx.js","bytes":10239,"sha256":"e3d08d93131e03c6f9326abc11654b30a6480bc6026953cadc068e42ae6ae6d4"},{"url":"/assets/prompt-compile-CfOYUF1a.js","bytes":2080,"sha256":"b97a11e1d1657e5861236218418efe0f9d36ed9014ea6e03c1146c8895f1f825"},{"url":"/assets/provider-enablement-C9t57juJ.js","bytes":709,"sha256":"c50f2bf3e02abd84342052cb1d732ece6e4f040b8f92ead25093b277799012be"},{"url":"/assets/pyodide.worker-BdS-sZNw.js","bytes":13678,"sha256":"70c1016f125061e335975b9c0c546becca1c9f876dce5ae8f007c051c4a88ae5"},{"url":"/assets/render-CFWb0ikD.js","bytes":856,"sha256":"b9c12f9ec8389608c06619ae6359fc12bf7e2ca6e558bbf0b931b60865bdcade"},{"url":"/assets/repository-75fm3hSO.js","bytes":1158,"sha256":"4dacd275cfcb1bc9f0a87e6ea0677f17b6c01a65a0199a6ae5047457d4e6131b"},{"url":"/assets/repository-C2VBCYcq.js","bytes":2359,"sha256":"01617e8c68f7c5c7834a4a5d11399cbe30722c895113b8785cfe8957edbf9a61"},{"url":"/assets/response-evidence-codec-Y38nJF-g.js","bytes":8918,"sha256":"fdfd718e081436a47f4575cd73e0198220e5642c5e5671fa9f7f6707945a0e6f"},{"url":"/assets/response-features-Q4DlOVdq.js","bytes":460,"sha256":"383359708bf71ed484eafe3c5ca0d5963ff9cab798765cb928246133a363df98"},{"url":"/assets/row-filters-DVNsrKUs.js","bytes":405,"sha256":"f0e85d49e328197830832f0f7a9dc7fb635806600dd0b7ba13099f10830e322f"},{"url":"/assets/save-file-lsGwzRFS.js","bytes":944,"sha256":"e1232b44c9bcde5c654921d3c31cf4f0d7dfb2a88c7058034c3bff494ff195c4"},{"url":"/assets/sql-wasm-C1U8OeUW.wasm","bytes":659806,"sha256":"0734155c83e493983d1f2ff5b09a4fab6e35a32e9449c7e4e545756439f62d73"},{"url":"/assets/tabular-export-CRCaiD3K.js","bytes":83389,"sha256":"f2b515c265525cef2ca8487a62f038eead1007b765d04b3b0f04f1421524f3de"},{"url":"/assets/tauri-download-utilities-myrXwDYK.js","bytes":3347,"sha256":"ef9769b656072239d9a2ee0d0c23d0f74f8955559d739c20ec0e86400f65eb88"},{"url":"/assets/tauri-vendor-DxWMvb_z.js","bytes":14326,"sha256":"21de946222b39aa1670c94f573641bd6e24935485b70893cfd381268f57409e6"},{"url":"/assets/template-variables-T4-5MHs4.js","bytes":606,"sha256":"68f9ea82c6690f7fc29d9afe477699b20b8c3beb41cbec218142d74010fc65e4"},{"url":"/assets/timestamps-CGloZApi.js","bytes":197,"sha256":"b533d4d3fc966288182131a26af89af92eb2d35d47a05398552276d9d7ff22ea"},{"url":"/assets/token-calculator-CODs4aa3.js","bytes":5438,"sha256":"319e9a8eaaaacc0ffd353c32a89825a0b9661c805ab16dafb07c6d16ed5d17fe"},{"url":"/assets/token-counting.worker-DzyAsXBu.js","bytes":2037530,"sha256":"6f6af764f67e6a05da52ded39892cfb7c1e032796f3949ab955a002deacaa33c"},{"url":"/assets/trial-bundle.service-Btqofcu2.js","bytes":23720,"sha256":"fe915d0c727728d9015361a322e79c2ffbfaadfc7852882f0cf69800bdb28654"},{"url":"/assets/trial-execution-lease-CSosvjFt.js","bytes":699,"sha256":"aaecb0df86c1f8053033e6f3c561075dd9d58522c3fc617d8b2b0f36b230ff4b"},{"url":"/assets/trials-CHxrP7zT.js","bytes":17540,"sha256":"3b65bb68ee57021061683b01f5e6f872f17acdfd23a3ca6ee43e14a232f981f0"},{"url":"/assets/ui-vendor-DoagTIWE.js","bytes":986409,"sha256":"a2b92d996a5e6e86636fb796f49e056b0f2e3a714e3ebe94e6e71a76fc1510a9"},{"url":"/assets/useCostEstimation-N8zuPiCA.js","bytes":512,"sha256":"c4535b80e0fb66ce8e0bb5775c12ac397b6098ce06c463910cc819deba4d9ba6"},{"url":"/assets/useCrossTab-CFW8B_o1.js","bytes":671,"sha256":"9b306cd11d5d63fa7b9bd2ddf15b0b772cd755c9c75e1220cb90f859b762a7c1"},{"url":"/assets/useHeatmapStyling-C1thHgN_.js","bytes":5254,"sha256":"44da85ebe0029df2f5db80ccd24e64f6d15d9e7e542c824decceb9c374272f36"},{"url":"/assets/useLiveQuery-DlSqArtJ.js","bytes":728,"sha256":"693d36c4492b1c9bcd1d87b3830314ba0dbf81d41b25a8f3ee3dba4cd2d42bd2"},{"url":"/assets/useModels-FVUEcgyd.js","bytes":2559,"sha256":"f51c4be57871ecc581a5aa1ae4dc0afea02835b399cf6112cb90f02118501a4b"},{"url":"/assets/usePlaygroundDraft-DNdxMM09.css","bytes":6660,"sha256":"86914b4ab00a7f6986a092c92707e824277dc1d6ade3dd125755be26b2fefae0"},{"url":"/assets/usePlaygroundDraft-e5wvlxZR.js","bytes":8408,"sha256":"f9194c9f20276318c0d4edb4609f6d984206744674e4fe7685b2af0376f500c3"},{"url":"/assets/useSpreadsheetPrompts-DdEMROmK.js","bytes":3325,"sha256":"0623cac33fdb76bb3c21a3056b2c57ace3e80894921b1eda13b52b1bde5bbbb3"},{"url":"/assets/useTemplateCommands-BZOeebtb.js","bytes":23860,"sha256":"c40a50991b1c6e14fe63ae40229176146d27ded07f51647bbc95f4cb90c53e5a"},{"url":"/assets/useTemplates-ZXaMLHfc.js","bytes":3574,"sha256":"8286d200378a532b3c805d9fa3b50f54980db0c1af0a63358a28ec28ea9b54b7"},{"url":"/assets/useThrottled-Dh9ZlOA0.js","bytes":244,"sha256":"5b9af22b99ee17bd6aec02f22c2721a7ed53485794a5a4da7153be437cafb290"},{"url":"/assets/useTokenCount-C6BZ4Pz0.js","bytes":3154,"sha256":"21568e3dd8e56c5ae3487a4fd2a4809557e086753850d8039a659f82f55395e9"},{"url":"/assets/useVariableListCommands-DC7DCm_q.js","bytes":13399,"sha256":"e354cdb728fb119fff5f7ccf022ee35c10a9d481682a24ca1d40c0a782b82d89"},{"url":"/assets/useVariableLists-ri3H4-TC.js","bytes":1972,"sha256":"aaf3aafb5a514f2417708fc83b6992c421e11e2885f46cbdc8671b8bb55f7952"},{"url":"/assets/utils-vendor-2gxfMrWY.js","bytes":42345,"sha256":"7e333ea61f2323c41bcbc594ddee89642d4f240d02c3d5b9ec92c248f5815edc"},{"url":"/assets/vue-vendor-cLCfFK9O.js","bytes":113022,"sha256":"d69bd857cd64b452da5adc7d2942df666a8de807321f80fd09589212279b0ebf"},{"url":"/assets/vue-virtual-scroller-BCw0uU-l.css","bytes":1220,"sha256":"4d71315fd8c42dc3e7d0ba1e8cb831ad725c22c34cb76c8ff8dbce87d628abb4"},{"url":"/assets/vue-virtual-scroller-BfC6LgU4.js","bytes":16632,"sha256":"ab21d771a5ff137787166df024eb9c40d414fbc85d504156322bd3c416451f96"},{"url":"/assets/webview-NsPt-3IR.js","bytes":15890,"sha256":"3750814e00f426ba61368395fb37f44f7659559f0e6212d1a6d9becd4185ad73"},{"url":"/assets/wizard-flow-DJlpVEx4.js","bytes":3031,"sha256":"4e5aef060ac024643aaa0649a50d53b26722113f4bfd7102667de10da1e69dba"},{"url":"/favicon-128x128.png","bytes":3706,"sha256":"bbbdeeb9b6966ec47cd61ff198fb0def1ea34d9a785aa8be877d0489fb319167"},{"url":"/favicon-32x32.png","bytes":1081,"sha256":"3c49bb0a85918d8c69f13a724c35395e0f28cbcf67f445ae38b50a3c71d07af2"},{"url":"/favicon.ico","bytes":16672,"sha256":"57222d5e378250fd4cfe1d63ea90269c2f1dfe6c1411998482868782d71a7708"},{"url":"/favicon.png","bytes":14488,"sha256":"98a188b69c38bb92f851f6acc230625f3872f75e4e2a1dbb6291bd40ff1f99b1"},{"url":"/favicon.svg","bytes":684,"sha256":"a9b3b819d4e9b63857d2303ec278c84afbd7957ee517160fad880f6de3206b7e"},{"url":"/icon-192.png","bytes":15066,"sha256":"a5ea9af435092fef44e73b3ccd9c406837e6761f52a7baaeeb61a70ba93d9735"},{"url":"/icon-256x256.png","bytes":19034,"sha256":"74472788a02991156831720912580413451f2d3dde2a3104b330d1dc7dc46fb8"},{"url":"/icon-512.png","bytes":16100,"sha256":"5f69f2d26d0c8945116ce3e93408eef4bec8014ed4e896aaa865df0dea14cc50"},{"url":"/index.html","bytes":1929,"sha256":"84c386c244650e9755f82c5d72d9160f63de8df07a5d2b35022f4e7a2301664b"},{"url":"/manifest.json","bytes":1260,"sha256":"cf09d81ea03708d3f882f794c0eae4529378c6bda164a18006459102dc21f53a"},{"url":"/maskable-192.png","bytes":12217,"sha256":"f5a4eb0f2e68330466fb36aec9757a73e43ddd9a71cc1613af7c874ca423a339"},{"url":"/maskable-512.png","bytes":36502,"sha256":"fe2e9671e8283eeb07138502e2173a27dc10973119743b6bebed5069ae90742d"}]
const VENDOR_CORE_ASSETS = [{"url":"/vendor/pyodide/0.29.4/json_repair-0.63.4-py3-none-any.whl","bytes":51295,"sha256":"0f374f3eee21454aef0a5d72c06b8689b660a1788f80ab392639e3f7d5c5d458"},{"url":"/vendor/pyodide/0.29.4/manifest.json","bytes":2880,"sha256":"56a42868565c1862c7dadb3602ae003aacfacae3d3ed67962eb0a5f14273ea83"},{"url":"/vendor/pyodide/0.29.4/micropip-0.11.1-py3-none-any.whl","bytes":115486,"sha256":"a5569ea4002b9cdd6cf50eda0c14fb3fcb0da9d8c702feadcfd04459b4c3040a"},{"url":"/vendor/pyodide/0.29.4/pyodide-lock.json","bytes":4572,"sha256":"2ff40666b8389b574feb3569bb2c486590b0e6e32f27f533d1fa351480744b33"},{"url":"/vendor/pyodide/0.29.4/pyodide.asm.js","bytes":1074322,"sha256":"fe75e97ef2c7a10c41f23b96344c553c7c1c62821bb206080dbb24941c06d5f3"},{"url":"/vendor/pyodide/0.29.4/pyodide.asm.wasm","bytes":8647684,"sha256":"10090fe41e019ae669d512e1f747021a8db2aaab0f6dd6f85fa9368c55d681e3"},{"url":"/vendor/pyodide/0.29.4/pyodide.mjs","bytes":17616,"sha256":"8fdfed5eaf81bde14bcdeaeea11f2672675b2362248f8537446b6fda5e4a4751"},{"url":"/vendor/pyodide/0.29.4/python_stdlib.zip","bytes":2424002,"sha256":"92cb24faa546818f3ef4050fd5bd2b6487bd2042efed2113af141d035f30efb4"}]
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
