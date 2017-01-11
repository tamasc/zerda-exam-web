var ajax = (function () {
  var open = function (request, url, dataToSend, callback) {
    view.statusBar.innerText = 'Loading...';
    var data;
    var xhr = new XMLHttpRequest();
    xhr.open(request, url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(dataToSend);
    xhr.onreadystatechange = function (rsp) {
      if (xhr.readyState === XMLHttpRequest.DONE) {
       data = JSON.parse(xhr.response);
       view.statusBar.innerText = '';
       callback(data);
      }
    };
  };

  var getList = function (callback) {
    var request = 'GET';
    var url = 'http://localhost:3000/decode/all';
    var dataToSend = '';
    open(request, url, dataToSend, callback);
  };

  var post = function (data, callback) {
    var request = 'POST';
    var url = 'http://localhost:3000/exam';
    open(request, url, JSON.stringify(data), callback);
  };

  return {
    getList: getList,
    post: post,
  }
})();

var view = (function () {
  var statusBar = document.getElementById('status');
  // var errorMessage = document.getElementById('error-message');
  // var messageList = document.querySelector('ol');
  // var decodedText = document.getElementById('decodedText');
  // var list = document.querySelector('ol');

  // var renderList = function (allMessages) {
  //   list.innerHTML = '';
  //   allMessages.all.forEach(function (item, index) {
  //     var listItem = document.createElement('li');
  //     listItem.innerText = item;
  //     messageList.appendChild(listItem);
  //   });
  // };
  //
  // var showMessage = function (message) {
  //   var submittedText = document.getElementById('submittedText');
  //   submittedText.innerText = message;
  // };

  // var showDecodedMessage = function (data) {
  //   console.log(data);
  //   if (data.status == 'ok') {
  //     statusBar.innerText = data.status;
  //     statusBar.classList = ['ok'];
  //     decodedText.innerText = data.text;
  //   } else {
  //     statusBar.innerText = data.status;
  //     statusBar.classList = ['error'];
  //     errorMessage.innerText = data.error;
  //     decodedText.innerText = '';
  //   }
  // };

  return {
    statusBar: statusBar,
    // errorMessage: errorMessage,
    // renderList: renderList,
    // showMessage: showMessage,
    // showDecodedMessage: showDecodedMessage
  }
})();
