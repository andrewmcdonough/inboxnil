function checkHash() {
    if (/^#(inbox)\b/.test(location.hash)) {
			replaceSender();
    }
}
window.addEventListener('hashchange', checkHash);
checkHash();

function replaceSender() {
	var goElements = document.getElementsByClassName("go");

	if (goElements.length > 0) {
		var email = goElements[0].textContent;
		var escapedEmail = escape(email);
		var newLocation = "https://mail.google.com/mail/u/0/#search/from%3A"+escapedEmail+"+in%3Ainbox";
		var senderName = document.getElementsByClassName("gD")[0].innerHTML;
		var newLink = "<a href='"+newLocation+"'>"+senderName+"</a>";
		document.getElementsByClassName("gD")[0].innerHTML = newLink;
	}
}
