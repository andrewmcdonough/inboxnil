var email = document.getElementsByClassName("go")[0].innerHTML;
var escapedEmail = escape(email);
var newLocation = "https://mail.google.com/mail/u/0/#search/from%3A"+escapedEmail+"+in%3Ainbox";
var senderName = document.getElementsByClassName("gD")[0].innerHTML;
var newLink = "<a href='"+newLocation+"'>senderName</a>";
document.getElementsByClassName("gD")[0].innerHTML = newLink;
