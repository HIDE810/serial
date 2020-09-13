//https://www.3dbrew.org/wiki/Serials

function checkConsole() {
    var console = document.getElementById("console").value.toUpperCase().split('');
    
    var model = "";
    var region = "";
    
    switch(console[0]) {
        case "C": model = "3DS"; break;
        case "S": model = "3DS XL/LL"; break;
        case "A": model = "2DS"; break;
        case "Y": model = "New 3DS"; break;
        case "Q": model = "New 3DS XL/LL"; break;
        case "N": model = "New 2DS XL/LL"; break;
    }
    
    switch(console[1]) {
        case "J": region = "Japan"; break;
        case "W": region = "North America"; break;
        case "S": region = "Middle East/Southeast Asia"; break;
        case "E": region = "Europe"; break;
        case "A": region = "Australia"; break;
        case "K": region = "South Korea"; break;
        case "C": region = "China"; break;
    }
    
    document.getElementById("model").innerHTML = model;
    document.getElementById("region").innerHTML = region;
}

function checkCard() {
    var card = document.getElementById("card").value.toUpperCase().split('');
    
    var month = "";
    var year = "";
    
    if(card[3]) {
        document.getElementById("code").innerHTML = "CTR-P-" + card.slice(0, 4).join('');
    } else {
        document.getElementById("code").innerHTML = "";
    }
    
    if(!isNaN(card[5])) {
        
        year = String(2010 + Number(card[5]));
        
        switch(card[4]) {
            case "1": month = "Jan."; break;
            case "2": month = "Feb."; break;
            case "3": month = "Mar."; break;
            case "4": month = "Apr."; break;
            case "5": month = "May"; break;
            case "6": month = "Jun."; break;
            case "7": month = "Jul."; break;
            case "8": month = "Aug."; break;
            case "9": month = "Sep."; break;
            case "X": month = "Oct."; break;
            case "Y": month = "Nov."; break;
            case "Z": month = "Dec."; break;
            default: month = ""; year = "";
        }
        
        document.getElementById("date").innerHTML = month + " " + year;
        
    } else {
        document.getElementById("date").innerHTML = "";
    }
}