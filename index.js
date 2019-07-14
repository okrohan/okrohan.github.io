// let aTitle = [`Hello World!`, `I'm ROHAN`, `Full Stack Developer | Blogger`, ]


let oTitle = [
    { label: `Hello World!`, noOfBreaks: 0, domId: "titleLoad1" },
    { label: `I'm ROHAN!`, noOfBreaks: 1, domId: "titleLoad2" },
    { label: `Passionate Full Stack Developer | Blogger`, noOfBreaks: 1, domId: "titleLoad3" },
    // { label: `- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - `, noOfBreaks: 2, domId: "titleLoad4" },
    { label: ` Experience and Interests:   `, noOfBreaks: 3, domId: "titleLoad4" },
    { label: `- Front End Engineering `, noOfBreaks: 1, domId: "titleLoad4" },
    { label: `- Data Intensive Applications `, noOfBreaks: 1, domId: "titleLoad4" },
    { label: `- RnD and Software Architecture  `, noOfBreaks: 1, domId: "titleLoad4" },
    { label: `- Feel free to Connect on Social Handles given below! `, noOfBreaks: 2, domId: "titleLoad4" },

];

function loadStuff() {
    let iCounter = 0;

    for (var i = 0; i < oTitle.length; i++) {
        let oTitleObject = oTitle[i];
        let sLabel = oTitleObject.label;

        for (var j = 0; j < sLabel.length; j++) {
            setTimeout(stringAdder.bind(this, sLabel[j], j == 0, oTitleObject), iCounter * 50);
            iCounter++;
        }

        iCounter += 5;
        // takeABreak();
    }
}

function takeABreak(oDom, iBrakeCount) {
    for (var i = 0; i < iBrakeCount; i++) {
        oDom.appendChild(document.createElement('br'));
    }
}

function stringAdder(sString, bShouldTakeABreak, oTitleObject) {
    var oTitleDom = document.getElementById(oTitleObject.domId);

    if (oTitleDom) {
        if (bShouldTakeABreak) {
            takeABreak(oTitleDom, oTitleObject.noOfBreaks);
        }
        oTitleDom.append(sString);
    }

}