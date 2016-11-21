var fs = require('fs');


function home(request, response) {
  if(request.url === '/') {
    fs.readFile('./layout/home.html', function(err, data) {
      response.write(data);
      response.end();
    });
  }
}

function about(request, response) {
  if(request.url === '/about') {
    fs.readFile('./layout/about.html', function(err, data) {
      response.write(data);
      response.end();
    });
  }
}

function fastcampus(request, response) {
  if(request.url === '/fastcampus') {
    fs.readFile('./layout/fastcampus.html', function(err, data) {
      response.write(data);
      response.end();
    });
  }
}

// function detail(request, response) {
  // var detailId = request.url.replace("/", "");
  //
  // if(detailId.length > 0) {
  //   fs.readFile('./layout/' + detailId + '.html', function(err, data) {
  //     response.write(data);
  //     response.end();
  //   });
  // }
// }

module.exports.home = home;
module.exports.about = about;
module.exports.fastcampus = fastcampus;
// module.exports.detail = detail;
