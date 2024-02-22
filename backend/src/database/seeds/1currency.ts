import { Knex } from 'knex';
export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('currencies').del();

  // Inserts seed entries
  await knex('currencies').insert([ 
{"id":"1","code":"EUR","rate":"0.94","special_rate":"1.00","symbol":"","name":"Euro","rate_source":"world_bank"},
{"id":"2","code":"AFN","rate":"75.76","special_rate":"1.00","symbol":"","name":"Afghanistan Afghani","rate_source":"world_bank"},
{"id":"3","code":"ALL","rate":"99.62","special_rate":"1.00","symbol":"","name":"Albania Lek","rate_source":"world_bank"},
{"id":"4","code":"DZD","rate":"138.15","special_rate":"1.00","symbol":"","name":"Algerian dinar","rate_source":"world_bank"},
{"id":"5","code":"AOA","rate":"819.96","special_rate":"1.00","symbol":"","name":"Angolan kwanza","rate_source":"world_bank"},
{"id":"6","code":"ARS","rate":"349.66","special_rate":"1.00","symbol":"","name":"Argentina Peso","rate_source":"world_bank"},
{"id":"7","code":"AMD","rate":"408.62","special_rate":"1.00","symbol":"","name":"Armenian Dram","rate_source":"world_bank"},
{"id":"8","code":"AWG","rate":"1.79","special_rate":"1.00","symbol":"","name":"Aruba Guilder","rate_source":"world_bank"},
{"id":"9","code":"AUD","rate":"1.57","special_rate":"1.00","symbol":"","name":"Australian Dollar","rate_source":"world_bank"},
{"id":"10","code":"AZN","rate":"1.70","special_rate":"1.00","symbol":"","name":"Azerbaijan Manat","rate_source":"world_bank"},
{"id":"11","code":"BSD","rate":"1.00","special_rate":"1.00","symbol":"","name":"Bahamas Dollar","rate_source":"world_bank"},
{"id":"12","code":"BHD","rate":"0.38","special_rate":"1.00","symbol":"","name":"Bahraini Dinar","rate_source":"world_bank"},
{"id":"13","code":"BDT","rate":"110.10","special_rate":"1.00","symbol":"","name":"Bangladeshi Taka","rate_source":"world_bank"},
{"id":"14","code":"BBD","rate":"2.00","special_rate":"1.00","symbol":"","name":"Barbados Dollar","rate_source":"world_bank"},
{"id":"15","code":"BYN","rate":"3.30","special_rate":"1.00","symbol":"","name":"Belarus Ruble","rate_source":"world_bank"},
{"id":"16","code":"BZD","rate":"2.00","special_rate":"1.00","symbol":"","name":"Belize Dollar","rate_source":"world_bank"},
{"id":"17","code":"BMD","rate":"1.00","special_rate":"1.00","symbol":"","name":"Bermuda Dollar","rate_source":"world_bank"},
{"id":"18","code":"BTN","rate":"83.29","special_rate":"1.00","symbol":"","name":"The ngultrum","rate_source":"world_bank"},
{"id":"19","code":"BOB","rate":"6.93","special_rate":"1.00","symbol":"","name":"Bolivia Bolíviano","rate_source":"world_bank"},
{"id":"20","code":"BAM","rate":"1.85","special_rate":"1.00","symbol":"","name":"Bosnia and Herzegovina Convertible Mark","rate_source":"world_bank"},
{"id":"21","code":"BWP","rate":"13.85","special_rate":"1.00","symbol":"","name":"Botswana Pula","rate_source":"world_bank"},
{"id":"22","code":"BRL","rate":"5.16","special_rate":"1.00","symbol":"","name":"Brazil Real","rate_source":"world_bank"},
{"id":"23","code":"BND","rate":"1.36","special_rate":"1.00","symbol":"","name":"Brunei Darussalam Dollar","rate_source":"world_bank"},
{"id":"24","code":"BGN","rate":"1.84","special_rate":"1.00","symbol":"","name":"Bulgaria Lev","rate_source":"world_bank"},
{"id":"25","code":"BIF","rate":"2836.24","special_rate":"1.00","symbol":"","name":"Burundian franc","rate_source":"world_bank"},
{"id":"26","code":"CAD","rate":"1.37","special_rate":"1.00","symbol":"","name":"Canada Dollar","rate_source":"world_bank"},
{"id":"27","code":"CVE","rate":"104.12","special_rate":"1.00","symbol":"","name":"Cape Verdean escudo","rate_source":"world_bank"},
{"id":"28","code":"KYD","rate":"0.83","special_rate":"1.00","symbol":"","name":"Cayman Islands Dollar","rate_source":"world_bank"},
{"id":"29","code":"CLP","rate":"920.31","special_rate":"1.00","symbol":"","name":"Chilean peso","rate_source":"world_bank"},
{"id":"30","code":"CYN","rate":"1.00","special_rate":"1.00","symbol":"","name":"Chinese Yuan","rate_source":"world_bank"},
{"id":"31","code":"COP","rate":"4320.33","special_rate":"1.00","symbol":"","name":"Colombian peso","rate_source":"world_bank"},
{"id":"32","code":"KMF","rate":"466.79","special_rate":"1.00","symbol":"","name":"Comorian franc","rate_source":"world_bank"},
{"id":"33","code":"CRC","rate":"536.99","special_rate":"1.00","symbol":"","name":"Costa Rica Colon","rate_source":"world_bank"},
{"id":"34","code":"CUP","rate":"24.00","special_rate":"1.00","symbol":"","name":"Cuba Peso","rate_source":"world_bank"},
{"id":"35","code":"CZK","rate":"23.10","special_rate":"1.00","symbol":"","name":"Czech Republic Koruna","rate_source":"world_bank"},
{"id":"36","code":"DKK","rate":"7.04","special_rate":"1.00","symbol":"","name":"Denmark Krone","rate_source":"world_bank"},
{"id":"37","code":"DJF","rate":"177.72","special_rate":"1.00","symbol":"","name":"Djiboutian franc","rate_source":"world_bank"},
{"id":"38","code":"DOP","rate":"56.85","special_rate":"1.00","symbol":"","name":"Dominican Republic Peso","rate_source":"world_bank"},
{"id":"39","code":"CDF","rate":"2480.97","special_rate":"1.00","symbol":"","name":"Congolese franc","rate_source":"world_bank"},
{"id":"40","code":"EGP","rate":"30.80","special_rate":"1.00","symbol":"","name":"Egypt Pound","rate_source":"world_bank"},
{"id":"41","code":"SVC","rate":"8.75","special_rate":"1.00","symbol":"","name":"El Salvador Colon","rate_source":"world_bank"},
{"id":"42","code":"ERN","rate":"15.00","special_rate":"1.00","symbol":"","name":"Eritrean nakfa","rate_source":"world_bank"},
{"id":"43","code":"EEK","rate":"1.00","special_rate":"1.00","symbol":"","name":"The kroon","rate_source":"world_bank"},
{"id":"44","code":"SZL","rate":"19.29","special_rate":"1.00","symbol":"","name":"Swazi lilangeni","rate_source":"world_bank"},
{"id":"45","code":"ETB","rate":"55.60","special_rate":"1.00","symbol":"","name":"Ethiopian birr","rate_source":"world_bank"},
{"id":"46","code":"FKP","rate":"0.82","special_rate":"1.00","symbol":"","name":"Falkland Islands Pound","rate_source":"world_bank"},
{"id":"47","code":"FJD","rate":"2.27","special_rate":"1.00","symbol":"","name":"Fiji Dollar","rate_source":"world_bank"},
{"id":"48","code":"XPF","rate":"112.56","special_rate":"1.00","symbol":"","name":"French Pacific Franc,","rate_source":"world_bank"},
{"id":"49","code":"GMD","rate":"60.51","special_rate":"1.00","symbol":"","name":"Dalasi","rate_source":"world_bank"},
{"id":"50","code":"GEL","rate":"2.66","special_rate":"1.00","symbol":"","name":"The lari","rate_source":"world_bank"},
{"id":"51","code":"GHS","rate":"11.65","special_rate":"1.00","symbol":"","name":"Ghana Cedi","rate_source":"world_bank"},
{"id":"52","code":"GIP","rate":"0.82","special_rate":"1.00","symbol":"","name":"Gibraltar Pound","rate_source":"world_bank"},
{"id":"53","code":"GTQ","rate":"7.84","special_rate":"1.00","symbol":"","name":"Guatemala Quetzal","rate_source":"world_bank"},
{"id":"54","code":"GGP","rate":"0.82","special_rate":"1.00","symbol":"","name":"Guernsey Pound","rate_source":"world_bank"},
{"id":"55","code":"GNF","rate":"8538.30","special_rate":"1.00","symbol":"","name":"Guinean franc","rate_source":"world_bank"},
{"id":"56","code":"GYD","rate":"209.19","special_rate":"1.00","symbol":"","name":"Guyana Dollar","rate_source":"world_bank"},
{"id":"57","code":"HTG","rate":"134.49","special_rate":"1.00","symbol":"","name":"Haitian Gourde","rate_source":"world_bank"},
{"id":"58","code":"HNL","rate":"24.65","special_rate":"1.00","symbol":"","name":"Honduras Lempira","rate_source":"world_bank"},
{"id":"59","code":"HKD","rate":"7.83","special_rate":"1.00","symbol":"","name":"Hong Kong Dollar","rate_source":"world_bank"},
{"id":"60","code":"HUF","rate":"364.30","special_rate":"1.00","symbol":"","name":"Hungary Forint","rate_source":"world_bank"},
{"id":"61","code":"ISK","rate":"137.04","special_rate":"1.00","symbol":"","name":"Iceland Krona","rate_source":"world_bank"},
{"id":"62","code":"INR","rate":"83.07","special_rate":"1.00","symbol":"","name":"India Rupee","rate_source":"world_bank"},
{"id":"63","code":"IDR","rate":"15589.26","special_rate":"1.00","symbol":"","name":"Indonesia Rupiah","rate_source":"world_bank"},
{"id":"64","code":"IRR","rate":"41998.52","special_rate":"1.00","symbol":"","name":"Iran Rial","rate_source":"world_bank"},
{"id":"65","code":"IQD","rate":"1307.93","special_rate":"1.00","symbol":"","name":"Iraqi dinar","rate_source":"world_bank"},
{"id":"66","code":"IMP","rate":"0.82","special_rate":"1.00","symbol":"","name":"Isle of Man Pound","rate_source":"world_bank"},
{"id":"67","code":"ILS","rate":"3.84","special_rate":"1.00","symbol":"","name":"Israel Shekel","rate_source":"world_bank"},
{"id":"68","code":"JMD","rate":"156.17","special_rate":"1.00","symbol":"","name":"Jamaica Dollar","rate_source":"world_bank"},
{"id":"69","code":"JPY","rate":"149.32","special_rate":"1.00","symbol":"","name":"Japan Yen","rate_source":"world_bank"},
{"id":"70","code":"JEP","rate":"0.82","special_rate":"1.00","symbol":"","name":"Jersey Pound","rate_source":"world_bank"},
{"id":"71","code":"JOD","rate":"0.71","special_rate":"1.00","symbol":"","name":"Jordanian dinar","rate_source":"world_bank"},
{"id":"72","code":"KZT","rate":"476.78","special_rate":"1.00","symbol":"","name":"Kazakhstan Tenge","rate_source":"world_bank"},
{"id":"73","code":"KES","rate":"148.72","special_rate":"1.00","symbol":"","name":"Kenyan shilling","rate_source":"world_bank"},
{"id":"74","code":"KWD","rate":"0.31","special_rate":"1.00","symbol":"","name":"Kuwaiti Dinar","rate_source":"world_bank"},
{"id":"75","code":"KGS","rate":"88.64","special_rate":"1.00","symbol":"","name":"Kyrgyzstan Som","rate_source":"world_bank"},
{"id":"76","code":"LAK","rate":"20474.98","special_rate":"1.00","symbol":"","name":"Laos Kip","rate_source":"world_bank"},
{"id":"77","code":"LBP","rate":"15010.46","special_rate":"1.00","symbol":"","name":"Lebanon Pound","rate_source":"world_bank"},
{"id":"78","code":"LSL","rate":"19.50","special_rate":"1.00","symbol":"","name":"Lesotho loti","rate_source":"world_bank"},
{"id":"79","code":"LRD","rate":"186.78","special_rate":"1.00","symbol":"","name":"Liberia Dollar","rate_source":"world_bank"},
{"id":"80","code":"LYD","rate":"4.89","special_rate":"1.00","symbol":"","name":"Libyan dinar","rate_source":"world_bank"},
{"id":"81","code":"CHF","rate":"0.91","special_rate":"1.00","symbol":"","name":"The Swiss franc","rate_source":"world_bank"},
{"id":"82","code":"MOP","rate":"8.07","special_rate":"1.00","symbol":"","name":"Macanesepataca","rate_source":"world_bank"},
{"id":"83","code":"MGA","rate":"4526.74","special_rate":"1.00","symbol":"","name":"Malagasy ariary","rate_source":"world_bank"},
{"id":"84","code":"MWK","rate":"1162.18","special_rate":"1.00","symbol":"","name":"Malawian kwacha","rate_source":"world_bank"},
{"id":"85","code":"MYR","rate":"4.71","special_rate":"1.00","symbol":"","name":"Malaysia Ringgit","rate_source":"world_bank"},
{"id":"86","code":"MVR","rate":"15.45","special_rate":"1.00","symbol":"","name":"Maldivian Rufiyaa","rate_source":"world_bank"},
{"id":"87","code":"XAF","rate":"619.31","special_rate":"1.00","symbol":"","name":"CFA franc","rate_source":"world_bank"},
{"id":"88","code":"MRO","rate":"357.00","special_rate":"1.00","symbol":"","name":"Mauritanian Ouguiya","rate_source":"world_bank"},
{"id":"89","code":"MUR","rate":"44.19","special_rate":"1.00","symbol":"","name":"Mauritius Rupee","rate_source":"world_bank"},
{"id":"90","code":"MXN","rate":"18.18","special_rate":"1.00","symbol":"","name":"Mexico Peso","rate_source":"world_bank"},
{"id":"91","code":"MDL","rate":"18.15","special_rate":"1.00","symbol":"","name":"Moldovan Leu","rate_source":"world_bank"},
{"id":"92","code":"MNT","rate":"3469.85","special_rate":"1.00","symbol":"","name":"Mongolia Tughrik","rate_source":"world_bank"},
{"id":"93","code":"MZN","rate":"63.68","special_rate":"1.00","symbol":"","name":"Mozambique Metical","rate_source":"world_bank"},
{"id":"94","code":"MMK","rate":"2094.40","special_rate":"1.00","symbol":"","name":"Myanmar Kyat","rate_source":"world_bank"},
{"id":"95","code":"NAD","rate":"19.25","special_rate":"1.00","symbol":"","name":"Namibia Dollar","rate_source":"world_bank"},
{"id":"96","code":"NPR","rate":"132.71","special_rate":"1.00","symbol":"","name":"Nepal Rupee","rate_source":"world_bank"},
{"id":"97","code":"NIO","rate":"36.62","special_rate":"1.00","symbol":"","name":"Nicaragua Cordoba","rate_source":"world_bank"},
{"id":"98","code":"NGN","rate":"771.90","special_rate":"1.00","symbol":"","name":"Nigeria Naira","rate_source":"world_bank"},
{"id":"99","code":"KPW","rate":"900.04","special_rate":"1.00","symbol":"","name":"Korea (North) Won","rate_source":"world_bank"},
{"id":"100","code":"MKD","rate":"58.13","special_rate":"1.00","symbol":"","name":"Macedonia Denar","rate_source":"world_bank"},
{"id":"101","code":"TL","rate":"1.00","special_rate":"1.00","symbol":"","name":"Turkish Lira","rate_source":"world_bank"},
{"id":"102","code":"NOK","rate":"10.91","special_rate":"1.00","symbol":"","name":"Norway Krone","rate_source":"world_bank"},
{"id":"103","code":"VEF","rate":"3470398.09","special_rate":"1.00","symbol":"","name":"Venezuelan Bolívar","rate_source":"world_bank"},
{"id":"104","code":"OMR","rate":"0.38","special_rate":"1.00","symbol":"","name":"Oman Rial","rate_source":"world_bank"},
{"id":"105","code":"PKR","rate":"283.55","special_rate":"1.00","symbol":"","name":"Pakistan Rupee","rate_source":"world_bank"},
{"id":"106","code":"PAB","rate":"1.00","special_rate":"1.00","symbol":"","name":"Panama Balboa","rate_source":"world_bank"},
{"id":"107","code":"PGK","rate":"3.67","special_rate":"1.00","symbol":"","name":"Papua New Guinean Kina","rate_source":"world_bank"},
{"id":"108","code":"PYG","rate":"7339.63","special_rate":"1.00","symbol":"","name":"Paraguay Guarani","rate_source":"world_bank"},
{"id":"109","code":"PEN","rate":"3.82","special_rate":"1.00","symbol":"","name":"Peru Sol","rate_source":"world_bank"},
{"id":"110","code":"PHP","rate":"56.68","special_rate":"1.00","symbol":"","name":"Philippines Peso","rate_source":"world_bank"},
{"id":"111","code":"PLN","rate":"4.32","special_rate":"1.00","symbol":"","name":"Poland Zloty","rate_source":"world_bank"},
{"id":"112","code":"QAR","rate":"3.64","special_rate":"1.00","symbol":"","name":"Qatar Riyal","rate_source":"world_bank"},
{"id":"113","code":"RON","rate":"4.69","special_rate":"1.00","symbol":"","name":"Romania Leu","rate_source":"world_bank"},
{"id":"114","code":"RUB","rate":"100.00","special_rate":"1.00","symbol":"","name":"Russia Ruble","rate_source":"world_bank"},
{"id":"115","code":"RWF","rate":"1217.56","special_rate":"1.00","symbol":"","name":"Rwandan franc","rate_source":"world_bank"},
{"id":"116","code":"XCD","rate":"2.70","special_rate":"1.00","symbol":"","name":"East Caribbean Dollar","rate_source":"world_bank"},
{"id":"117","code":"WST","rate":"2.75","special_rate":"1.00","symbol":"","name":"The Samoan Tālā","rate_source":"world_bank"},
{"id":"118","code":"STN","rate":"1.00","special_rate":"1.00","symbol":"","name":"São Tomé and Príncipe dobra","rate_source":"world_bank"},
{"id":"119","code":"SAR","rate":"3.75","special_rate":"1.00","symbol":"","name":"Saudi Arabia Riyal","rate_source":"world_bank"},
{"id":"120","code":"RSD","rate":"110.18","special_rate":"1.00","symbol":"","name":"Serbia Dinar","rate_source":"world_bank"},
{"id":"121","code":"SCR","rate":"14.45","special_rate":"1.00","symbol":"","name":"Seychelles Rupee","rate_source":"world_bank"},
{"id":"122","code":"SLL","rate":"22325.08","special_rate":"1.00","symbol":"","name":"Leon","rate_source":"world_bank"},
{"id":"123","code":"SGD","rate":"1.36","special_rate":"1.00","symbol":"","name":"Singapore Dollar","rate_source":"world_bank"},
{"id":"124","code":"ANG","rate":"1.79","special_rate":"1.00","symbol":"","name":"Antillean guilder","rate_source":"world_bank"},
{"id":"125","code":"SBD","rate":"8.47","special_rate":"1.00","symbol":"","name":"Solomon Islands Dollar","rate_source":"world_bank"},
{"id":"126","code":"SOS","rate":"569.54","special_rate":"1.00","symbol":"","name":"Somalia Shilling","rate_source":"world_bank"},
{"id":"127","code":"ZAR","rate":"19.29","special_rate":"1.00","symbol":"","name":"South Africa Rand","rate_source":"world_bank"},
{"id":"128","code":"KRW","rate":"1341.79","special_rate":"1.00","symbol":"","name":"South Korean Won","rate_source":"world_bank"},
{"id":"129","code":"SSP","rate":"1.00","special_rate":"1.00","symbol":"","name":"South Sudanese pound","rate_source":"world_bank"},
{"id":"130","code":"LKR","rate":"322.05","special_rate":"1.00","symbol":"","name":"Sri Lanka Rupee","rate_source":"world_bank"},
{"id":"131","code":"SDG","rate":"601.50","special_rate":"1.00","symbol":"","name":"Sudanese pound","rate_source":"world_bank"},
{"id":"132","code":"SRD","rate":"38.53","special_rate":"1.00","symbol":"","name":"Suriname Dollar","rate_source":"world_bank"},
{"id":"133","code":"SEK","rate":"10.95","special_rate":"1.00","symbol":"","name":"Sweden Krona","rate_source":"world_bank"},
{"id":"134","code":"SYP","rate":"13002.04","special_rate":"1.00","symbol":"","name":"Syria Pound","rate_source":"world_bank"},
{"id":"135","code":"TWD","rate":"32.12","special_rate":"1.00","symbol":"","name":"Taiwan New Dollar","rate_source":"world_bank"},
{"id":"136","code":"TJS","rate":"10.91","special_rate":"1.00","symbol":"","name":"Tajikistani Somoni","rate_source":"world_bank"},
{"id":"137","code":"TZS","rate":"2507.61","special_rate":"1.00","symbol":"","name":"Tanzanian shilling","rate_source":"world_bank"},
{"id":"138","code":"THB","rate":"36.90","special_rate":"1.00","symbol":"","name":"Thailand Baht","rate_source":"world_bank"},
{"id":"139","code":"XOF","rate":"619.31","special_rate":"1.00","symbol":"","name":"CFA Franc","rate_source":"world_bank"},
{"id":"140","code":"NZD","rate":"1.67","special_rate":"1.00","symbol":"","name":"New Zealand Dollar","rate_source":"world_bank"},
{"id":"141","code":"TOP","rate":"2.38","special_rate":"1.00","symbol":"","name":"Tongan Pa'anga","rate_source":"world_bank"},
{"id":"142","code":"TTD","rate":"6.74","special_rate":"1.00","symbol":"","name":"Trinidad and Tobago Dollar","rate_source":"world_bank"},
{"id":"143","code":"TND","rate":"3.17","special_rate":"1.00","symbol":"","name":"Tunisian Dinar","rate_source":"world_bank"},
{"id":"144","code":"TRY","rate":"27.59","special_rate":"1.00","symbol":"","name":"Turkey Lira","rate_source":"world_bank"},
{"id":"145","code":"TMT","rate":"3.50","special_rate":"1.00","symbol":"","name":"Turkmenistan New Manat","rate_source":"world_bank"},
{"id":"146","code":"TVD","rate":"1.00","special_rate":"1.00","symbol":"","name":"Tuvalu Dollar","rate_source":"world_bank"},
{"id":"147","code":"UGX","rate":"3754.37","special_rate":"1.00","symbol":"","name":"Ugandan shilling","rate_source":"world_bank"},
{"id":"148","code":"UAH","rate":"36.69","special_rate":"1.00","symbol":"","name":"Ukraine Hryvnia","rate_source":"world_bank"},
{"id":"149","code":"AED","rate":"3.67","special_rate":"1.00","symbol":"","name":"UAE-Dirham","rate_source":"world_bank"},
{"id":"150","code":"GBP","rate":"0.82","special_rate":"1.00","symbol":"","name":"United Kingdom Pound","rate_source":"world_bank"},
{"id":"151","code":"USD","rate":"1.00","special_rate":"1.00","symbol":"","name":"United States Dollar","rate_source":"world_bank"},
{"id":"152","code":"UYU","rate":"39.18","special_rate":"1.00","symbol":"","name":"Uruguay Peso","rate_source":"world_bank"},
{"id":"153","code":"UZS","rate":"12086.81","special_rate":"1.00","symbol":"","name":"Uzbekistan Som","rate_source":"world_bank"},
{"id":"154","code":"VUV","rate":"122.34","special_rate":"1.00","symbol":"","name":"The vatu","rate_source":"world_bank"},
{"id":"155","code":"VND","rate":"24354.80","special_rate":"1.00","symbol":"","name":"Viet Nam Dong","rate_source":"world_bank"},
{"id":"156","code":"MAD","rate":"10.25","special_rate":"1.00","symbol":"","name":"Moroccan Dirham","rate_source":"world_bank"},
{"id":"157","code":"YER","rate":"249.81","special_rate":"1.00","symbol":"","name":"Yemen Rial","rate_source":"world_bank"},
{"id":"158","code":"ZMW","rate":"21.43","special_rate":"1.00","symbol":"","name":"Zambian Kwacha","rate_source":"world_bank"},
{"id":"159","code":"ZWD","rate":"1.00","special_rate":"1.00","symbol":"","name":"Zimbabwe Dollar","rate_source":"world_bank"}
  ]);
}


