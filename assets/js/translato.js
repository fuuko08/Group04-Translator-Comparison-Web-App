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
var selectorEl = $('#selector');
var outputEl = $('#output');
var key
var output

function translate (elementId, textbox){
	elementId.on("change", function(){
			key = elementId.val()
		$(".btn").on("click", function (){
			var input = $("#input").val();
			var othLang = languages[key]
			console.log(key)

			const encodedParams = new URLSearchParams();
			encodedParams.append("from", "en");
			encodedParams.append("to", othLang);
			encodedParams.append("text", input);

			const options = {
				method: 'POST',
				headers: {
					'content-type': 'application/x-www-form-urlencoded',
					'X-RapidAPI-Key': '94980d4f8fmsh3ea588e95ea87e9p12c6c1jsndb591e698148',
					'X-RapidAPI-Host': 'translo.p.rapidapi.com'
				},
				body: encodedParams
			};
			console.log(textbox.text())
			fetch('https://translo.p.rapidapi.com/api/v3/translate', options)
				.then(response => response.json())
				// .then(response =>  localStorage.setItem("translo",))
				.then(response => textbox.html(response.translated_text))
					// function() {
					// output = localStorage.getItem("translo")
					// output = JSON.stringify(output)
					// return output
					// }))
				.catch(err => console.error(err))


				
		})
	});

}

translate(selectorEl, outputEl);