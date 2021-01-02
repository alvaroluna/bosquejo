var emoticonList = [
    String.raw`(╯°□°)╯︵ ┻━┻`,
    String.raw`ヽ(ಠ_ಠ)ノ`,
    String.raw`(ಠ¿ಠ)`,
    String.raw`┌( ಠ_ಠ)┘`,
    String.raw`ლ(ಠ_ಠლ)`,
    String.raw`¯\_(ツ)_/¯`
];

// get emoji from some api thing so that I can practice this...random string

function GetEmoticon(emoticonList, tagId = "topRight") {
    let emoticonStr = emoticonList[Math.floor(Math.random() * emoticonList.length)];
    console.log(emoticonStr)

    // update <h1> tag with random emoticon
    document.getElementById(tagId).innerHTML = emoticonStr;
}

GetEmoticon(emoticonList, "topRight")