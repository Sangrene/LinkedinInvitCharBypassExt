function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function clickConnect() {

    var button = document.getElementsByClassName("connect primary top-card-action ember-view")[0];
    button.click();
    await sleep(500);
    document.getElementsByClassName("send-invite__actions")[0].children[0].click();
    document.getElementById("custom-message").value = LinkedinBypassMessage;
    document.getElementsByClassName("send-invite__actions")[0].children[1].click();
}

clickConnect();
