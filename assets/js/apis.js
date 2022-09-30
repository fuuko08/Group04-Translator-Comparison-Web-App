var languages = {
	Afrikaans :  "af",
	Amharic : "am",
	Arabic : "ar",
	Aragonese : "an",
	Armenian : "hy",
	Avaric : "av",
	Avestan : "ae",
	Azerbaijani : "az",
	Basque : "eu",
	Belarusian : "be",
	Bengali : "bn",
	Bosnian : "bs",
	Bulgarian : "bg",
	Burmese : "my",
	Catalan : "ca",
	Chamorro : "ch",
	Chechen : "ce",
	Chichewa : "ny",
	Chinese : "zh",
	Chuvash : "cv",
	Cornish : "kw",
	Corsican : "co",
	Cree : "cr",
	Croatian : "hr",
	Czech : "cs",
	Danish : "da",
	Dutch : "nl",
	English : "en",
	Esperanto : "eo",
	Estonian : "et",
	Finnish : "fi",
	French : "fr",
	Fula : "ff",
	Galician : "gl",
	Georgian : "ka",
	German : "de",
	Greek : "el",
	Gujarati : "gu",
	Haitian : "ht",
	Hausa : "ha",
	Hebrew : "he",
	Herero : "hz",
	Hindi : "hi",
	Hungarian : "hu",
	Icelandic : "is",
	Ido : "io",
	Igbo : "ig",
	Indonesian : "id",
	Irish : "ga",
	Italian : "it",
	Japanese : "ja",
	Javanese : "jv",
	Kannada : "kn",
	Kanuri : "kr",
	Kazakh : "kk",
	Khmer : "km",
	Kikuyu : "ki",
	Kinyarwanda : "rw",
	Komi : "kv",
	Kongo : "kg",
	Korean : "ko",
	Kurdish : "ku",
	Kwanyama : "kj",
	Kyrgyz : "ky",
	Lao : "lo",
	Latin : "la",
	Latvian : "lv",
	Limburgish : "li",
	Lithuanian : "lt",
	Luxembourgish : "lb",
	Macedonian : "mk",
	Malagasy : "mg",
	Malay : "ms",
	Malayalam : "ml",
	Maltese : "mt",
	Marathi : "mr",
	Marshallese : "mh",
	Mongolian : "mn",
	Māori : "mi",
	Navajo : "nv",
	Ndonga : "ng",
	Nepali : "ne",
	Norwegian : "no",
	Nuosu : "ii",
	Ojibwe : "oj",
	Oriya : "or",
	Panjabi : "pa",
	Pashto : "ps",
	Persian : "fa",
	Polish : "pl",
	Portuguese : "pt",
	Pāli : "pi",
	Romanian : "ro",
	Russian : "ru",
	Samoan : "sm",
	Sardinian : "sc",
	Serbian : "sr",
	Shona : "sn",
	Sindhi : "sd",
	Sinhala : "si",
	Slovak : "sk",
	Slovene : "sl",
	Somali : "so",
	Spanish : "es",
	Sundanese : "su",
	Swahili : "sw",
	Swedish : "sv",
	Tagalog : "tl",
	Tahitian : "ty",
	Tajik : "tg",
	Tamil : "ta",
	Tatar : "tt",
	Telugu : "te",
	Thai : "th",
	Turkish : "tr",
	Turkmen : "tk",
	Ukrainian : "uk",
	Urdu : "ur",
	Uyghur : "ug",
	Uzbek : "uz",
	Vietnamese : "vi",
	Walloon : "wa",
	Welsh : "cy",
	Xhosa : "xh",
	Yiddish : "yi",
	Yoruba: "yo"
};

var selectorEl = $('.language-button');
var key = $("#languageDropdownList");

async function requestTranslateServer(){
	var firstString;
	var secondString;

	var input = $("#englishForm").val();			
			var othLang = languages[key.val()];			
			const encodedParams = new URLSearchParams();
			encodedParams.append("q", input);
			encodedParams.append("target", othLang);
			encodedParams.append("source", "en");
			
			const options = {
				method: 'POST',
				headers: {
					'content-type': 'application/x-www-form-urlencoded',
					'Accept-Encoding': 'application/gzip',
					'X-RapidAPI-Key': 'b040e1d4c8msh2f79eae3582160bp117d2fjsndfc4e58700d9',
					'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
				},
				body: encodedParams
			};

			const options2 = {
				method: 'POST',
				headers: {
					'content-type': 'application/json',
					'X-RapidAPI-Key': '94980d4f8fmsh3ea588e95ea87e9p12c6c1jsndb591e698148',
					'X-RapidAPI-Host': 'deepl-translator.p.rapidapi.com'
				},
				body: '{"text":"'+ input +'","source":"en","target":"'+ othLang +'"}'
			};
			
			await fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', options)				
				.then((response) => {return response.json();})				
				.then(async (response) => {
					firstString = response.data.translations[0].translatedText;
					await fetch('https://deepl-translator.p.rapidapi.com/translate/', options2)
				.then((res) => {return res.json();})
					.then((data) => { 
						secondString = data.text;
						
					})
					.catch(err => console.error(err));
				})				
				.catch(err => console.error(err));

				return [firstString, secondString];
};
