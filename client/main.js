var app = (function () {
  var button = document.getElementById('submit');

  var fire = function () {
    addEvents();
  }

  var addEvents = function () {
    button.addEventListener('click', function () {
      var data = {
        "feedback": document.getElementById('questionnaire').value,
        "scale": document.getElementById('points').value,
        "email": document.getElementById('email').value
      };
      ajax.post(data, view.renderList);
      document.getElementById('questionnaire').value = '';
      document.getElementById('points').value = '';
      document.getElementById('email').value = '';
    });
  };

  return {
    fire: fire,
  };

})();

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

  var post = function (data, callback) {
    var request = 'POST';
    var url = 'http://localhost:3000/exam';
    open(request, url, JSON.stringify(data), callback);
  };

  return {
    post: post,
  }
})();

var view = (function () {
  var statusBar = document.getElementById('status');
  var list = document.getElementById('projects');

  var renderList = function (data) {
    console.log(data);
    if (data.status === "error") {
      statusBar.innerText = data.status + ' but: ' + data.message;
      return;
    }
    list.innerHTML = '';
    data.projects.forEach(function (item, index) {
      var listItem = document.createElement('li');
      listItem.innerText = item;
      list.appendChild(listItem);
    });
  };

  return {
    statusBar: statusBar,
    renderList: renderList,
  }
})();

app.fire();
