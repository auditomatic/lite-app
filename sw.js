/* Auditomatic production Service Worker.
 *
 * The production build replaces the placeholders below with a complete,
 * hashed inventory. Source/dev builds deliberately contain empty inventories;
 * they must never claim production offline readiness.
 */

const BUILD_ID = "410c01d6648b6112f6cd8a030503a1ab13ec002b"
const RELEASE_ID = "410c01d6648b6112f6cd8a030503a1ab13ec002b-8d81325864167173"
const VENDOR_ID = "3993ccbe7bc1abb4448e0a81955fe586ca43b9509237a8ef2a7bb97b7e9700d9"
const APP_ASSETS = [{"url":"/assets/AddCustomProviderModal-BB_cY47o.css","bytes":879,"sha256":"cb44b7b5d7e3107680d40883bf3d21a355a781c5924f3f65d112309541fd9970"},{"url":"/assets/AddCustomProviderModal-IU2Q6XXg.js","bytes":17092,"sha256":"f5a34ed26d3ee07188830eb1baf04990ef50c0317a80c1c33da784f288c865d8"},{"url":"/assets/BuildJudgeDatasetView-Czr88e3b.js","bytes":6987,"sha256":"d0a136e268e064e6efca5088801ad870b9a1af9e9d0c236a9b3fbd5096a6ab30"},{"url":"/assets/BuildJudgeDatasetView-NPOkuEAR.css","bytes":3353,"sha256":"6157af36c2993c0b72ea2cd4685f2ab96688ab99d7cc0ab5b4903e2d3eeedc96"},{"url":"/assets/CodeEditor-CfrosA3M.css","bytes":415,"sha256":"4b46da79967f08d54b6e6aaabbb3417681acd40e882a140511bafa256c9b0046"},{"url":"/assets/CodeEditor-CledLHh2.js","bytes":897,"sha256":"73c8fc1e28eb1f01052ab24cc28d6cfaaf2c9c828d252bf51d00a728a009e6f9"},{"url":"/assets/ColumnFilterPanel-D-uNO3-O.css","bytes":2280,"sha256":"608718efe88864cc91eb2850c886dc9eaa1bb4d9c2fc4bc29315ee2c7d88149b"},{"url":"/assets/ColumnFilterPanel-xUj0zaSg.js","bytes":26416,"sha256":"6ee84c10a2f8846b6080a5a30ff9706b6bf4f46efcc212be27ee4fb093b584e4"},{"url":"/assets/DatasetUploader-BHmoB3FM.js","bytes":193033,"sha256":"8cdf74244bed7592257fcf2ba1a50e5e0316803c0f96cb55d8b671527fe2c12c"},{"url":"/assets/DatasetUploader-D9BF1twZ.css","bytes":6379,"sha256":"ab03dcee8fdc98202ccea2963b766e06c0d72c9e4cc4f52a1b86b7efbf8fddff"},{"url":"/assets/DatasetsView-BJ950UGB.css","bytes":2233,"sha256":"c088d07995eb0442d5e0484b79a70be7d243743e89bd9fe6b2ee6af02e9d7f59"},{"url":"/assets/DatasetsView-CHMsk3xU.js","bytes":9077,"sha256":"5329866858deb3c82ca74f06992630651d003f3901f83e3a5c492723778e28dd"},{"url":"/assets/ExportDataModal-DBR3G8I9.js","bytes":37184,"sha256":"614e1f5a0fda52b118f1b675a9efe4e358fbcf165ca3d31ffe4d3d035be20eca"},{"url":"/assets/ExportDataModal-Ee-aAGef.css","bytes":4598,"sha256":"321c52576a915001a609bedff4a27f90a724f13a8854fe7a09c01038eac9705b"},{"url":"/assets/GenericModelSelectorModal-DdSjY11x.js","bytes":44958,"sha256":"002c4734b43d5c7baddfb83a2e345e241c71add0007555276113e366974a22a1"},{"url":"/assets/GenericModelSelectorModal-nqZARqKK.css","bytes":14924,"sha256":"9701bd2beeb64f3cc61ef7db2122ce98be5f71866b7b51fcfdf6749f3320f6b9"},{"url":"/assets/HomeView-CKuiS4NZ.css","bytes":6080,"sha256":"d8628858b2700bf1e7b8151b5a3eaf05d046dc4aa8417401cc53963aca427bd1"},{"url":"/assets/HomeView-CXCSBEAY.js","bytes":11446,"sha256":"e49548737145d3a644011454ba76811c0fab690f1a00b8a00f80cce6b71a8928"},{"url":"/assets/HydratedPromptPreview-CFiz9DY0.css","bytes":8011,"sha256":"2c03603da13051fcd21fbdc68ee9603a55dbc17191bf411d6e3703834c84c6da"},{"url":"/assets/HydratedPromptPreview-W7SXT3l0.js","bytes":10702,"sha256":"d927b114a815e3f6b7027aad8fe5e406108130ec5d410b63b072e874baec60be"},{"url":"/assets/MasterPasswordSetupModal-C37Nfkva.js","bytes":12390,"sha256":"4785485800bf29df52d815ea1884c5caf6cdd7c10caa23f40817301620873f42"},{"url":"/assets/MasterPasswordSetupModal-D3RxoUMh.css","bytes":5099,"sha256":"3b7f1798fe219c6c5e33472a3f1087f083d22a6cf1ab6b0c37bd12efc7da531b"},{"url":"/assets/ModelConfiguration-Cae6EZj5.css","bytes":4249,"sha256":"6f4b58a43ed8659360717e90f47f3b1cc681bd5967025ef9e9370d52c08d61e9"},{"url":"/assets/ModelConfiguration-IX8DUwT4.js","bytes":18703,"sha256":"5bee75e14d322d3062e36065121c39f43688b83522a298da27a59a342c3e69de"},{"url":"/assets/ModelContractInspectorModal-B-95jhTQ.js","bytes":4976,"sha256":"7ebc1d168edb9f777985a830c69a55e42c29b71e5517747bd5cb441de9cc01fa"},{"url":"/assets/ModelContractInspectorModal-dhTnqUJ_.css","bytes":1859,"sha256":"1775e2dff0359ca0d443e4acd9f70c1334bd67c3686efba3ae8070d128e24b81"},{"url":"/assets/ModelsView-BnNOz4rB.css","bytes":14325,"sha256":"966064dfd226d8a4467db4b4abadd07463725c40178323114b20ef6a14c1936f"},{"url":"/assets/ModelsView-CoE4UUAX.js","bytes":45532,"sha256":"0eca08d3c99fb97bcca8bfe77236bf0c009b90d4f22ac905890537568066815f"},{"url":"/assets/OllamaModelManager-BRPgWwlF.css","bytes":15299,"sha256":"48f29bb92f057a7252fecac2caaeac3334c3d31251cd9dfae5c9a40d52904445"},{"url":"/assets/OllamaModelManager-CThRMGTD.js","bytes":29443,"sha256":"b0a9696d7ddd21c70487c99255a0e181da48c7c5320b4939dbfd751cd07cc0eb"},{"url":"/assets/ParserEditor-BaBCMZPJ.css","bytes":4947,"sha256":"bd192a5abe947e78bef2bdb17fd2b29a828deb792310e2b077496abfaed9791e"},{"url":"/assets/ParserEditor-DGHEVAa1.js","bytes":20516,"sha256":"ffe0fed9efecb346c5e7520643a86a4974f5be9bf82a27464408057c564c28f7"},{"url":"/assets/ParserSelector-CRRKt_vc.js","bytes":10556,"sha256":"4185645a280a1a7a0fee95821fa08e24654d44d86c40f61708c3cae57bdb0a79"},{"url":"/assets/ParserSelector-DQK9o3A4.css","bytes":6442,"sha256":"155381903f3eeeae7ae119534e9619fe6a94a3d9e5eb5073da4089440a0cc3f3"},{"url":"/assets/ParserTestSectionCompact-Tr3immgL.js","bytes":11386,"sha256":"bdd5d75d7aa276db68c651817a9a1b5cec16aecb40acbfac448d602e5c77cbc1"},{"url":"/assets/ParserTestSectionCompact-oi6GLKFm.css","bytes":2766,"sha256":"a7ed81bbe1b0b9772e5404169e4b142acaba64472ff50a280e2c57f418846094"},{"url":"/assets/ParserTesterModal-C4ANPhsm.js","bytes":1954,"sha256":"0780bfab7044ec3ac60b42e1223a993762d68073f6ed92d0f24736989951974d"},{"url":"/assets/ParserTesterModal-DVfa-M7N.css","bytes":882,"sha256":"a45f185deed1a36003ea56ed806accfb7ef17b806369b809975ae32038486b7a"},{"url":"/assets/ParsersView-BQ4bRtlE.css","bytes":1871,"sha256":"faa2955fea35f063cbfd4d98ced94f7425435062bc8d57090afa705ccb4fc787"},{"url":"/assets/ParsersView-BaqukQCV.js","bytes":7099,"sha256":"34557eeb7a39998ece513d75f32d895af1a6673c1c8a3716decadf5ff7022155"},{"url":"/assets/PlaygroundChatHistoryView-BLyZlGmd.css","bytes":560,"sha256":"7114ed4740ec1116801b24446e50559c0ad07e6d254d4e4e59b518856efa6207"},{"url":"/assets/PlaygroundChatHistoryView-BmL4L733.js","bytes":3545,"sha256":"e10d5692f7b61d97c9e415081d84f008a1c7f8e95f8187aca394d57a087dade4"},{"url":"/assets/PlaygroundChatView-BDvgk0LD.js","bytes":152294,"sha256":"68f40d2f69d18422cd948052f1a7f9abdc696620b92745d092dc8c10c9915c01"},{"url":"/assets/PlaygroundChatView-DmA3tjze.css","bytes":9594,"sha256":"5fc2ff5b004952fca7edfa003a3574151f24f67358c3a49b8551a578df76aecf"},{"url":"/assets/PlaygroundHistoryView-B5OUeegE.js","bytes":24423,"sha256":"4c13c756caf4e303b93200029f55126b8e7ab094a5b5f4738b1b1216c430cf24"},{"url":"/assets/PlaygroundHistoryView-C0XILSEm.css","bytes":6306,"sha256":"0b76ce2ce903cf6311fe94f01f3bddd892796695583e33549d0dd97960345b46"},{"url":"/assets/PlaygroundMultiView-B7tjaIiq.css","bytes":4777,"sha256":"9fe4a2cabb9b341cd968a4217a696d4dc196f9039b529585e6320fc4993ed508"},{"url":"/assets/PlaygroundMultiView-Vo_GMruS.js","bytes":21716,"sha256":"bc140b21e704e517ffd41814d7f7cc18300ef23f74f12da9400c602ff3690894"},{"url":"/assets/PlaygroundStructuredOutputEditor-CGE2VrSQ.css","bytes":373,"sha256":"4410551cb6e947228cd496fcac7fecc75b2b8bf5f8e96cffcafccce5ff788cdb"},{"url":"/assets/PlaygroundStructuredOutputEditor-DjPhc64d.js","bytes":4305,"sha256":"07bb68c90cc4538374b5c66eb333672e92e5fbaeb971c81f09cd8c53eaa62f4b"},{"url":"/assets/PlaygroundView-C9_jObDT.css","bytes":15375,"sha256":"aeb257dd2cda99f30ad2d7be5218e51f954e5a1c2f6f6971c54dd8b6b0c973ec"},{"url":"/assets/PlaygroundView-CWKlBX7u.js","bytes":36298,"sha256":"c88496bf53c671fd5221009e94350cff64dafecc7df2a74cfcaaa9bc47a2c2a5"},{"url":"/assets/PromptAuthoringStack-BWpazx9S.css","bytes":11592,"sha256":"9cf35cba5f617410dac3563eef02f6ec91053a9c523478ae4c025e963ff40786"},{"url":"/assets/PromptAuthoringStack-C3gP7oyo.js","bytes":13881,"sha256":"feb46839ff6a65d4fa97451f9367b8cc46a5810b60153ad2a8d671cf1193802d"},{"url":"/assets/ResponseFormatEditor-4tyiXcr5.js","bytes":11857,"sha256":"31dd73235cd3ecb00cbf2576db9811f5dbad17605416b05f18bf424a57780dbd"},{"url":"/assets/ResponseFormatEditor-7xfp_fVO.css","bytes":8547,"sha256":"f1acef0d7d994535e841104f5c57b4209d7963392cedf0f973ce1065c641ee95"},{"url":"/assets/SettingsView-BE7X1LuW.css","bytes":24361,"sha256":"0e0c7d7b655e0e2d02ebc116d79c0c478304b66975e6e44a64a2d7f54d80237d"},{"url":"/assets/SettingsView-BfqhiLp4.js","bytes":69884,"sha256":"9dae4e7e9f890f6bcdfb82df796a178d7a78c84607850b65c3971900170e92e1"},{"url":"/assets/SetupView-BidI4gFV.js","bytes":4994,"sha256":"e98448982f44441c97469bb6dffea7a24694af9bab1b57de2ce98ba86bceae0b"},{"url":"/assets/SetupView-C0b9c5HH.css","bytes":4029,"sha256":"07b41cf3a45fd0a84da364a64b219297c32e48d9af595113e034191c6e5442f4"},{"url":"/assets/SpreadsheetEditor-DAl2jPm-.js","bytes":76000,"sha256":"ee5d6801e1c8657810094a10a2f62f5825c29ec97c11d00c671ff9849e8fa17e"},{"url":"/assets/SpreadsheetEditor-DCjsb8UY.css","bytes":33683,"sha256":"4ca37b87cf05f3bea3b5b48f9da88a59293e03e529f1ab29246bb6124cb83b3f"},{"url":"/assets/SpreadsheetNewTrial-B3N8F8cf.js","bytes":15415,"sha256":"e8347ed72a114f2f222ea7bc2a010e923c6bf3a74c5c619ca5a6c72525fee0f7"},{"url":"/assets/SpreadsheetNewTrial-Co40lo-v.css","bytes":4815,"sha256":"4445bf9bab56b349b946a4619f5a89e2a33a8c262ca7c0613a208fe5cd3d341a"},{"url":"/assets/SpreadsheetsView-CkWj-2hj.css","bytes":4587,"sha256":"b94f4f1a2d8c15647cd3fa824c601ab9514d5d798fd8defbfec1f219bf3480c4"},{"url":"/assets/SpreadsheetsView-oSuVCBJQ.js","bytes":23176,"sha256":"278c1a2049c9524e9f891e3fcbe3d8583dd6b1c644933c6123dcbd7f574a6aad"},{"url":"/assets/TemplateEditor-BDp5LUUu.js","bytes":240874,"sha256":"a5a1b601511bcb7f7ef777e8bbe5b15052628aa44e1dc157d979594bf234352a"},{"url":"/assets/TemplateEditor-MoLl6qRN.css","bytes":17866,"sha256":"c9d256d61225acb562828632044d6a71a64723bc039e8590c38d99647d5a65d3"},{"url":"/assets/TemplatesView-CpmIwNpb.js","bytes":15924,"sha256":"4309b0aaa1c7319b360af51a01ef77ceed135a8ed8c95d733da7a21073d2666d"},{"url":"/assets/TemplatesView-DMHy5hFw.css","bytes":3867,"sha256":"0ad425bd959574d8a64bf5feaf9b7f89a98298b4618a22eff548889e19a481b6"},{"url":"/assets/TrialConflictModal-BigzNcmN.css","bytes":2638,"sha256":"685281ae3799c5b9f75776f33242c8818bb8ccbbff27afa091781f67c05d5534"},{"url":"/assets/TrialConflictModal-V1iFVbMN.js","bytes":6379,"sha256":"11d9c7be2feee92b19f4a34bec953ac840684b736444b11db6ca331b2f36bf78"},{"url":"/assets/TrialCreation-CV7gbihw.css","bytes":16930,"sha256":"e05fe8ffff8680e14f0a28c4c6f145b1bc6f6269a8a9600ab5a7d9b794c70c1e"},{"url":"/assets/TrialCreation-D5fvZ0SC.js","bytes":51000,"sha256":"255eb2ae92d0cc16cd88f6fe95b105522c4f1a995f57c3b286f3c73d6e3eaffa"},{"url":"/assets/TrialsView-DMaj_EU-.css","bytes":93743,"sha256":"6d84de92e718a0a2de30a351dea2fd74b38a72b4bf027e0211ed18b8e8cdab2d"},{"url":"/assets/TrialsView-Wp83T1VB.js","bytes":262419,"sha256":"cb18b393c22608a584b4ba34ce8b3792f42b16e1638ec7cd8a77a5be63c5f661"},{"url":"/assets/VariableListEditor-CkM6MRKj.css","bytes":10476,"sha256":"dd57bf148c36d9bae2e7bd70026c86cb95b251b1e52ec33b4edd394d2e8c92d8"},{"url":"/assets/VariableListEditor-lEw6pB4A.js","bytes":18289,"sha256":"cb421217f72354309e3bfeb183ce51a666aa5d2f3a82496123ebeed5d9771784"},{"url":"/assets/VariableListsView-CnBNTzj3.js","bytes":17896,"sha256":"a06d6afcd3c977c83b2cf5d3e6a5df63d66b1e85f57b24e9092595563217dc7a"},{"url":"/assets/VariableListsView-L4pPxgUr.css","bytes":4117,"sha256":"831c87ec13b89cf37aaacfc8fb04781f234efd70b55d98df595b8b4abf80adc4"},{"url":"/assets/WizardComplete-CJ5SVLmw.js","bytes":3406,"sha256":"036c3b717f4ac115dce426a6a599cd1a321a7cc53e94fc1f113a11ecf0273b66"},{"url":"/assets/WizardComplete-DmhEOBun.css","bytes":3460,"sha256":"c44deaea702205cab088a2313e77063095be80d5e1be0e51a0efcca5edf53c03"},{"url":"/assets/WizardLocalFirst-B1hjTP3S.css","bytes":2524,"sha256":"2e83cb5fef3298c1c8e2e38199dbfff0d4e44d01574f2e16e6173f1f77b74ad1"},{"url":"/assets/WizardLocalFirst-D0MUXyQO.js","bytes":5775,"sha256":"98378d7aa2c10caf67b7a54617d4baecd641da69feaa803cfc7a782774b4ff9b"},{"url":"/assets/WizardProviderConfig-CfRc3K4g.css","bytes":8222,"sha256":"3ded67fa60338d76c8db66cf05db347955ead84cb7c4d2bf2c17f6951337164a"},{"url":"/assets/WizardProviderConfig-CjLPJiru.js","bytes":22188,"sha256":"68c2da0933a98405466a677c741d28beaf9ef6ea8a062229d60e97600fd56f14"},{"url":"/assets/WizardProviderSelection-BBF-AFnq.css","bytes":4082,"sha256":"fcafed5089f493e9974628a16a418ef91e1ab55f7dd83e659d356aad36281edb"},{"url":"/assets/WizardProviderSelection-WMCPCNo6.js","bytes":11171,"sha256":"a8a5a512240696603aec824d098df8f456c74971ab246afbb958a8b14e20b014"},{"url":"/assets/WizardSecurity-B4br4rxT.css","bytes":5399,"sha256":"70a97b7d204559716c0c24f12c1896a2e432631e9d8c19914802101c79f96fc4"},{"url":"/assets/WizardSecurity-BxueGApT.js","bytes":8337,"sha256":"95ffa2fb0b05b29d32ea27af00b1e98fee633048a4de4aab745687faf706f602"},{"url":"/assets/WizardStorageGate-CpUwM0MU.js","bytes":8769,"sha256":"1f01e04ccda90539e1f78b08b29cef329eb3c6711679b6589cb49fde81badf37"},{"url":"/assets/WizardStorageGate-PvJVTKL9.css","bytes":6451,"sha256":"936a7cca6057e4b0d8310298d6448c4d6b0121e8e6556a5762250c0ff36e724c"},{"url":"/assets/WizardTelemetry-B_lfA0JK.js","bytes":2469,"sha256":"d87e37863f4e03da10f86c2ffaceb173dd345ac6d896d305720039e80fc567fc"},{"url":"/assets/WizardTelemetry-DS8qeCDs.css","bytes":2085,"sha256":"0fefc1f05a5b9276b771eeef0ab359cd5a8c77ad1c98c446412b9fc255ef773f"},{"url":"/assets/WizardWelcome-COqpAAcw.js","bytes":6299,"sha256":"7f516333e56c7a6f065428518720286c92489b63f8ce28ab0ce9fa274d78496c"},{"url":"/assets/WizardWelcome-DNlzQekw.css","bytes":4930,"sha256":"46d1d6a469d9cce48d42b4a55a9802bb61d03f6d559d3910e3751844a425c9d2"},{"url":"/assets/anthropic-CTyLc6wY.js","bytes":657,"sha256":"db5464aded393084e37ca8b935bb37844018678323db104b2e7165101d350308"},{"url":"/assets/anthropic-messages-WjUg9gyw.js","bytes":2759,"sha256":"198994dae17edd5c91196300a4e1856765698ee4be82dd7b1ffa8272c1a78442"},{"url":"/assets/authored-source-compatibility-BaNcFNpC.js","bytes":2489,"sha256":"e915fd701f8df6131d6d068b3b0df4d255b1c3d9616b858c4f6242f1312a4bf2"},{"url":"/assets/authoring-Bk1mfpKL.js","bytes":1622,"sha256":"d121ed6d3f5bdbbe49cf114fe4a596f7e46dafe717664ef5a883936ceeaff157"},{"url":"/assets/confirm-action-nkqei7eU.js","bytes":67,"sha256":"852b1e68ac07d9c8cd3d44ecff5fa9f564213e27bd98ed6dcd9facd6dbe1cd6e"},{"url":"/assets/copy-name-DuxcKPvM.js","bytes":6223,"sha256":"5b1cda9b425531ddb3490762a2b62abfdb148b349d9c071552dfd73a1fc4ea01"},{"url":"/assets/cost-calculation-Dp_zBPLi.js","bytes":843,"sha256":"4714aa5245e1ebb49283220230849d0b1bb6664cab30f23a35e0171c94f4b61e"},{"url":"/assets/costs-BnXPG0rJ.js","bytes":1891,"sha256":"cf64bbe451ca407b03967bb4942c5d132d627f48c15602e640b7192ef68d4816"},{"url":"/assets/csp-reporter-CC58REsX.js","bytes":2134,"sha256":"ad90150d6d1569c80c8b5e1575f8cbb454f3d3d8dc0dbe4b51cddb8fda56e0cd"},{"url":"/assets/curl-generator--dNARfzQ.js","bytes":827,"sha256":"fa8de19a677550991b4758b4acd8cfb5bc5140b75c5ad961ea326561aa5c5b96"},{"url":"/assets/custom-providers-uaAgt8pY.js","bytes":3649,"sha256":"865ccd5a11ddf97357e40b6828ec7311230f36982718fffdb9b64bcdf6935d6c"},{"url":"/assets/data-vendor-CKwrMZHi.js","bytes":499549,"sha256":"f895dd67a19c78f7cfa4069482c2f9bd4c754167dc8f9b15f11988e5358ee1ba"},{"url":"/assets/dataset-export.service-BeV56gjj.js","bytes":2522,"sha256":"08810b3d67005ed3647a530c0357fabf0c3ef024a78041482430f9085093649a"},{"url":"/assets/dataset-from-trial-DKz_2fb8.js","bytes":2520,"sha256":"f7472387824f508a2f15da8d239f08b0ca4a9889f3bdeccc97ef5b5832b9224e"},{"url":"/assets/dataset-operations-Rs142s9W.js","bytes":2766,"sha256":"9f2cab2ffba54e1c0e1ca571791a4763de9dbf38c687ba79e7d430c83a2ddcf8"},{"url":"/assets/dataset-parquet-C8ghfmjt.js","bytes":478,"sha256":"54c13131550b9d649ebfb4bbb23a82b0f6a0b1973ab453c924d4e90002633260"},{"url":"/assets/dataset-persistence-DiW39J4v.js","bytes":1705,"sha256":"8177118ee0961c51d8b48e03a8a11992e174b160253800390342cbbd8ab31216"},{"url":"/assets/dataset-summary-CBmJCSe3.js","bytes":503,"sha256":"f9925d9a3f7c2777e04a0003019fefc174990aedfb7a72c73a7504d4503aa275"},{"url":"/assets/deep-equal-bLv6XEjO.js","bytes":817,"sha256":"8131e299b9c54f7d76b7e4d17de7e20876eb1e895df199e79336ced3959a4a8e"},{"url":"/assets/default-prompt-seeding-B9o-qiKI.js","bytes":406942,"sha256":"6803379e638cdba8ae72f708efa44e4a4e26e73dbf31bdc1ea8c6c4fc9b377d1"},{"url":"/assets/derived-2Knbebh0.js","bytes":214,"sha256":"b1511909053cb7a2f6f9e33bcbf614aace3723ee2eb10ce0505fd5dfd464fa83"},{"url":"/assets/deterministic-CswtmBLq.js","bytes":489,"sha256":"3d4c6ec1ede298b7c9312b5b0186f786cd9b024029f69e6c82245bce1fd665a5"},{"url":"/assets/deterministic-Dn3mS_T3.js","bytes":1156,"sha256":"436a69eebd0199980fbb975bbedb6f43b4c581963be11fe8282c37d4e4bfcd06"},{"url":"/assets/display-values-D3R-R7BQ.js","bytes":711,"sha256":"643237f7e342dc07a71fc5be487e6b16ae4c458e223b7819d0f0fd0fa6264b7e"},{"url":"/assets/draft-kM-35rrH.js","bytes":5735,"sha256":"f901957da87cdf50c2e0f7182b14b1df63556510534a11ed0984004ecbc9ddba"},{"url":"/assets/edit-source-QzkKGAkv.js","bytes":828,"sha256":"da1d4035894dde33d2a90e41043834ea338643f88146435d3fae74292c0f37f3"},{"url":"/assets/environmental-7SaNww_r.js","bytes":450,"sha256":"84cebbbd936fd31a7709bd34d36c104471cd45b65f505a61ea2fc81f6e317457"},{"url":"/assets/environmental-BaXR2Z0P.js","bytes":436,"sha256":"7a0dba6027154614b9b82b0106c09008e8aab9df16a9303d4ed966486539ba9d"},{"url":"/assets/environmental-CST2cyag.js","bytes":1023,"sha256":"a3ec6c7399b1580323e2d069fa87bb4e0680d764315360a41ab89bf8f84627a0"},{"url":"/assets/environmental-CmakTgQN.js","bytes":445,"sha256":"25ec52ea28c751b0bed6ad8614000894004a05b307ee01d380f8f838ba2b8c2f"},{"url":"/assets/error-serialization-Bbw-acia.js","bytes":1060,"sha256":"56868c29216d2c5d68a6530f267bee215d301dbaea28a8818a7235338762e614"},{"url":"/assets/estimate-SycCabur.js","bytes":9330,"sha256":"8820e84a930d59158b1eac67ff5551c2624d4a55360055872d993d45d893d583"},{"url":"/assets/execution-q7Y_VwX9.js","bytes":7956,"sha256":"e9fce3e911b779dcdf321e31da20697937285aa6ea64f082aa5c4194081d9f92"},{"url":"/assets/field-ids-DXrUeamA.js","bytes":428,"sha256":"59e9139888a1aa61122457ad9423f997e4528f2889175f6722ff9ba4540700c9"},{"url":"/assets/full-backup.service-DYvvGP54.js","bytes":2085,"sha256":"e3fb51c848efc7a440765679d98c0e85d3798f0054060a97467f926740efeb26"},{"url":"/assets/full-restore.service-mP3jwWOT.js","bytes":23637,"sha256":"a19da29ea452a5a18bd97c29bf76c4d29fc8925e0c182fbb542eca4fd124e0d9"},{"url":"/assets/huggingface-cO7-1LQx.js","bytes":914,"sha256":"98503edff8885eda0cd5e9770331826c83fea5c0955cfda321b29dbe2a3bc1f0"},{"url":"/assets/index-2glpzQUZ.css","bytes":55530,"sha256":"8221527ba1e061beccd90a76aeb571ce2670c286c64a372f75abb6b820e64907"},{"url":"/assets/index-B6yhEPQw.js","bytes":123,"sha256":"17d9af8d67376e3f0e8016d5972c3b81193302dd1048e619f8c0dfbc9b42529e"},{"url":"/assets/index-BD2vVUKd.js","bytes":1051,"sha256":"b79cc403b2c05cf13c1303620c71360c61b9772f031efb7eb7739d646c9e659f"},{"url":"/assets/index-BMhowyaw.js","bytes":101758,"sha256":"e70e8744b3538c2ce37ece484e5e6c5764d741700f4c38a801803a13b2aa7d0a"},{"url":"/assets/index-Bu6hMoZ7.js","bytes":582056,"sha256":"fd1c54d376dc73954f7adb9ed69ba46b71affa602d8f3b52f97615952b6d3eaa"},{"url":"/assets/index-C3q1pSV7.js","bytes":23412,"sha256":"c52a9c0499544954f64f456f82c7351fdf2358400dcd70ebcc99937476a51085"},{"url":"/assets/index-ClpqMCxS.js","bytes":2211,"sha256":"0e0411376c34c4ad101d43bb26c8a98106294396bdba77ef21bc6b53a448fd1d"},{"url":"/assets/index-CxG07YX8.css","bytes":735,"sha256":"5c47235130029f8f9141f6a8bddc1e73651be055161d61359e857796a59ba421"},{"url":"/assets/index-Pi3egD3z.js","bytes":115554,"sha256":"708ac6ad22ed61304525572c826571808d4e3c3482cf249c1c2026f3179fe691"},{"url":"/assets/index.browser-4XmjmhuZ.js","bytes":2899,"sha256":"3ceb8a29d1526cfa40b36af6e888dc927b4922d207ca624aeb3a409742ce1904"},{"url":"/assets/initialization-FQWQ-6n4.js","bytes":5597,"sha256":"5a8de29e0d76c0a7cfd0ed34bb0d450656b32d421e20f2ba2cbc60dba1132df3"},{"url":"/assets/interrupted-generation-DVgCMP4G.js","bytes":2790,"sha256":"70bb7242fc7a841ce4bcb0c8792bd000a3dde8c1e018b7ae9f78a10325d6c7fc"},{"url":"/assets/local-config-2limRC6H.js","bytes":1909,"sha256":"beed0ed20bb474ebbe6d7e1796f52f52e9d651cceafcd19a7694d45438fc8921"},{"url":"/assets/mistral-osvZAg5N.js","bytes":1058,"sha256":"fcb8bfe5ed13eae7daa9ad895a2961195408d9a7f3b7764b031e31d2affcc431"},{"url":"/assets/nebius-BGamPzHn.js","bytes":1065,"sha256":"6818ce745ad3d367d2c843fe7611720a9048513a63bfcefd664447abac084237"},{"url":"/assets/ollama-XShvfcPA.js","bytes":607,"sha256":"82d3c92b73d3c700fdae6dbc5eac114a7727d18ecf2c50b859e0801a6ee8142a"},{"url":"/assets/ollama-chat-Cj0pUTaj.js","bytes":3507,"sha256":"b9aa89961777da0c9e83bd24d14ee16aeaef6c849b9e76b8175d0378dec709c3"},{"url":"/assets/ollama-generate-CwKq1a7h.js","bytes":3888,"sha256":"f28e13daec33185a6b5d9903f28ce02e0a948e8e371335bb4ab22ac57a917067"},{"url":"/assets/openai-chat-Bh9rmqG-.js","bytes":2760,"sha256":"046a2e1aa8479c443dd684b8bfb18424b5593c091044eb135d1b5733e9642823"},{"url":"/assets/openai-hdutPmT6.js","bytes":1003,"sha256":"459c68a33396a816ea2f8adf085175e97e610d68711eb15024c3e28726e513a6"},{"url":"/assets/openai-responses-DlTacXH7.js","bytes":3881,"sha256":"cac1a006c43cd8770af2a1bb93dee22b15c9bec6ff91e941eec9dab25ec4de9d"},{"url":"/assets/openrouter-7v-7Va9x.js","bytes":3815,"sha256":"0cf22eedbee74c2b072a48524843c0211a4ac88c55de1829ec0adb98670c53a5"},{"url":"/assets/openrouter-defaults-9rWrck2t.js","bytes":3123,"sha256":"0ac6e123bd4bf632084f348108e1c3dc5fe577ac433d12421920786b8ef9cf51"},{"url":"/assets/opfs-sync-writer.worker-Bguqhj4u.js","bytes":1000,"sha256":"cb82b29f9b4b2ae25e7631fb9c49555c35af855de53792c53a3b914bd24f3f72"},{"url":"/assets/paged-table-reader-Cui7blz8.js","bytes":393,"sha256":"62f2cdf5789d993451cd457d068c3bf4f0d0f5c0317df9cf7c31c3c80444ee6f"},{"url":"/assets/parameter-summary-DMXJHD5f.js","bytes":10239,"sha256":"09cf4b9358f5c814b85cd2bff99f7668fd8a58ae74b75a15c4591e4b851bbf7e"},{"url":"/assets/prompt-compile-Cqg62CRo.js","bytes":2080,"sha256":"c18f87fa8ad93c6e5a64886f098b34d1b03d38e58192c5a25479579a87120489"},{"url":"/assets/provider-enablement-DQwo3l6m.js","bytes":709,"sha256":"b56324150cae7b7724cd6066759d37723c0bf7039ac29ae7af534a1e93720f85"},{"url":"/assets/pyodide.worker-BdS-sZNw.js","bytes":13678,"sha256":"70c1016f125061e335975b9c0c546becca1c9f876dce5ae8f007c051c4a88ae5"},{"url":"/assets/render-8GNz50GV.js","bytes":856,"sha256":"4a1c48195a79803dcdf805fcc4cafdf840f4defb6623c7e807be2d8499b22f10"},{"url":"/assets/repository-BCvZbU7r.js","bytes":1158,"sha256":"5975611f6e4585e1e305c4519878a8f8481fa489c85451721413e0d8c4785f11"},{"url":"/assets/repository-DycSZ7-_.js","bytes":2359,"sha256":"63da1d6a7b0e531bde739027fd83b407f5c04a55a0e2b1cf69f0445d154c55f2"},{"url":"/assets/response-evidence-codec-CpWHefik.js","bytes":8918,"sha256":"04b4194fda951b3500c8be0afc53015f54c14c9449ffeefc26ed7465ecd3aa2b"},{"url":"/assets/response-features-Q4DlOVdq.js","bytes":460,"sha256":"383359708bf71ed484eafe3c5ca0d5963ff9cab798765cb928246133a363df98"},{"url":"/assets/row-filters-DVNsrKUs.js","bytes":405,"sha256":"f0e85d49e328197830832f0f7a9dc7fb635806600dd0b7ba13099f10830e322f"},{"url":"/assets/save-file-SfMw5piL.js","bytes":944,"sha256":"7695704615b4cf1641e4296aabce50ed57aa4307013228c4b9ccda7316df16a0"},{"url":"/assets/sql-wasm-C1U8OeUW.wasm","bytes":659806,"sha256":"0734155c83e493983d1f2ff5b09a4fab6e35a32e9449c7e4e545756439f62d73"},{"url":"/assets/tabular-export-B_FwuwFg.js","bytes":83389,"sha256":"f4e8335317abaf1c6e7c22bb49e2acbf36393dc0d73c099debcf7390dbcbd714"},{"url":"/assets/tauri-download-utilities-DdjGJIwq.js","bytes":3347,"sha256":"d9fbadfececd70308cffef7dfab7348f7e1fd93696f20e3265cb77de245e0e59"},{"url":"/assets/tauri-vendor-DxWMvb_z.js","bytes":14326,"sha256":"21de946222b39aa1670c94f573641bd6e24935485b70893cfd381268f57409e6"},{"url":"/assets/template-variables-T4-5MHs4.js","bytes":606,"sha256":"68f9ea82c6690f7fc29d9afe477699b20b8c3beb41cbec218142d74010fc65e4"},{"url":"/assets/timestamps-CGloZApi.js","bytes":197,"sha256":"b533d4d3fc966288182131a26af89af92eb2d35d47a05398552276d9d7ff22ea"},{"url":"/assets/token-calculator-CbusjkEb.js","bytes":5438,"sha256":"03d4a8da2917449f915ac51c68f091ce94062e85981a3db9a164a0248981c235"},{"url":"/assets/token-counting.worker-DzyAsXBu.js","bytes":2037530,"sha256":"6f6af764f67e6a05da52ded39892cfb7c1e032796f3949ab955a002deacaa33c"},{"url":"/assets/trial-bundle.service-CRD30ShB.js","bytes":23720,"sha256":"15dcccaeb0ff33e228149e585c34742a75c2f573ca0669761e6f49de5c216f7f"},{"url":"/assets/trial-execution-lease-DHWIgwof.js","bytes":699,"sha256":"747dc00452807bbf67997b7c01586d8f4e3097b531a27bcc65278fed14d152f4"},{"url":"/assets/trials-Btm747OG.js","bytes":17540,"sha256":"9879c0f7ef9f3e059d4ac5c26aa714c6b43fd465a37ecc2c298aae2f40d62b9e"},{"url":"/assets/ui-vendor-DoagTIWE.js","bytes":986409,"sha256":"a2b92d996a5e6e86636fb796f49e056b0f2e3a714e3ebe94e6e71a76fc1510a9"},{"url":"/assets/useCostEstimation-LIoUhuk7.js","bytes":512,"sha256":"abd6b020e3c697f3c6c8ad7802f52e1b81d7cff371f05a97eff66961cafb6b44"},{"url":"/assets/useCrossTab-CQKsoSGz.js","bytes":671,"sha256":"16f56922812820b6bf1c2c308b31088cc258caefe20036c75bfd0deb1cb506ea"},{"url":"/assets/useHeatmapStyling-C1thHgN_.js","bytes":5254,"sha256":"44da85ebe0029df2f5db80ccd24e64f6d15d9e7e542c824decceb9c374272f36"},{"url":"/assets/useLiveQuery-DlSqArtJ.js","bytes":728,"sha256":"693d36c4492b1c9bcd1d87b3830314ba0dbf81d41b25a8f3ee3dba4cd2d42bd2"},{"url":"/assets/useModels-DUyZqtv4.js","bytes":2559,"sha256":"c7684a9c0ca1045c2b8740db301a5778f3564848de78ecdd192cda9548817e47"},{"url":"/assets/usePlaygroundDraft-4UB98J9r.js","bytes":8408,"sha256":"c8067cd271b5b32f9852ef92869cb76690c75b4fd0fbeb1b361980ec742b6a03"},{"url":"/assets/usePlaygroundDraft-DNdxMM09.css","bytes":6660,"sha256":"86914b4ab00a7f6986a092c92707e824277dc1d6ade3dd125755be26b2fefae0"},{"url":"/assets/useSpreadsheetPrompts-1bzsBSUp.js","bytes":3325,"sha256":"02ddf7731e5cc1d05bea5fd4f3767ed6437643d01be380d4b2c7ac409189f348"},{"url":"/assets/useTemplateCommands-DIg1jQHk.js","bytes":23860,"sha256":"6c4444784807f8968ca22351dc595c98d0296a434b9507021c5de1d44a6cac40"},{"url":"/assets/useTemplates-CauEU8FY.js","bytes":3574,"sha256":"1a0db153b1c8f39609d3f6ffbf902ab40d70f0c89608d96a7fb3507b950714dc"},{"url":"/assets/useThrottled-Dh9ZlOA0.js","bytes":244,"sha256":"5b9af22b99ee17bd6aec02f22c2721a7ed53485794a5a4da7153be437cafb290"},{"url":"/assets/useTokenCount-Gaz-FRcc.js","bytes":3154,"sha256":"f7935cced13e67f74f61433e7b926a0ee5c9dd8dcf89600fcf1c697f285cebb8"},{"url":"/assets/useVariableListCommands-x2GX2PAJ.js","bytes":13399,"sha256":"67b7422691bd4f5fcf8979905389450d60b2253bf93fda183e2fb31e62aa95a7"},{"url":"/assets/useVariableLists-DZsjZfQZ.js","bytes":1972,"sha256":"431da7393fe48e30568eb0726fe23a7cff780aa2c26e0e3d4993692c509112aa"},{"url":"/assets/utils-vendor-2gxfMrWY.js","bytes":42345,"sha256":"7e333ea61f2323c41bcbc594ddee89642d4f240d02c3d5b9ec92c248f5815edc"},{"url":"/assets/vue-vendor-cLCfFK9O.js","bytes":113022,"sha256":"d69bd857cd64b452da5adc7d2942df666a8de807321f80fd09589212279b0ebf"},{"url":"/assets/vue-virtual-scroller-BCw0uU-l.css","bytes":1220,"sha256":"4d71315fd8c42dc3e7d0ba1e8cb831ad725c22c34cb76c8ff8dbce87d628abb4"},{"url":"/assets/vue-virtual-scroller-BfC6LgU4.js","bytes":16632,"sha256":"ab21d771a5ff137787166df024eb9c40d414fbc85d504156322bd3c416451f96"},{"url":"/assets/webview-NsPt-3IR.js","bytes":15890,"sha256":"3750814e00f426ba61368395fb37f44f7659559f0e6212d1a6d9becd4185ad73"},{"url":"/assets/wizard-flow-D0E78mUQ.js","bytes":3031,"sha256":"4a4d202e44dfd889fa90c0fbe346030187402a6fe793a0c1806cffd67e5d8bde"},{"url":"/favicon-128x128.png","bytes":3706,"sha256":"bbbdeeb9b6966ec47cd61ff198fb0def1ea34d9a785aa8be877d0489fb319167"},{"url":"/favicon-32x32.png","bytes":1081,"sha256":"3c49bb0a85918d8c69f13a724c35395e0f28cbcf67f445ae38b50a3c71d07af2"},{"url":"/favicon.ico","bytes":16672,"sha256":"57222d5e378250fd4cfe1d63ea90269c2f1dfe6c1411998482868782d71a7708"},{"url":"/favicon.png","bytes":14488,"sha256":"98a188b69c38bb92f851f6acc230625f3872f75e4e2a1dbb6291bd40ff1f99b1"},{"url":"/favicon.svg","bytes":684,"sha256":"a9b3b819d4e9b63857d2303ec278c84afbd7957ee517160fad880f6de3206b7e"},{"url":"/icon-192.png","bytes":15066,"sha256":"a5ea9af435092fef44e73b3ccd9c406837e6761f52a7baaeeb61a70ba93d9735"},{"url":"/icon-256x256.png","bytes":19034,"sha256":"74472788a02991156831720912580413451f2d3dde2a3104b330d1dc7dc46fb8"},{"url":"/icon-512.png","bytes":16100,"sha256":"5f69f2d26d0c8945116ce3e93408eef4bec8014ed4e896aaa865df0dea14cc50"},{"url":"/index.html","bytes":1929,"sha256":"ac8852ddf170cadd950cd605dc07be74b8403d9a9fe8b2995865b5ce36e76830"},{"url":"/manifest.json","bytes":1260,"sha256":"cf09d81ea03708d3f882f794c0eae4529378c6bda164a18006459102dc21f53a"},{"url":"/maskable-192.png","bytes":12217,"sha256":"f5a4eb0f2e68330466fb36aec9757a73e43ddd9a71cc1613af7c874ca423a339"},{"url":"/maskable-512.png","bytes":36502,"sha256":"fe2e9671e8283eeb07138502e2173a27dc10973119743b6bebed5069ae90742d"}]
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
